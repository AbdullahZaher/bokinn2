import React from 'react';

const BlogHero: React.FC = () => {
  // Replace with useTranslation if needed
  return (
    <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 to-chart-3/10 py-20 mb-10 shadow-2xl">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 w-[60vw] h-[30vw] -translate-x-1/2 bg-gradient-to-r from-primary/20 to-chart-3/10 blur-2xl rounded-full" />
      </div>
      <div className="relative z-10 text-center max-w-3xl mx-auto mt-20">
        <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl mb-4">
          Property Management Blog
        </h1>
        <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
          Insights, tips, and best practices for property managers and real estate professionals.
        </p>
      </div>
    </section>
  );
};

export default BlogHero; 