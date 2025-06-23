export interface Artist {
  id: string;
  name: string;
  category: string[];
  priceRange: string;
  location: string;
  bio: string;
  languages: string[];
  image: string;
  rating: number;
}

export interface ArtistFormData {
  name: string;
  bio: string;
  category: string[];
  languages: string[];
  priceRange: string;
  location: string;
  image?: File;
}

export interface FilterOptions {
  category: string;
  location: string;
  priceRange: string;
}

export interface BookingRequest {
  id: string;
  artistId: string;
  artistName: string;
  eventDate: string;
  eventType: string;
  clientName: string;
  clientEmail: string;
  status: 'pending' | 'approved' | 'rejected';
  message: string;
}
