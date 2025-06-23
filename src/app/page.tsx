import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import ResponsiveGrid from '@/components/layout/ResponsiveGrid';
import Breakpoint from '@/components/layout/Breakpoint';
import Spacer from '@/components/layout/Spacer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Users, Calendar, Shield, ArrowRight, Play, Search, Heart, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const categories = [
    { name: 'Musicians', count: 150, image: '🎵', href: '/artists?category=musicians' },
    { name: 'Dancers', count: 89, image: '💃', href: '/artists?category=dancers' },
    { name: 'Comedians', count: 45, image: '😄', href: '/artists?category=comedians' },
    { name: 'Magicians', count: 32, image: '🎩', href: '/artists?category=magicians' },
    { name: 'Singers', count: 120, image: '🎤', href: '/artists?category=singers' },
    { name: 'DJs', count: 67, image: '🎧', href: '/artists?category=djs' },
  ];

  const features = [
    {
      icon: Users,
      title: 'Verified Artists',
      description: 'All artists are background-checked and verified for quality assurance.'
    },
    {
      icon: Calendar,
      title: 'Easy Booking',
      description: 'Simple booking process with instant confirmation and secure payments.'
    },
    {
      icon: Shield,
      title: 'Secure Platform',
      description: 'Your payments and personal information are protected with bank-level security.'
    }
  ];

  const steps = [
    {
      step: '01',
      title: 'Browse & Search',
      description: 'Explore our curated list of verified artists or search by category, location, and budget.',
      icon: Search
    },
    {
      step: '02', 
      title: 'Connect & Quote',
      description: 'Contact artists directly, discuss your requirements, and get personalized quotes.',
      icon: Heart
    },
    {
      step: '03',
      title: 'Book & Enjoy',
      description: 'Secure your booking with our safe payment system and enjoy your amazing event.',
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <Section background="gray" padding="xl">
        <div className="text-center">
          <Badge variant="secondary" className="mb-6">
            🎉 Over 500+ Artists Available
          </Badge>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Find Perfect Artists for
            <span className="text-primary block mt-2">Your Next Event</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto px-4">
            Connect with talented musicians, dancers, comedians, and performers. 
            Book verified artists for weddings, corporate events, and celebrations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 px-4">
            <Button size="lg" className="w-full sm:w-auto min-w-[200px]" asChild>
              <Link href="/artists">
                Browse Artists
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            
            <Breakpoint show="desktop">
              <Button variant="outline" size="lg" className="w-full sm:w-auto min-w-[200px]">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </Breakpoint>
          </div>
          
          {/* Hero Stats */}
          <ResponsiveGrid cols={{ default: 1, sm: 3 }} gap="md" className="max-w-2xl mx-auto">
            <div className="text-center py-4">
              <div className="text-2xl md:text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-gray-600">Verified Artists</div>
            </div>
            <div className="text-center py-4">
              <div className="text-2xl md:text-3xl font-bold text-primary">1000+</div>
              <div className="text-sm text-gray-600">Happy Events</div>
            </div>
            <div className="text-center py-4">
              <div className="text-2xl md:text-3xl font-bold text-primary">4.9★</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
          </ResponsiveGrid>
        </div>
      </Section>

      <Spacer size="lg" responsive={{ lg: 'xl' }} />

      {/* Categories Section */}
      <Section padding="lg">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Browse by Category
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Find the perfect entertainment for your event from our diverse range of talented artists
          </p>
        </div>

        <ResponsiveGrid cols={{ default: 2, md: 3, lg: 6 }} gap="md">
          {categories.map((category) => (
            <Link key={category.name} href={category.href}>
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl sm:text-4xl mb-3">{category.image}</div>
                  <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-500">{category.count} artists</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </ResponsiveGrid>
      </Section>

      <Spacer size="lg" responsive={{ lg: 'xl' }} />

      {/* How It Works Section */}
      <Section background="gray" padding="lg">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Book your perfect artist in just three simple steps
          </p>
        </div>

        <ResponsiveGrid cols={{ default: 1, md: 3 }} gap="lg">
          {steps.map((step, index) => (
            <div key={step.step} className="text-center relative">
              {/* Connection Line - Desktop Only */}
              <Breakpoint show="desktop">
                {index < steps.length - 1 && (
                  <div className="absolute top-12 left-1/2 w-full h-0.5 bg-gray-200 -z-10" />
                )}
              </Breakpoint>

              <div className="relative">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                  <step.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-xs font-bold text-primary border-2 border-primary">
                  {step.step}
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {step.description}
              </p>
            </div>
          ))}
        </ResponsiveGrid>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link href="/how-it-works">
              Learn More
            </Link>
          </Button>
        </div>
      </Section>

      <Spacer size="lg" responsive={{ lg: 'xl' }} />

      {/* Features Section */}
      <Section padding="lg">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Artistly?
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            We make finding and booking artists simple, safe, and reliable
          </p>
        </div>

        <ResponsiveGrid cols={{ default: 1, md: 3 }} gap="lg">
          {features.map((feature) => (
            <Card key={feature.title} className="border-0 shadow-sm">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </ResponsiveGrid>
      </Section>

      <Spacer size="lg" responsive={{ lg: 'xl' }} />

      {/* CTA Section */}
      <Section background="primary" padding="lg">
        <div className="text-center text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Ready to Find Your Perfect Artist?
          </h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of satisfied customers who found amazing artists for their events
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto min-w-[200px]" asChild>
              <Link href="/artists">
                Start Browsing
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            
            <Breakpoint show="desktop">
              <Button size="lg" variant="outline" className="w-full sm:w-auto min-w-[200px] text-white border-white hover:bg-white hover:text-primary">
                Join as Artist
              </Button>
            </Breakpoint>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
