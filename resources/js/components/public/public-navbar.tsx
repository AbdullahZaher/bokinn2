import { type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import AppLogo from '@/components/app-logo';
import { useTranslation } from 'react-i18next';

// Navigation links
const navLinks = [
    { name: 'home', href: '/' },
    { name: 'features', href: '/#features' },
    { name: 'pricing', href: route('public.pricing') },
    { name: 'blog', href: route('public.blog') },
    { name: 'about', href: '/#about' },
];

export function PublicNavbar() {
    const { t } = useTranslation();
    const { auth } = usePage<SharedData>().props;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setScrolled(offset > 30);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="fixed left-0 right-0 top-5 z-50 bg-transparent w-full flex justify-center mt-15 pl-5 pr-5">
            <div 
                className={`w-full max-w-5xl mx-4 md:mx-8 rounded-3xl ${
                    scrolled 
                        ? 'bg-card/90 backdrop-blur-md border border-border text-foreground shadow-lg' 
                        : 'text-foreground'
                } md:px-4 md:py-3 px-3 py-2 transition-all duration-300`}
            >
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <AppLogo />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden items-center justify-between md:flex">
                        <div className="mx-auto hidden md:flex">
                            <ul className="flex space-x-6">
                                {navLinks.map((item) => (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className={`flex items-center text-sm transition-colors group ${
                                                scrolled ? 'text-muted-foreground hover:text-foreground' : 'text-muted-foreground hover:text-primary'
                                            } relative`}
                                        >
                                            {t(`landing.navbar.${item.name}`)}
                                            <span className={`absolute inset-x-0 -bottom-1 h-0.5 ${
                                                scrolled ? 'bg-foreground' : 'bg-primary'
                                            } transform scale-x-0 group-hover:scale-x-100 transition-transform`}></span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Buttons */}
                    <div className="hidden space-x-2 md:flex">
                        {auth.user ? (
                            <Button asChild className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 text-sm px-4 py-1 h-auto transform transition-all hover:-translate-y-0.5 hover:shadow-md hover:shadow-primary/20">
                                <Link href={route('dashboard.home')}>
                                    {t('landing.navbar.dashboard')}
                                </Link>
                            </Button>
                        ) : (
                            <>
                                <Button
                                    variant="outline"
                                    className={`rounded-full transition-all ${
                                        scrolled 
                                            ? 'border-border text-foreground bg-transparent hover:bg-accent' 
                                            : 'border-primary text-primary hover:bg-primary/10 hover:text-primary'
                                    } text-sm px-4 py-1 h-auto transform hover:-translate-y-0.5`}
                                    asChild
                                >
                                    <Link href={route('login')}>{t('landing.navbar.login')}</Link>
                                </Button>
                                <Button
                                    className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 text-sm px-4 py-1 h-auto transform transition-all hover:-translate-y-0.5 hover:shadow-md hover:shadow-primary/20"
                                    asChild
                                >
                                    <Link href={route('register')}>{t('landing.navbar.signup')}</Link>
                                </Button>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className={`rounded-xl p-1 focus:outline-none text-primary`}
                        >
                            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Mobile Menu - Simplified */}
            <div
                className={`md:hidden ${
                    isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                } absolute top-[calc(100%-5px)] left-1/2 transform -translate-x-1/2 w-11/12 max-w-sm transition-all duration-300 ease-in-out z-50`}
            >
                <div className="relative mt-2 rounded-xl bg-card shadow-lg border border-border p-4">
                    <ul className="space-y-2 mb-4">
                        {navLinks.map((item) => (
                            <li key={item.name}>
                                <Link 
                                    href={item.href} 
                                    className="flex items-center px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-all"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {t(`landing.navbar.${item.name}`)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    
                    <div className="space-y-2 pt-2 border-t border-border">
                        {auth.user ? (
                            <Button
                                className="w-full justify-start text-sm h-9 px-4 bg-primary text-primary-foreground hover:bg-primary/90"
                                asChild
                            >
                                <Link href={route('dashboard.home')} className="w-full">
                                    {t('landing.navbar.dashboard')}
                                </Link>
                            </Button>
                        ) : (
                            <>
                                <Button
                                    variant="ghost"
                                    className="w-full justify-start text-sm h-9 px-4"
                                    asChild
                                >
                                    <Link href={route('login')} className="w-full">
                                        {t('landing.navbar.login')}
                                    </Link>
                                </Button>
                                <Button
                                    className="w-full justify-start text-sm h-9 px-4 bg-primary text-primary-foreground hover:bg-primary/90"
                                    asChild
                                >
                                    <Link href={route('register')} className="w-full">
                                        {t('landing.navbar.signup')}
                                    </Link>
                                </Button>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* Backdrop for mobile menu */}
            {isMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black/20 z-40 md:hidden backdrop-blur-sm" 
                    onClick={() => setIsMenuOpen(false)}
                ></div>
            )}
        </nav>
    );
} 