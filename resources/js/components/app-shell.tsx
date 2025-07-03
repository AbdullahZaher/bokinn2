import { SidebarProvider } from '@/components/ui/sidebar';
import { SharedData } from '@/types';
import { usePage } from '@inertiajs/react';
import { useRTL } from '@/hooks/use-rtl';
import React from 'react';

interface AppShellProps {
    children: React.ReactNode;
    variant?: 'header' | 'sidebar';
}

export function AppShell({ children, variant = 'header' }: AppShellProps) {
    const isOpen = usePage<SharedData>().props.sidebarOpen;
    const { isRTL } = useRTL();

    if (variant === 'header') {
        return <div className="flex min-h-screen w-full flex-col">{children}</div>;
    }

    // Expecting children: [Sidebar, AppContent]
    const arr = React.Children.toArray(children);
    const sidebar = arr[0];
    const content = arr[1];

    return (
        <SidebarProvider defaultOpen={isOpen}>
            <div className="flex min-h-screen w-full flex-row">
                {isRTL ? (
                    <>
                        {sidebar}
                        {content}
                    </>
                ) : (
                    <>
                        {sidebar}
                        {content}
                    </>
                )}
            </div>
        </SidebarProvider>
    );
}
