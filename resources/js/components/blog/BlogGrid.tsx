import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
};

type BlogGridProps = {
  posts: BlogPost[];
};

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const BlogGrid: React.FC<BlogGridProps> = ({ posts }) => {
  return (
    <section className="bg-card py-12 rounded-3xl overflow-hidden w-full shadow-2xl px-6 mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article key={post.id} className="feature-card bg-white rounded-2xl shadow-md border border-border overflow-hidden hover:shadow-xl transition-all flex flex-col">
            <div className="aspect-video bg-gray-200">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center space-x-2 mb-3">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                  {post.category}
                </span>
              </div>
              <h2 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">
                {post.title}
              </h2>
              <p className="text-muted-foreground mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-sm font-medium text-foreground">
                  By {post.author}
                </span>
                <a
                  href={`#`}
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm group"
                >
                  Read more
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
      {/* Load More Button */}
      <div className="text-center mt-12">
        <button className="gradient-btn primary-btn">
          Load More Articles
        </button>
      </div>
    </section>
  );
};

export default BlogGrid; 