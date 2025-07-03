import { type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Star, Hotel, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface StatItemProps {
    value: string;
    label: string;
    icon: React.ReactNode;
    colorClass: string;
    textColorClass: string;
}

function StatItem({ value, label, icon, colorClass, textColorClass }: StatItemProps) {
    return (
        <div className="text-center flex flex-col items-center">
            <div className={`flex h-12 w-12 items-center justify-center rounded-full ${colorClass} mb-3`}>
                <span className={textColorClass}>{icon}</span>
            </div>
            <div className="text-3xl font-bold text-foreground">{value}</div>
            <div className="text-sm text-muted-foreground">{label}</div>
        </div>
    );
}

export function HeroSection() {
    const { t } = useTranslation();
    const { auth } = usePage<SharedData>().props;

    return (
        <section className="relative rounded-3xl overflow-hidden bg-secondary pt-32 pb-24 sm:pt-40 lg:pt-48 shadow-2xl">
            {/* Gradient Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute left-[20%] top-1/4 h-[35rem] w-[35rem] rounded-full bg-primary/15 blur-[150px]" />
                <div className="absolute right-[20%] -top-10 h-[25rem] w-[25rem] rounded-full bg-chart-5/15 blur-[120px]" />
                <div className="absolute bottom-0 left-10 h-[30rem] w-[30rem] rounded-full bg-chart-3/15 blur-[130px]" />
                <div className="absolute bottom-[10%] right-[10%] h-[20rem] w-[20rem] rounded-full bg-primary/15 blur-[90px]" />
            </div>

            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-15 pointer-events-none overflow-hidden">
                <svg className="absolute right-0 top-0 h-[40rem] w-[40rem] translate-x-1/2 -translate-y-[10%] text-primary/30" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="hero-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M.5 40V.5H40" fill="none" stroke="currentColor" strokeLinecap="square" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#hero-pattern)" />
                </svg>
            </div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                        <span className="relative inline-block">
                            <span className="relative z-10">{t('landing.hero.title').split(' ')[0]}</span>
                            <span className="absolute bottom-1.5 left-0 right-0 h-4 bg-gradient-to-r from-primary/30 to-primary/30 rounded-lg -z-0 blur-sm"></span>
                        </span>{' '}
                        <span className="text-primary">{t('landing.hero.title').split(' ').slice(1, 3).join(' ')}</span>{' '}{t('landing.hero.title').split(' ').slice(3).join(' ')}
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-muted-foreground">
                        {t('landing.hero.description')}
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        {auth.user ? (
                            <Button size="lg" asChild className="rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-md hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 transform hover:-translate-y-1 transition-all duration-300">
                                <Link href={route('dashboard.home')} className="group">
                                    {t('landing.hero.dashboard')}
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                        ) : (
                            <>
                                <Button size="lg" asChild className="rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-md hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 transform hover:-translate-y-1 transition-all duration-300">
                                    <Link href={route('register')} className="group">
                                        {t('landing.hero.cta')}
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </Button>
                                <Link href="#features" className="group flex items-center text-base font-semibold leading-6 text-foreground hover:text-primary transition-colors">
                                    {t('landing.hero.more')}
                                    <span className="mr-2 flex h-9 w-9 items-center justify-center">
                                        <ArrowRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                                    </span>
                                </Link>
                            </>
                        )}
                    </div>
                </div>

                {/* Statistics */}
                <div className="mt-20 flex justify-center">
                    <div className="grid gap-x-10 gap-y-8 grid-cols-2 sm:grid-cols-4 rounded-3xl bg-card/80 backdrop-blur-lg px-10 py-10 shadow-xl border border-border/40">
                        <StatItem 
                            value="+10,000" 
                            label={t('landing.hero.stats.activeUsers')} 
                            icon={<Users className="h-6 w-6" />} 
                            colorClass="bg-primary/10"
                            textColorClass="text-primary"
                        />
                        <StatItem 
                            value="+1,500" 
                            label={t('landing.hero.stats.happyClients')} 
                            icon={<Star className="h-6 w-6" />} 
                            colorClass="bg-chart-5/10"
                            textColorClass="text-chart-5"
                        />
                        <StatItem 
                            value="+50,000" 
                            label={t('landing.hero.stats.bookingsCompleted')} 
                            icon={<Calendar className="h-6 w-6" />} 
                            colorClass="bg-chart-3/10"
                            textColorClass="text-chart-3"
                        />
                        <StatItem 
                            value="+30" 
                            label={t('landing.hero.stats.diverseActivities')} 
                            icon={<Hotel className="h-6 w-6" />} 
                            colorClass="bg-primary/10"
                            textColorClass="text-primary"
                        />
                    </div>
                </div>

                {/* Main Image */}
                <div className="mt-20 relative group">
                    <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl shadow-2xl border border-border/20 transform group-hover:scale-[1.02] transition-transform duration-300 ease-in-out">
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-chart-3/5 pointer-events-none"></div>
                        <div className="w-full h-96 bg-gradient-to-br from-primary/10 to-chart-3/10 rounded-3xl flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-6xl mb-4">📱</div>
                                <p className="text-lg text-muted-foreground">{t('landing.hero.dashboardPreview')}</p>
                                <p className="text-sm text-muted-foreground/70">{t('landing.hero.replaceImage')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-border pointer-events-none" />
                </div>
            </div>
        </section>
    );
} 