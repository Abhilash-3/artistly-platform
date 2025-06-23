import { cn } from '@/lib/utils';
import Container from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  background?: 'white' | 'gray' | 'primary' | 'transparent';
}

const paddingClasses = {
  none: '',
  sm: 'py-8',
  md: 'py-12',
  lg: 'py-16',
  xl: 'py-24'
};

const backgroundClasses = {
  white: 'bg-white',
  gray: 'bg-gray-50',
  primary: 'bg-primary text-primary-foreground',
  transparent: 'bg-transparent'
};

export default function Section({ 
  children, 
  className,
  containerSize = 'lg',
  padding = 'md',
  background = 'transparent'
}: SectionProps) {
  return (
    <section className={cn(
      paddingClasses[padding],
      backgroundClasses[background],
      className
    )}>
      <Container size={containerSize}>
        {children}
      </Container>
    </section>
  );
}
