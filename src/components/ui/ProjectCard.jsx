import { useRef, useState } from "react";
import Badge from "./Badge";
import Button from "./Button";

const ProjectCard = ({ project }) => {
  const isComingSoon = project.status === 'coming-soon';
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="bg-muted/5 dark:bg-muted/10 border border-muted/20 rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 group relative"
    >
      {/* Spotlight Hover Effect */}
      {isHovering && (
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100 z-30"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 85, 247, 0.15), transparent 40%)`,
          }}
        />
      )}

      <div className="h-48 bg-muted/10 relative overflow-hidden flex items-center justify-center relative z-10">
        {project.thumbnail ? (
          <img 
            src={project.thumbnail} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <span className="text-muted text-lg font-medium tracking-wider uppercase opacity-50 group-hover:opacity-100 transition-opacity">
            {project.title}
          </span>
        )}
        
        {isComingSoon && (
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center">
            <span className="font-bold text-lg tracking-widest text-text">COMING SOON</span>
          </div>
        )}
      </div>
      
      <div className="p-6 relative z-10">
        <h3 className="text-xl font-bold text-text mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="text-muted mb-6 text-sm line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack?.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
        
        <div className="flex gap-3">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1"
            disabled={isComingSoon}
            onClick={() => !isComingSoon && window.open(project.githubUrl, '_blank')}
          >
            Code
          </Button>
          <Button 
            size="sm" 
            className="flex-1"
            disabled={isComingSoon}
            onClick={() => !isComingSoon && window.open(project.liveDemoUrl, '_blank')}
          >
            Live Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
