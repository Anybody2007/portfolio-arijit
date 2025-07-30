import { ArrowDown, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useData } from '@/hooks/useData';

const Hero = () => {
  const { data, loading } = useData();

  if (loading || !data)
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='text-primary'>Loading...</div>
      </div>
    );
  return (
    <section className='min-h-screen flex items-center justify-center relative overflow-hidden'>
      <div className='absolute inset-0 bg-gradient-to-br from-tech-primary/10 via-background to-tech-secondary/10' />

      <div className='container mx-auto px-4 relative z-10'>
        <div className='text-center max-w-4xl mx-auto'>
          <div className='mb-8 relative'>
            <div className='w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-tech-primary to-tech-secondary p-1 mb-6'>
              <div className='w-full h-full rounded-full bg-background flex items-center justify-center text-4xl font-bold text-primary'>
                <img
                  src='/assets/arijit-sarkar.webp'
                  alt='profile-img'
                  className='rounded-full'
                />
              </div>
            </div>
            <h1 className='text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-tech-primary to-tech-secondary bg-clip-text text-transparent'>
              {data.personal.name}
            </h1>
            <p className='text-xl md:text-2xl text-muted-foreground mb-6'>
              {data.personal.title}
            </p>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto mb-8'>
              {data.personal.description}
            </p>
          </div>

          <div className='flex justify-center space-x-6 mb-12'>
            <Button
              onClick={() => {
                window.open(data.socialMedia.github, '_blank');
              }}
              variant='ghost'
              size='icon'
              className='hover:text-primary hover:scale-110 transition-all'
            >
              <Github className='w-6 h-6' />
            </Button>
            <Button
              onClick={() => {
                window.open(data.socialMedia.linkedin, '_blank');
              }}
              variant='ghost'
              size='icon'
              className='hover:text-primary hover:scale-110 transition-all'
            >
              <Linkedin className='w-6 h-6' />
            </Button>
            <Button
              onClick={() => {
                window.open(data.socialMedia.twitter, '_blank');
              }}
              variant='ghost'
              size='icon'
              className='hover:text-primary hover:scale-110 transition-all'
            >
              <Twitter className='w-6 h-6' />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
