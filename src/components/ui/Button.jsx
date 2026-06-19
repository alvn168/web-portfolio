const Button = ({ children, variant = 'primary', className = '', disabled, ...props }) => {
  const baseClasses = 'inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:-translate-y-1';
  
  const variants = {
    primary: 'bg-primary text-text shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:bg-primary/90',
    secondary: 'bg-secondary text-text shadow-lg shadow-secondary/30 hover:shadow-secondary/50 hover:bg-secondary/90',
    outline: 'border-2 border-primary/50 text-text hover:border-primary hover:bg-primary/10',
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed transform-none hover:transform-none hover:shadow-none' : '';

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${disabledClasses} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
