export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">About Santosh Enterprises</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Established with a passion for quality and customer satisfaction, Santosh Enterprises has been serving
                the home furnishing industry with excellence for over two decades.
              </p>
              <p>
                We specialize in providing premium furniture solutions, decorative elements, and professional services
                that transform spaces into beautiful, functional environments.
              </p>
              <p>
                Our team of experienced professionals is dedicated to delivering superior products with expert
                installation and ongoing support services.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-card p-6 rounded-lg border border-border text-center">
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <p className="text-sm text-muted-foreground">Years of Experience</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border text-center">
              <div className="text-3xl font-bold text-primary mb-2">1000+</div>
              <p className="text-sm text-muted-foreground">Satisfied Clients</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border text-center">
              <div className="text-3xl font-bold text-primary mb-2">6+</div>
              <p className="text-sm text-muted-foreground">Service Categories</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <p className="text-sm text-muted-foreground">Quality Assured</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
