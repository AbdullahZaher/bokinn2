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
    UserCog, 
    Plus, 
    Search, 
    Filter,
    Edit, 
    Mail,
    Phone,
    CheckCircle,
    XCircle,
    Trash2,
    Calendar
} from 'lucide-react';

// Type definitions
interface Admin {
    id: number;
    name: string;
    email: string;
    phone: string;
    created_at: string;
    status?: 'active' | 'inactive';
    role?: string;
    last_login?: string;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
    {
        title: 'Admins',
        href: '/dashboard/admins',
    },
];

// Mock data for demonstration
const admins: Admin[] = [
    {
        id: 1,
        name: 'John Smith',
        email: 'john.smith@bokinn.com',
        phone: '+1 (555) 123-4567',
        created_at: '2024-01-15',
        status: 'active',
        role: 'Super Admin',
        last_login: '2024-01-20 14:30'
    },
    {
        id: 2,
        name: 'Sarah Johnson',
        email: 'sarah.johnson@bokinn.com',
        phone: '+1 (555) 987-6543',
        created_at: '2024-01-10',
        status: 'active',
        role: 'Admin',
        last_login: '2024-01-20 09:15'
    },
    {
        id: 3,
        name: 'Mike Davis',
        email: 'mike.davis@bokinn.com',
        phone: '+1 (555) 456-7890',
        created_at: '2024-01-05',
        status: 'active',
        role: 'Support Admin',
        last_login: '2024-01-19 16:45'
    },
    {
        id: 4,
        name: 'Lisa Wilson',
        email: 'lisa.wilson@bokinn.com',
        phone: '+1 (555) 789-0123',
        created_at: '2024-01-08',
        status: 'inactive',
        role: 'Admin',
        last_login: '2024-01-15 11:20'
    },
    {
        id: 5,
        name: 'David Brown',
        email: 'david.brown@bokinn.com',
        phone: '+1 (555) 321-6540',
        created_at: '2024-01-12',
        status: 'active',
        role: 'Content Admin',
        last_login: '2024-01-20 13:00'
    },
    {
        id: 6,
        name: 'Emma Thompson',
        email: 'emma.thompson@bokinn.com',
        phone: '+1 (555) 654-3210',
        created_at: '2024-01-18',
        status: 'active',
        role: 'Admin',
        last_login: '2024-01-20 10:30'
    }
];

export default function Admins() {
    const { t } = useTranslation();
    const handleEditAdmin = (adminId: number) => {
        console.log('Edit admin:', adminId);
        // Add edit logic here
    };

    const handleDeleteAdmin = (adminId: number) => {
        console.log('Delete admin:', adminId);
        // Add delete logic here
    };

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

    const getStatusCount = (status: string) => {
        return admins.filter(admin => admin.status === status).length;
    };

    const getRoleCount = (role: string) => {
        return admins.filter(admin => admin.role === role).length;
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={t('dashboard.admins')} />
            <div className="flex-1 space-y-6 p-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">{t('dashboard.admins')}</h1>
                        <p className="text-muted-foreground">
                            {t('dashboard.manageSystemAdmins')}
                        </p>
                    </div>
                    <Button className="flex items-center gap-2">
                        <Plus className="h-4 w-4" />
                        {t('dashboard.addAdmin')}
                    </Button>
                </div>

                {/* Stats Cards */}
                <div className="grid gap-4 md:grid-cols-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{t('dashboard.superAdmins')}</CardTitle>
                            <UserCog className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{getRoleCount('super-admin')}</div>
                            <p className="text-xs text-muted-foreground">
                                {t('dashboard.fullAccess')}
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{t('dashboard.admins')}</CardTitle>
                            <UserCog className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{getRoleCount('admin')}</div>
                            <p className="text-xs text-muted-foreground">
                                {t('dashboard.currentlyActive')}
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{t('dashboard.inactive')}</CardTitle>
                            <XCircle className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{getStatusCount('inactive')}</div>
                            <p className="text-xs text-muted-foreground">
                                {t('dashboard.suspendedAccounts')}
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{t('dashboard.activeNow')}</CardTitle>
                            <CheckCircle className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{getStatusCount('active')}</div>
                            <p className="text-xs text-muted-foreground">
                                {t('dashboard.fromLastMonth')}
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Admin Management */}
                <Card>
                    <CardHeader>
                        <CardTitle>{t('dashboard.administratorManagement')}</CardTitle>
                        <CardDescription>
                            {t('dashboard.manageSystemAdministrators')}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    placeholder={t('dashboard.searchAdministrators')}
                                    className="pl-10"
                                />
                            </div>
                            <Button variant="outline" className="flex items-center gap-2">
                                <Filter className="h-4 w-4" />
                                {t('dashboard.filter')}
                            </Button>
                        </div>

                        {/* Admins Table */}
                        <div className="rounded-md border">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>{t('dashboard.id')}</TableHead>
                                        <TableHead>{t('dashboard.name')}</TableHead>
                                        <TableHead>{t('dashboard.email')}</TableHead>
                                        <TableHead>{t('dashboard.phone')}</TableHead>
                                        <TableHead>{t('dashboard.role')}</TableHead>
                                        <TableHead>{t('dashboard.status')}</TableHead>
                                        <TableHead>{t('dashboard.lastLogin')}</TableHead>
                                        <TableHead>{t('dashboard.actions')}</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {admins.map((admin) => (
                                        <TableRow key={admin.id} className="hover:bg-muted/50">
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                                        <UserCog className="h-4 w-4 text-primary" />
                                                    </div>
                                                    <span className="font-medium">#{admin.id}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="font-medium">{admin.name}</div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <Mail className="h-4 w-4 text-muted-foreground" />
                                                    <span className="text-sm">{admin.email}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <Phone className="h-4 w-4 text-muted-foreground" />
                                                    <span className="text-sm">{admin.phone}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <Badge className="text-xs">
                                                    {(admin.role || '').charAt(0).toUpperCase() + (admin.role || '').slice(1)}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>
                                                <Badge className={`text-xs ${getStatusColor(admin.status || 'inactive')}`}>
                                                    {(admin.status || 'inactive').charAt(0).toUpperCase() + (admin.status || 'inactive').slice(1)}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <Calendar className="h-4 w-4 text-muted-foreground" />
                                                    <span className="text-sm">{admin.last_login || t('dashboard.never')}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <Button 
                                                        variant="ghost" 
                                                        size="sm"
                                                        className="h-8 w-8 p-0"
                                                        onClick={() => handleEditAdmin(admin.id)}
                                                    >
                                                        <Edit className="h-4 w-4" />
                                                    </Button>
                                                    <Button 
                                                        variant="ghost" 
                                                        size="sm"
                                                        className="h-8 w-8 p-0 text-red-600 hover:text-red-800 hover:bg-red-50"
                                                        onClick={() => handleDeleteAdmin(admin.id)}
                                                    >
                                                        <Trash2 className="h-4 w-4" />
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