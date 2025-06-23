"use client";

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, MessageCircle, Heart } from 'lucide-react';
import { Artist } from '@/types';

interface ArtistCardProps {
  artist: Artist;
  onQuoteRequest: (artistId: string) => void;
}

export default function ArtistCard({ artist, onQuoteRequest }: ArtistCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-0">
        {/* Artist Image */}
        <div className="relative aspect-square overflow-hidden rounded-t-lg">
          {!imageError ? (
            <img
              src={artist.image}
              alt={artist.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              onError={handleImageError}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-400 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {artist.name.charAt(0)}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{artist.name}</p>
              </div>
            </div>
          )}
          
          {/* Like Button */}
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
          >
            <Heart 
              className={`h-4 w-4 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
            />
          </button>

          {/* Rating Badge */}
          <div className="absolute top-3 left-3 bg-white/90 rounded-full px-2 py-1 flex items-center space-x-1">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-medium">{artist.rating}</span>
          </div>
        </div>

        {/* Artist Info */}
        <div className="p-4">
          {/* Name and Location */}
          <div className="mb-3">
            <h3 className="font-semibold text-lg text-gray-900 mb-1 group-hover:text-primary transition-colors">
              {artist.name}
            </h3>
            <div className="flex items-center text-gray-500 text-sm">
              <MapPin className="h-3 w-3 mr-1" />
              {artist.location}
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-1 mb-3">
            {artist.category.slice(0, 2).map((cat) => (
              <Badge key={cat} variant="secondary" className="text-xs">
                {cat}
              </Badge>
            ))}
            {artist.category.length > 2 && (
              <Badge variant="outline" className="text-xs">
                +{artist.category.length - 2}
              </Badge>
            )}
          </div>

          {/* Bio */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {artist.bio}
          </p>

          {/* Languages */}
          <div className="mb-4">
            <p className="text-xs text-gray-500 mb-1">Languages:</p>
            <p className="text-sm text-gray-700">
              {artist.languages.slice(0, 3).join(', ')}
              {artist.languages.length > 3 && ` +${artist.languages.length - 3}`}
            </p>
          </div>

          {/* Price and Actions */}
          <div className="flex items-center justify-between pt-3 border-t">
            <div>
              <p className="text-xs text-gray-500">Starting from</p>
              <p className="font-semibold text-primary text-lg">{artist.priceRange}</p>
            </div>
            
            <Button
              onClick={() => onQuoteRequest(artist.id)}
              size="sm"
              className="flex items-center space-x-1"
            >
              <MessageCircle className="h-3 w-3" />
              <span>Get Quote</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
