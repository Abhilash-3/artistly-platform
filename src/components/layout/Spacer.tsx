import { cn } from '@/lib/utils';

interface SpacerProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  responsive?: {
    sm?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    md?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    lg?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  };
  className?: string;
}

const spacingClasses = {
  xs: 'h-2',
  sm: 'h-4',
  md: 'h-8',
  lg: 'h-12',
  xl: 'h-16',
  '2xl': 'h-24'
};

export default function Spacer({ 
  size = 'md', 
  responsive, 
  className 
}: SpacerProps) {
  let classes = spacingClasses[size];
  
  if (responsive) {
    if (responsive.sm) classes += ` sm:${spacingClasses[responsive.sm]}`;
    if (responsive.md) classes += ` md:${spacingClasses[responsive.md]}`;
    if (responsive.lg) classes += ` lg:${spacingClasses[responsive.lg]}`;
  }
  
  return <div className={cn(classes, className)} />;
}
