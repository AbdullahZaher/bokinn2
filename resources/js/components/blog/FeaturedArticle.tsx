import React from 'react';
import { ArrowRight } from 'lucide-react';

type FeaturedArticleProps = {
  article: {
    image: string;
    title: string;
    excerpt: string;
    date: string;
    author?: string;
  };
};

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const FeaturedArticle: React.FC<FeaturedArticleProps> = ({ article }) => {
  return (
    <section className="mb-10">
      <div className="rounded-3xl bg-gradient-to-br from-primary/10 to-chart-5/10 p-8 shadow-xl flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-1/2">
          <img src={article.image} alt="Featured" className="rounded-2xl w-full h-64 object-cover shadow-lg" />
        </div>
        <div className="w-full md:w-1/2">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary mb-4">
            Featured
          </span>
          <h2 className="text-3xl font-bold mb-3 text-foreground">
            {article.title}
          </h2>
          <p className="text-muted-foreground mb-4">
            {article.excerpt}
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <span>{formatDate(article.date)}</span>
            <span>•</span>
            <span>By {article.author || 'Admin'}</span>
          </div>
          <a href="#" className="inline-flex items-center text-primary font-medium text-base group">
            Read more
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticle; 