import React from 'react';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from './components/Layout';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import Crew from './components/Crew';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (!loading) {
      // Reset scroll position to top
      window.scrollTo(0, 0);
      // Small delay to ensure everything is ready
      setTimeout(() => {
        setShowContent(true);
      }, 100);
    }
  }, [loading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <Loader key="loader" onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>
      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <Layout>
            <Navbar />
            <Hero />
            <Services />
            <Work />
            <Crew />
            <Pricing />
            <Footer />
          </Layout>
        </motion.div>
      )}
    </>
  );
}

export default App;
