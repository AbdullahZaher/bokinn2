import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import { 
    Users, 
    Building2, 
    Shield, 
    DollarSign, 
    Calendar,
    Plus,
    ArrowUpRight,
    Home,
    Settings,
    FileText
} from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    const { t } = useTranslation();

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={t('dashboard.dashboard')} />
            <div className="flex-1 space-y-6 p-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">{t('dashboard.propertyManagementDashboard')}</h1>
                        <p className="text-muted-foreground">
                            {t('dashboard.managePropertiesClients')}
                        </p>
                    </div>
                    <Button className="flex items-center gap-2">
                        <Plus className="h-4 w-4" />
                        {t('dashboard.addProperty')}
                    </Button>
                </div>

                {/* Main Stats Cards */}
                <div className="grid gap-6 md:grid-cols-3">
                    {/* Clients Card */}
                    <Card className="relative overflow-hidden">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{t('dashboard.totalClients')}</CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">1,234</div>
                            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                                <ArrowUpRight className="h-3 w-3 text-green-600" />
                                +12% {t('dashboard.fromLastMonth')}
                            </p>
                            <div className="mt-4 flex items-center gap-2">
                                <Button variant="outline" size="sm" className="flex items-center gap-1">
                                    <Users className="h-3 w-3" />
                                    {t('dashboard.viewAll')}
                                </Button>
                                <Button size="sm" className="flex items-center gap-1">
                                    <Plus className="h-3 w-3" />
                                    {t('dashboard.addClient')}
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Plans Card */}
                    <Card className="relative overflow-hidden">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{t('dashboard.activePlans')}</CardTitle>
                            <Building2 className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                            <div className="text-2xl font-bold">856</div>
                            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                                <ArrowUpRight className="h-3 w-3 text-green-600" />
                                +8% {t('dashboard.fromLastMonth')}
                            </p>
                            <div className="mt-4 flex items-center gap-2">
                                <Button variant="outline" size="sm" className="flex items-center gap-1">
                                    <Building2 className="h-3 w-3" />
                                    {t('dashboard.viewAll')}
                                </Button>
                                <Button size="sm" className="flex items-center gap-1">
                                    <Plus className="h-3 w-3" />
                                    {t('dashboard.addPlan')}
                                </Button>
                            </div>
                    </CardContent>
                </Card>

                    {/* Admins Card */}
                    <Card className="relative overflow-hidden">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{t('dashboard.systemAdmins')}</CardTitle>
                            <Shield className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">24</div>
                            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                                <ArrowUpRight className="h-3 w-3 text-green-600" />
                                +2 {t('dashboard.fromLastMonth')}
                            </p>
                            <div className="mt-4 flex items-center gap-2">
                                <Button variant="outline" size="sm" className="flex items-center gap-1">
                                    <Shield className="h-3 w-3" />
                                    {t('dashboard.viewAll')}
                                </Button>
                                <Button size="sm" className="flex items-center gap-1">
                                    <Plus className="h-3 w-3" />
                                    {t('dashboard.addAdmin')}
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Secondary Stats */}
                <div className="grid gap-6 md:grid-cols-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{t('dashboard.monthlyRevenue')}</CardTitle>
                            <DollarSign className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">$45,231</div>
                            <p className="text-xs text-muted-foreground">
                                +20.1% {t('dashboard.fromLastMonth')}
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{t('dashboard.properties')}</CardTitle>
                            <Home className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">+2,350</div>
                            <p className="text-xs text-muted-foreground">
                                +180.1% {t('dashboard.fromLastMonth')}
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{t('dashboard.activeRentals')}</CardTitle>
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">+12,234</div>
                            <p className="text-xs text-muted-foreground">
                                +19% {t('dashboard.fromLastMonth')}
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{t('dashboard.reports')}</CardTitle>
                            <FileText className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">+573</div>
                            <p className="text-xs text-muted-foreground">
                                +201 {t('dashboard.sinceLastHour')}
                            </p>
                        </CardContent>
                    </Card>
                    </div>

                {/* Recent Activity & Quick Actions */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
                    <Card className="col-span-4">
                        <CardHeader>
                            <CardTitle>{t('dashboard.recentActivity')}</CardTitle>
                            <CardDescription>
                                {t('dashboard.latestPropertyActivities')}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 p-3 rounded-lg border">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium">{t('dashboard.newClientRegistered')}</p>
                                        <p className="text-xs text-muted-foreground">{t('dashboard.johnDoeAdded')}</p>
                                    </div>
                                    <span className="text-xs text-muted-foreground">{t('dashboard.twoMinutesAgo')}</span>
                                </div>
                                <div className="flex items-center gap-4 p-3 rounded-lg border">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium">{t('dashboard.propertyRented')}</p>
                                        <p className="text-xs text-muted-foreground">{t('dashboard.apartmentRented')}</p>
                                    </div>
                                    <span className="text-xs text-muted-foreground">{t('dashboard.fifteenMinutesAgo')}</span>
                                </div>
                                <div className="flex items-center gap-4 p-3 rounded-lg border">
                                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium">{t('dashboard.maintenanceRequest')}</p>
                                        <p className="text-xs text-muted-foreground">{t('dashboard.newMaintenanceTicket')}</p>
                                    </div>
                                    <span className="text-xs text-muted-foreground">{t('dashboard.oneHourAgo')}</span>
                                </div>
                    </div>
                        </CardContent>
                    </Card>
                    <Card className="col-span-3">
                        <CardHeader>
                            <CardTitle>{t('dashboard.quickActions')}</CardTitle>
                            <CardDescription>
                                {t('dashboard.commonTasksShortcuts')}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                <Button variant="outline" className="w-full justify-start gap-2">
                                    <Plus className="h-4 w-4" />
                                    {t('dashboard.addNewProperty')}
                                </Button>
                                <Button variant="outline" className="w-full justify-start gap-2">
                                    <Users className="h-4 w-4" />
                                    {t('dashboard.registerClient')}
                                </Button>
                                <Button variant="outline" className="w-full justify-start gap-2">
                                    <Calendar className="h-4 w-4" />
                                    {t('dashboard.scheduleViewing')}
                                </Button>
                                <Button variant="outline" className="w-full justify-start gap-2">
                                    <FileText className="h-4 w-4" />
                                    {t('dashboard.generateReport')}
                                </Button>
                                <Button variant="outline" className="w-full justify-start gap-2">
                                    <Settings className="h-4 w-4" />
                                    {t('dashboard.systemSettings')}
                                </Button>
                    </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AppLayout>
    );
}
