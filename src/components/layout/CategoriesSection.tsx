import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Mic, Music, Users, Volume2, Zap, Heart } from 'lucide-react';

const categories = [
  {
    id: 'singers',
    name: 'Singers',
    description: 'Professional vocalists for all genres',
    icon: Mic,
    count: '150+ Artists',
    color: 'bg-pink-50 text-pink-600',
  },
  {
    id: 'dancers',
    name: 'Dancers',
    description: 'Classical, contemporary & cultural dancers',
    icon: Heart,
    count: '120+ Artists',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    id: 'djs',
    name: 'DJs',
    description: 'Electronic music & party specialists',
    icon: Music,
    count: '80+ Artists',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    id: 'speakers',
    name: 'Speakers',
    description: 'Motivational & corporate speakers',
    icon: Volume2,
    count: '60+ Artists',
    color: 'bg-green-50 text-green-600',
  },
  {
    id: 'performers',
    name: 'Performers',
    description: 'Multi-talented entertainment artists',
    icon: Zap,
    count: '90+ Artists',
    color: 'bg-orange-50 text-orange-600',
  },
  {
    id: 'bands',
    name: 'Bands',
    description: 'Musical groups & orchestras',
    icon: Users,
    count: '40+ Groups',
    color: 'bg-indigo-50 text-indigo-600',
  },
];

export default function CategoriesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Browse by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover talented artists across different categories. 
            Find the perfect performer for your event.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.id} 
                className="hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
              >
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex p-4 rounded-full ${category.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {category.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {category.description}
                  </p>
                  
                  <div className="text-sm font-medium text-primary mb-4">
                    {category.count}
                  </div>
                  
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                  >
                    <Link href={`/artists?category=${category.id}`}>
                      Explore {category.name}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button asChild size="lg" className="px-8">
            <Link href="/artists">
              View All Artists
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
