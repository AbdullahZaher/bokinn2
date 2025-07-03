import { useState } from 'react';
import { Calendar, Clock, Percent } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Payment logos - using placeholder text since images aren't available
const paymentLogos = [
    { name: 'Apple Pay', logoUrl: '/images/payment/apple-pay-logo.png', alt: 'Apple Pay Logo' },
    { name: 'American Express', logoUrl: '/images/payment/am-express-logo.png', alt: 'American Express Logo' },
    { name: 'Mastercard', logoUrl: '/images/payment/card-logo.png', alt: 'Mastercard Logo' },
    { name: 'Visa', logoUrl: '/images/payment/visa-logo.png', alt: 'Visa Logo' },
    { name: 'Mada', logoUrl: '/images/payment/mada-logo.png', alt: 'Mada Logo' },
    { name: 'UrPay', logoUrl: '/images/payment/urpay-logo.png', alt: 'UrPay Logo' },
    { name: 'PayPal', logoUrl: '/images/payment/paypal-logo.png', alt: 'PayPal Logo' },
    { name: 'Google Pay', logoUrl: '/images/payment/google-pay-logo.png', alt: 'Google Pay Logo' },
];

type Tab = 'payment' | 'booking';

export function PaymentMethodsSection() {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState<Tab>('payment');
    
    const handleTabChange = (tab: Tab) => {
        setActiveTab(tab);
    };
    
    return (
        <section className="bg-card py-20 rounded-3xl mt-16 overflow-hidden w-full shadow-2xl">
            <div className="px-6 w-full">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        {t('landing.paymentMethods.title')}
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        {t('landing.paymentMethods.description')}
                    </p>
                </div>
                
                {/* Tabs */}
                <div className="flex justify-center mb-10 border-b border-border">
                    <div className="flex space-x-1">
                        <button
                            className={`px-6 py-3 text-lg font-medium transition-all duration-200 border-b-2 ${
                                activeTab === 'payment' 
                                    ? 'border-primary text-primary' 
                                    : 'border-transparent text-muted-foreground hover:text-foreground'
                            }`}
                            onClick={() => handleTabChange('payment')}
                        >
                            {t('landing.paymentMethods.tabs.payment')}
                        </button>
                        <button
                            className={`px-6 py-3 text-lg font-medium transition-all duration-200 border-b-2 ${
                                activeTab === 'booking' 
                                    ? 'border-primary text-primary' 
                                    : 'border-transparent text-muted-foreground hover:text-foreground'
                            }`}
                            onClick={() => handleTabChange('booking')}
                        >
                            {t('landing.paymentMethods.tabs.booking')}
                        </button>
                    </div>
                </div>
                
                {/* Tab Content */}
                <div className="transition-all duration-300">
                    {activeTab === 'payment' && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center items-center">
                            {paymentLogos.map((payment) => (
                                <div 
                                    key={payment.name} 
                                    className="bg-background rounded-2xl p-6 w-full h-24 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-200"
                                >
                                    <div className="text-center">
                                        <div className="text-2xl mb-2">💳</div>
                                        <div className="text-sm font-medium text-foreground">{payment.name}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    
                    {activeTab === 'booking' && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-background rounded-2xl p-6 flex flex-col items-center text-center">
                                <div className="bg-primary/10 p-4 rounded-full mb-4">
                                    <Calendar className="text-primary" size={24} />
                                </div>
                                <h3 className="text-lg font-bold mb-2">{t('landing.paymentMethods.bookingOptions.preBooking.title')}</h3>
                                <p className="text-muted-foreground text-sm">{t('landing.paymentMethods.bookingOptions.preBooking.desc')}</p>
                            </div>
                            
                            <div className="bg-background rounded-2xl p-6 flex flex-col items-center text-center">
                                <div className="bg-primary/10 p-4 rounded-full mb-4">
                                    <Clock className="text-primary" size={24} />
                                </div>
                                <h3 className="text-lg font-bold mb-2">{t('landing.paymentMethods.bookingOptions.payAtArrival.title')}</h3>
                                <p className="text-muted-foreground text-sm">{t('landing.paymentMethods.bookingOptions.payAtArrival.desc')}</p>
                            </div>
                            
                            <div className="bg-background rounded-2xl p-6 flex flex-col items-center text-center">
                                <div className="bg-primary/10 p-4 rounded-full mb-4">
                                    <Percent className="text-primary" size={24} />
                                </div>
                                <h3 className="text-lg font-bold mb-2">{t('landing.paymentMethods.bookingOptions.advanceDiscount.title')}</h3>
                                <p className="text-muted-foreground text-sm">{t('landing.paymentMethods.bookingOptions.advanceDiscount.desc')}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
} 