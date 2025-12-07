import { Sofa, Container as Curtains, Mail, Armchair, Lightbulb, Wrench, Droplets, Grid3x3 } from "lucide-react"

const services = [
  {
    icon: Armchair,
    title: "Chair Work",
    description: "All types of chair upholstery, custom designs, sales and professional repair services.",
  },
  {
    icon: Sofa,
    title: "Sofa & Upholstery",
    description: "Premium sofa sets, cushions, and upholstered furniture with repair and maintenance.",
  },
  {
    icon: Curtains,
    title: "Curtains & Drapes",
    description: "All types of curtains, elegant designs, installation and professional maintenance.",
  },
  {
    icon: Grid3x3,
    title: "Blinds & Chick/Jafri",
    description: "Modern blinds, wooden shutters, chick work and jafri screens for aesthetics and privacy.",
  },
  {
    icon: Mail,
    title: "Carpets & Rugs",
    description: "High-quality carpets with professional sales, installation and dry cleaning services.",
  },
  {
    icon: Lightbulb,
    title: "Mirror Work",
    description: "Custom mirror solutions, installations and expert repair for homes and offices.",
  },
  {
    icon: Droplets,
    title: "Dry Cleaning",
    description: "Professional dry cleaning for carpets, upholstery, curtains and all fabric types.",
  },
  {
    icon: Wrench,
    title: "General Maintenance",
    description: "Comprehensive interior maintenance and repair services for all home furnishings.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive home furnishing and interior maintenance solutions for residential and corporate clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="p-6 bg-card rounded-lg border border-border hover:border-primary hover:shadow-lg transition"
              >
                <Icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
