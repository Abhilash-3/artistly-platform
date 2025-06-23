import { cn } from '@/lib/utils';

interface BreakpointProps {
  children: React.ReactNode;
  show?: 'sm' | 'md' | 'lg' | 'xl' | 'mobile' | 'desktop';
  hide?: 'sm' | 'md' | 'lg' | 'xl' | 'mobile' | 'desktop';
  className?: string;
}

const showClasses = {
  sm: 'hidden sm:block',
  md: 'hidden md:block', 
  lg: 'hidden lg:block',
  xl: 'hidden xl:block',
  mobile: 'block lg:hidden',
  desktop: 'hidden lg:block'
};

const hideClasses = {
  sm: 'sm:hidden',
  md: 'md:hidden',
  lg: 'lg:hidden', 
  xl: 'xl:hidden',
  mobile: 'lg:hidden',
  desktop: 'hidden lg:block'
};

export default function Breakpoint({ 
  children, 
  show, 
  hide, 
  className 
}: BreakpointProps) {
  let classes = '';
  
  if (show) classes += showClasses[show];
  if (hide) classes += ` ${hideClasses[hide]}`;
  
  return (
    <div className={cn(classes, className)}>
      {children}
    </div>
  );
}
