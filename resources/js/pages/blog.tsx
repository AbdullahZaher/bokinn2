import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { PublicNavbar } from '@/components/public/public-navbar';
import { PublicFooter } from '@/components/public/public-footer';
import BlogHero from '@/components/blog/BlogHero';
import FeaturedArticle from '@/components/blog/FeaturedArticle';
import BlogContentFilter from '@/components/blog/BlogContentFilter';
import BlogGrid from '@/components/blog/BlogGrid';
import BlogPagination from '@/components/blog/BlogPagination';
import MostViewedBlogs from '@/components/blog/MostViewedBlogs';
import NewsletterSection from '@/components/blog/NewsletterSection';

// Dummy data (replace with real data or props as needed)
const blogPosts = [
  {
    id: 1,
    title: '10 Essential Property Management Tips for 2024',
    excerpt: 'Discover the latest strategies and best practices for effective property management in the new year.',
    author: 'Sarah Johnson',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Property Management',
    image: '/api/placeholder/400/250',
  },
  // ... more posts ...
];
const featuredArticle = blogPosts[0];
const categories = ['All', 'Property Management', 'Revenue Optimization', 'Technology', 'Tenant Relations', 'Maintenance', 'Legal'];
const sortOptions = ['Latest', 'Popular'];
const mostViewed = [
  {
    id: 101,
    title: 'How to Boost Your Hotel Bookings in 2024',
    date: '2024-05-01',
    image: '/api/placeholder/400/250',
  },
  // ... more ...
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedSort, setSelectedSort] = useState(sortOptions[0]);
  const [page, setPage] = useState(1);
  const totalPages = 8;

  return (
    <>
      <Head title="Blog - Bokinn" />
      <div className="min-h-screen antialiased bg-gradient-to-br from-[#f3f4f6] to-[#ede9fe]">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <PublicNavbar />
          </div>
          <main className="w-full mt-10">
          <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <BlogHero />
            </div>
            <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8">
              {/* Main Content */}
              <div className="flex-1 min-w-0">
                <FeaturedArticle article={featuredArticle} />
                <BlogContentFilter
                  categories={categories}
                  selectedCategory={selectedCategory}
                  onCategoryChange={setSelectedCategory}
                  sortOptions={sortOptions}
                  selectedSort={selectedSort}
                  onSortChange={setSelectedSort}
                />
                <BlogGrid posts={blogPosts} />
                <BlogPagination current={page} total={totalPages} onPageChange={setPage} />
              </div>
              {/* Sidebar */}
              <aside className="w-full lg:w-80 flex flex-col gap-8">
                <MostViewedBlogs blogs={mostViewed} />
                <NewsletterSection />
              </aside>
            </div>
          </main>
          <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <PublicFooter />
          </div>
        </div>
      </div>
    </>
  );
} 