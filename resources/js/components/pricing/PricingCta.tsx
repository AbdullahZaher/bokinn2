import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';

type PricingCtaProps = {
  title: string;
  subtitle: string;
  contactHref: string;
  featuresHref: string;
  contactLabel: string;
  featuresLabel: string;
};

const PricingCta: React.FC<PricingCtaProps> = ({ title, subtitle, contactHref, featuresHref, contactLabel, featuresLabel }) => {
  return (
    <section className="bg-card py-20 rounded-3xl mt-10 overflow-hidden w-full shadow-2xl px-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">{title}</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">{subtitle}</p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button size="lg" asChild>
            <Link href={contactHref}>{contactLabel}</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href={featuresHref}>{featuresLabel}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingCta; 