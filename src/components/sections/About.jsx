import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import SectionTitle from '../ui/SectionTitle';
import profileImg from '../../assets/my.webp';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="About Me" subtitle="Get to know me better" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-4xl mx-auto bg-muted/5 dark:bg-muted/10 border border-muted/20 p-6 sm:p-8 md:p-12 rounded-3xl backdrop-blur-sm"
        >
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">

            <div className="relative group w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 shrink-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-[2rem] blur-xl opacity-20 group-hover:opacity-60 transition-opacity duration-700 animate-pulse"></div>

              <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-2 border-primary/20 bg-muted/10 group-hover:border-primary/60 transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl group-hover:shadow-primary/30 z-10">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 ease-out"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 text-center md:text-left">
              <p className="text-base sm:text-lg text-muted leading-relaxed">
                {portfolioData.about.description}
              </p>

              {portfolioData.about.techStack && (
                <div className="mt-4 text-left">
                  <h3 className="text-xl font-bold text-text mb-4 text-center md:text-left">Skills & Expertise</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {portfolioData.about.techStack.map((stack, idx) => (
                      <div key={idx}>
                        <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3 text-center md:text-left">{stack.category}</h4>
                        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                          {stack.items.map((item, index) => (
                            <span key={index} className="px-3 py-1 bg-muted/10 text-text border border-muted/20 rounded-lg text-sm font-medium transition-colors hover:border-primary/50">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
