"use client"; // Mark as client component because it uses hooks and event handlers

import { useState, type FormEvent } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from "@/hooks/use-toast"; // Import useToast
import { Send } from 'lucide-react';

export function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast(); // Initialize toast

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!name || !email || !message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    console.log('Form Data:', { name, email, message });
    // Replace with your actual API endpoint call
    // e.g., await fetch('/api/contact', { method: 'POST', body: JSON.stringify({ name, email, message }) });

    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay

    // Show success toast
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });

    // Reset form and state
    setName('');
    setEmail('');
    setMessage('');
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="mb-16 scroll-mt-14 md:mb-24 md:scroll-mt-16">
      {/* Removed text-primary */}
      <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">
        <Send className="mr-2 inline-block h-8 w-8" /> Get In Touch
      </h2>
      <Card className="mx-auto max-w-2xl shadow-lg">
        <CardHeader>
          <CardTitle>Contact Me</CardTitle>
          <CardDescription>
            Have a question or want to collaborate? Send me a message!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={isSubmitting}
                // Removed focus:ring-accent
                className=""
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting}
                // Removed focus:ring-accent
                className=""
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Your message here..."
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                disabled={isSubmitting}
                // Removed focus:ring-accent
                className=""
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              // Removed accent-specific classes, rely on default button variant
              className="w-full"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              {!isSubmitting && <Send className="ml-2 h-4 w-4" />}
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
