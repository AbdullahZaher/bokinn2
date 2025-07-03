import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import { 
    Building2, 
    Plus, 
    Search, 
    Filter,
    Edit, 
    Layers,
    Globe,
    Settings,
    Package,
    Grid3X3
} from 'lucide-react';

// Type definitions
interface NameTranslations {
    en: string;
    ar: string;
}

interface ApplicationGroup {
    id: number;
    name: string;
}

interface Application {
    id: number;
    name_translations: NameTranslations;
    group: ApplicationGroup;
    status?: 'active' | 'inactive' | 'maintenance';
    version?: string;
    created_at?: string;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
    {
        title: 'Apps',
        href: '/dashboard/apps',
    },
];

// Mock data for demonstration
const applications: Application[] = [
    {
        id: 1,
        name_translations: {
            en: 'Reservation Management',
            ar: 'إدارة الحجوزات'
        },
        group: { id: 1, name: 'Property Management' },
        status: 'active',
        version: '2.1.0',
        created_at: '2024-01-15'
    },
    {
        id: 2,
        name_translations: {
            en: 'Guest Check-in',
            ar: 'تسجيل دخول الضيوف'
        },
        group: { id: 2, name: 'Guest Services' },
        status: 'active',
        version: '1.8.5',
        created_at: '2024-01-10'
    },
    {
        id: 3,
        name_translations: {
            en: 'Financial Reports',
            ar: 'التقارير المالية'
        },
        group: { id: 3, name: 'Financial Management' },
        status: 'active',
        version: '3.0.2',
        created_at: '2024-01-05'
    },
    {
        id: 4,
        name_translations: {
            en: 'Maintenance Requests',
            ar: 'طلبات الصيانة'
        },
        group: { id: 4, name: 'Maintenance & Operations' },
        status: 'maintenance',
        version: '1.5.3',
        created_at: '2024-01-20'
    },
    {
        id: 5,
        name_translations: {
            en: 'Marketing Campaigns',
            ar: 'حملات التسويق'
        },
        group: { id: 5, name: 'Marketing & Sales' },
        status: 'inactive',
        version: '2.0.1',
        created_at: '2024-01-18'
    },
    {
        id: 6,
        name_translations: {
            en: 'Room Management',
            ar: 'إدارة الغرف'
        },
        group: { id: 1, name: 'Property Management' },
        status: 'active',
        version: '1.9.4',
        created_at: '2024-01-12'
    },
    {
        id: 7,
        name_translations: {
            en: 'Housekeeping',
            ar: 'النظافة'
        },
        group: { id: 4, name: 'Maintenance & Operations' },
        status: 'active',
        version: '1.7.2',
        created_at: '2024-01-14'
    },
    {
        id: 8,
        name_translations: {
            en: 'Billing System',
            ar: 'نظام الفواتير'
        },
        group: { id: 3, name: 'Financial Management' },
        status: 'active',
        version: '2.3.1',
        created_at: '2024-01-08'
    }
];

export default function Apps() {
    const { t } = useTranslation();
    const handleEditApp = (appId: number) => {
        console.log('Edit application:', appId);
        // Add edit logic here
    };

    const handleAppSettings = (appId: number) => {
        console.log('Open settings for app:', appId);
        // Add settings logic here
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'active':
                return 'bg-green-100 text-green-800 border-green-200';
            case 'inactive':
                return 'bg-gray-100 text-gray-800 border-gray-200';
            case 'maintenance':
                return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            default:
                return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    const getStatusCount = (status: string) => {
        return applications.filter(app => app.status === status).length;
    };

    const getUniqueGroups = () => {
        const groups = applications.map(app => app.group.name);
        return [...new Set(groups)];
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={t('dashboard.apps')} />
            <div className="flex-1 space-y-6 p-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">{t('dashboard.apps')}</h1>
                        <p className="text-muted-foreground">
                            {t('dashboard.manageApplications')}
                        </p>
                    </div>
                    <Button className="flex items-center gap-2">
                        <Plus className="h-4 w-4" />
                        {t('dashboard.addApp')}
                    </Button>
                </div>

                {/* Stats Cards */}
                <div className="grid gap-4 md:grid-cols-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{t('dashboard.totalApps')}</CardTitle>
                            <Building2 className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{applications.length}</div>
                            <p className="text-xs text-muted-foreground">
                                +3 {t('dashboard.fromLastMonth')}
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{t('dashboard.activePlans')}</CardTitle>
                            <Package className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{getStatusCount('active')}</div>
                            <p className="text-xs text-muted-foreground">
                                {t('dashboard.runningSmoothly')}
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{t('dashboard.appGroups')}</CardTitle>
                            <Grid3X3 className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{getUniqueGroups().length}</div>
                            <p className="text-xs text-muted-foreground">
                                {t('dashboard.organizedCategories')}
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{t('dashboard.inMaintenance')}</CardTitle>
                            <Settings className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{getStatusCount('maintenance')}</div>
                            <p className="text-xs text-muted-foreground">
                                {t('dashboard.underDevelopment')}
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Applications Management */}
                <Card>
                    <CardHeader>
                        <CardTitle>{t('dashboard.applicationManagement')}</CardTitle>
                        <CardDescription>
                            {t('dashboard.manageAndConfigure')}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    placeholder={t('dashboard.searchApplications')}
                                    className="pl-10"
                                />
                            </div>
                            <Button variant="outline" className="flex items-center gap-2">
                                <Filter className="h-4 w-4" />
                                {t('dashboard.filter')}
                            </Button>
                        </div>

                        {/* Applications Table */}
                        <div className="rounded-md border">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>{t('dashboard.id')}</TableHead>
                                        <TableHead>{t('dashboard.englishName')}</TableHead>
                                        <TableHead>{t('dashboard.arabicName')}</TableHead>
                                        <TableHead>{t('dashboard.group')}</TableHead>
                                        <TableHead>{t('dashboard.status')}</TableHead>
                                        <TableHead>{t('dashboard.version')}</TableHead>
                                        <TableHead>{t('dashboard.created')}</TableHead>
                                        <TableHead>{t('dashboard.actions')}</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {applications.map((app) => (
                                        <TableRow key={app.id} className="hover:bg-muted/50">
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                                        <Building2 className="h-4 w-4 text-primary" />
                                                    </div>
                                                    <span className="font-medium">#{app.id}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <Globe className="h-4 w-4 text-muted-foreground" />
                                                    <div>
                                                        <div className="font-medium">{app.name_translations.en}</div>
                                                        <Badge variant="secondary" className="text-xs mt-1">
                                                            {t('dashboard.englishName')}
                                                        </Badge>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <Globe className="h-4 w-4 text-muted-foreground" />
                                                    <div>
                                                        <div className="text-sm" dir="rtl">{app.name_translations.ar}</div>
                                                        <Badge variant="outline" className="text-xs mt-1">
                                                            {t('dashboard.arabicName')}
                                                        </Badge>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <Layers className="h-4 w-4 text-muted-foreground" />
                                                    <div>
                                                        <div className="font-medium">{app.group.name}</div>
                                                        <Badge variant="default" className="text-xs mt-1">
                                                            {t('dashboard.group')}
                                                        </Badge>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <Badge className={`text-xs ${getStatusColor(app.status || 'inactive')}`}>
                                                    {(app.status || 'inactive').charAt(0).toUpperCase() + (app.status || 'inactive').slice(1)}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>
                                                <div className="text-sm font-mono text-muted-foreground">
                                                    {app.version || 'N/A'}
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="text-sm text-muted-foreground">
                                                    {app.created_at || 'N/A'}
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <Button 
                                                        variant="ghost" 
                                                        size="sm"
                                                        className="h-8 w-8 p-0"
                                                        onClick={() => handleEditApp(app.id)}
                                                    >
                                                        <Edit className="h-4 w-4" />
                                                    </Button>
                                                    <Button 
                                                        variant="ghost" 
                                                        size="sm"
                                                        className="h-8 w-8 p-0"
                                                        onClick={() => handleAppSettings(app.id)}
                                                    >
                                                        <Settings className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
} 