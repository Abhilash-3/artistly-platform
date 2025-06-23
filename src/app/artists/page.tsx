"use client";

import { useState } from 'react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import ResponsiveGrid from '@/components/layout/ResponsiveGrid';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Star, MapPin, Users, Search, Filter, Heart, Calendar } from 'lucide-react';

export default function ArtistsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedBudget, setSelectedBudget] = useState('all');

  // Mock data for artists
  const artists = [
    {
      id: 1,
      name: 'Rahul Sharma',
      category: 'Musician',
      location: 'Mumbai',
      rating: 4.8,
      reviews: 124,
      price: '₹15,000',
      image: '🎸',
      specialties: ['Guitar', 'Vocals', 'Live Performance'],
      verified: true,
      available: true
    },
    {
      id: 2,
      name: 'Priya Dance Academy',
      category: 'Dancer',
      location: 'Delhi',
      rating: 4.9,
      reviews: 89,
      price: '₹25,000',
      image: '💃',
      specialties: ['Classical', 'Bollywood', 'Contemporary'],
      verified: true,
      available: true
    },
    {
      id: 3,
      name: 'Comedy King Amit',
      category: 'Comedian',
      location: 'Bangalore',
      rating: 4.7,
      reviews: 156,
      price: '₹20,000',
      image: '😄',
      specialties: ['Stand-up', 'Improv', 'Corporate Shows'],
      verified: true,
      available: false
    },
    {
      id: 4,
      name: 'Magic Mike',
      category: 'Magician',
      location: 'Chennai',
      rating: 4.6,
      reviews: 78,
      price: '₹12,000',
      image: '🎩',
      specialties: ['Close-up Magic', 'Stage Magic', 'Kids Shows'],
      verified: true,
      available: true
    },
    {
      id: 5,
      name: 'Soulful Singers',
      category: 'Singer',
      location: 'Pune',
      rating: 4.9,
      reviews: 203,
      price: '₹18,000',
      image: '🎤',
      specialties: ['Bollywood', 'Ghazals', 'Wedding Songs'],
      verified: true,
      available: true
    },
    {
      id: 6,
      name: 'DJ Beats',
      category: 'DJ',
      location: 'Hyderabad',
      rating: 4.5,
      reviews: 92,
      price: '₹22,000',
      image: '🎧',
      specialties: ['Electronic', 'Bollywood', 'Party Mix'],
      verified: true,
      available: true
    },
    {
      id: 7,
      name: 'Classical Vibes',
      category: 'Musician',
      location: 'Kolkata',
      rating: 4.8,
      reviews: 67,
      price: '₹16,000',
      image: '🎻',
      specialties: ['Violin', 'Classical', 'Fusion'],
      verified: true,
      available: true
    },
    {
      id: 8,
      name: 'Street Dance Crew',
      category: 'Dancer',
      location: 'Mumbai',
      rating: 4.6,
      reviews: 134,
      price: '₹30,000',
      image: '🕺',
      specialties: ['Hip-hop', 'Breaking', 'Choreography'],
      verified: true,
      available: true
    }
  ];

  // Filter artists based on search and filters
  const filteredArtists = artists.filter(artist => {
    const matchesSearch = artist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         artist.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         artist.specialties.some(specialty => 
                           specialty.toLowerCase().includes(searchQuery.toLowerCase())
                         );
    
    const matchesCategory = selectedCategory === 'all' || 
                           artist.category.toLowerCase() === selectedCategory.toLowerCase();
    
    const matchesLocation = selectedLocation === 'all' || 
                           artist.location.toLowerCase() === selectedLocation.toLowerCase();
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header Section */}
      <Section background="gray" padding="lg">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Browse Artists
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Discover talented performers for your next event. Filter by category, location, and budget to find the perfect match.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="max-w-4xl mx-auto">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search artists, categories, or specialties..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 text-base"
            />
          </div>

          {/* Filters */}
          <ResponsiveGrid cols={{ default: 1, sm: 2, lg: 4 }} gap="md">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="musician">Musicians</SelectItem>
                <SelectItem value="dancer">Dancers</SelectItem>
                <SelectItem value="comedian">Comedians</SelectItem>
                <SelectItem value="magician">Magicians</SelectItem>
                <SelectItem value="singer">Singers</SelectItem>
                <SelectItem value="dj">DJs</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger>
                <SelectValue placeholder="All Locations" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="mumbai">Mumbai</SelectItem>
                <SelectItem value="delhi">Delhi</SelectItem>
                <SelectItem value="bangalore">Bangalore</SelectItem>
                <SelectItem value="chennai">Chennai</SelectItem>
                <SelectItem value="pune">Pune</SelectItem>
                <SelectItem value="hyderabad">Hyderabad</SelectItem>
                <SelectItem value="kolkata">Kolkata</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedBudget} onValueChange={setSelectedBudget}>
              <SelectTrigger>
                <SelectValue placeholder="Budget Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Budgets</SelectItem>
                <SelectItem value="0-15000">Under ₹15,000</SelectItem>
                <SelectItem value="15000-25000">₹15,000 - ₹25,000</SelectItem>
                <SelectItem value="25000-50000">₹25,000 - ₹50,000</SelectItem>
                <SelectItem value="50000+">Above ₹50,000</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" className="w-full">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </ResponsiveGrid>
        </div>
      </Section>

      {/* Results Section */}
      <Section padding="lg">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              {filteredArtists.length} Artists Found
            </h2>
            <p className="text-gray-600 text-sm">
              Showing results for your search criteria
            </p>
          </div>
          
          <Select defaultValue="rating">
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="reviews">Most Reviews</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Artists Grid */}
        <ResponsiveGrid cols={{ default: 1, md: 2, lg: 3 }} gap="lg">
          {filteredArtists.map((artist) => (
            <Card key={artist.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <CardContent className="p-0">
                {/* Artist Image/Avatar */}
                <div className="relative">
                  <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center rounded-t-xl">
                    <span className="text-6xl">{artist.image}</span>
                  </div>
                  
                  {/* Status Badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    {artist.verified && (
                      <Badge variant="default" className="text-xs">
                        ✓ Verified
                      </Badge>
                    )}
                    <Badge 
                      variant={artist.available ? "secondary" : "destructive"} 
                      className="text-xs"
                    >
                      {artist.available ? 'Available' : 'Busy'}
                    </Badge>
                  </div>

                  {/* Favorite Button */}
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute top-3 right-3 bg-white/80 hover:bg-white"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>

                {/* Artist Info */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 group-hover:text-primary transition-colors">
                        {artist.name}
                      </h3>
                      <p className="text-gray-600 text-sm">{artist.category}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-primary text-lg">
                        {artist.price}
                      </div>
                      <div className="text-xs text-gray-500">per event</div>
                    </div>
                  </div>

                  {/* Location and Rating */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      {artist.location}
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span className="font-medium text-sm">{artist.rating}</span>
                      <span className="text-gray-500 text-sm ml-1">
                        ({artist.reviews})
                      </span>
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {artist.specialties.slice(0, 3).map((specialty, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button className="flex-1" disabled={!artist.available}>
                      <Calendar className="h-4 w-4 mr-2" />
                      {artist.available ? 'Book Now' : 'Unavailable'}
                    </Button>
                    <Button variant="outline" size="icon">
                      <Users className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </ResponsiveGrid>

        {/* Load More */}
        {filteredArtists.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Artists
            </Button>
          </div>
        )}

        {/* No Results */}
        {filteredArtists.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No artists found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search criteria or filters
            </p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedLocation('all');
                setSelectedBudget('all');
              }}
            >
              Clear All Filters
            </Button>
          </div>
        )}
      </Section>

      <Footer />
    </div>
  );
}
