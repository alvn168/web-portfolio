import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import SectionTitle from '../ui/SectionTitle';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Get In Touch" subtitle="Let's work together" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-2xl mx-auto bg-muted/5 dark:bg-muted/10 border border-muted/20 p-6 sm:p-8 md:p-12 rounded-3xl backdrop-blur-sm"
        >
          <div className="mb-8 text-center">
            <p className="text-xl text-text font-medium mb-2">Have a question or want to work together?</p>
            <p className="text-muted">Currently looking for new opportunities and my inbox is always open.</p>
          </div>

          <div className="flex flex-col gap-4 mt-8">
            <a href={`mailto:${portfolioData.site.email}`} className="flex items-center p-4 border border-muted/20 rounded-xl hover:border-primary/50 hover:bg-primary/5 transition-all group overflow-hidden">
              <div className="w-12 h-12 shrink-0 bg-muted/10 rounded-full flex items-center justify-center text-text group-hover:bg-primary group-hover:text-white transition-all">
                <FiMail size={20} />
              </div>
              <div className="ml-4 overflow-hidden">
                <h4 className="text-lg font-bold text-text">Email</h4>
                <p className="text-muted truncate">{portfolioData.site.email}</p>
              </div>
            </a>

            <a href={portfolioData.site.github} target="_blank" rel="noopener noreferrer" className="flex items-center p-4 border border-muted/20 rounded-xl hover:border-primary/50 hover:bg-primary/5 transition-all group overflow-hidden">
              <div className="w-12 h-12 shrink-0 bg-muted/10 rounded-full flex items-center justify-center text-text group-hover:bg-primary group-hover:text-white transition-all">
                <FiGithub size={20} />
              </div>
              <div className="ml-4 overflow-hidden">
                <h4 className="text-lg font-bold text-text">Github</h4>
                <p className="text-muted truncate">alvn168</p>
              </div>
            </a>

            <a href={portfolioData.site.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center p-4 border border-muted/20 rounded-xl hover:border-primary/50 hover:bg-primary/5 transition-all group overflow-hidden">
              <div className="w-12 h-12 shrink-0 bg-muted/10 rounded-full flex items-center justify-center text-text group-hover:bg-primary group-hover:text-white transition-all">
                <FiLinkedin size={20} />
              </div>
              <div className="ml-4 overflow-hidden">
                <h4 className="text-lg font-bold text-text">LinkedIn</h4>
                <p className="text-muted truncate">Septada</p>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
