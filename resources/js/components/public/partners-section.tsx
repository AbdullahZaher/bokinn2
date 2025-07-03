import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

interface Partner {
    name: string;
    logoUrl: string;
    alt: string;
    type: string; // Partner type
}

// Partner data with appropriate categorization for property management platform
const partners: Partner[] = [
    { name: 'Monshaat', logoUrl: '/images/partners/monshaat.png', alt: 'Monshaat Logo', type: 'Official Supporter' },
    { name: 'Ministry of Commerce', logoUrl: '/images/partners/ministry-commerce.png', alt: 'Ministry of Commerce Logo', type: 'Government Partner' },
    { name: 'The Garage', logoUrl: '/images/partners/garage.png', alt: 'The Garage Logo', type: 'Technical Partner' },
    { name: 'Maroof', logoUrl: '/images/partners/maroof.png', alt: 'Maroof Logo', type: 'Trusted Platform' },
    // More partners can be added as needed
];

export function PartnersSection() {
    const { t } = useTranslation();
    const marqueeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleAnimationEnd = () => {
            if (marqueeRef.current) {
                marqueeRef.current.style.transform = 'translateX(0)';
                setTimeout(() => {
                    if (marqueeRef.current) {
                        marqueeRef.current.style.transition = 'none';
                        marqueeRef.current.style.transform = 'translateX(100%)';
                        setTimeout(() => {
                            if (marqueeRef.current) {
                                marqueeRef.current.style.transition = 'transform 30s linear';
                                marqueeRef.current.style.transform = 'translateX(-100%)';
                            }
                        }, 10);
                    }
                }, 30000);
            }
        };

        if (marqueeRef.current) {
            marqueeRef.current.addEventListener('transitionend', handleAnimationEnd);
            marqueeRef.current.style.transform = 'translateX(100%)';
            
            setTimeout(() => {
                if (marqueeRef.current) {
                    marqueeRef.current.style.transition = 'transform 30s linear';
                    marqueeRef.current.style.transform = 'translateX(-100%)';
                }
            }, 100);
        }

        return () => {
            if (marqueeRef.current) {
                marqueeRef.current.removeEventListener('transitionend', handleAnimationEnd);
            }
        };
    }, []);

    return (
        <section className="relative rounded-3xl overflow-hidden mt-10 w-full shadow-2xl">
            {/* Decorative element (star/diamond) */}
            <div className="absolute left-16 top-12 opacity-20">
                <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M75 0L96.5 53.5L150 75L96.5 96.5L75 150L53.5 96.5L0 75L53.5 53.5L75 0Z"
                        fill="url(#paint0_linear)"
                    />
                    <defs>
                        <linearGradient id="paint0_linear" x1="75" y1="0" x2="75" y2="150" gradientUnits="userSpaceOnUse">
                            <stop stopColor="var(--color-primary)" />
                            <stop offset="1" stopColor="var(--color-primary)" stopOpacity="0.3" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className="rounded-3xl bg-card px-6 py-16 border border-primary/10 w-full">
                <div className="mb-12 text-center">
                    <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary mb-4">
                        {t('landing.partners.badge')}
                    </span>
                    <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                        {t('landing.partners.title')}
                    </h2>
                    <p className="mx-auto max-w-2xl text-muted-foreground">
                        {t('landing.partners.description')}
                    </p>
                </div>

                {/* Scrolling logos container */}
                <div className="relative overflow-hidden my-8">
                    <div className="flex select-none" style={{ width: "fit-content" }} ref={marqueeRef}>
                        {[...partners, ...partners].map((partner, index) => (
                            <div
                                key={`${partner.name}-${index}`}
                                className="mx-8 flex h-32 w-56 flex-col items-center justify-center rounded-xl p-6 hover:bg-accent transition-colors duration-300 group"
                            >
                                <div className="h-auto max-h-16 w-auto object-contain mb-3 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-3xl mb-2">🏢</div>
                                        <div className="text-sm font-medium text-foreground">{t(`landing.partners.type.${partner.type.replace(/\s/g, '').replace(/[^a-zA-Z]/g, '').toLowerCase()}`) || partner.name}</div>
                                    </div>
                                </div>
                                <span className="text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                                    {t(`landing.partners.type.${partner.type.replace(/\s/g, '').replace(/[^a-zA-Z]/g, '').toLowerCase()}`) || partner.type}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
} 