import { Link } from '@inertiajs/react';
import AppLogo from '@/components/app-logo';
import { Instagram, Twitter, Hotel, Calendar, Users, Settings, Star, MailOpen, BookOpen, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function PublicFooter() {
    const { t } = useTranslation();
    return (
        <footer className="relative overflow-hidden bg-card rounded-3xl mt-10 mb-10 text-muted-foreground w-full shadow-2xl">
            {/* Call to Action Section */}
            <div className="px-6 py-12">
                <div className="rounded-3xl bg-gradient-to-br from-secondary to-secondary/80 p-12 border border-border shadow-xl">
                    <div className="flex flex-col items-start justify-between gap-6 md:flex-row">
                        <div className="text-left">
                            <h2 className="mb-2 text-2xl font-bold text-foreground">
                                <span className="relative inline-block">
                                    <span className="relative z-10">{t('landing.footer.ctaTitle').split(' ')[0]}</span>
                                    <span className="absolute bottom-1 left-0 right-0 h-3 bg-primary/20 rounded-lg -z-0"></span>
                                </span>{' '}
                                {t('landing.footer.ctaTitle').split(' ').slice(1).join(' ')}
                            </h2>
                            <p className="text-sm text-muted-foreground">{t('landing.footer.ctaDesc')}</p>
                        </div>
                        <Link 
                            href={route('register')} 
                            className="rounded-lg bg-primary px-8 py-3 text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-md hover:shadow-primary/20 transform hover:-translate-y-1 flex items-center"
                        >
                            <span>{t('landing.footer.ctaButton')}</span>
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="px-6 py-12">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
                    {/* Column 1: Solutions */}
                    <div>
                        <h3 className="mb-6 text-lg font-medium text-foreground relative inline-block after:content-[''] after:absolute after:w-10 after:h-1 after:bg-primary after:bottom-[-10px] after:left-0">{t('landing.footer.solutions')}</h3>
                        <div className="flex flex-col space-y-4 mt-4">
                            <Link href="/solutions/hotels" className="flex items-center text-sm transition-colors hover:text-foreground group">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary group-hover:bg-primary transition-colors mr-2">
                                    <Hotel className="h-4 w-4" />
                                </span>
                                {t('landing.footer.hotels')}
                            </Link>
                            <Link href="/solutions/resorts" className="flex items-center text-sm transition-colors hover:text-foreground group">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary group-hover:bg-primary transition-colors mr-2">
                                    <Hotel className="h-4 w-4" />
                                </span>
                                {t('landing.footer.resorts')}
                            </Link>
                            <Link href="/solutions/apartments" className="flex items-center text-sm transition-colors hover:text-foreground group">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary group-hover:bg-primary transition-colors mr-2">
                                    <Hotel className="h-4 w-4" />
                                </span>
                                {t('landing.footer.apartments')}
                            </Link>
                        </div>
                    </div>

                    {/* Column 2: Features */}
                    <div>
                        <h3 className="mb-6 text-lg font-medium text-foreground relative inline-block after:content-[''] after:absolute after:w-10 after:h-1 after:bg-chart-3 after:bottom-[-10px] after:left-0">{t('landing.footer.features')}</h3>
                        <div className="flex flex-col space-y-4 mt-4">
                            <Link href="/features/booking" className="flex items-center text-sm transition-colors hover:text-foreground group">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary group-hover:bg-chart-3 transition-colors mr-2">
                                    <Calendar className="h-4 w-4" />
                                </span>
                                {t('landing.footer.bookingSystem')}
                            </Link>
                            <Link href="/features/management" className="flex items-center text-sm transition-colors hover:text-foreground group">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary group-hover:bg-chart-3 transition-colors mr-2">
                                    <Settings className="h-4 w-4" />
                                </span>
                                {t('landing.footer.operations')}
                            </Link>
                            <Link href="/features/guests" className="flex items-center text-sm transition-colors hover:text-foreground group">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary group-hover:bg-chart-3 transition-colors mr-2">
                                    <Users className="h-4 w-4" />
                                </span>
                                {t('landing.footer.guests')}
                            </Link>
                            <Link href="/features/reviews" className="flex items-center text-sm transition-colors hover:text-foreground group">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary group-hover:bg-chart-3 transition-colors mr-2">
                                    <Star className="h-4 w-4" />
                                </span>
                                {t('landing.footer.reviews')}
                            </Link>
                        </div>
                    </div>

                    {/* Column 3: Support */}
                    <div>
                        <h3 className="mb-6 text-lg font-medium text-foreground relative inline-block after:content-[''] after:absolute after:w-10 after:h-1 after:bg-chart-5 after:bottom-[-10px] after:left-0">{t('landing.footer.support')}</h3>
                        <div className="flex flex-col space-y-4 mt-4">
                            <Link href="/support/help" className="flex items-center text-sm transition-colors hover:text-foreground group">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary group-hover:bg-chart-5 transition-colors mr-2">
                                    <BookOpen className="h-4 w-4" />
                                </span>
                                {t('landing.footer.help')}
                            </Link>
                            <Link href="/support/training" className="flex items-center text-sm transition-colors hover:text-foreground group">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary group-hover:bg-chart-5 transition-colors mr-2">
                                    <Users className="h-4 w-4" />
                                </span>
                                {t('landing.footer.training')}
                            </Link>
                            <Link href="/support/contact" className="flex items-center text-sm transition-colors hover:text-foreground group">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary group-hover:bg-chart-5 transition-colors mr-2">
                                    <MailOpen className="h-4 w-4" />
                                </span>
                                {t('landing.footer.contact')}
                            </Link>
                        </div>
                    </div>

                    {/* Column 4: Company */}
                    <div className="md:border-l md:border-border md:pl-10">
                        <h3 className="mb-6 text-lg font-medium text-foreground relative inline-block after:content-[''] after:absolute after:w-10 after:h-1 after:bg-accent after:bottom-[-10px] after:left-0">{t('landing.footer.company')}</h3>
                        <div className="flex flex-col space-y-4 mt-4">
                            <Link href="/about" className="text-sm transition-colors hover:text-foreground">{t('landing.footer.about')}</Link>
                            <Link href={route('public.blog')} className="text-sm transition-colors hover:text-foreground">{t('landing.footer.blog')}</Link>
                            <Link href="/partners" className="text-sm transition-colors hover:text-foreground">{t('landing.footer.partners')}</Link>
                            <Link href="/terms" className="text-sm transition-colors hover:text-foreground">{t('landing.footer.terms')}</Link>
                            <Link href="/privacy" className="text-sm transition-colors hover:text-foreground">{t('landing.footer.privacy')}</Link>
                        </div>
                    </div>
                </div>

                <div className="mt-16 flex flex-col-reverse items-center justify-between border-t border-border pt-8 md:flex-row">
                    <div className="mt-6 flex items-center space-x-4 md:mt-0">
                        <Link 
                            href="https://instagram.com/bokinn" 
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all hover:border-chart-5 hover:bg-chart-5/10"
                        >
                            <Instagram className="h-5 w-5" />
                        </Link>
                        <Link 
                            href="https://twitter.com/bokinn" 
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-all hover:border-chart-3 hover:bg-chart-3/10"
                        >
                            <Twitter className="h-5 w-5" />
                        </Link>
                    </div>
                    
                    <div className="text-center text-sm text-muted-foreground md:text-left">
                        {t('landing.footer.copyright')}
                    </div>
                    
                    <div className="text-left text-sm text-muted-foreground">
                        <span>{t('landing.footer.commercialRegister')}</span>
                        <span className="ml-2 font-medium text-primary">4030504731</span>
                    </div>
                </div>
            </div>

            {/* Company Information */}
            <div className="bg-secondary px-6 py-8 text-center md:text-left border-t border-border">
                <div className="w-full">
                    <div className="flex justify-between items-center">
                        <div className="mb-4 flex justify-center md:justify-start">
                            <div className="flex items-center space-x-2">
                                <AppLogo />
                            </div>
                        </div>
                    </div>
                    <p className="max-w-xl text-sm text-muted-foreground md:ml-auto">
                        {t('landing.footer.companyDesc')}
                    </p>
                </div>
            </div>
        </footer>
    );
} 