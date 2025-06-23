"use client";

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, MapPin, Users, MessageCircle } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  artistName: string;
}

export default function QuoteModal({ isOpen, onClose, artistName }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventLocation: '',
    guestCount: '',
    eventType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the quote request to your backend
    console.log('Quote request for', artistName, formData);
    alert(`Quote request sent to ${artistName}! They will contact you soon.`);
    onClose();
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventDate: '',
      eventLocation: '',
      guestCount: '',
      eventType: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <MessageCircle className="h-5 w-5 text-primary" />
            <span>Request Quote from {artistName}</span>
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Your Name *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone *</Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+91 98765 43210"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="john@example.com"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="eventDate" className="flex items-center space-x-1">
                <Calendar className="h-3 w-3" />
                <span>Event Date *</span>
              </Label>
              <Input
                id="eventDate"
                name="eventDate"
                type="date"
                value={formData.eventDate}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="guestCount" className="flex items-center space-x-1">
                <Users className="h-3 w-3" />
                <span>Guest Count</span>
              </Label>
              <Input
                id="guestCount"
                name="guestCount"
                type="number"
                value={formData.guestCount}
                onChange={handleChange}
                placeholder="100"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="eventLocation" className="flex items-center space-x-1">
              <MapPin className="h-3 w-3" />
              <span>Event Location *</span>
            </Label>
            <Input
              id="eventLocation"
              name="eventLocation"
              value={formData.eventLocation}
              onChange={handleChange}
              required
              placeholder="Mumbai, India"
            />
          </div>

          <div>
            <Label htmlFor="eventType">Event Type</Label>
            <Input
              id="eventType"
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              placeholder="Wedding, Corporate Event, Birthday Party, etc."
            />
          </div>

          <div>
            <Label htmlFor="message">Additional Message</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell the artist more about your event requirements..."
              rows={3}
            />
          </div>

          <div className="flex space-x-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" className="flex-1">
              Send Quote Request
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
