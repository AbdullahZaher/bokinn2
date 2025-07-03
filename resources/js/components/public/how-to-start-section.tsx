import { useState } from 'react';
import { ChevronDown, Rocket } from 'lucide-react';
import { Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

interface Step {
    stepNumber: number;
    title: string;
    description: string;
    detailedDescription?: string;
    imageSrc: string;
}

export function HowToStartSection() {
    const { t } = useTranslation();
    const [activeStep, setActiveStep] = useState(1);
    
    const handleStepClick = (stepNumber: number) => {
        setActiveStep(stepNumber);
    };

    const steps: Step[] = [
        { 
            stepNumber: 1, 
            title: t('landing.howToStart.steps.1.title'),
            description: t('landing.howToStart.steps.1.desc'),
            detailedDescription: t('landing.howToStart.steps.1.details'),
            imageSrc: '/test1.png'
        },
        { 
            stepNumber: 2, 
            title: t('landing.howToStart.steps.2.title'),
            description: t('landing.howToStart.steps.2.desc'),
            detailedDescription: t('landing.howToStart.steps.2.details'),
            imageSrc: '/test1.png'
        },
        {
            stepNumber: 3,
            title: t('landing.howToStart.steps.3.title'),
            description: t('landing.howToStart.steps.3.desc'),
            detailedDescription: t('landing.howToStart.steps.3.details'),
            imageSrc: '/images/how-to-start/step3-settings.png'
        },
        {
            stepNumber: 4,
            title: t('landing.howToStart.steps.4.title'),
            description: t('landing.howToStart.steps.4.desc'),
            detailedDescription: t('landing.howToStart.steps.4.details'),
            imageSrc: '/images/how-to-start/step4-success.png'
        },
    ];

    const activeStepData = steps.find(step => step.stepNumber === activeStep) || steps[0];

    return (
        <section className="relative bg-card py-16 overflow-hidden rounded-3xl mt-10 w-full shadow-2xl">
            <div className="px-6 w-full">
                <div className="mb-12 text-center">
                    <h2 className="text-4xl font-bold text-foreground">
                        {t('landing.howToStart.title')}
                    </h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                        {t('landing.howToStart.description')}
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-10 items-stretch h-full">
                    {/* Left side: Registration form image */}
                    <div className="w-full md:w-5/12 flex flex-col h-full">
                        <div className="bg-background rounded-3xl p-6 shadow-sm mb-4 flex-grow flex">
                            <div className="bg-card rounded-3xl overflow-hidden shadow-sm border border-border w-full flex items-center justify-center">
                                <div 
                                    key={activeStep}
                                    className="w-full h-full transition-opacity duration-300 animate-fadeIn flex items-center justify-center p-4"
                                >
                                    <div className="text-center">
                                        <div className="text-6xl mb-4">📱</div>
                                        <p className="text-lg text-muted-foreground">Step {activeStepData.stepNumber}</p>
                                        <p className="text-sm text-muted-foreground/70">Replace with actual image</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Launch your store container */}
                        <div className="rounded-3xl bg-secondary text-foreground p-6 shadow-lg relative overflow-hidden flex-shrink-0">
                            {/* Background decoration */}
                            <div className="absolute -left-12 -bottom-12 w-40 h-40 rounded-full bg-primary/10 blur-xl"></div>
                            <div className="absolute right-6 top-2 w-20 h-20 rounded-full bg-chart-5/10 blur-xl"></div>
                            <div className="flex items-center gap-4">
                                <div className="bg-primary rounded-full p-3 flex items-center justify-center shadow-md">
                                    <Rocket className="text-primary-foreground" size={24} />
                                </div>
                                <div>
                                    <div className="text-xl font-bold">{t('landing.howToStart.launchTitle')}</div>
                                    <div className="text-sm text-muted-foreground">{t('landing.howToStart.launchSubtitle')}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Right side: Steps list */}
                    <div className="w-full md:w-6/12 flex flex-col">
                        <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-4 shadow-sm overflow-hidden border border-border h-full">
                            {steps.map((step) => (
                                <div 
                                    key={step.stepNumber}
                                    className={`relative mb-2 overflow-hidden cursor-pointer transition-all duration-300 transform hover:scale-[1.01] ${
                                        step.stepNumber === activeStep ? 'scale-100' : 'scale-[0.98]'
                                    }`}
                                    onClick={() => handleStepClick(step.stepNumber)}
                                >
                                    <div 
                                        className={`relative rounded-2xl border transition-all duration-300 ${
                                            step.stepNumber === activeStep 
                                                ? 'bg-primary border-primary shadow-md shadow-primary/10' 
                                                : 'bg-card border-border hover:border-primary/20'
                                        }`}
                                    >
                                        {step.stepNumber !== activeStep && (
                                            <div className="absolute top-[-1px] left-0 px-3 py-1 text-xs text-accent-foreground bg-primary rounded-bl-xl rounded-tr-xl z-10 font-medium">
                                                Step {step.stepNumber}
                                            </div>
                                        )}
                                        
                                        {step.stepNumber === activeStep && (
                                            <div className="absolute top-[-1px] left-[-1px] px-3 py-1 text-xs bg-background text-primary rounded-bl-xl rounded-tr-xl z-10 font-medium">
                                                Step {step.stepNumber}
                                            </div>
                                        )}
                                        
                                        <div className="px-5 mt-2 py-4">
                                            <div className="flex items-center gap-3">                        
                                                <div className="flex-grow">
                                                    <h3 className={`text-md font-bold ${
                                                        step.stepNumber === activeStep 
                                                            ? 'text-primary-foreground' 
                                                            : 'text-foreground'
                                                    }`}>
                                                        {step.title}
                                                    </h3>
                                                    
                                                    {step.stepNumber === activeStep && (
                                                        <div 
                                                            className="mt-3 text-md text-primary-foreground/90 pl-1 transition-all duration-300 animate-expandDown"
                                                        >
                                                            {step.detailedDescription || step.description}
                                                        </div>
                                                    )}
                                                </div>
                                                
                                                {step.stepNumber !== activeStep && (
                                                    <div className="text-primary flex-shrink-0">
                                                        <ChevronDown size={20} className="animate-bounce" />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center mt-12">
                    <Button size="lg" asChild className="rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-md hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 transform hover:-translate-y-1 transition-all duration-300">
                        <Link href={route('register')} className="group">
                            {t('landing.howToStart.cta')}
                            <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                    <p className="mt-4 text-sm text-muted-foreground">
                        {t('landing.howToStart.trialNote')}
                    </p>
                </div>
            </div>
            
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateX(20px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                
                @keyframes expandDown {
                    from { opacity: 0; max-height: 0; }
                    to { opacity: 1; max-height: 500px; }
                }
                
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out forwards;
                }
                
                .animate-expandDown {
                    animation: expandDown 0.3s ease-out forwards;
                }
                
                .animate-bounce {
                    animation: bounce 1s infinite;
                }
                
                @keyframes bounce {
                    0%, 100% {
                        transform: translateY(-15%);
                        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
                    }
                    50% {
                        transform: translateY(0);
                        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
                    }
                }
            `}</style>
        </section>
    );
} 