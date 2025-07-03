import React from 'react';

const PricingHero: React.FC = () => {
  // Replace with useTranslation if needed
  return (
    <section className="relative w-full rounded-3xl overflow-hidden bg-secondary pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-48 lg:pb-32 shadow-2xl mb-10">
      {/* Gradient Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute left-[20%] top-1/4 h-[35rem] w-[35rem] rounded-full bg-primary/10 blur-[150px]" />
        <div className="absolute right-[20%] -top-10 h-[25rem] w-[25rem] rounded-full bg-chart-5/10 blur-[120px]" />
        <div className="absolute bottom-0 left-10 h-[30rem] w-[30rem] rounded-full bg-chart-3/10 blur-[130px]" />
      </div>
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
        <svg className="absolute right-0 top-0 h-[40rem] w-[40rem] translate-x-1/2 -translate-y-[10%] text-primary/20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="pricing-hero-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M.5 40V.5H40" fill="none" stroke="currentColor" strokeLinecap="square" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pricing-hero-pattern)" />
        </svg>
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl mb-6">
            Simple, transparent pricing
          </h1>
          <p className="text-lg sm:text-xl leading-8 text-muted-foreground">
            Choose the plan that fits your property management needs. All plans include a 14-day free trial with no credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingHero; 