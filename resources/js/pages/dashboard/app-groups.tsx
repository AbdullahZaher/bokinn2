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
    Layers, 
    Plus, 
    Search, 
    Filter,
    Edit, 
    Users,
    Globe,
    CheckCircle,
    Bolt
} from 'lucide-react';

// Type definitions
interface NameTranslations {
    en: string;
    ar: string;
}

interface ApplicationGroup {
    id: number;
    name_translations: NameTranslations;
    apps_count?: number;
    created_at?: string;
    status: string;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
    {
        title: 'App Groups',
        href: '/dashboard/app-groups',
    },
];

// Mock data for demonstration
const appGroups: ApplicationGroup[] = [
    {
        id: 1,
        name_translations: {
            en: 'Property Management',
            ar: 'إدارة العقارات'
        },
        apps_count: 5,
        created_at: '2024-01-15',
        status: 'active'
    },
    {
        id: 2,
        name_translations: {
            en: 'Guest Services',
            ar: 'خدمات الضيوف'
        },
        apps_count: 3,
        created_at: '2024-01-10',
        status: 'active'
    },
    {
        id: 3,
        name_translations: {
            en: 'Financial Management',
            ar: 'الإدارة المالية'
        },
        apps_count: 4,
        created_at: '2024-01-05',
        status: 'inactive'
    },
    {
        id: 4,
        name_translations: {
            en: 'Maintenance & Operations',
            ar: 'الصيانة والعمليات'
        },
        apps_count: 6,
        created_at: '2024-01-20',
        status: 'active'
    },
    {
        id: 5,
        name_translations: {
            en: 'Marketing & Sales',
            ar: 'التسويق والمبيعات'
        },
        apps_count: 2,
        created_at: '2024-01-18',
        status: 'active'
    }
];

// Add getStatusColor for group status
const getStatusColor = (status: string) => {
    switch (status) {
        case 'active':
            return 'bg-green-100 text-green-800 border-green-200';
        case 'inactive':
            return 'bg-gray-100 text-gray-800 border-gray-200';
        default:
            return 'bg-gray-100 text-gray-800 border-gray-200';
    }
};

export default function AppGroups() {
    const { t } = useTranslation();
    const handleEditGroup = (groupId: number) => {
        console.log('Edit app group:', groupId);
        // Add edit logic here
    };

    const handleGroupSettings = (groupId: number) => {
        console.log('Open settings for group:', groupId);
        // Add settings logic here
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={t('dashboard.appGroups')} />
            <div className="flex-1 space-y-6 p-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">{t('dashboard.appGroups')}</h1>
                        <p className="text-muted-foreground">
                            {t('dashboard.organizeAppGroups')}
                        </p>
                    </div>
                    <Button className="flex items-center gap-2">
                        <Plus className="h-4 w-4" />
                        {t('dashboard.addAppGroup')}
                    </Button>
                </div>

                {/* Stats Cards */}
                <div className="grid gap-4 md:grid-cols-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{t('dashboard.totalGroups')}</CardTitle>
                            <Layers className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{appGroups.length}</div>
                            <p className="text-xs text-muted-foreground">
                                +2 {t('dashboard.fromLastMonth')}
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{t('dashboard.totalApps')}</CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {appGroups.reduce((sum, group) => sum + (group.apps_count || 0), 0)}
                            </div>
                            <p className="text-xs text-muted-foreground">
                                {t('dashboard.acrossAllGroups')}
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{t('dashboard.multilingual')}</CardTitle>
                            <Globe className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">100%</div>
                            <p className="text-xs text-muted-foreground">
                                {t('dashboard.allGroupsSupport')}
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{t('dashboard.activeGroups')}</CardTitle>
                            <CheckCircle className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{appGroups.length}</div>
                            <p className="text-xs text-muted-foreground">
                                {t('dashboard.allGroupsActive')}
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* App Groups Management */}
                <Card>
                    <CardHeader>
                        <CardTitle>{t('dashboard.appGroupManagement')}</CardTitle>
                        <CardDescription>
                            {t('dashboard.organizeApplications')}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    placeholder={t('dashboard.searchAppGroups')}
                                    className="pl-10"
                                />
                            </div>
                            <Button variant="outline" className="flex items-center gap-2">
                                <Filter className="h-4 w-4" />
                                {t('dashboard.filter')}
                            </Button>
                        </div>

                        {/* App Groups Table */}
                        <div className="rounded-md border">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>{t('dashboard.id')}</TableHead>
                                        <TableHead>{t('dashboard.name')}</TableHead>
                                        <TableHead>{t('dashboard.appsCount')}</TableHead>
                                        <TableHead>{t('dashboard.status')}</TableHead>
                                        <TableHead>{t('dashboard.actions')}</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {appGroups.map((group) => (
                                        <TableRow key={group.id} className="hover:bg-muted/50">
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                                        <Layers className="h-4 w-4 text-primary" />
                                                    </div>
                                                    <span className="font-medium">#{group.id}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <Globe className="h-4 w-4 text-muted-foreground" />
                                                    <div>
                                                        <div className="font-medium">{group.name_translations.en}</div>
                                                        <Badge variant="secondary" className="text-xs mt-1">
                                                            English
                                                        </Badge>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <Users className="h-4 w-4 text-muted-foreground" />
                                                    <span className="font-medium">{group.apps_count || 0}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <Badge className={`text-xs ${getStatusColor(group.status)}`}>
                                                    {group.status.charAt(0).toUpperCase() + group.status.slice(1)}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <Button 
                                                        variant="ghost" 
                                                        size="sm"
                                                        className="h-8 w-8 p-0"
                                                        onClick={() => handleEditGroup(group.id)}
                                                    >
                                                        <Edit className="h-4 w-4" />
                                                    </Button>
                                                    <Button 
                                                        variant="ghost" 
                                                        size="sm"
                                                        className="h-8 w-8 p-0"
                                                        onClick={() => handleGroupSettings(group.id)}
                                                    >
                                                        <Bolt className="h-4 w-4" />
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