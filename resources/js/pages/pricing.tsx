import { Head } from '@inertiajs/react';
import { PublicNavbar } from '@/components/public/public-navbar';
import { PublicFooter } from '@/components/public/public-footer';
import PricingHero from '@/components/pricing/PricingHero';
import PricingSection from '@/components/pricing/PricingSection';
import FeatureComparison from '@/components/pricing/FeatureComparison';
import FaqSection from '@/components/pricing/FaqSection';
import PricingCta from '@/components/pricing/PricingCta';

export default function PricingPage() {
    const plans = [
        {
            name: 'Starter',
            price: '$29',
            period: 'per month',
            description: 'Perfect for small property managers just getting started.',
            features: [
                'Up to 10 properties',
                'Basic tenant management',
                'Payment processing',
                'Email support',
                'Mobile app access',
                'Basic reporting'
            ],
            popular: false,
            cta: 'Start Free Trial',
            href: '/register'
        },
        {
            name: 'Professional',
            price: '$79',
            period: 'per month',
            description: 'Ideal for growing property management businesses.',
            features: [
                'Up to 50 properties',
                'Advanced tenant management',
                'Payment processing',
                'Priority support',
                'Mobile app access',
                'Advanced reporting',
                'Document management',
                'Maintenance tracking',
                'Automated notifications'
            ],
            popular: true,
            cta: 'Start Free Trial',
            href: '/register'
        },
        {
            name: 'Enterprise',
            price: '$199',
            period: 'per month',
            description: 'For large property management companies with complex needs.',
            features: [
                'Unlimited properties',
                'Full tenant management',
                'Payment processing',
                '24/7 phone support',
                'Mobile app access',
                'Advanced reporting',
                'Document management',
                'Maintenance tracking',
                'Automated notifications',
                'API access',
                'Custom integrations',
                'Dedicated account manager',
                'White-label options'
            ],
            popular: false,
            cta: 'Contact Sales',
            href: '/contact'
        }
    ];

    const featureComparisonData = [
        { name: 'Unlimited product count', free: true, basic: true, professional: true },
        { name: 'Unlimited customers and visitors count', free: true, basic: true, professional: true },
        { name: 'Unlimited order count', free: true, basic: true, professional: true },
        { name: '0% commission on sales', free: true, basic: true, professional: true },
        { name: 'Free SSL security certificate', free: true, basic: true, professional: true },
        { name: 'Similar products feature', free: true, basic: true, professional: true },
        { name: 'Number of branches and warehouses', free: '1', basic: '2', professional: 'Unlimited' },
        { name: 'User management', free: '1', basic: '2', professional: '10' },
        { name: 'Multilingual support for the control panel', free: true, basic: true, professional: true },
        { name: 'FAQs and reviews', free: true, basic: true, professional: true },
        { name: 'Importing Products', free: true, basic: true, professional: true },
        { name: 'Customer service and technical support', free: 'During working hours', basic: 'During working hours', professional: '24/7' },
        { name: 'Store blog', free: false, basic: true, professional: true },
        { name: 'Creating additional pages', free: false, basic: true, professional: true },
        { name: 'Linking a custom domain to your store', free: false, basic: true, professional: 'A free domain is included with the annual package' }
    ];

    const faqItems = [
        { question: 'Can I change my plan later?', answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and are prorated.' },
        { question: 'Is there a setup fee?', answer: 'No, there are no setup fees. You only pay the monthly subscription fee for your chosen plan.' },
        { question: 'What happens after the free trial?', answer: 'After 14 days, your account will automatically convert to your chosen paid plan. You can cancel anytime before the trial ends.' },
        { question: 'Do you offer refunds?', answer: 'We offer a 30-day money-back guarantee. If you are not satisfied, contact us for a full refund.' }
    ];

    return (
        <>
            <Head title="Pricing - Bokinn" />
            <div className="min-h-screen antialiased">
                <div className="flex flex-col items-center">
                    <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                        <PublicNavbar />
                    </div>
                    <main className="w-full mt-10">
                        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                            <PricingHero />
                        </div>
                        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                            <PricingSection plans={plans} />
                        </div>
                        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                            <section className="bg-card py-20 rounded-3xl mt-10 overflow-hidden w-full shadow-2xl px-6">
                                <div className="text-center">
                                    <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
                                        Explore our plans and discover the one that suits you best
                                    </h2>
                                </div>
                                <FeatureComparison features={featureComparisonData} />
                            </section>
                        </div>
                        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                            <FaqSection title="Frequently Asked Questions" items={faqItems} />
                        </div>
                        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                            <PricingCta
                                title="Still have questions or need a custom solution?"
                                subtitle="Our team is here to help. Get in touch for a personalized consultation or explore our enterprise options."
                                contactHref="/contact"
                                featuresHref="/features"
                                contactLabel="Contact Sales"
                                featuresLabel="Explore Features"
                            />
                        </div>
                    </main>
                    <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                        <PublicFooter />
                    </div>
                </div>
            </div>
        </>
    );
} 