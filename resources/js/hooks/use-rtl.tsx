import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

interface RTLContextType {
    isRTL: boolean;
    setIsRTL: (isRTL: boolean) => void;
}

const RTLContext = createContext<RTLContextType | undefined>(undefined);

export function RTLProvider({ children }: { children: ReactNode }) {
    const [isRTL, setIsRTL] = useState(false);
    const { i18n } = useTranslation();

    useEffect(() => {
        // Update RTL state when language changes
        const isRTLLanguage = i18n.language === 'ar';
        setIsRTL(isRTLLanguage);
        
        // Set document direction
        document.documentElement.dir = isRTLLanguage ? 'rtl' : 'ltr';
        document.documentElement.lang = i18n.language;
    }, [i18n.language]);

    return (
        <RTLContext.Provider value={{ isRTL, setIsRTL }}>
            {children}
        </RTLContext.Provider>
    );
}

export function useRTL() {
    const context = useContext(RTLContext);
    if (!context) {
        throw new Error('useRTL must be used within an RTLProvider');
    }
    return context;
} 