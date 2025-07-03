import React from 'react';

const NewsletterSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-primary/10 to-chart-3/10 rounded-3xl shadow-md border border-border p-6 flex flex-col items-center">
      <h3 className="text-lg font-bold mb-2 text-foreground">Subscribe to our Newsletter</h3>
      <p className="text-sm text-muted-foreground mb-4 text-center">Get the latest blog updates and property management tips delivered to your inbox.</p>
      <form className="w-full flex flex-col gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full rounded-full border border-border px-4 py-2 text-sm bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
        <button type="submit" className="gradient-btn primary-btn w-full">
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default NewsletterSection; 