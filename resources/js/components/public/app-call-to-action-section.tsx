'use client'

import * as React from 'react'
import { useState } from 'react'
import { MapPin, Calendar, BarChart3, Users } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export function AppCallToActionSection() {
    const { t } = useTranslation()
    const [email, setEmail] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Send email notification for app launch
        // TODO: implement the actual email submission
        setIsSubmitted(true)
        setTimeout(() => setIsSubmitted(false), 3000)
    }

    return (
        <section className="relative overflow-hidden rounded-3xl mt-10 bg-primary py-20 text-primary-foreground w-full shadow-2xl">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden opacity-10">
                <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-white"></div>
                <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white"></div>
            </div>

            <div className="relative z-10">
                <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
                    {/* Text content */}
                    <div className="text-center md:text-left">
                        <div className="mb-6 inline-block rounded-full bg-accent px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
                            {t('landing.appCta.badge')}
                        </div>
                        <h2 className="mb-6 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
                            {t('landing.appCta.title')}
                        </h2>
                        <p className="mb-8 text-lg text-primary-foreground/90">
                            {t('landing.appCta.description')}
                        </p>

                        {/* Notification subscription form */}
                        <div className="mb-8">
                            <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder={t('landing.appCta.emailPlaceholder')}
                                    className="flex-grow rounded-full bg-white/10 px-6 py-3 text-primary-foreground placeholder-primary-foreground/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
                                    required
                                />
                                <button 
                                    type="submit" 
                                    className="rounded-full bg-accent px-6 py-3 font-medium text-primary transition-all hover:bg-accent-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                                >
                                    {t('landing.appCta.notify')}
                                </button>
                            </form>
                            {isSubmitted && (
                                <div className="mt-3 text-center text-sm text-primary-foreground/90">
                                    {t('landing.appCta.thankYou')}
                                </div>
                            )}
                        </div>

                        {/* Store badges - inactive but visible */}
                        <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
                            <div className="relative opacity-80 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0">
                                <div className="h-12 w-40 rounded-lg bg-gray-800 flex items-center justify-center">
                                    <span className="text-white text-sm font-medium">{t('landing.appCta.googlePlay')}</span>
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/40 text-xs font-bold text-white">{t('landing.appCta.comingSoon')}</div>
                            </div>
                            <div className="relative opacity-80 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0">
                                <div className="h-12 w-36 rounded-lg bg-gray-800 flex items-center justify-center">
                                    <span className="text-white text-sm font-medium">{t('landing.appCta.appStore')}</span>
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/40 text-xs font-bold text-white">{t('landing.appCta.comingSoon')}</div>
                            </div>
                        </div>
                    </div>

                    {/* App image */}
                    <div className="relative flex items-center justify-center">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="h-64 w-64 rounded-full bg-accent/20 blur-3xl"></div>
                        </div>
                        
                        <div className="relative z-10 flex">
                            {/* Left phone */}
                            <div className="relative -mr-6 -mt-8 transform rotate-[-10deg] transition-all duration-300 hover:rotate-[-5deg]">
                                <div className="relative h-96 w-40 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-2xl flex items-center justify-center">
                                    <div className="text-white text-center p-4">
                                        <div className="text-2xl mb-2">📱</div>
                                        <div className="text-xs">{t('landing.appCta.phones.booking')}</div>
                                    </div>
                                </div>
                                <div className="absolute inset-0 rounded-3xl border-8 border-gray-900"></div>
                            </div>

                            {/* Middle phone */}
                            <div className="relative z-20 transform transition-all duration-500 hover:-translate-y-3">
                                <div className="relative h-[440px] w-48 rounded-3xl bg-gradient-to-br from-green-500 to-blue-600 shadow-2xl flex items-center justify-center">
                                    <div className="text-white text-center p-4">
                                        <div className="text-2xl mb-2">📊</div>
                                        <div className="text-xs">{t('landing.appCta.phones.dashboard')}</div>
                                    </div>
                                </div>
                                <div className="absolute inset-0 rounded-3xl border-8 border-gray-900"></div>
                                
                                {/* Coming soon badge */}
                                <div className="absolute -left-4 -top-4 rotate-[-20deg] rounded-lg bg-chart-5 px-3 py-1 text-sm font-bold text-white shadow-lg">
                                    {t('landing.appCta.comingSoonBadge')}
                                </div>
                            </div>

                            {/* Right phone */}
                            <div className="relative -ml-6 mt-8 transform rotate-[10deg] transition-all duration-300 hover:rotate-[5deg]">
                                <div className="relative h-96 w-40 rounded-3xl bg-gradient-to-br from-purple-500 to-pink-600 shadow-2xl flex items-center justify-center">
                                    <div className="text-white text-center p-4">
                                        <div className="text-2xl mb-2">📈</div>
                                        <div className="text-xs">{t('landing.appCta.phones.analytics')}</div>
                                    </div>
                                </div>
                                <div className="absolute inset-0 rounded-3xl border-8 border-gray-900"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Brief app features */}
                <div className="mt-16 grid grid-cols-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm">
                        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-primary">
                            <MapPin size={24} />
                        </div>
                        <h3 className="mb-2 text-lg font-bold">{t('landing.appCta.features.notifications.title')}</h3>
                        <p className="text-sm text-primary-foreground/70">{t('landing.appCta.features.notifications.desc')}</p>
                    </div>

                    <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm">
                        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-primary">
                            <Calendar size={24} />
                        </div>
                        <h3 className="mb-2 text-lg font-bold">{t('landing.appCta.features.room.title')}</h3>
                        <p className="text-sm text-primary-foreground/70">{t('landing.appCta.features.room.desc')}</p>
                    </div>

                    <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm">
                        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-primary">
                            <BarChart3 size={24} />
                        </div>
                        <h3 className="mb-2 text-lg font-bold">{t('landing.appCta.features.reports.title')}</h3>
                        <p className="text-sm text-primary-foreground/70">{t('landing.appCta.features.reports.desc')}</p>
                    </div>

                    <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm">
                        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-primary">
                            <Users size={24} />
                        </div>
                        <h3 className="mb-2 text-lg font-bold">{t('landing.appCta.features.staff.title')}</h3>
                        <p className="text-sm text-primary-foreground/70">{t('landing.appCta.features.staff.desc')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
} 