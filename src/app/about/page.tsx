import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import Section from '@/components/layout/Section';

export default function AboutPage() {
  return (
    <div>
      <Navigation />
      <Section padding="xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-gray-600 mb-8">This page is coming soon!</p>
          <div className="text-sm text-gray-500">
            We'll build out our company story and mission here.
          </div>
        </div>
      </Section>
      <Footer />
    </div>
  );
}
