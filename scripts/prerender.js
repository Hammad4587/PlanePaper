import puppeteer from 'puppeteer';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.resolve(__dirname, '../dist');

// Simple static file server
function createStaticServer(port) {
  return new Promise((resolve) => {
    const mimeTypes = {
      '.html': 'text/html',
      '.js': 'application/javascript',
      '.css': 'text/css',
      '.svg': 'image/svg+xml',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.json': 'application/json',
      '.woff': 'font/woff',
      '.woff2': 'font/woff2'
    };

    const server = http.createServer((req, res) => {
      let filePath = path.join(distPath, req.url === '/' ? 'index.html' : req.url);
      const ext = path.extname(filePath);

      fs.readFile(filePath, (err, content) => {
        if (err) {
          // Fallback to index.html for SPA routing
          fs.readFile(path.join(distPath, 'index.html'), (err2, indexContent) => {
            if (err2) {
              res.writeHead(404);
              res.end('Not found');
            } else {
              res.writeHead(200, { 'Content-Type': 'text/html' });
              res.end(indexContent);
            }
          });
        } else {
          res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'text/plain' });
          res.end(content);
        }
      });
    });

    server.listen(port, () => {
      console.log(`Static server started on http://localhost:${port}`);
      resolve(server);
    });
  });
}

async function prerender() {
  console.log('Starting prerender...');

  // Save original index.html
  const indexPath = path.join(distPath, 'index.html');
  const originalHtml = fs.readFileSync(indexPath, 'utf-8');

  // Start static server
  const port = 4173;
  const server = await createStaticServer(port);

  // Launch Puppeteer
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  try {
    // Navigate to the page
    await page.goto(`http://localhost:${port}`, {
      waitUntil: 'networkidle0',
      timeout: 30000
    });

    // Wait for React to render
    await page.waitForSelector('#root', { timeout: 10000 });

    // Wait for content to appear and animations to settle
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Get the rendered HTML
    let html = await page.content();

    // Clean up any localhost references
    html = html.replace(/http:\/\/localhost:\d+/g, '');

    // Ensure we keep the original head content (meta tags, etc.) but with rendered body
    const headMatch = originalHtml.match(/<head>([\s\S]*?)<\/head>/);
    const renderedBodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/);

    if (headMatch && renderedBodyMatch) {
      // Reconstruct HTML with original head and rendered body
      const bodyClassMatch = html.match(/<body([^>]*)>/);
      const bodyAttrs = bodyClassMatch ? bodyClassMatch[1] : '';

      html = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>${headMatch[1]}</head>
<body${bodyAttrs}>${renderedBodyMatch[1]}</body>
</html>`;
    }

    // Write the pre-rendered HTML
    fs.writeFileSync(indexPath, html);
    console.log('Pre-rendered HTML saved to dist/index.html');

    // Also create a 200.html for SPA fallback
    fs.writeFileSync(path.join(distPath, '200.html'), html);
    console.log('Created 200.html for SPA fallback');

  } catch (error) {
    console.error('Prerender error:', error);
    process.exit(1);
  } finally {
    await browser.close();
    server.close();
  }

  console.log('Prerender complete!');
}

prerender();
