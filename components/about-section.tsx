export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">About Santosh Enterprises</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Santosh Enterprises is a multi-service provider company specializing in furniture, upholstery, and
                interior maintenance. Founded by Santosh Kumar, we have been delivering exceptional service across
                furniture, textiles, and home furnishing sectors.
              </p>
              <p>
                We provide a complete range of solutions including chairs, sofas, blinds, curtains, carpets,
                dry-cleaning, glass-mirror work, and chick/jafri installations with professional sales and repair
                services.
              </p>
              <p>
                With Pan India service availability and trusted partnerships with leading national corporations, we are
                committed to delivering superior quality products and professional maintenance services.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-card p-6 rounded-lg border border-border text-center">
              <div className="text-3xl font-bold text-primary mb-2">8+</div>
              <p className="text-sm text-muted-foreground">Service Categories</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border text-center">
              <div className="text-3xl font-bold text-primary mb-2">1000+</div>
              <p className="text-sm text-muted-foreground">Satisfied Clients</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border text-center">
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border text-center">
              <div className="text-3xl font-bold text-primary mb-2">PAN India</div>
              <p className="text-sm text-muted-foreground">Service Coverage</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
