import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import Section from '@/components/layout/Section';
import ResponsiveGrid from '@/components/layout/ResponsiveGrid';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Star, Users, Calendar, TrendingUp, Shield, Heart, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function JoinPage() {
  const benefits = [
    {
      icon: Users,
      title: 'Connect with Clients',
      description: 'Get discovered by event planners and clients looking for your talent.'
    },
    {
      icon: Calendar,
      title: 'Manage Bookings',
      description: 'Easy booking management system with calendar integration.'
    },
    {
      icon: TrendingUp,
      title: 'Grow Your Business',
      description: 'Build your reputation and grow your artist business with our platform.'
    },
    {
      icon: Shield,
      title: 'Secure Payments',
      description: 'Get paid safely and on time with our secure payment system.'
    }
  ];

  const steps = [
    {
      step: '1',
      title: 'Create Profile',
      description: 'Tell us about your talent, experience, and what makes you unique.'
    },
    {
      step: '2',
      title: 'Get Verified',
      description: 'Complete our verification process to build trust with clients.'
    },
    {
      step: '3',
      title: 'Start Earning',
      description: 'Receive booking requests and start performing at amazing events.'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      category: 'Classical Dancer',
      rating: 4.9,
      reviews: 89,
      quote: 'Artistly helped me connect with clients I never would have reached. My bookings increased by 300%!'
    },
    {
      name: 'Rahul Music',
      category: 'Musician',
      rating: 4.8,
      reviews: 156,
      quote: 'The platform is so easy to use and the payment system is reliable. Highly recommend!'
    },
    {
      name: 'Comedy Central',
      category: 'Comedian',
      rating: 4.7,
      reviews: 203,
      quote: 'Great way to showcase my work and get booked for corporate events and private parties.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <Section background="primary" padding="xl">
        <div className="text-center text-white">
          <Badge variant="secondary" className="mb-6 text-primary">
            🎭 Join 500+ Artists
          </Badge>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Turn Your Talent Into
            <span className="block mt-2">Your Business</span>
          </h1>
          
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join Artistly and connect with clients who are looking for exactly what you offer. 
            Start getting booked for events today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto min-w-[200px]" asChild>
              <Link href="/join/onboarding">
                Start Your Journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            
            <Button size="lg" variant="outline" className="w-full sm:w-auto min-w-[200px] text-white border-white hover:bg-white hover:text-primary">
              See Success Stories
            </Button>
          </div>
          
          {/* Quick Stats */}
          <ResponsiveGrid cols={{ default: 1, sm: 3 }} gap="md" className="max-w-2xl mx-auto">
            <div className="text-center py-4">
              <div className="text-2xl md:text-3xl font-bold">₹50L+</div>
              <div className="text-sm opacity-80">Earned by Artists</div>
            </div>
            <div className="text-center py-4">
              <div className="text-2xl md:text-3xl font-bold">1000+</div>
              <div className="text-sm opacity-80">Events Booked</div>
            </div>
            <div className="text-center py-4">
              <div className="text-2xl md:text-3xl font-bold">4.8★</div>
              <div className="text-sm opacity-80">Average Rating</div>
            </div>
          </ResponsiveGrid>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section padding="xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Artists Choose Artistly
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Everything you need to showcase your talent and grow your artist business
          </p>
        </div>

        <ResponsiveGrid cols={{ default: 1, md: 2, lg: 4 }} gap="lg">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="text-center border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </ResponsiveGrid>
      </Section>

      {/* How It Works */}
      <Section background="gray" padding="xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Get started in just three simple steps
          </p>
        </div>

        <ResponsiveGrid cols={{ default: 1, md: 3 }} gap="lg">
          {steps.map((step, index) => (
            <div key={step.step} className="text-center relative">
              {/* Connection Line - Desktop Only */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gray-200 -z-10" />
              )}

              <div className="relative">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                  <span className="text-white font-bold text-xl">{step.step}</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </ResponsiveGrid>

        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="/join/onboarding">
              Get Started Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Testimonials */}
      <Section padding="xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Hear from artists who are already growing their business with Artistly
          </p>
        </div>

        <ResponsiveGrid cols={{ default: 1, md: 3 }} gap="lg">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span className="font-bold text-primary">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.category}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                  <span className="font-medium text-sm">{testimonial.rating}</span>
                  <span className="text-gray-500 text-sm ml-1">
                    ({testimonial.reviews} reviews)
                  </span>
                </div>

                <p className="text-gray-600 italic">
                  "{testimonial.quote}"
                </p>
              </CardContent>
            </Card>
          ))}
        </ResponsiveGrid>
      </Section>

      {/* CTA Section */}
      <Section background="primary" padding="lg">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Artist Journey?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of artists who are already building successful careers on Artistly
          </p>
          
          <Button size="lg" variant="secondary" className="min-w-[200px]" asChild>
            <Link href="/join/onboarding">
              Join Now - It's Free
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
