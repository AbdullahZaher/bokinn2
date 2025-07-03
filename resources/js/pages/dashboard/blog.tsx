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
    FileText, 
    Plus, 
    Search, 
    Filter,
    Edit, 
    Trash2, 
    Calendar,
    Eye,
    ExternalLink,
    Users,
    CheckCircle,
    XCircle
} from 'lucide-react';

// Type definitions
interface BlogPost {
    id: number;
    title: string;
    description: string;
    status?: 'published' | 'draft' | 'archived';
    created_at: string;
    author?: string;
    views?: number;
    category?: string;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
    {
        title: 'Blog',
        href: '/dashboard/blog',
    },
];

// Mock data for demonstration
const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: 'Top 10 Property Management Trends for 2024',
        description: 'Discover the latest trends in property management that will shape the industry in 2024, from smart technology integration to sustainable practices.',
        status: 'published',
        created_at: '2024-01-15',
        author: 'John Smith',
        views: 1247,
        category: 'Industry Trends'
    },
    {
        id: 2,
        title: 'How to Improve Guest Experience in Hotels',
        description: 'Learn effective strategies to enhance guest satisfaction and create memorable experiences that lead to repeat bookings and positive reviews.',
        status: 'published',
        created_at: '2024-01-12',
        author: 'Sarah Johnson',
        views: 892,
        category: 'Guest Services'
    },
    {
        id: 3,
        title: 'Financial Management Best Practices for Property Owners',
        description: 'Essential financial management tips and tools that every property owner should implement to maximize profitability and minimize risks.',
        status: 'draft',
        created_at: '2024-01-10',
        author: 'Mike Davis',
        views: 0,
        category: 'Financial Management'
    },
    {
        id: 4,
        title: 'Maintenance Scheduling: A Complete Guide',
        description: 'Comprehensive guide to creating and maintaining an effective maintenance schedule for your properties to prevent costly repairs.',
        status: 'published',
        created_at: '2024-01-08',
        author: 'Lisa Wilson',
        views: 567,
        category: 'Maintenance'
    },
    {
        id: 5,
        title: 'Digital Marketing Strategies for Property Management',
        description: 'Modern digital marketing techniques specifically designed for property management businesses to attract more clients and increase bookings.',
        status: 'archived',
        created_at: '2024-01-05',
        author: 'David Brown',
        views: 234,
        category: 'Marketing'
    },
    {
        id: 6,
        title: 'Sustainability in Property Management',
        description: 'How to implement eco-friendly practices in your property management operations while reducing costs and attracting environmentally conscious clients.',
        status: 'published',
        created_at: '2024-01-03',
        author: 'Emma Thompson',
        views: 445,
        category: 'Sustainability'
    }
];

export default function Blog() {
    const { t } = useTranslation();
    const handleEditPost = (postId: number) => {
        console.log('Edit blog post:', postId);
        // Add edit logic here
    };

    const handleViewPost = (postId: number) => {
        console.log('View blog post:', postId);
        // Add view logic here
    };

    const handleExternalLink = (postId: number) => {
        console.log('Open external link for post:', postId);
        // Add external link logic here
    };

    const handleDeletePost = (postId: number) => {
        console.log('Delete blog post:', postId);
        // Add delete logic here
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'published':
                return 'bg-green-100 text-green-800 border-green-200';
            case 'draft':
                return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            case 'archived':
                return 'bg-gray-100 text-gray-800 border-gray-200';
            default:
                return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    const getStatusCount = (status: string) => {
        return blogPosts.filter(post => post.status === status).length;
    };

    const getTotalViews = () => {
        return blogPosts.reduce((sum, post) => sum + (post.views || 0), 0);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={t('dashboard.blog')} />
            <div className="flex-1 space-y-6 p-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">{t('dashboard.blog')}</h1>
                        <p className="text-muted-foreground">
                            {t('dashboard.manageBlogPosts')}
                        </p>
                    </div>
                    <Button className="flex items-center gap-2">
                        <Plus className="h-4 w-4" />
                        {t('dashboard.newPost')}
                    </Button>
                </div>

                {/* Stats Cards */}
                <div className="grid gap-4 md:grid-cols-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{t('dashboard.totalPosts')}</CardTitle>
                            <FileText className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{blogPosts.length}</div>
                            <p className="text-xs text-muted-foreground">
                                +2 {t('dashboard.fromLastMonth')}
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{t('dashboard.published')}</CardTitle>
                            <CheckCircle className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{getStatusCount('published')}</div>
                            <p className="text-xs text-muted-foreground">
                                {t('dashboard.livePosts')}
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{t('dashboard.totalViews')}</CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{getTotalViews().toLocaleString()}</div>
                            <p className="text-xs text-muted-foreground">
                                {t('dashboard.inProgress')}
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{t('dashboard.drafts')}</CardTitle>
                            <XCircle className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{getStatusCount('draft')}</div>
                            <p className="text-xs text-muted-foreground">
                                {t('dashboard.fromLastMonth')}
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Blog Management */}
                <Card>
                    <CardHeader>
                        <CardTitle>{t('dashboard.blogPostManagement')}</CardTitle>
                        <CardDescription>
                            {t('dashboard.createEditManage')}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    placeholder={t('dashboard.searchBlogPosts')}
                                    className="pl-10"
                                />
                            </div>
                            <Button variant="outline" className="flex items-center gap-2">
                                <Filter className="h-4 w-4" />
                                {t('dashboard.filter')}
                            </Button>
                        </div>

                        {/* Blog Posts Table */}
                        <div className="rounded-md border">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>{t('dashboard.id')}</TableHead>
                                        <TableHead>{t('dashboard.title')}</TableHead>
                                        <TableHead>{t('dashboard.description')}</TableHead>
                                        <TableHead>{t('dashboard.status')}</TableHead>
                                        <TableHead>{t('dashboard.views')}</TableHead>
                                        <TableHead>{t('dashboard.created')}</TableHead>
                                        <TableHead>{t('dashboard.actions')}</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {blogPosts.map((post) => (
                                        <TableRow key={post.id} className="hover:bg-muted/50">
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                                        <FileText className="h-4 w-4 text-primary" />
                                                    </div>
                                                    <span className="font-medium">#{post.id}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="space-y-1">
                                                    <div className="font-medium">{post.title}</div>
                                                    <div className="flex items-center gap-2">
                                                        <Badge variant="secondary" className="text-xs">
                                                            Blog Post
                                                        </Badge>
                                                        <Badge className={`text-xs ${getStatusColor(post.status || 'draft')}`}>
                                                            {(post.status || 'draft').charAt(0).toUpperCase() + (post.status || 'draft').slice(1)}
                                                        </Badge>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="max-w-xs">
                                                    <p className="text-sm text-muted-foreground line-clamp-2">
                                                        {post.description}
                                                    </p>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <Badge className={`text-xs ${getStatusColor(post.status || 'draft')}`}>
                                                    {(post.status || 'draft').charAt(0).toUpperCase() + (post.status || 'draft').slice(1)}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <Eye className="h-4 w-4 text-muted-foreground" />
                                                    <span className="font-medium">{post.views}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <Calendar className="h-4 w-4 text-muted-foreground" />
                                                    <span className="text-sm">{post.created_at}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <Button 
                                                        variant="ghost" 
                                                        size="sm"
                                                        className="h-8 w-8 p-0"
                                                        onClick={() => handleEditPost(post.id)}
                                                    >
                                                        <Edit className="h-4 w-4" />
                                                    </Button>
                                                    <Button 
                                                        variant="ghost" 
                                                        size="sm"
                                                        className="h-8 w-8 p-0"
                                                        onClick={() => handleViewPost(post.id)}
                                                    >
                                                        <Eye className="h-4 w-4" />
                                                    </Button>
                                                    <Button 
                                                        variant="ghost" 
                                                        size="sm"
                                                        className="h-8 w-8 p-0"
                                                        onClick={() => handleExternalLink(post.id)}
                                                    >
                                                        <ExternalLink className="h-4 w-4" />
                                                    </Button>
                                                    <Button 
                                                        variant="ghost" 
                                                        size="sm"
                                                        className="h-8 w-8 p-0 text-red-600 hover:text-red-800 hover:bg-red-50"
                                                        onClick={() => handleDeletePost(post.id)}
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