"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { X, Filter } from 'lucide-react';
import { categories, locations, priceRanges } from '@/data/mockData';

interface FilterProps {
  onFilterChange: (filters: {
    categories: string[];
    location: string;
    priceRange: string;
  }) => void;
}

export default function ArtistFilters({ onFilterChange }: FilterProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleCategoryChange = (category: string, checked: boolean) => {
    const newCategories = checked
      ? [...selectedCategories, category]
      : selectedCategories.filter(c => c !== category);
    
    setSelectedCategories(newCategories);
    onFilterChange({
      categories: newCategories,
      location: selectedLocation === 'all' ? '' : selectedLocation,
      priceRange: selectedPriceRange === 'all' ? '' : selectedPriceRange,
    });
  };

  const handleLocationChange = (location: string) => {
    setSelectedLocation(location);
    onFilterChange({
      categories: selectedCategories,
      location: location === 'all' ? '' : location,
      priceRange: selectedPriceRange === 'all' ? '' : selectedPriceRange,
    });
  };

  const handlePriceRangeChange = (priceRange: string) => {
    setSelectedPriceRange(priceRange);
    onFilterChange({
      categories: selectedCategories,
      location: selectedLocation === 'all' ? '' : selectedLocation,
      priceRange: priceRange === 'all' ? '' : priceRange,
    });
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedLocation('all');
    setSelectedPriceRange('all');
    onFilterChange({
      categories: [],
      location: '',
      priceRange: '',
    });
  };

  const hasActiveFilters = selectedCategories.length > 0 || selectedLocation !== 'all' || selectedPriceRange !== 'all';

  return (
    <>
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-4">
        <Button
          variant="outline"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="w-full"
        >
          <Filter className="mr-2 h-4 w-4" />
          Filters {hasActiveFilters && `(${selectedCategories.length + (selectedLocation !== 'all' ? 1 : 0) + (selectedPriceRange !== 'all' ? 1 : 0)})`}
        </Button>
      </div>

      {/* Filter Panel */}
      <div className={`${isFilterOpen ? 'block' : 'hidden'} lg:block`}>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Filters</CardTitle>
            {hasActiveFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearAllFilters}
                className="text-sm"
              >
                <X className="mr-1 h-3 w-3" />
                Clear All
              </Button>
            )}
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Category Filter */}
            <div>
              <Label className="text-sm font-medium mb-3 block">Category</Label>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {categories.map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox
                      id={category}
                      checked={selectedCategories.includes(category)}
                      onCheckedChange={(checked) => 
                        handleCategoryChange(category, checked as boolean)
                      }
                    />
                    <Label
                      htmlFor={category}
                      className="text-sm font-normal cursor-pointer"
                    >
                      {category}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Location Filter */}
            <div>
              <Label className="text-sm font-medium mb-3 block">Location</Label>
              <Select value={selectedLocation} onValueChange={handleLocationChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Price Range Filter */}
            <div>
              <Label className="text-sm font-medium mb-3 block">Price Range</Label>
              <Select value={selectedPriceRange} onValueChange={handlePriceRangeChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select price range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Price Ranges</SelectItem>
                  {priceRanges.map((range) => (
                    <SelectItem key={range} value={range}>
                      {range}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Active Filters Summary */}
            {hasActiveFilters && (
              <div className="pt-4 border-t">
                <Label className="text-sm font-medium mb-2 block">Active Filters:</Label>
                <div className="flex flex-wrap gap-2">
                  {selectedCategories.map((category) => (
                    <span
                      key={category}
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-primary/10 text-primary"
                    >
                      {category}
                      <button
                        onClick={() => handleCategoryChange(category, false)}
                        className="ml-1 hover:text-primary/80"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  ))}
                  {selectedLocation !== 'all' && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">
                      {selectedLocation}
                      <button
                        onClick={() => handleLocationChange('all')}
                        className="ml-1 hover:text-primary/80"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  )}
                  {selectedPriceRange !== 'all' && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">
                      {selectedPriceRange}
                      <button
                        onClick={() => handlePriceRangeChange('all')}
                        className="ml-1 hover:text-primary/80"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  )}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
