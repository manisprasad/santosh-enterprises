"use client"

import type React from "react"

import { Phone, Mail, MapPin, Send } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-muted-foreground text-lg">
            Contact us for inquiries, consultations, or to discuss your project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                <p className="text-muted-foreground">+91 98731 23274</p>
                <p className="text-muted-foreground">+91 83687 24395</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Email</h3>
                <p className="text-muted-foreground">skchairsofa@outlook.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Service Coverage</h3>
                <p className="text-muted-foreground">Pan India Service</p>
                <p className="text-muted-foreground">Owner: Santosh Kumar</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
            <input type="hidden" name="access_key" value="a11e3715-d6a5-4ae5-8e6d-3662e0112dc7" />
            <input type="hidden" name="redirect" value="https://web3forms.com/success" />

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
                placeholder="+91 XXXX XXXX XX"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground resize-none"
                placeholder="Tell us about your requirements..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition flex items-center justify-center gap-2"
            >
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
