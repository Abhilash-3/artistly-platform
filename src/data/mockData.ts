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

export const mockArtists: Artist[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    category: ["Singer", "Performer"],
    priceRange: "$500-1000",
    location: "Mumbai, India",
    bio: "Professional vocalist with 8+ years experience",
    languages: ["English", "Hindi"],
    image: "https://images.unsplash.com/photo-1494790108755-2616c9c1e4c3?w=300&h=300&fit=crop&crop=face",
    rating: 4.8
  },
  {
    id: "2",
    name: "DJ Mike Chen",
    category: ["DJ", "Music Producer"],
    priceRange: "$800-1500",
    location: "Delhi, India",
    bio: "Electronic music specialist for corporate events",
    languages: ["English", "Mandarin"],
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    rating: 4.9
  },
  {
    id: "3",
    name: "Priya Sharma",
    category: ["Dancer", "Choreographer"],
    priceRange: "$300-800",
    location: "Bangalore, India",
    bio: "Classical and contemporary dance performer",
    languages: ["Hindi", "English", "Kannada"],
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    rating: 4.7
  },
  {
    id: "4",
    name: "Rahul Kapoor",
    category: ["Speaker", "Motivational Coach"],
    priceRange: "$1000-2000",
    location: "Chennai, India",
    bio: "Corporate trainer and motivational speaker",
    languages: ["English", "Hindi", "Tamil"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    rating: 4.6
  },
  {
    id: "5",
    name: "Anjali Mehta",
    category: ["Singer", "Classical Performer"],
    priceRange: "$400-900",
    location: "Pune, India",
    bio: "Classical Indian music specialist",
    languages: ["Hindi", "Marathi", "English"],
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
    rating: 4.9
  },
  {
    id: "6",
    name: "DJ Arjun",
    category: ["DJ", "Electronic Music"],
    priceRange: "$600-1200",
    location: "Kolkata, India",
    bio: "Bollywood and EDM specialist DJ",
    languages: ["English", "Hindi", "Bengali"],
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
    rating: 4.5
  }
];

export const categories = ["Singer", "Dancer", "DJ", "Speaker", "Performer", "Music Producer", "Choreographer", "Classical Performer", "Electronic Music", "Motivational Coach"];

export const locations = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata", "Pune", "Hyderabad", "Ahmedabad"];

export const priceRanges = ["$200-500", "$500-1000", "$1000-2000", "$2000+"];

export const languages = ["English", "Hindi", "Tamil", "Telugu", "Bengali", "Marathi", "Gujarati", "Kannada", "Malayalam", "Punjabi"];
