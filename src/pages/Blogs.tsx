import Navigation from '@/components/Navigation';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useData } from '@/hooks/useData';

const Blogs = () => {
  const { data, loading } = useData();

  if (loading || !data)
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='text-primary'>Loading...</div>
      </div>
    );

  return (
    <div className='min-h-screen'>
      <Navigation />

      <div className='pt-16'>
        <section className='py-20'>
          <div className='container mx-auto px-4'>
            <div className='text-center mb-16'>
              <h1 className='text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-tech-primary to-tech-secondary bg-clip-text text-transparent'>
                Technical Blog
              </h1>
              <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
                Sharing insights, experiences, and best practices in network
                engineering, cloud infrastructure, and emerging technologies.
              </p>
            </div>

            {/* Featured Post */}
            {data.blogPosts
              .filter((post) => post.featured)
              .map((post, index) => (
                <div key={index} className='mb-16'>
                  <div className='bg-gradient-to-r from-tech-primary/10 to-tech-secondary/10 p-8 rounded-lg border border-primary/20 mb-8'>
                    <div className='max-w-4xl mx-auto'>
                      <span className='inline-block bg-primary text-primary-foreground text-sm px-3 py-1 rounded mb-4'>
                        Featured Post
                      </span>
                      <h2 className='text-3xl md:text-4xl font-bold mb-4 hover:text-primary transition-colors cursor-pointer'>
                        {post.title}
                      </h2>
                      <p className='text-lg text-muted-foreground mb-6'>
                        {post.excerpt}
                      </p>

                      <div className='flex flex-wrap items-center gap-4 mb-6'>
                        <div className='flex items-center text-muted-foreground'>
                          <Calendar className='w-4 h-4 mr-2' />
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </div>
                        <div className='flex items-center text-muted-foreground'>
                          <Clock className='w-4 h-4 mr-2' />
                          {post.readTime}
                        </div>
                        <span className='bg-primary/10 text-primary text-sm px-2 py-1 rounded'>
                          {post.category}
                        </span>
                      </div>
                      <a href={post.link} target='_blank'>
                        <Button className='group'>
                          Read Full Article
                          <ArrowRight className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform' />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}

            {/* Blog Posts Grid */}
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {data.blogPosts
                .filter((post) => !post.featured)
                .map((post, index) => (
                  <article
                    key={index}
                    className='bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group cursor-pointer'
                  >
                    <div className='mb-4'>
                      <span className='inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded mb-3'>
                        {post.category}
                      </span>
                      <h3 className='text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2'>
                        {post.title}
                      </h3>
                      <p className='text-muted-foreground mb-4 line-clamp-3'>
                        {post.excerpt}
                      </p>
                    </div>

                    <div className='flex flex-wrap gap-2 mb-4'>
                      {post.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className='bg-tech-surface text-xs px-2 py-1 rounded text-muted-foreground'
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className='flex items-center justify-between pt-4 border-t border-border'>
                      <div className='flex items-center space-x-4 text-sm text-muted-foreground'>
                        <div className='flex items-center'>
                          <Calendar className='w-3 h-3 mr-1' />
                          {new Date(post.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                          })}
                        </div>
                        <div className='flex items-center'>
                          <Clock className='w-3 h-3 mr-1' />
                          {post.readTime}
                        </div>
                      </div>
                      <a href={post.link} target='_blank'>
                        <ArrowRight className='w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all' />
                      </a>
                    </div>
                  </article>
                ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blogs;
