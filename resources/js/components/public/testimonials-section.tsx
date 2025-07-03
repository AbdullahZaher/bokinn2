import { useState, useEffect, useRef } from 'react';
import { ChevronRight, ChevronLeft, Star, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Testimonial {
    quote: string;
    authorName: string;
    hotelName: string;
    location: string;
    rating: number;
    authorImage: string;
    hotelImage: string;
}

const testimonials: Testimonial[] = [
    {
        quote:
            'Bokinn completely transformed how we manage hotel bookings. Our operations are now smoother and the error rate has dropped significantly, leading to noticeably improved guest satisfaction.',
        authorName: 'Sarah Alatas',
        hotelName: 'Oasis Hotel',
        location: 'Riyadh',
        rating: 5,
        authorImage: '/test1.png',
        hotelImage: '/test1.png',
    },
    {
        quote:
            'Before using Bokinn, managing bookings was a complex and exhausting process. Now the booking process is smooth and automated from start to finish, allowing our team to focus on providing better service to guests.',
        authorName: 'Ahmed Salem',
        hotelName: 'Peace Hotel',
        location: 'Jeddah',
        rating: 4,
        authorImage: '/test1.png',
        hotelImage: '/test1.png',
    },
    {
        quote:
            'The system completely automates all our operations, from booking to checkout. The analytical reports have helped us understand market trends and make better decisions. An exceptional experience with top-tier technical support.',
        authorName: 'Khalid Mansour',
        hotelName: 'Beach Resort',
        location: 'Khobar',
        rating: 5,
        authorImage: '/test1.png',
        hotelImage: '/test1.png',
    },
];

export function TestimonialsSection() {
    const { t } = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const maxIndex = testimonials.length - 1;
    const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

    const nextSlide = () => {
        setCurrentIndex(currentIndex === maxIndex ? 0 : currentIndex + 1);
    };

    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? maxIndex : currentIndex - 1);
    };

    useEffect(() => {
        autoPlayRef.current = setInterval(() => {
            nextSlide();
        }, 8000);

        return () => {
            if (autoPlayRef.current) {
                clearInterval(autoPlayRef.current);
            }
        };
    }, [currentIndex]);

    // Render stars based on rating
    const renderStars = (rating: number) => {
        return Array(5)
            .fill(0)
            .map((_, i) => (
                <Star
                    key={i}
                    className={`h-4 w-4 mr-1 ${i < rating ? 'text-chart-4 fill-chart-4' : 'text-muted'}`}
                />
            ));
    };

    return (
        <section className="relative bg-secondary py-20 overflow-hidden rounded-3xl mt-10">
            {/* Background decorations */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute left-[15%] top-[20%] h-[25rem] w-[25rem] rounded-full bg-primary/10 blur-[120px]" />
                <div className="absolute right-[20%] top-[10%] h-[20rem] w-[20rem] rounded-full bg-chart-5/10 blur-[100px]" />
                <div className="absolute bottom-[10%] left-[30%] h-[15rem] w-[15rem] rounded-full bg-chart-3/10 blur-[90px]" />
            </div>
            
            <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
                <div className="text-center mb-12 relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        {t('landing.testimonials.title')}
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        {t('landing.testimonials.description')}
                    </p>
                </div>

                <div className="relative">
                    {/* Testimonials carousel */}
                    <div className="overflow-hidden">
                        <div 
                            className="transition-all duration-500 ease-in-out"
                            style={{ transform: `translateX(${currentIndex * 100}%)` }}
                        >
                            <div className="flex">
                                {testimonials.map((testimonial, index) => (
                                    <div 
                                        key={index} 
                                        className={`w-full min-w-full px-4 transition-opacity duration-300 ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
                                        style={{ transform: `translateX(${-currentIndex * 100}%)` }}
                                    >
                                        <div className="bg-card rounded-3xl shadow-xl overflow-hidden border border-border">
                                            <div className="flex flex-col md:flex-row">
                                                <div className="w-full md:w-2/5 relative">
                                                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70"></div>
                                                    <div className="w-full h-80 md:h-full bg-gradient-to-br from-primary/10 to-chart-3/10 flex items-center justify-center">
                                                        <div className="text-center">
                                                            <div className="text-6xl mb-4">🏨</div>
                                                            <p className="text-lg text-muted-foreground">Hotel Image</p>
                                                            <p className="text-sm text-muted-foreground/70">Replace with actual image</p>
                                                        </div>
                                                    </div>
                                                    <div className="absolute bottom-4 left-4 text-white">
                                                        <h3 className="text-xl font-bold">{testimonial.hotelName}</h3>
                                                        <p className="text-sm opacity-90">{testimonial.location}</p>
                                                    </div>
                                                </div>
                                                
                                                <div className="w-full md:w-3/5 p-8 flex flex-col justify-between bg-card relative">
                                                    {/* Decorative quote mark */}
                                                    <div className="absolute top-6 left-8 text-chart-3/10">
                                                        <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
                                                            <path d="M10 7L2 7L2 15C2 17.7614 4.23858 20 7 20L7 20C9.76142 20 12 17.7614 12 15L12 9C12 4.58172 8.41828 1 4 1" />
                                                            <path d="M22 7L14 7L14 15C14 17.7614 16.2386 20 19 20L19 20C21.7614 20 24 17.7614 24 15L24 9C24 4.58172 20.4183 1 16 1" />
                                                        </svg>
                                                    </div>
                                                    
                                                    <div>
                                                        <div className="mb-6 relative z-10">
                                                            <div className="inline-block p-3 bg-chart-3 rounded-full mb-4">
                                                                <Quote className="h-5 w-5 text-chart-3-foreground" />
                                                            </div>
                                                            <p className="text-lg text-foreground leading-relaxed">
                                                                {testimonial.quote}
                                                            </p>
                                                        </div>
                                                        
                                                        <div className="flex items-center mt-4">
                                                            <div className="flex">
                                                                {renderStars(testimonial.rating)}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="mt-6 flex items-center">
                                                        <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-border shadow-md bg-gradient-to-br from-primary/20 to-chart-3/20 flex items-center justify-center">
                                                            <div className="text-lg font-semibold text-foreground">
                                                                {testimonial.authorName.split(' ').map(n => n[0]).join('')}
                                                            </div>
                                                        </div>
                                                        <div className="ml-4">
                                                            <p className="font-semibold text-foreground">{testimonial.authorName}</p>
                                                            <p className="text-sm text-muted-foreground">{t('landing.testimonials.managerAt')} {testimonial.hotelName}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    {/* Navigation buttons */}
                    <div className="flex justify-center mt-8 gap-3">
                        <button
                            onClick={prevSlide}
                            className="p-3 rounded-full bg-card shadow-md hover:bg-secondary transition-all duration-200 border border-border focus:outline-none transform hover:-translate-y-1"
                            aria-label="Previous"
                        >
                            <ChevronLeft className="h-5 w-5 text-foreground" />
                        </button>
                        
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`rounded-full transition-all duration-200 ${
                                    currentIndex === index 
                                        ? 'bg-chart-3 w-8 h-3 shadow-md' 
                                        : 'bg-muted w-3 h-3 hover:bg-muted-foreground'
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                        
                        <button
                            onClick={nextSlide}
                            className="p-3 rounded-full bg-card shadow-md hover:bg-secondary transition-all duration-200 border border-border focus:outline-none transform hover:-translate-y-1"
                            aria-label="Next"
                        >
                            <ChevronRight className="h-5 w-5 text-foreground" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
} 