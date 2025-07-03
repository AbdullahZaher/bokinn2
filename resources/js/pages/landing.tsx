import { Head } from '@inertiajs/react';
import { 
    HeroSection,
    PartnersSection,
    StatsSection,
    HowToStartSection,
    FeaturesSection,
    PaymentMethodsSection,
    TestimonialsSection,
    AppCallToActionSection,
    PublicNavbar,
    PublicFooter,
} from '@/components/public';
import { useTranslation } from 'react-i18next';

export default function LandingPage() {
    const { t } = useTranslation();
    return (
        <>
            <Head title={t('landing.hero.title')}>
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            
            <div className="min-h-screen antialiased">
                <div className="flex flex-col items-center">
                    <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                        <PublicNavbar />
                    </div>
                    <main className="w-full mt-10">
                        <div className="flex flex-col items-center">
                            <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                                <HeroSection />
                            </div>
                            <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                                <PartnersSection />
                            </div>
                            <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                                <StatsSection />
                            </div>
                            <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                                <HowToStartSection />
                            </div>
                            <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                                <FeaturesSection />
                            </div>
                            <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                                <PaymentMethodsSection />
                            </div>
                            <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                                <TestimonialsSection />
                            </div>
                            <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                                <AppCallToActionSection />
                            </div>
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