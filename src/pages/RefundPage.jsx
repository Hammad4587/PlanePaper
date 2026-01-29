import React from 'react';

const RefundPage = () => {
    return (
        <main className="pt-40 pb-24 px-6 lg:px-12 max-w-[90rem] mx-auto">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-montserrat font-medium text-stone-900 dark:text-stone-50 mb-4 tracking-tight">
                    Refund Policy
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
                        <p className="mb-8">
                            At PlanePaper, we stand behind our work. If you're not satisfied,
                            we'll make it right.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-montserrat font-medium text-stone-900 dark:text-stone-100 mb-4">
                            30-Day Money-Back Guarantee
                        </h2>
                        <div className="space-y-6">
                            <p>
                                If you're not satisfied with your service within the first 30
                                days, we'll refund your initial payment in full—no questions
                                asked.
                            </p>
                            <div>
                                <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-2">
                                    How to Request:
                                </h3>
                                <p>
                                    Email us at{' '}
                                    <a
                                        href="mailto:support@planepaper.ai"
                                        className="text-stone-900 dark:text-stone-100 underline hover:no-underline hoverable-element"
                                    >
                                        support@planepaper.ai
                                    </a>{' '}
                                    with your order ID and reason for the refund. We'll process it
                                    within 5 business days.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-montserrat font-medium text-stone-900 dark:text-stone-100 mb-4">
                            Cancellation &amp; Monthly Billing
                        </h2>
                        <div className="space-y-4">
                            <p>
                                After your initial 30-day period, your subscription renews
                                monthly.
                            </p>
                            <p>You can cancel anytime:</p>
                            <ul className="list-disc pl-5 space-y-2 marker:text-stone-400">
                                <li>
                                    Email{' '}
                                    <a
                                        href="mailto:support@planepaper.ai"
                                        className="text-stone-900 dark:text-stone-100 underline hover:no-underline hoverable-element"
                                    >
                                        support@planepaper.ai
                                    </a>{' '}
                                    with "CANCEL"
                                </li>
                                <li>
                                    Cancellation takes effect at the end of your current billing
                                    cycle
                                </li>
                                <li>No cancellation fees or penalties</li>
                                <li>
                                    You have 30 days after cancellation to download your data
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-montserrat font-medium text-stone-900 dark:text-stone-100 mb-4">
                            Billing Issues &amp; Errors
                        </h2>
                        <p>
                            If we overcharge you or make a billing error, we'll refund the
                            difference immediately and adjust future billing.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-montserrat font-medium text-stone-900 dark:text-stone-100 mb-4">
                            Custom Projects
                        </h2>
                        <p>
                            For custom development work, refund terms are outlined in your
                            project contract. Contact us to discuss specifics.
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
                            <p>
                                <span className="font-semibold text-stone-900 dark:text-stone-100">
                                    Response Time:
                                </span>{' '}
                                24 hours
                            </p>
                            <p className="pt-2">
                                We're here to help. If you have any issues, reach out.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
};

export default RefundPage;
