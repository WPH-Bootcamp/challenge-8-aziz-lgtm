import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg' | 'none';
  variant?: 'default' | 'dark' | 'bordered';
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false,
  padding = 'md',
  variant = 'default',
}) => {
  const baseStyles = 'rounded-xl transition-all duration-300';

  const variantStyles: Record<string, string> = {
    default: 'bg-gray-900 border border-gray-800',
    dark: 'bg-gray-950 border border-gray-800',
    bordered: 'bg-gray-900 border border-gray-700 hover:border-orange-500',
  };

  const paddingStyles: Record<string, string> = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const hoverStyles = hover
    ? 'hover:border-orange-500/60 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/10 cursor-pointer'
    : '';

  const cardClasses = [
    baseStyles,
    variantStyles[variant],
    paddingStyles[padding],
    hoverStyles,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <div className={cardClasses}>{children}</div>;
};

export default Card;