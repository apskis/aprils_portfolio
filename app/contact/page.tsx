"use client";

import { useState } from "react";
import Navigation from "../components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: "📧",
      label: "Email",
      value: "lorem@ipsum.dolor",
      link: "mailto:lorem@ipsum.dolor"
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "april-parker",
      link: "https://linkedin.com"
    },
    {
      icon: "📺",
      label: "YouTube",
      value: "@aprilparker",
      link: "https://youtube.com"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              className="block"
            >
              <Card className="text-center border-0 shadow-polished transition-all hover:shadow-xl hover:scale-[1.02]">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-3">{info.icon}</div>
                  <h3 className="font-semibold text-foreground mb-1">{info.label}</h3>
                  <p className="text-secondary text-sm">{info.value}</p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="border-0 shadow-polished">
            <CardHeader>
              <CardTitle className="text-2xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Select
                    value={formData.subject}
                    onValueChange={(value) => setFormData({ ...formData, subject: value })}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                      <SelectItem value="consulting">Consulting Inquiry</SelectItem>
                      <SelectItem value="speaking">Speaking Engagement</SelectItem>
                      <SelectItem value="general">General Question</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Your message here..."
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="space-y-6">
            <Card className="border-0 shadow-polished">
              <CardHeader>
                <CardTitle className="text-2xl">Response Time</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="flex items-center gap-3 text-secondary font-semibold">
                  <span className="text-2xl">⏱️</span>
                  <span>Usually responds within 24-48 hours</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-polished">
              <CardHeader>
                <CardTitle className="text-2xl">Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                  aliquip ex ea commodo consequat.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">✓</span>
                    <span>Speaking engagements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">✓</span>
                    <span>Product consulting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">✓</span>
                    <span>Educational partnerships</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">✓</span>
                    <span>Content collaboration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-secondary/5 border-2 border-secondary/20 shadow-polished">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-foreground mb-3">💡 Quick Tip</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Include relevant details 
                  in your message for a faster response.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
