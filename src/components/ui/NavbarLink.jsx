const NavbarLink = ({ href, label, isActive, onClick }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group overflow-hidden ${
        isActive 
          ? "bg-primary/10 text-primary" 
          : "text-muted hover:text-text hover:bg-muted/10"
      }`}
    >
      <span className="relative z-10">{label}</span>
      <span className="absolute inset-0 bg-primary/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
    </a>
  );
};

export default NavbarLink;
