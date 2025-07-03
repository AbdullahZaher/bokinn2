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
    Users, 
    Plus, 
    Search, 
    Filter,
    User,
    Mail,
    Phone,
    Building2,
    Calendar,
    CheckCircle,
    XCircle,
    ExternalLink,
    LogIn,
    Edit,
    Trash2,
    RefreshCw
} from 'lucide-react';

// Type definitions
interface Domain {
    domain: string;
    default: boolean;
}

interface Hotel {
    name: string;
    is_dashboard_ready: boolean;
}

interface Plan {
    name: string;
}

interface Subscription {
    status: boolean;
    ends_at: string;
}

interface Customer {
    id: number;
    name: string;
    email: string;
    phone: string;
    hotel?: Hotel;
    plan?: Plan;
    subscription: Subscription;
    domains: Domain[];
    registered_at: string;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
    {
        title: 'Customers',
        href: '/dashboard/customers',
    },
];

// Mock data for demonstration
const customers: Customer[] = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+1 (555) 123-4567',
        hotel: { name: 'Sunset Hotel', is_dashboard_ready: true },
        plan: { name: 'Premium Plan' },
        subscription: { status: true, ends_at: '2024-12-31' },
        domains: [{ domain: 'sunset-hotel.com', default: true }],
        registered_at: '2024-01-15'
    },
    {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        phone: '+1 (555) 987-6543',
        hotel: { name: 'Ocean View Resort', is_dashboard_ready: false },
        plan: { name: 'Basic Plan' },
        subscription: { status: false, ends_at: '2024-10-15' },
        domains: [{ domain: 'oceanview-resort.com', default: true }],
        registered_at: '2024-02-20'
    },
    {
        id: 3,
        name: 'Mike Johnson',
        email: 'mike.johnson@example.com',
        phone: '+1 (555) 456-7890',
        hotel: { name: 'Mountain Lodge', is_dashboard_ready: true },
        plan: { name: 'Enterprise Plan' },
        subscription: { status: true, ends_at: '2025-06-30' },
        domains: [
            { domain: 'mountain-lodge.com', default: true },
            { domain: 'mountainlodge.net', default: false }
        ],
        registered_at: '2024-03-10'
    },
    {
        id: 4,
        name: 'Sarah Wilson',
        email: 'sarah.wilson@example.com',
        phone: '+1 (555) 789-0123',
        hotel: { name: 'City Center Hotel', is_dashboard_ready: true },
        plan: { name: 'Premium Plan' },
        subscription: { status: true, ends_at: '2024-11-30' },
        domains: [{ domain: 'citycenter-hotel.com', default: true }],
        registered_at: '2024-01-25'
    },
    {
        id: 5,
        name: 'David Brown',
        email: 'david.brown@example.com',
        phone: '+1 (555) 321-6540',
        hotel: { name: 'Riverside Inn', is_dashboard_ready: false },
        plan: { name: 'Basic Plan' },
        subscription: { status: false, ends_at: '2024-09-20' },
        domains: [{ domain: 'riverside-inn.com', default: true }],
        registered_at: '2024-02-05'
    }
];

export default function Customers() {
    const { t } = useTranslation();
    
    const getDefaultDomain = (customer: Customer) => {
        if (!customer.domains || customer.domains.length === 0) return "";
        const defaultDomain = customer.domains.find((d: Domain) => d.default);
        return defaultDomain?.domain || customer.domains[0]?.domain || "";
    };

    const handleRenewSubscription = (customerId: number) => {
        console.log('Renew subscription for customer:', customerId);
        // Add renewal logic here
    };

    const handleLoginAsClient = (customerId: number) => {
        console.log('Login as client:', customerId);
        // Add login logic here
    };

    const handleEditClient = (customerId: number) => {
        console.log('Edit client:', customerId);
        // Add edit logic here
    };

    const handleDeleteClient = (customerId: number) => {
        console.log('Delete client:', customerId);
        // Add delete logic here
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={t('dashboard.customers')} />
            <div className="flex-1 space-y-6 p-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">{t('dashboard.customers')}</h1>
                        <p className="text-muted-foreground">
                            {t('dashboard.manageCustomers')}
                        </p>
                    </div>
                    <Button className="flex items-center gap-2">
                        <Plus className="h-4 w-4" />
                        {t('dashboard.addCustomer')}
                    </Button>
                </div>

                {/* Stats Cards */}
                <div className="grid gap-4 md:grid-cols-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{t('dashboard.totalCustomers')}</CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">1,234</div>
                            <p className="text-xs text-muted-foreground">
                                +12% {t('dashboard.fromLastMonth')}
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{t('dashboard.activeSubscriptions')}</CardTitle>
                            <CheckCircle className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">856</div>
                            <p className="text-xs text-muted-foreground">
                                +8% {t('dashboard.fromLastMonth')}
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{t('dashboard.expiredSubscriptions')}</CardTitle>
                            <XCircle className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">23</div>
                            <p className="text-xs text-muted-foreground">
                                -5% {t('dashboard.fromLastMonth')}
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{t('dashboard.readyDashboards')}</CardTitle>
                            <Building2 className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">789</div>
                            <p className="text-xs text-muted-foreground">
                                +15% {t('dashboard.fromLastMonth')}
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Search and Filters */}
                <Card>
                    <CardHeader>
                        <CardTitle>{t('dashboard.customerManagement')}</CardTitle>
                        <CardDescription>
                            {t('dashboard.viewAndManage')}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    placeholder={t('dashboard.searchCustomers')}
                                    className="pl-10"
                                />
                            </div>
                            <Button variant="outline" className="flex items-center gap-2">
                                <Filter className="h-4 w-4" />
                                {t('dashboard.filter')}
                            </Button>
                        </div>

                        {/* Customers Table */}
                        <div className="rounded-md border">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>{t('dashboard.id')}</TableHead>
                                        <TableHead>{t('dashboard.name')}</TableHead>
                                        <TableHead>{t('dashboard.email')}</TableHead>
                                        <TableHead>{t('dashboard.phone')}</TableHead>
                                        <TableHead>{t('dashboard.hotel')}</TableHead>
                                        <TableHead>{t('dashboard.plan')}</TableHead>
                                        <TableHead>{t('dashboard.expires')}</TableHead>
                                        <TableHead>{t('dashboard.status')}</TableHead>
                                        <TableHead>{t('dashboard.domain')}</TableHead>
                                        <TableHead>{t('dashboard.registered')}</TableHead>
                                        <TableHead>{t('dashboard.actions')}</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {customers.map((customer) => (
                                        <TableRow key={customer.id} className="hover:bg-muted/50">
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                                        <User className="h-4 w-4 text-primary" />
                                                    </div>
                                                    <span className="font-medium">#{customer.id}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="font-medium">{customer.name}</div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <Mail className="h-4 w-4 text-muted-foreground" />
                                                    <span className="text-sm">{customer.email}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <Phone className="h-4 w-4 text-muted-foreground" />
                                                    <span className="text-sm">{customer.phone}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <Building2 className="h-4 w-4 text-muted-foreground" />
                                                    <span className="text-sm">{customer.hotel?.name || t('dashboard.noHotel')}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="space-y-1">
                                                    <div className="font-medium">{customer.plan?.name || t('dashboard.noPlan')}</div>
                                                    {!customer.subscription.status && (
                                                        <div className="flex items-center gap-2">
                                                            <Badge variant="destructive" className="text-xs">{t('dashboard.expired')}</Badge>
                                                            <Button 
                                                                variant="ghost" 
                                                                size="sm" 
                                                                className="h-auto p-1 text-xs"
                                                                onClick={() => handleRenewSubscription(customer.id)}
                                                            >
                                                                <RefreshCw className="h-3 w-3 mr-1" />
                                                                {t('dashboard.renew')}
                                                            </Button>
                                                        </div>
                                                    )}
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <Calendar className="h-4 w-4 text-muted-foreground" />
                                                    <span className="text-sm">
                                                        {customer.subscription?.ends_at || t('dashboard.lifetime')}
                                                    </span>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    {customer.hotel?.is_dashboard_ready ? (
                                                        <CheckCircle className="h-5 w-5 text-green-600" />
                                                    ) : (
                                                        <XCircle className="h-5 w-5 text-red-600" />
                                                    )}
                                                    <Badge 
                                                        variant={customer.hotel?.is_dashboard_ready ? 'default' : 'secondary'}
                                                        className="text-xs"
                                                    >
                                                        {customer.hotel?.is_dashboard_ready ? t('dashboard.ready') : t('dashboard.notReady')}
                                                    </Badge>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                {customer.domains && customer.domains.length === 1 ? (
                                                    <a
                                                        href={`https://${getDefaultDomain(customer)}`}
                                                        target="_blank"
                                                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                                                    >
                                                        <span className="text-sm">{getDefaultDomain(customer)}</span>
                                                        <ExternalLink className="h-3 w-3" />
                                                    </a>
                                                ) : (
                                                    <Button 
                                                        variant="ghost" 
                                                        size="sm" 
                                                        className="h-auto p-1 text-xs text-blue-600 hover:text-blue-800"
                                                    >
                                                        {t('dashboard.showDomains')}
                                                    </Button>
                                                )}
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <Calendar className="h-4 w-4 text-muted-foreground" />
                                                    <span className="text-sm">{customer.registered_at}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <Button 
                                                        variant="ghost" 
                                                        size="sm"
                                                        className="h-8 w-8 p-0"
                                                        onClick={() => handleLoginAsClient(customer.id)}
                                                    >
                                                        <LogIn className="h-4 w-4" />
                                                    </Button>
                                                    <Button 
                                                        variant="ghost" 
                                                        size="sm"
                                                        className="h-8 w-8 p-0"
                                                        onClick={() => handleEditClient(customer.id)}
                                                    >
                                                        <Edit className="h-4 w-4" />
                                                    </Button>
                                                    <Button 
                                                        variant="ghost" 
                                                        size="sm"
                                                        className="h-8 w-8 p-0 text-red-600 hover:text-red-800 hover:bg-red-50"
                                                        onClick={() => handleDeleteClient(customer.id)}
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