import Navigation from '@/components/Navigation';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { useData } from '@/hooks/useData';

const Certifications = () => {
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
                Certifications & Courses
              </h1>
              <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
                Professional certifications and continuous learning achievements
                that validate my expertise in network engineering, cloud
                technologies, and infrastructure management.
              </p>
            </div>

            {/* Certifications Grid */}
            <div className='max-w-6xl mx-auto'>
              <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {data.certifications.map((cert, index) => (
                  <div
                    key={index}
                    className='bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group'
                  >
                    <div className='flex items-start justify-between mb-4'>
                      <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center'>
                        <Award className='w-6 h-6 text-primary' />
                      </div>
                      {cert.link && (
                        <a href={cert.link} target='_blank'>
                          <ExternalLink className='w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors' />
                        </a>
                      )}
                    </div>

                    <h3 className='text-lg font-semibold mb-3 group-hover:text-primary transition-colors'>
                      {cert.name}
                    </h3>

                    <p className='text-muted-foreground mb-4 text-sm'>
                      Issued by {cert.issuer}
                    </p>

                    <div className='space-y-2 text-sm'>
                      <div className='flex items-center text-muted-foreground'>
                        <Calendar className='w-3 h-3 mr-2' />
                        Issued: {cert.date}
                      </div>

                      {cert.credentialId && (
                        <div className='text-xs text-muted-foreground'>
                          Credential ID: {cert.credentialId}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Certifications;
