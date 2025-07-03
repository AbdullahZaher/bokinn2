import {
    CreditCard,
    Calendar,
    BarChart3,
    Users,
    Headphones,
    Globe,
    ChevronRight
} from 'lucide-react';
import { Link } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

type FeatureCardProps = {
    title: string;
    description: string;
    icon: React.ReactNode;
    ctaLink?: string;
    color: string;
};

function FeatureCard({ title, description, icon, ctaLink = '/', color }: FeatureCardProps) {
    return (
        <div className="relative rounded-3xl bg-card p-6 transition-all duration-300 hover:shadow-md border border-border hover:border-primary/20 group">
            <div className={`mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-${color} text-${color}-foreground transition-all group-hover:shadow-md group-hover:-translate-y-1`}>
                {icon}
            </div>
            <h3 className="mb-2 text-lg font-bold text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground mb-5 flex-grow">{description}</p>
            <Link 
                href={ctaLink} 
                className={`text-${color} font-medium text-sm flex items-center mt-auto group-hover:translate-x-1 transition-all duration-300`}
            >
                More Details
                <ChevronRight className="ml-1 transition-transform group-hover:translate-x-1" size={18} />
            </Link>
        </div>
    );
}

export function FeaturesSection() {
    const { t } = useTranslation();
    return (
        <section className="rounded-3xl py-24 mt-10 bg-secondary relative overflow-hidden shadow-2xl" id="features">
            {/* Background decorations */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute left-[10%] top-[30%] h-[20rem] w-[20rem] rounded-full bg-primary/10 blur-[100px]" />
                <div className="absolute right-[15%] top-[10%] h-[15rem] w-[15rem] rounded-full bg-chart-5/10 blur-[80px]" />
                <div className="absolute bottom-[5%] left-[20%] h-[18rem] w-[18rem] rounded-full bg-chart-3/10 blur-[90px]" />
            </div>
            
            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="relative bg-card rounded-3xl p-10 mb-16 overflow-hidden shadow-md border border-border">
                    {/* Geometric background decorations */}
                    <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
                        <div className="grid grid-cols-8 grid-rows-6 gap-4 h-full opacity-5">
                            {[...Array(48)].map((_, i) => (
                                <div key={i} className="border border-primary rounded-sm"></div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex-1">
                            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                                {t('landing.features.title')}
                            </h2>
                            <div className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                {t('landing.features.subtitle')}
                            </div>
                            <p className="text-muted-foreground">
                                {t('landing.features.description')}
                            </p>
                        </div>
                        
                        <div className="w-full md:w-auto">
                            <div className="relative">
                                <div className="absolute -z-10 right-10 top-0 w-20 h-20 bg-primary/15 rounded-full"></div>
                                <div className="absolute -z-10 left-0 bottom-5 w-12 h-12 bg-chart-5/20 rounded-full"></div>
                                <div className="w-auto h-auto relative z-10 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-6xl mb-4">🏨</div>
                                        <p className="text-lg text-muted-foreground">{t('landing.features.illustration')}</p>
                                        <p className="text-sm text-muted-foreground/70">{t('landing.features.replaceImage')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <FeatureCard
                        title={t('landing.features.cards.booking.title')}
                        description={t('landing.features.cards.booking.desc')}
                        icon={<Calendar className="h-7 w-7" />}
                        color="primary"
                        ctaLink="/features/booking"
                    />
                    <FeatureCard
                        title={t('landing.features.cards.payment.title')}
                        description={t('landing.features.cards.payment.desc')}
                        icon={<CreditCard className="h-7 w-7" />}
                        color="chart-3"
                        ctaLink="/features/payment"
                    />
                    <FeatureCard
                        title={t('landing.features.cards.guest.title')}
                        description={t('landing.features.cards.guest.desc')}
                        icon={<Users className="h-7 w-7" />}
                        color="chart-5"
                        ctaLink="/features/guests"
                    />
                    <FeatureCard
                        title={t('landing.features.cards.reports.title')}
                        description={t('landing.features.cards.reports.desc')}
                        icon={<BarChart3 className="h-7 w-7" />}
                        color="primary"
                        ctaLink="/features/reports"
                    />
                    <FeatureCard
                        title={t('landing.features.cards.direct.title')}
                        description={t('landing.features.cards.direct.desc')}
                        icon={<Globe className="h-7 w-7" />}
                        color="chart-5"
                        ctaLink="/features/direct"
                    />
                    <FeatureCard
                        title={t('landing.features.cards.support.title')}
                        description={t('landing.features.cards.support.desc')}
                        icon={<Headphones className="h-7 w-7" />}
                        color="chart-3"
                        ctaLink="/features/support"
                    />
                </div>
            </div>
        </section>
    );
} 