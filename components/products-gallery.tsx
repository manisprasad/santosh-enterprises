const products = [
  {
    image: "/images/img-20251206-wa0009.jpg",
    title: "Designer Curtains",
    category: "Curtains & Drapes",
  },
  {
    image: "/images/img-20251206-wa0011.jpg",
    title: "Modern Fencing",
    category: "Outdoor Solutions",
  },
  {
    image: "/images/img-20251206-wa0005.jpg",
    title: "Ergonomic Office Chair",
    category: "Office Furniture",
  },
  {
    image: "/images/img-20251206-wa0006.jpg",
    title: "Wooden Blinds",
    category: "Blinds & Shutters",
  },
  {
    image: "/images/img-20251206-wa0003.jpg",
    title: "Premium Sofa",
    category: "Sofas & Upholstery",
  },
  {
    image: "/images/img-20251206-wa0007.jpg",
    title: "Roller Blinds",
    category: "Blinds & Shutters",
  },
]

export function ProductsGallery() {
  return (
    <section id="products" className="py-16 md:py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Products</h2>
          <p className="text-muted-foreground text-lg">Handpicked selection of premium furniture and home solutions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-lg bg-card border border-border hover:shadow-xl transition"
            >
              <div className="relative h-64 overflow-hidden bg-muted">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-primary font-semibold mb-1">{product.category}</p>
                <h3 className="text-lg font-semibold text-foreground">{product.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
