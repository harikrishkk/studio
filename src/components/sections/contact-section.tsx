"use client";

import { useState, type FormEvent } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from "@/hooks/use-toast";
import { Send } from 'lucide-react';
import type { ContactData } from '@/lib/portfolio-data'; // Import the type

interface ContactSectionProps {
  data: ContactData;
}

export function ContactSection({ data }: ContactSectionProps) {
  const { title, cardTitle, description, formLabels, placeholders, buttonText, submittingText } = data;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!name || !email || !message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate API call (replace with actual logic)
    console.log('Form Data:', { name, email, message });
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });

    setName('');
    setEmail('');
    setMessage('');
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="mb-16 scroll-mt-14 md:mb-24 md:scroll-mt-16">
      <h2 className="mb-8 text-center text-3xl font-bold text-foreground md:text-4xl">
         {title}
      </h2>
      <Card className="mx-auto max-w-2xl shadow-lg bg-card/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-foreground">{cardTitle}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground/90">{formLabels.name}</Label>
              <Input
                id="name"
                placeholder={placeholders.name}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={isSubmitting}
                className="bg-input/80"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground/90">{formLabels.email}</Label>
              <Input
                id="email"
                type="email"
                placeholder={placeholders.email}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting}
                 className="bg-input/80"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground/90">{formLabels.message}</Label>
              <Textarea
                id="message"
                placeholder={placeholders.message}
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                disabled={isSubmitting}
                 className="bg-input/80"
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? submittingText : buttonText}
              {!isSubmitting && <Send className="ml-2 h-4 w-4" />}
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
