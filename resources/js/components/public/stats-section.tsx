import { Hotel, Users, TrendingUp, Award, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface StatItem {
    icon: React.ReactNode;
    value: string;
    label: string;
    description: string;
    color: string;
}

// Update data for hotel management platform
export function StatsSection() {
    const { t } = useTranslation();
    const stats: StatItem[] = [
        {
            icon: <Hotel className="h-8 w-8" />,
            value: '+15K',
            label: t('landing.stats.items.hotelsManaged.label'),
            description: t('landing.stats.items.hotelsManaged.desc'),
            color: 'primary'
        },
        {
            icon: <Users className="h-8 w-8" />,
            value: '+2500',
            label: t('landing.stats.items.activeClients.label'),
            description: t('landing.stats.items.activeClients.desc'),
            color: 'chart-5'
        },
        {
            icon: <TrendingUp className="h-8 w-8" />,
            value: '98%',
            label: t('landing.stats.items.occupancyRate.label'),
            description: t('landing.stats.items.occupancyRate.desc'),
            color: 'chart-3'
        },
        {
            icon: <Award className="h-8 w-8" />,
            value: '+200',
            label: t('landing.stats.items.hotelManagers.label'),
            description: t('landing.stats.items.hotelManagers.desc'),
            color: 'primary'
        },
    ];

    return (
        <section className="relative mt-10 rounded-3xl bg-card overflow-hidden text-foreground shadow-2xl">
            {/* Background decorations */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute right-[10%] top-[20%] h-[15rem] w-[15rem] rounded-full bg-primary/10 blur-[80px] opacity-50" />
                <div className="absolute left-[15%] top-[10%] h-[10rem] w-[10rem] rounded-full bg-chart-5/10 blur-[60px] opacity-50" />
                <div className="absolute bottom-[10%] right-[20%] h-[12rem] w-[12rem] rounded-full bg-chart-3/10 blur-[70px] opacity-50" />
            </div>
            
            <div className="container relative z-10 mx-auto px-6 py-16">
                <div className="mb-12 text-center">
                    <span className="inline-block rounded-full bg-accent px-4 py-1 text-sm font-medium text-accent-foreground mb-4">
                        {t('landing.stats.badge')}
                    </span>
                    <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                        {t('landing.stats.title')}
                    </h2>
                    <p className="mx-auto max-w-2xl text-muted-foreground">
                        {t('landing.stats.description')}
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="group relative overflow-hidden rounded-xl bg-secondary p-6 transition-all duration-300 hover:shadow-lg border border-border hover:-translate-y-1"
                        >
                            {/* Decorative hover background */}
                            <div className={`absolute inset-0 bg-gradient-to-br from-${stat.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                            
                            <div className="relative z-10">
                                {/* Icon with circular background */}
                                <div className={`mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-${stat.color}/20 text-${stat.color} transition-all duration-300 group-hover:bg-${stat.color}/30`}>
                                    {stat.icon}
                                </div>
                                
                                <div className="mb-2 flex items-baseline">
                                    <h3 className={`text-4xl font-bold text-${stat.color}`}>
                                        {stat.value}
                                    </h3>
                                </div>
                                
                                <h4 className="mb-2 text-xl font-semibold text-foreground">
                                    {stat.label}
                                </h4>
                                
                                <p className="text-sm text-muted-foreground">
                                    {stat.description}
                                </p>
                            </div>
                            
                            {/* Side decoration */}
                            <div className={`absolute bottom-0 left-0 h-full w-1 bg-${stat.color}/20 group-hover:bg-${stat.color} transition-all duration-300`}></div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-12 text-center">
                    <a 
                        href="#" 
                        className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2 text-sm font-medium text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20"
                    >
                        {t('landing.stats.discover')}
                        <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                </div>
            </div>
        </section>
    );
} 