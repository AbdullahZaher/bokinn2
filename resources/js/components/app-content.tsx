import { SidebarInset } from '@/components/ui/sidebar';
import { useRTL } from '@/hooks/use-rtl';
import * as React from 'react';

interface AppContentProps extends React.ComponentProps<'main'> {
    variant?: 'header' | 'sidebar';
}

export function AppContent({ variant = 'header', children, className, ...props }: AppContentProps) {
    const { isRTL } = useRTL();
    
    const rtlClass = isRTL ? 'rtl' : 'ltr';
    const combinedClassName = `${rtlClass} ${className || ''}`.trim();

    if (variant === 'sidebar') {
        return <SidebarInset className={combinedClassName} {...props}>{children}</SidebarInset>;
    }

    return (
        <main className={`mx-auto flex h-full w-full max-w-7xl flex-1 flex-col gap-4 rounded-xl ${combinedClassName}`} {...props}>
            {children}
        </main>
    );
}
