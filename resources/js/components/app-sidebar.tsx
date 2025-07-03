import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { useRTL } from '@/hooks/use-rtl';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BookOpen, Folder, LayoutGrid, Users, Package, Globe, Layers, AppWindow, Book, Shield, Settings } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import AppLogo from './app-logo';

export function AppSidebar() {
    const { isRTL } = useRTL();
    const { t } = useTranslation();

    // Build nav items inside the component so translations work
    const mainNavItems: NavItem[] = [
        {
            title: t('dashboard.home'),
            href: '/dashboard',
            icon: LayoutGrid,
        },
        {
            title: t('dashboard.customers'),
            href: '/dashboard/customers',
            icon: Users,
        },
        {
            title: t('dashboard.plans'),
            href: '/dashboard/plans',
            icon: Package,
        },
        {
            title: t('dashboard.domainRequests'),
            href: '/dashboard/domain-requests',
            icon: Globe,
        },
        {
            title: t('dashboard.appGroups'),
            href: '/dashboard/app-groups',
            icon: Layers,
        },
        {
            title: t('dashboard.apps'),
            href: '/dashboard/apps',
            icon: AppWindow,
        },
        {
            title: t('dashboard.blog'),
            href: '/dashboard/blog',
            icon: Book,
        },
        {
            title: t('dashboard.admins'),
            href: '/dashboard/admins',
            icon: Shield,
        },
        {
            title: t('dashboard.settings'),
            href: '/dashboard/settings',
            icon: Settings,
        },
    ];

    // Build footer nav items inside the component so translations work
    const footerNavItems: NavItem[] = [
        {
            title: t('dashboard.repository'),
            href: 'https://github.com/abdullahzaher/bokinn/',
            icon: Folder,
        },
        {
            title: t('dashboard.documentation'),
            href: 'https://bokinn.app/docs/',
            icon: BookOpen,
        },
    ];

    return (
        <Sidebar 
            collapsible="icon" 
            variant="inset"
            className={isRTL ? 'rtl' : 'ltr'}
            side={isRTL ? 'right' : 'left'}
        >
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
