import { Sofa, Container as Curtains, Mail, Armchair, Lightbulb, Wrench } from "lucide-react"

const services = [
  {
    icon: Armchair,
    title: "Sofa & Upholstery",
    description: "Premium sofas, chairs, and upholstered furniture with custom designs and repair services.",
  },
  {
    icon: Curtains,
    title: "Curtains & Drapes",
    description: "Elegant curtain solutions including premium fabrics, installation, and maintenance.",
  },
  {
    icon: Mail,
    title: "Carpets & Rugs",
    description: "High-quality carpets with professional sales, installation, and dry cleaning services.",
  },
  {
    icon: Lightbulb,
    title: "Blinds & Shutters",
    description: "Modern blinds and wooden shutters for light control and aesthetic enhancement.",
  },
  {
    icon: Wrench,
    title: "Mirror Work",
    description: "Custom mirror solutions, installation, and repair for homes and offices.",
  },
  {
    icon: Sofa,
    title: "Dry Cleaning",
    description: "Professional dry cleaning services for carpets, upholstery, and fabrics.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive home furnishing solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="p-6 bg-card rounded-lg border border-border hover:border-primary hover:shadow-lg transition"
              >
                <Icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
