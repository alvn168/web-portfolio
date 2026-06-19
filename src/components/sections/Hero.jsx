import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { portfolioData } from '../../data/portfolioData';
import Button from '../ui/Button';

const Hero = () => {
  const { hero } = portfolioData;
  
  return (
    <section id="home" className="py-20 md:py-32 min-h-[90vh] flex items-center relative overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-primary/30 rounded-full mix-blend-multiply dark:mix-blend-screen blur-[100px] animate-pulse-slow pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-accent/30 rounded-full mix-blend-multiply dark:mix-blend-screen blur-[100px] animate-pulse-slow pointer-events-none" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h2 className="text-primary font-bold text-lg sm:text-xl mb-3 sm:mb-4">{hero.greeting}</h2>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-text mb-4 sm:mb-6 flex flex-wrap items-center gap-2 sm:gap-3 leading-tight">
            I'm 
            <span className="flex items-center gap-1">
              <span className="text-text">Sep</span>
              <span className="text-primary">Tada</span>
            </span>
          </h1>
          <div className="h-8 sm:h-10 md:h-12 mb-4 sm:mb-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl text-muted font-medium">
              <TypeAnimation
                sequence={hero.titles.flatMap(title => [title, 2000])}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h3>
          </div>
          <p className="text-base sm:text-lg text-muted mb-8 sm:mb-10 max-w-2xl leading-relaxed">
            {hero.description}
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <Button onClick={() => window.location.href = '#projects'}>
              View Projects
            </Button>
            <Button variant="outline" onClick={() => window.location.href = '#contact'}>
              Contact Me
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
