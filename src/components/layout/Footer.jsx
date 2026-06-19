import { portfolioData } from '../../data/portfolioData';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-muted/10 bg-white/50 dark:bg-black/50 backdrop-blur-sm relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center text-muted text-sm">
          <h2 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            {portfolioData.site.name}
          </h2>
          <span className="hidden sm:inline text-muted/50">•</span>
          <p>Built with React & Tailwind CSS</p>
          <span className="hidden sm:inline text-muted/50">•</span>
          <p>&copy; {new Date().getFullYear()} {portfolioData.site.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
