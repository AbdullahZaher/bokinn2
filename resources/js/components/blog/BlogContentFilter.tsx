import React from 'react';

type BlogContentFilterProps = {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (cat: string) => void;
  sortOptions: string[];
  selectedSort: string;
  onSortChange: (sort: string) => void;
};

const BlogContentFilter: React.FC<BlogContentFilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  sortOptions,
  selectedSort,
  onSortChange,
}) => {
  return (
    <section className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${selectedCategory === cat ? 'bg-primary text-primary-foreground border-primary shadow-md' : 'bg-white text-foreground border-border hover:bg-primary/10'}`}
            onClick={() => onCategoryChange(cat)}
            aria-pressed={selectedCategory === cat}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Sort by:</span>
        <select
          className="rounded-full border border-border px-4 py-2 text-sm bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
          value={selectedSort}
          onChange={e => onSortChange(e.target.value)}
        >
          {sortOptions.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>
    </section>
  );
};

export default BlogContentFilter; 