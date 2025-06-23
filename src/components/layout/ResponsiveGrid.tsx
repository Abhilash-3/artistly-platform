import { cn } from '@/lib/utils';

interface ResponsiveGridProps {
  children: React.ReactNode;
  className?: string;
  cols?: {
    default?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function ResponsiveGrid({ 
  children, 
  className,
  cols = { default: 1, sm: 2, lg: 3 },
  gap = 'md'
}: ResponsiveGridProps) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-2', 
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6'
  };

  const gridGaps = {
    sm: 'gap-3',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-12'
  };

  const getGridClasses = () => {
    let classes = 'grid';
    
    if (cols.default) classes += ` ${gridCols[cols.default as keyof typeof gridCols]}`;
    if (cols.sm) classes += ` sm:${gridCols[cols.sm as keyof typeof gridCols]}`;
    if (cols.md) classes += ` md:${gridCols[cols.md as keyof typeof gridCols]}`;
    if (cols.lg) classes += ` lg:${gridCols[cols.lg as keyof typeof gridCols]}`;
    if (cols.xl) classes += ` xl:${gridCols[cols.xl as keyof typeof gridCols]}`;
    
    classes += ` ${gridGaps[gap]}`;
    
    return classes;
  };

  return (
    <div className={cn(getGridClasses(), className)}>
      {children}
    </div>
  );
}
