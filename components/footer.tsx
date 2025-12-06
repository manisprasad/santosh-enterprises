import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Santosh Enterprises</h3>
            <p className="text-sm opacity-80">Premium furniture and home furnishing solutions since the beginning.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#services" className="hover:opacity-100 transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#products" className="hover:opacity-100 transition">
                  Products
                </a>
              </li>
              <li>
                <a href="#about" className="hover:opacity-100 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:opacity-100 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Furniture Solutions</li>
              <li>Carpets & Rugs</li>
              <li>Curtains & Blinds</li>
              <li>Dry Cleaning</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                +91 9873123274
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                skchair.sofa@outlook.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1" />
                Pan India Service
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-75">
            <p>&copy; 2025 Santosh Enterprises. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:opacity-100 transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:opacity-100 transition">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
