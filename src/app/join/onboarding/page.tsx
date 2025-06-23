"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  User, 
  MapPin, 
  Camera, 
  Star, 
  FileText, 
  CreditCard, 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft,
  Upload,
  Phone,
  Mail,
  Calendar,
  Music,
  Users,
  Award
} from 'lucide-react';

interface FormData {
  // Personal Info
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  
  // Location
  city: string;
  state: string;
  pincode: string;
  
  // Artist Info
  artistName: string;
  category: string;
  subCategories: string[];
  experience: string;
  bio: string;
  
  // Services
  services: string[];
  priceRange: string;
  travelDistance: string;
  
  // Media
  profileImage: File | null;
  portfolioImages: File[];
  videos: File[];
  
  // Verification
  idType: string;
  idNumber: string;
  idDocument: File | null;
}

export default function OnboardingPage() {
  const router = useRouter(); // Move this inside the component
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    city: '',
    state: '',
    pincode: '',
    artistName: '',
    category: '',
    subCategories: [],
    experience: '',
    bio: '',
    services: [],
    priceRange: '',
    travelDistance: '',
    profileImage: null,
    portfolioImages: [],
    videos: [],
    idType: '',
    idNumber: '',
    idDocument: null
  });

  const totalSteps = 6;

  const steps = [
    { number: 1, title: 'Personal Info', icon: User },
    { number: 2, title: 'Location', icon: MapPin },
    { number: 3, title: 'Artist Profile', icon: Star },
    { number: 4, title: 'Services & Pricing', icon: CreditCard },
    { number: 5, title: 'Media & Portfolio', icon: Camera },
    { number: 6, title: 'Verification', icon: CheckCircle }
  ];

  const categories = [
    'Musician', 'Singer', 'Dancer', 'Comedian', 'Magician', 'DJ', 
    'Band', 'Speaker', 'Actor', 'Performer', 'Other'
  ];

  const musicianSubCategories = [
    'Guitar', 'Piano', 'Violin', 'Drums', 'Flute', 'Saxophone', 'Tabla', 'Harmonium'
  ];

  const dancerSubCategories = [
    'Classical', 'Bollywood', 'Contemporary', 'Hip-hop', 'Folk', 'Ballet', 'Salsa'
  ];

  const services = [
    'Live Performance', 'Studio Recording', 'Music Lessons', 'Choreography', 
    'Event Planning', 'Sound Setup', 'Backup Musicians', 'Custom Songs'
  ];

  const handleInputChange = (field: keyof FormData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log('Form submitted:', formData);
    
    // Simulate API call
    setTimeout(() => {
      router.push('/join/success');
    }, 1000);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Personal Information</h2>
              <p className="text-gray-600">Let's start with your basic details</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <Input
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <Input
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  className="pl-10"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="tel"
                  placeholder="+91 9876543210"
                  className="pl-10"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date of Birth *
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="date"
                  className="pl-10"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Location Details</h2>
              <p className="text-gray-600">Where are you based?</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                City *
              </label>
              <Input
                placeholder="Enter your city"
                value={formData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  State *
                </label>
                <Select value={formData.state} onValueChange={(value) => handleInputChange('state', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="maharashtra">Maharashtra</SelectItem>
                    <SelectItem value="delhi">Delhi</SelectItem>
                    <SelectItem value="karnataka">Karnataka</SelectItem>
                    <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                    <SelectItem value="gujarat">Gujarat</SelectItem>
                    <SelectItem value="rajasthan">Rajasthan</SelectItem>
                    <SelectItem value="west-bengal">West Bengal</SelectItem>
                    <SelectItem value="punjab">Punjab</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  PIN Code *
                </label>
                <Input
                  placeholder="400001"
                  value={formData.pincode}
                  onChange={(e) => handleInputChange('pincode', e.target.value)}
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Artist Profile</h2>
              <p className="text-gray-600">Tell us about your artistic talents</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Artist/Stage Name *
              </label>
              <Input
                placeholder="Your professional name"
                value={formData.artistName}
                onChange={(e) => handleInputChange('artistName', e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Primary Category *
              </label>
              <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your main category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category.toLowerCase()}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Experience Level *
              </label>
              <Select value={formData.experience} onValueChange={(value) => handleInputChange('experience', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select experience level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner (0-2 years)</SelectItem>
                  <SelectItem value="intermediate">Intermediate (2-5 years)</SelectItem>
                  <SelectItem value="experienced">Experienced (5-10 years)</SelectItem>
                  <SelectItem value="expert">Expert (10+ years)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bio/Description *
              </label>
              <textarea
                className="w-full min-h-[120px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Tell us about yourself, your style, and what makes you unique..."
                value={formData.bio}
                onChange={(e) => handleInputChange('bio', e.target.value)}
              />
              <p className="text-sm text-gray-500 mt-1">
                {formData.bio.length}/500 characters
              </p>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Services & Pricing</h2>
              <p className="text-gray-600">What services do you offer?</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Services Offered *
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {services.map((service) => (
                  <label key={service} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                      checked={formData.services.includes(service)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          handleInputChange('services', [...formData.services, service]);
                        } else {
                          handleInputChange('services', formData.services.filter(s => s !== service));
                        }
                      }}
                    />
                    <span className="text-sm text-gray-700">{service}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price Range (per event) *
              </label>
              <Select value={formData.priceRange} onValueChange={(value) => handleInputChange('priceRange', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your price range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5000-15000">₹5,000 - ₹15,000</SelectItem>
                  <SelectItem value="15000-30000">₹15,000 - ₹30,000</SelectItem>
                  <SelectItem value="30000-50000">₹30,000 - ₹50,000</SelectItem>
                  <SelectItem value="50000-100000">₹50,000 - ₹1,00,000</SelectItem>
                                    <SelectItem value="100000+">₹1,00,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Travel Distance *
              </label>
              <Select value={formData.travelDistance} onValueChange={(value) => handleInputChange('travelDistance', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="How far will you travel?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="local">Local city only</SelectItem>
                  <SelectItem value="50km">Within 50km</SelectItem>
                  <SelectItem value="100km">Within 100km</SelectItem>
                  <SelectItem value="state">Within state</SelectItem>
                  <SelectItem value="national">Anywhere in India</SelectItem>
                  <SelectItem value="international">International</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Media & Portfolio</h2>
              <p className="text-gray-600">Showcase your talent with photos and videos</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Profile Picture *
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <p className="text-sm text-gray-600 mb-2">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-gray-500">
                  PNG, JPG up to 5MB
                </p>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  id="profile-image"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      handleInputChange('profileImage', e.target.files[0]);
                    }
                  }}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Portfolio Images
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                <Camera className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <p className="text-sm text-gray-600 mb-2">
                  Upload photos of your performances
                </p>
                <p className="text-xs text-gray-500">
                  Multiple files allowed, up to 10 images
                </p>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  id="portfolio-images"
                  onChange={(e) => {
                    if (e.target.files) {
                      handleInputChange('portfolioImages', Array.from(e.target.files));
                    }
                  }}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Performance Videos
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                <Music className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <p className="text-sm text-gray-600 mb-2">
                  Upload videos of your performances
                </p>
                <p className="text-xs text-gray-500">
                  MP4, MOV up to 100MB each
                </p>
                <input
                  type="file"
                  accept="video/*"
                  multiple
                  className="hidden"
                  id="performance-videos"
                  onChange={(e) => {
                    if (e.target.files) {
                      handleInputChange('videos', Array.from(e.target.files));
                    }
                  }}
                />
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Verification</h2>
              <p className="text-gray-600">Help us verify your identity to build trust</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ID Type *
              </label>
              <Select value={formData.idType} onValueChange={(value) => handleInputChange('idType', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select ID type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="aadhar">Aadhar Card</SelectItem>
                  <SelectItem value="pan">PAN Card</SelectItem>
                  <SelectItem value="passport">Passport</SelectItem>
                  <SelectItem value="driving-license">Driving License</SelectItem>
                  <SelectItem value="voter-id">Voter ID</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ID Number *
              </label>
              <Input
                placeholder="Enter your ID number"
                value={formData.idNumber}
                onChange={(e) => handleInputChange('idNumber', e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload ID Document *
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                <FileText className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <p className="text-sm text-gray-600 mb-2">
                  Upload clear photo of your ID
                </p>
                <p className="text-xs text-gray-500">
                  PNG, JPG up to 5MB
                </p>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  id="id-document"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      handleInputChange('idDocument', e.target.files[0]);
                    }
                  }}
                />
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-medium text-blue-900 mb-1">
                    Verification Process
                  </h4>
                  <p className="text-sm text-blue-700">
                    Your documents will be reviewed within 24-48 hours. You'll receive an email once verified.
                    This helps build trust with potential clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <Section padding="lg">
        <div className="max-w-4xl mx-auto">
          {/* Progress Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-gray-900">
                Artist Onboarding
              </h1>
              <Badge variant="outline">
                Step {currentStep} of {totalSteps}
              </Badge>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>

            {/* Step Indicators */}
            <div className="hidden md:flex justify-between">
              {steps.map((step) => (
                <div 
                  key={step.number}
                  className={`flex flex-col items-center ${
                    step.number <= currentStep ? 'text-primary' : 'text-gray-400'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                    step.number <= currentStep 
                      ? 'bg-primary text-white' 
                      : 'bg-gray-200 text-gray-400'
                  }`}>
                    {step.number < currentStep ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : (
                      <step.icon className="h-5 w-5" />
                    )}
                  </div>
                  <span className="text-xs font-medium text-center">
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Form Content */}
          <Card className="shadow-sm">
            <CardContent className="p-8">
              {renderStepContent()}
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className="min-w-[120px]"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>

            {currentStep === totalSteps ? (
              <Button
                onClick={handleSubmit}
                className="min-w-[120px]"
              >
                Submit Application
                <CheckCircle className="h-4 w-4 ml-2" />
              </Button>
            ) : (
              <Button
                onClick={handleNext}
                className="min-w-[120px]"
              >
                Next
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            )}
          </div>

          {/* Help Section */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 mb-2">
              Need help with your application?
            </p>
            <Button variant="link" className="text-primary">
              Contact Support
            </Button>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}

