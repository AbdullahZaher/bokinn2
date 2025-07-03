import React from 'react';

type MostViewedBlog = {
  id: number;
  title: string;
  date: string;
  image: string;
};

type MostViewedBlogsProps = {
  blogs: MostViewedBlog[];
};

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const MostViewedBlogs: React.FC<MostViewedBlogsProps> = ({ blogs }) => {
  return (
    <section className="bg-white rounded-3xl shadow-md border border-border p-6">
      <h3 className="text-lg font-bold mb-4 text-foreground">Most Viewed</h3>
      <ul className="space-y-4">
        {blogs.map((item) => (
          <li key={item.id} className="flex items-center gap-4">
            <img src={item.image} alt={item.title} className="w-16 h-16 rounded-xl object-cover" />
            <div>
              <h4 className="text-md font-semibold text-foreground line-clamp-2">{item.title}</h4>
              <span className="text-xs text-muted-foreground">{formatDate(item.date)}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MostViewedBlogs; 