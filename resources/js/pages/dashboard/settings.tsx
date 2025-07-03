import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';
import { 
    Bolt, 
    Building2,
    Phone,
    MessageCircle,
    Save,
    Globe,
    Mail,
    MapPin
} from 'lucide-react';

// Type definitions
interface BasicInfo {
    system_name: string;
    system_description: string;
    timezone: string;
    language: string;
    currency: string;
}

interface ContactMethods {
    email: string;
    phone: string;
    address: string;
    website: string;
}

interface WhatsAppService {
    enabled: boolean;
    api_key: string;
    phone_number: string;
    webhook_url: string;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
    {
        title: 'Settings',
        href: '/dashboard/settings',
    },
];

// Mock data for demonstration
const basicInfo: BasicInfo = {
    system_name: 'Bokinn Property Management',
    system_description: 'Comprehensive property management system for hotels and resorts',
    timezone: 'UTC+3',
    language: 'en',
    currency: 'USD'
};

const contactMethods: ContactMethods = {
    email: 'contact@bokinn.com',
    phone: '+1 (555) 123-4567',
    address: '123 Business Street, City, Country',
    website: 'https://bokinn.com'
};

const whatsappService: WhatsAppService = {
    enabled: true,
    api_key: 'sk-1234567890abcdef',
    phone_number: '+1 (555) 123-4567',
    webhook_url: 'https://api.bokinn.com/webhook/whatsapp'
};

export default function Settings() {
    const { t } = useTranslation();
    
    const handleSaveBasicInfo = () => {
        console.log('Saving basic info...');
        // Add save logic here
    };

    const handleSaveContactMethods = () => {
        console.log('Saving contact methods...');
        // Add save logic here
    };

    const handleSaveWhatsappService = () => {
        console.log('Saving WhatsApp service...');
        // Add save logic here
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={t('dashboard.settings')} />
            <div className="flex-1 space-y-6 p-6">
                {/* Header Section */}
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">{t('dashboard.settings')}</h1>
                        <p className="text-muted-foreground mt-1">
                            {t('dashboard.configureSystemSettings')}
                        </p>
                    </div>
                    
                    <div className="flex items-center gap-2">
                        <Bolt className="h-5 w-5 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{t('dashboard.configuration')}</span>
                    </div>
                </div>

                {/* Settings Overview */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{t('dashboard.configuration')}</CardTitle>
                            <Bolt className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-green-600">✓</div>
                            <p className="text-xs text-muted-foreground">
                                {t('dashboard.configured')}
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{t('dashboard.basicInfo')}</CardTitle>
                            <Building2 className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-blue-600">✓</div>
                            <p className="text-xs text-muted-foreground">
                                {t('dashboard.available')}
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{t('dashboard.contactMethods')}</CardTitle>
                            <Phone className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-blue-600">✓</div>
                            <p className="text-xs text-muted-foreground">
                                {t('dashboard.available')}
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{t('dashboard.whatsappService')}</CardTitle>
                            <MessageCircle className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-orange-600">⚙️</div>
                            <p className="text-xs text-muted-foreground">
                                {t('dashboard.configurable')}
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Settings Forms */}
                <div className="grid gap-6">
                    {/* Basic Information */}
                    <Card>
                        <CardHeader>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Building2 className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <CardTitle>{t('dashboard.basicInfo')}</CardTitle>
                                    <CardDescription>
                                        {t('dashboard.configureSystemName')}
                                    </CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="system_name">{t('dashboard.systemName')}</Label>
                                    <Input 
                                        id="system_name" 
                                        defaultValue={basicInfo.system_name}
                                        placeholder={t('dashboard.enterSystemName')}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="timezone">{t('dashboard.timezone')}</Label>
                                    <Select defaultValue={basicInfo.timezone}>
                                        <SelectTrigger>
                                            <SelectValue placeholder={t('dashboard.selectTimezone')} />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="UTC+0">UTC+0 (London)</SelectItem>
                                            <SelectItem value="UTC+1">UTC+1 (Paris)</SelectItem>
                                            <SelectItem value="UTC+2">UTC+2 (Cairo)</SelectItem>
                                            <SelectItem value="UTC+3">UTC+3 (Riyadh)</SelectItem>
                                            <SelectItem value="UTC+4">UTC+4 (Dubai)</SelectItem>
                                            <SelectItem value="UTC+5">UTC+5 (Tashkent)</SelectItem>
                                            <SelectItem value="UTC+8">UTC+8 (Beijing)</SelectItem>
                                            <SelectItem value="UTC-5">UTC-5 (New York)</SelectItem>
                                            <SelectItem value="UTC-8">UTC-8 (Los Angeles)</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="system_description">{t('dashboard.systemDescription')}</Label>
                                <Textarea 
                                    id="system_description" 
                                    defaultValue={basicInfo.system_description}
                                    placeholder={t('dashboard.enterSystemDescription')}
                                    rows={3}
                                />
                            </div>
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="language">{t('dashboard.language')}</Label>
                                    <Select defaultValue={basicInfo.language}>
                                        <SelectTrigger>
                                            <SelectValue placeholder={t('dashboard.selectLanguage')} />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="en">English</SelectItem>
                                            <SelectItem value="ar">العربية</SelectItem>
                                            <SelectItem value="fr">Français</SelectItem>
                                            <SelectItem value="es">Español</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="currency">{t('dashboard.currency')}</Label>
                                    <Select defaultValue={basicInfo.currency}>
                                        <SelectTrigger>
                                            <SelectValue placeholder={t('dashboard.selectCurrency')} />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="USD">USD ($)</SelectItem>
                                            <SelectItem value="EUR">EUR (€)</SelectItem>
                                            <SelectItem value="GBP">GBP (£)</SelectItem>
                                            <SelectItem value="SAR">SAR (ر.س)</SelectItem>
                                            <SelectItem value="AED">AED (د.إ)</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <Button onClick={handleSaveBasicInfo} className="flex items-center gap-2">
                                    <Save className="h-4 w-4" />
                                    {t('dashboard.saveBasicInfo')}
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Contact Methods */}
                    <Card>
                        <CardHeader>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                    <Phone className="h-5 w-5 text-blue-600" />
                                </div>
                                <div>
                                    <CardTitle>{t('dashboard.contactMethods')}</CardTitle>
                                    <CardDescription>
                                        {t('dashboard.configureContactInfo')}
                                    </CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="contact_email">{t('dashboard.emailAddress')}</Label>
                                    <div className="flex items-center gap-2">
                                        <Mail className="h-4 w-4 text-muted-foreground" />
                                        <Input 
                                            id="contact_email" 
                                            defaultValue={contactMethods.email}
                                            placeholder={t('dashboard.enterEmailAddress')}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="contact_phone">{t('dashboard.phoneNumber')}</Label>
                                    <div className="flex items-center gap-2">
                                        <Phone className="h-4 w-4 text-muted-foreground" />
                                        <Input 
                                            id="contact_phone" 
                                            defaultValue={contactMethods.phone}
                                            placeholder={t('dashboard.enterPhoneNumber')}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="contact_address">{t('dashboard.address')}</Label>
                                <div className="flex items-center gap-2">
                                    <MapPin className="h-4 w-4 text-muted-foreground" />
                                    <Input 
                                        id="contact_address" 
                                        defaultValue={contactMethods.address}
                                        placeholder={t('dashboard.enterBusinessAddress')}
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="contact_website">{t('dashboard.website')}</Label>
                                <div className="flex items-center gap-2">
                                    <Globe className="h-4 w-4 text-muted-foreground" />
                                    <Input 
                                        id="contact_website" 
                                        defaultValue={contactMethods.website}
                                        placeholder={t('dashboard.enterWebsiteUrl')}
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <Button onClick={handleSaveContactMethods} className="flex items-center gap-2">
                                    <Save className="h-4 w-4" />
                                    {t('dashboard.saveContactMethods')}
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* WhatsApp Service */}
                    <Card>
                        <CardHeader>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                    <MessageCircle className="h-5 w-5 text-green-600" />
                                </div>
                                <div>
                                    <CardTitle>{t('dashboard.whatsappService')}</CardTitle>
                                    <CardDescription>
                                        {t('dashboard.configureWhatsappApi')}
                                    </CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label>{t('dashboard.enableWhatsappService')}</Label>
                                    <p className="text-sm text-muted-foreground">
                                        {t('dashboard.allowCustomersContact')}
                                    </p>
                                </div>
                                <Switch defaultChecked={whatsappService.enabled} />
                            </div>
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="space-y-2">
                                    <Label htmlFor="whatsapp_api_key">{t('dashboard.apiKey')}</Label>
                                    <Input 
                                        id="whatsapp_api_key" 
                                        defaultValue={whatsappService.api_key}
                                        placeholder={t('dashboard.enterWhatsappApiKey')}
                                        type="password"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="whatsapp_phone">{t('dashboard.phoneNumber')}</Label>
                                    <Input 
                                        id="whatsapp_phone" 
                                        defaultValue={whatsappService.phone_number}
                                        placeholder={t('dashboard.enterPhoneNumber')}
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="whatsapp_webhook">{t('dashboard.webhookUrl')}</Label>
                                <Input 
                                    id="whatsapp_webhook" 
                                    defaultValue={whatsappService.webhook_url}
                                    placeholder={t('dashboard.enterWebhookUrl')}
                                />
                            </div>
                            <div className="flex justify-end">
                                <Button onClick={handleSaveWhatsappService} className="flex items-center gap-2">
                                    <Save className="h-4 w-4" />
                                    {t('dashboard.saveWhatsappSettings')}
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AppLayout>
    );
} 