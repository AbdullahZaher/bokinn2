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
    Package, 
    Plus, 
    Search, 
    Filter,
    Edit,
    Trash2,
    DollarSign,
    Users,
    CheckCircle
} from 'lucide-react';

// Type definitions
interface PlanTranslation {
    en: string;
    ar: string;
}

interface Plan {
    id: number;
    name_translations: PlanTranslation;
    price: number;
    periodicity_type?: string;
    periodicity?: number;
    subscriptions_count: number;
    currency: string;
    interval: string;
    features: string[];
    status: 'active' | 'inactive';
    created_at: string;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
    {
        title: 'Plans',
        href: '/dashboard/plans',
    },
];

// Mock data for demonstration
const plans: Plan[] = [
    {
        id: 1,
        name_translations: { en: 'Basic Plan', ar: 'الخطة الأساسية' },
        price: 29.99,
        periodicity_type: 'monthly',
        periodicity: 1,
        subscriptions_count: 156,
        currency: 'USD',
        interval: 'monthly',
        features: ['Up to 10 properties', 'Basic support', 'Email notifications'],
        status: 'active',
        created_at: '2024-01-15'
    },
    {
        id: 2,
        name_translations: { en: 'Premium Plan', ar: 'الخطة المميزة' },
        price: 79.99,
        periodicity_type: 'monthly',
        periodicity: 1,
        subscriptions_count: 89,
        currency: 'USD',
        interval: 'monthly',
        features: ['Up to 50 properties', 'Priority support', 'Advanced analytics', 'API access'],
        status: 'active',
        created_at: '2024-01-10'
    },
    {
        id: 3,
        name_translations: { en: 'Enterprise Plan', ar: 'خطة المؤسسات' },
        price: 199.99,
        periodicity_type: 'monthly',
        periodicity: 1,
        subscriptions_count: 23,
        currency: 'USD',
        interval: 'monthly',
        features: ['Unlimited properties', '24/7 support', 'Custom integrations', 'White-label options'],
        status: 'active',
        created_at: '2024-01-05'
    },
    {
        id: 4,
        name_translations: { en: 'Starter Plan', ar: 'خطة البداية' },
        price: 9.99,
        periodicity_type: 'monthly',
        periodicity: 1,
        subscriptions_count: 0,
        currency: 'USD',
        interval: 'monthly',
        features: ['Up to 3 properties', 'Basic support'],
        status: 'inactive',
        created_at: '2024-01-20'
    },
    {
        id: 5,
        name_translations: { en: 'Professional Plan', ar: 'خطة المستوى المهني' },
        price: 149.99,
        periodicity_type: 'monthly',
        periodicity: 1,
        subscriptions_count: 45,
        currency: 'USD',
        interval: 'monthly',
        features: ['Up to 100 properties', 'Priority support', 'Advanced reporting', 'Multi-user access'],
        status: 'active',
        created_at: '2024-01-12'
    }
];

export default function Plans() {
    const { t } = useTranslation();
    
    const handleEditPlan = (planId: number) => {
        console.log('Edit plan:', planId);
        // Add edit logic here
    };

    const handleDeletePlan = (planId: number) => {
        console.log('Delete plan:', planId);
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
        return plans.filter(plan => plan.status === status).length;
    };

    const getAveragePrice = () => {
        const activePlans = plans.filter(plan => plan.status === 'active');
        if (activePlans.length === 0) return 0;
        const total = activePlans.reduce((sum, plan) => sum + plan.price, 0);
        return Math.round(total / activePlans.length);
    };

    const getTotalSubscriptions = () => {
        return plans.reduce((sum, plan) => sum + plan.subscriptions_count, 0);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={t('dashboard.plans')} />
            <div className="flex-1 space-y-6 p-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">{t('dashboard.plans')}</h1>
                        <p className="text-muted-foreground">
                            {t('dashboard.managePlans')}
                        </p>
                    </div>
                    <Button className="flex items-center gap-2">
                        <Plus className="h-4 w-4" />
                        {t('dashboard.addPlan')}
                    </Button>
                </div>

                {/* Stats Cards */}
                <div className="grid gap-4 md:grid-cols-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{t('dashboard.totalPlans')}</CardTitle>
                            <Package className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{plans.length}</div>
                            <p className="text-xs text-muted-foreground">
                                +2 {t('dashboard.fromLastMonth')}
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{t('dashboard.activePlans')}</CardTitle>
                            <CheckCircle className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{getStatusCount('active')}</div>
                            <p className="text-xs text-muted-foreground">
                                {t('dashboard.livePosts')}
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{t('dashboard.totalSubscriptions')}</CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{getTotalSubscriptions().toLocaleString()}</div>
                            <p className="text-xs text-muted-foreground">
                                {t('dashboard.acrossAllGroups')}
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{t('dashboard.averagePrice')}</CardTitle>
                            <DollarSign className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">${getAveragePrice()}</div>
                            <p className="text-xs text-muted-foreground">
                                {t('dashboard.perMonth')}
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Plans Management */}
                <Card>
                    <CardHeader>
                        <CardTitle>{t('dashboard.planManagement')}</CardTitle>
                        <CardDescription>
                            {t('dashboard.viewAndManagePlans')}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    placeholder={t('dashboard.searchPlans')}
                                    className="pl-10"
                                />
                            </div>
                            <Button variant="outline" className="flex items-center gap-2">
                                <Filter className="h-4 w-4" />
                                {t('dashboard.filter')}
                            </Button>
                        </div>

                        {/* Plans Table */}
                        <div className="rounded-md border">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>{t('dashboard.id')}</TableHead>
                                        <TableHead>{t('dashboard.name')}</TableHead>
                                        <TableHead>{t('dashboard.price')}</TableHead>
                                        <TableHead>{t('dashboard.subscriptions')}</TableHead>
                                        <TableHead>{t('dashboard.features')}</TableHead>
                                        <TableHead>{t('dashboard.status')}</TableHead>
                                        <TableHead>{t('dashboard.created')}</TableHead>
                                        <TableHead>{t('dashboard.actions')}</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {plans.map((plan) => (
                                        <TableRow key={plan.id} className="hover:bg-muted/50">
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                                        <Package className="h-4 w-4 text-primary" />
                                                    </div>
                                                    <span className="font-medium">#{plan.id}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="font-medium">{plan.name_translations.en}</div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                                                    <span className="font-medium">
                                                        ${plan.price}/{plan.interval}
                                                    </span>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <Users className="h-4 w-4 text-muted-foreground" />
                                                    <span className="font-medium">{plan.subscriptions_count}</span>
                                                    <span className="text-sm text-muted-foreground">{t('dashboard.subscriptions')}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="max-w-xs">
                                                    <div className="flex flex-wrap gap-1">
                                                        {plan.features.slice(0, 2).map((feature, index) => (
                                                            <Badge key={index} variant="secondary" className="text-xs">
                                                                {feature}
                                                            </Badge>
                                                        ))}
                                                        {plan.features.length > 2 && (
                                                            <Badge variant="outline" className="text-xs">
                                                                +{plan.features.length - 2} {t('dashboard.more')}
                                                            </Badge>
                                                        )}
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <Badge className={`text-xs ${getStatusColor(plan.status)}`}>
                                                    {plan.status.charAt(0).toUpperCase() + plan.status.slice(1)}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>
                                                <div className="text-sm text-muted-foreground">
                                                    {plan.created_at}
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <Button 
                                                        variant="ghost" 
                                                        size="sm"
                                                        className="h-8 w-8 p-0"
                                                        onClick={() => handleEditPlan(plan.id)}
                                                    >
                                                        <Edit className="h-4 w-4" />
                                                    </Button>
                                                    <Button 
                                                        variant="ghost" 
                                                        size="sm"
                                                        className="h-8 w-8 p-0 text-red-600 hover:text-red-800 hover:bg-red-50"
                                                        onClick={() => handleDeletePlan(plan.id)}
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