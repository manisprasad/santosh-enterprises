export function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-secondary to-background py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Premium Furniture & Home Solutions
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Transform your spaces with our comprehensive range of furniture, carpets, curtains, blinds, and
              professional home furnishing services. Quality crafted, expertly installed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition text-center"
              >
                Explore Services
              </a>
              <a
                href="#products"
                className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition text-center"
              >
                View Products
              </a>
            </div>
          </div>

          {/* Right Visual */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/img-20251206-wa0004.jpg"
              alt="Executive Chair"
              className="rounded-lg object-cover h-64 md:h-80 w-full"
            />
            <img
              src="/images/img-20251206-wa0003.jpg"
              alt="Black Sofa"
              className="rounded-lg object-cover h-64 md:h-80 w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
