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
    Globe, 
    Plus, 
    Search, 
    Filter,
    Edit, 
    CheckCircle, 
    XCircle, 
    Clock,
    User,
    Mail,
    Calendar,
    ExternalLink
} from 'lucide-react';

// Type definitions
interface DomainRequest {
    id: number;
    english_name: string;
    arabic_name: string;
    domain: string;
    status: 'pending' | 'approved' | 'rejected';
    customer: {
        name: string;
        email: string;
    };
    created_at: string;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
    {
        title: 'Domain Requests',
        href: '/dashboard/domain-requests',
    },
];

// Mock data for demonstration
const domainRequests: DomainRequest[] = [
    {
        id: 1,
        english_name: 'Sunset Hotel',
        arabic_name: 'فندق الغروب',
        domain: 'sunset-hotel.com',
        status: 'pending',
        customer: {
            name: 'John Doe',
            email: 'john.doe@example.com'
        },
        created_at: '2024-01-15'
    },
    {
        id: 2,
        english_name: 'Ocean View Resort',
        arabic_name: 'منتجع إطلالة المحيط',
        domain: 'oceanview-resort.com',
        status: 'approved',
        customer: {
            name: 'Jane Smith',
            email: 'jane.smith@example.com'
        },
        created_at: '2024-01-10'
    },
    {
        id: 3,
        english_name: 'Mountain Lodge',
        arabic_name: 'نزل الجبل',
        domain: 'mountain-lodge.com',
        status: 'approved',
        customer: {
            name: 'Mike Johnson',
            email: 'mike.johnson@example.com'
        },
        created_at: '2024-01-05'
    },
    {
        id: 4,
        english_name: 'City Center Hotel',
        arabic_name: 'فندق وسط المدينة',
        domain: 'citycenter-hotel.com',
        status: 'rejected',
        customer: {
            name: 'Sarah Wilson',
            email: 'sarah.wilson@example.com'
        },
        created_at: '2024-01-20'
    },
    {
        id: 5,
        english_name: 'Riverside Inn',
        arabic_name: 'نزل النهر',
        domain: 'riverside-inn.com',
        status: 'pending',
        customer: {
            name: 'David Brown',
            email: 'david.brown@example.com'
        },
        created_at: '2024-01-12'
    }
];

export default function DomainRequests() {
    const { t } = useTranslation();
    


    const getStatusColor = (status: string) => {
        switch (status) {
            case 'approved':
                return 'bg-green-100 text-green-800 border-green-200';
            case 'rejected':
                return 'bg-red-100 text-red-800 border-red-200';
            case 'pending':
                return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            default:
                return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    const handleApproveRequest = (requestId: number) => {
        console.log('Approve domain request:', requestId);
        // Add approval logic here
    };

    const handleRejectRequest = (requestId: number) => {
        console.log('Reject domain request:', requestId);
        // Add rejection logic here
    };

    const handleEditRequest = (requestId: number) => {
        console.log('Edit domain request:', requestId);
        // Add edit logic here
    };

    const getStatusCount = (status: string) => {
        return domainRequests.filter(request => request.status === status).length;
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={t('dashboard.domainRequests')} />
            <div className="flex-1 space-y-6 p-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">{t('dashboard.domainRequests')}</h1>
                        <p className="text-muted-foreground">
                            {t('dashboard.manageDomainRequests')}
                        </p>
                    </div>
                    <Button className="flex items-center gap-2">
                        <Plus className="h-4 w-4" />
                        {t('dashboard.addDomainRequest')}
                    </Button>
                </div>

                {/* Stats Cards */}
                <div className="grid gap-4 md:grid-cols-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{t('dashboard.totalRequests')}</CardTitle>
                            <Globe className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{domainRequests.length}</div>
                            <p className="text-xs text-muted-foreground">
                                +5 {t('dashboard.fromLastMonth')}
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{t('dashboard.pending')}</CardTitle>
                            <Clock className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{getStatusCount('pending')}</div>
                            <p className="text-xs text-muted-foreground">
                                {t('dashboard.awaitingApproval')}
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{t('dashboard.approved')}</CardTitle>
                            <CheckCircle className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{getStatusCount('approved')}</div>
                            <p className="text-xs text-muted-foreground">
                                +12% {t('dashboard.fromLastMonth')}
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{t('dashboard.rejected')}</CardTitle>
                            <XCircle className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{getStatusCount('rejected')}</div>
                            <p className="text-xs text-muted-foreground">
                                -3% {t('dashboard.fromLastMonth')}
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Domain Requests Management */}
                <Card>
                    <CardHeader>
                        <CardTitle>{t('dashboard.domainRequestManagement')}</CardTitle>
                        <CardDescription>
                            {t('dashboard.reviewAndManage')}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    placeholder={t('dashboard.searchDomainRequests')}
                                    className="pl-10"
                                />
                            </div>
                            <Button variant="outline" className="flex items-center gap-2">
                                <Filter className="h-4 w-4" />
                                {t('dashboard.filter')}
                            </Button>
                        </div>

                        {/* Domain Requests Table */}
                        <div className="rounded-md border">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>{t('dashboard.id')}</TableHead>
                                        <TableHead>{t('dashboard.englishName')}</TableHead>
                                        <TableHead>{t('dashboard.arabicName')}</TableHead>
                                        <TableHead>{t('dashboard.domain')}</TableHead>
                                        <TableHead>{t('dashboard.customer')}</TableHead>
                                        <TableHead>{t('dashboard.status')}</TableHead>
                                        <TableHead>{t('dashboard.created')}</TableHead>
                                        <TableHead>{t('dashboard.actions')}</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {domainRequests.map((request) => (
                                        <TableRow key={request.id} className="hover:bg-muted/50">
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                                        <Globe className="h-4 w-4 text-primary" />
                                                    </div>
                                                    <span className="font-medium">#{request.id}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="font-medium">{request.english_name}</div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="text-sm" dir="rtl">{request.arabic_name}</div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <Globe className="h-4 w-4 text-muted-foreground" />
                                                    <a
                                                        href={`https://${request.domain}`}
                                                        target="_blank"
                                                        className="text-blue-600 hover:text-blue-800 transition-colors"
                                                    >
                                                        <span className="text-sm">{request.domain}</span>
                                                        <ExternalLink className="h-3 w-3 ml-1 inline" />
                                                    </a>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <User className="h-4 w-4 text-muted-foreground" />
                                                    <div>
                                                        <div className="font-medium">{request.customer.name}</div>
                                                        <div className="flex items-center gap-1">
                                                            <Mail className="h-3 w-3 text-muted-foreground" />
                                                            <span className="text-xs text-muted-foreground">{request.customer.email}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <Badge className={`text-xs ${getStatusColor(request.status)}`}>
                                                    {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <Calendar className="h-4 w-4 text-muted-foreground" />
                                                    <span className="text-sm">{request.created_at}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    {request.status === 'pending' && (
                                                        <>
                                                            <Button 
                                                                variant="ghost" 
                                                                size="sm"
                                                                className="h-8 w-8 p-0 text-green-600 hover:text-green-800 hover:bg-green-50"
                                                                onClick={() => handleApproveRequest(request.id)}
                                                            >
                                                                <CheckCircle className="h-4 w-4" />
                                                            </Button>
                                                            <Button 
                                                                variant="ghost" 
                                                                size="sm"
                                                                className="h-8 w-8 p-0 text-red-600 hover:text-red-800 hover:bg-red-50"
                                                                onClick={() => handleRejectRequest(request.id)}
                                                            >
                                                                <XCircle className="h-4 w-4" />
                                                            </Button>
                                                        </>
                                                    )}
                                                    <Button 
                                                        variant="ghost" 
                                                        size="sm"
                                                        className="h-8 w-8 p-0"
                                                        onClick={() => handleEditRequest(request.id)}
                                                    >
                                                        <Edit className="h-4 w-4" />
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