import React from 'react';

type BlogPaginationProps = {
  current: number;
  total: number;
  onPageChange: (page: number) => void;
};

const BlogPagination: React.FC<BlogPaginationProps> = ({ current, total, onPageChange }) => {
  return (
    <section className="flex justify-center mb-10">
      <nav className="inline-flex items-center gap-2 rounded-full bg-white shadow px-4 py-2 border border-border">
        <button
          className="px-3 py-1 rounded-full text-sm font-medium text-muted-foreground hover:bg-primary/10"
          onClick={() => onPageChange(current > 1 ? current - 1 : 1)}
          disabled={current === 1}
          aria-label="Previous page"
        >
          &lt;
        </button>
        <span className="px-3 py-1 text-sm font-medium text-foreground">
          Page {current} of {total}
        </span>
        <button
          className="px-3 py-1 rounded-full text-sm font-medium text-muted-foreground hover:bg-primary/10"
          onClick={() => onPageChange(current < total ? current + 1 : total)}
          disabled={current === total}
          aria-label="Next page"
        >
          &gt;
        </button>
      </nav>
    </section>
  );
};

export default BlogPagination; 