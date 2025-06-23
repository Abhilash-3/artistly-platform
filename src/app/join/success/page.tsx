import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import Section from '@/components/layout/Section';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Clock, Mail, Phone, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <Section padding="xl">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>

          {/* Success Message */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Application Submitted Successfully!
          </h1>
          
          <p className="text-lg text-gray-600 mb-8">
            Thank you for joining Artistly! Your application has been received and is now under review.
          </p>

          {/* Next Steps Card */}
          <Card className="text-left mb-8">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                What happens next?
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-blue-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Document Review</h4>
                    <p className="text-sm text-gray-600">
                      Our team will review your documents and profile information within 24-48 hours.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-blue-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Verification Call</h4>
                    <p className="text-sm text-gray-600">
                      We may contact you for a brief verification call to confirm your details.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-green-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Profile Activation</h4>
                    <p className="text-sm text-gray-600">
                      Once approved, your profile will go live and you can start receiving bookings!
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              We'll keep you updated
            </h3>
            
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-gray-600">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                Email updates on your application status
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                SMS notifications for important updates
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/artists">
                Browse Other Artists
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" asChild>
              <Link href="/">
                Back to Home
              </Link>
            </Button>
          </div>

          {/* Support */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-2">
              Questions about your application?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
              <a href="mailto:support@artistly.com" className="text-primary hover:underline">
                support@artistly.com
              </a>
              <a href="tel:+911234567890" className="text-primary hover:underline">
                +91 12345 67890
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
