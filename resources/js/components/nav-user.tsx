import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from '@/components/ui/sidebar';
import { useRTL } from '@/hooks/use-rtl';
import { useLanguage } from '@/lib/i18n';
import { ChevronsUpDown, LogOut, Settings, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function NavUser() {
    const { t } = useTranslation();
    const { language, changeLanguage } = useLanguage();
    const { isMobile } = useSidebar();
    const { isRTL } = useRTL();

    const handleLanguageChange = (lang: 'en' | 'ar') => {
        changeLanguage(lang);
    };

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton
                            size="lg"
                            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                        >
                            <Avatar className="h-8 w-8 rounded-lg">
                                <AvatarImage src="" alt="John Doe" />
                                <AvatarFallback className="rounded-lg">JD</AvatarFallback>
                            </Avatar>
                            <div className={`grid flex-1 text-sm leading-tight ${isRTL ? 'text-right' : 'text-left'}`}>
                                <span className="truncate font-medium">John Doe</span>
                                <span className="truncate text-xs">john.doe@example.com</span>
                            </div>
                            <ChevronsUpDown className={`size-4 ${isRTL ? 'mr-auto' : 'ml-auto'}`} />
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
                        side={isMobile ? "bottom" : (isRTL ? "left" : "right")}
                        align={isRTL ? "start" : "end"}
                        sideOffset={4}
                    >
                        <DropdownMenuLabel className="p-0 font-normal">
                            <div className={`flex items-center gap-2 px-1 py-1.5 text-sm ${isRTL ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}>
                                <Avatar className="h-8 w-8 rounded-lg">
                                    <AvatarImage src="" alt="John Doe" />
                                    <AvatarFallback className="rounded-lg">JD</AvatarFallback>
                                </Avatar>
                                <div className={`grid flex-1 text-sm leading-tight ${isRTL ? 'text-right' : 'text-left'}`}>
                                    <span className="truncate font-medium">John Doe</span>
                                    <span className="truncate text-xs">john.doe@example.com</span>
                                </div>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className={`flex items-center ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                            <User className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                            <span className={isRTL ? 'text-right' : 'text-left'}>{t('user.profile')}</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className={`flex items-center ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                            <Settings className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                            <span className={isRTL ? 'text-right' : 'text-left'}>{t('user.settings')}</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuLabel className={isRTL ? 'text-right' : 'text-left'}>{t('user.language')}</DropdownMenuLabel>
                        <DropdownMenuItem 
                            onClick={() => handleLanguageChange('en')}
                            className={`flex items-center ${isRTL ? 'justify-end text-right' : 'justify-start text-left'}`}
                        >
                            <span className={language === 'en' ? 'font-bold' : ''}>English</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                            onClick={() => handleLanguageChange('ar')}
                            className={`flex items-center ${isRTL ? 'justify-end text-right' : 'justify-start text-left'}`}
                        >
                            <span className={language === 'ar' ? 'font-bold' : ''}>العربية</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className={`flex items-center ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                            <LogOut className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                            <span className={isRTL ? 'text-right' : 'text-left'}>{t('user.logout')}</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    );
}
