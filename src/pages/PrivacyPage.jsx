import React from 'react';

const PrivacyPage = () => {
    return (
        <main className="pt-40 pb-24 px-6 lg:px-12 max-w-[90rem] mx-auto">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-montserrat font-medium text-stone-900 dark:text-stone-50 mb-4 tracking-tight">
                    Privacy Policy
                </h1>
                <p className="text-stone-500 dark:text-stone-400 font-manrope mb-12 text-sm uppercase tracking-wider font-mono">
                    Effective Date: January 28, 2026
                    <br />
                    Last Updated: January 28, 2026
                </p>

                <div className="space-y-12 font-manrope text-stone-600 dark:text-stone-300 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-montserrat font-medium text-stone-900 dark:text-stone-100 mb-4">
                            Overview
                        </h2>
                        <p className="mb-4">
                            PlanePaper operates planepaper.ai. This Privacy Policy explains
                            how we collect, use, and protect your personal information.
                        </p>
                        <p>
                            We prioritize your privacy. This is straightforward—no dark
                            patterns, no selling data.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-montserrat font-medium text-stone-900 dark:text-stone-100 mb-4">
                            What Information We Collect
                        </h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-2">
                                    Information You Provide:
                                </h3>
                                <ul className="list-disc pl-5 space-y-1 marker:text-stone-400">
                                    <li>Business name, email, phone number</li>
                                    <li>
                                        Payment information (via Stripe—we don't store card data)
                                    </li>
                                    <li>Website content, images, and files you upload</li>
                                    <li>Communications with our support team</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-2">
                                    Information Collected Automatically:
                                </h3>
                                <ul className="list-disc pl-5 space-y-1 marker:text-stone-400">
                                    <li>IP address, browser type, device information</li>
                                    <li>Pages visited, time spent, clicks (via analytics)</li>
                                    <li>Cookies and tracking technologies</li>
                                    <li>Payment and subscription history (via Stripe)</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-2">
                                    From Third Parties:
                                </h3>
                                <ul className="list-disc pl-5 space-y-1 marker:text-stone-400">
                                    <li>Google Analytics (website traffic data)</li>
                                    <li>Stripe (payment processor)</li>
                                    <li>
                                        Noodle Seed (when we share your data for website delivery)
                                    </li>
                                    <li>Domain registrars and email service providers</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-montserrat font-medium text-stone-900 dark:text-stone-100 mb-4">
                            How We Use Your Information
                        </h2>
                        <ul className="list-disc pl-5 space-y-2 marker:text-stone-400">
                            <li>
                                <strong className="text-stone-900 dark:text-stone-100">
                                    Service Delivery:
                                </strong>{' '}
                                Build, design, and deploy your website
                            </li>
                            <li>
                                <strong className="text-stone-900 dark:text-stone-100">
                                    Payments:
                                </strong>{' '}
                                Process and manage your subscription via Stripe
                            </li>
                            <li>
                                <strong className="text-stone-900 dark:text-stone-100">
                                    Support:
                                </strong>{' '}
                                Respond to your inquiries and provide customer support
                            </li>
                            <li>
                                <strong className="text-stone-900 dark:text-stone-100">
                                    Improvement:
                                </strong>{' '}
                                Understand how you use our service to improve the product
                            </li>
                            <li>
                                <strong className="text-stone-900 dark:text-stone-100">
                                    Legal:
                                </strong>{' '}
                                Comply with laws and detect fraud or security issues
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-montserrat font-medium text-stone-900 dark:text-stone-100 mb-4">
                            Data Sharing
                        </h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-2">
                                    We Share Data With:
                                </h3>
                                <ul className="list-disc pl-5 space-y-1 marker:text-stone-400">
                                    <li>
                                        Noodle Seed → Your business info for website building
                                        (required)
                                    </li>
                                    <li>Stripe → Payment processing</li>
                                    <li>
                                        Email providers → For transactional and marketing emails
                                    </li>
                                    <li>Google Analytics → Website analytics</li>
                                    <li>AWS, Cloudflare → Infrastructure and hosting</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-2">
                                    We DO NOT:
                                </h3>
                                <ul className="list-disc pl-5 space-y-1 marker:text-stone-400">
                                    <li>Sell your data to third parties</li>
                                    <li>Share data with marketers for their campaigns</li>
                                    <li>Use your data for AI training without consent</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-montserrat font-medium text-stone-900 dark:text-stone-100 mb-4">
                            Noodle Seed Partnership
                        </h2>
                        <p className="mb-8">
                            When you use our service, your business information is shared with
                            Noodle Seed for website delivery.
                        </p>
                    </section>

                    <section className="pt-8 border-t border-stone-200 dark:border-stone-800">
                        <h2 className="text-2xl font-montserrat font-medium text-stone-900 dark:text-stone-100 mb-4">
                            Questions?
                        </h2>
                        <div className="space-y-2">
                            <p>
                                <span className="font-semibold text-stone-900 dark:text-stone-100">
                                    Contact:
                                </span>{' '}
                                <a
                                    href="mailto:support@planepaper.ai"
                                    className="text-stone-900 dark:text-stone-100 underline hover:no-underline hoverable-element"
                                >
                                    support@planepaper.ai
                                </a>
                            </p>
                            <p className="pt-2">
                                We're here to help. If you have any privacy concerns, reach out.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
};

export default PrivacyPage;
