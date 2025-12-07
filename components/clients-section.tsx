export function ClientsSection() {
  const clients = [
    {
      name: "Modi Foundation",
      experience: "10 Years",
      status: "Active",
    },
    {
      name: "Vestige Marketing PVT. LTD",
      experience: "12 Years",
      status: "Active",
    },
    {
      name: "Baba Global LTD",
      experience: "15 Years",
      status: "Active",
    },
    {
      name: "HMC MM Auto LTD (Hero)",
      experience: "8 Years",
      status: "Active",
    },
    {
      name: "Hindustan Coca-Cola Moon Beverages LTD",
      experience: "20 Years",
      status: "Active",
    },
    {
      name: "Bharti Airtel LTD",
      experience: "25 Years",
      status: "Active (PAN India)",
    },
    {
      name: "Asian Watch Hands PVT LTD",
      experience: "18 Years",
      status: "Active",
    },
    {
      name: "AIPL Estate Management PVT LTD",
      experience: "8 Years",
      status: "Active",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Corporate Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trusted by leading national companies for our professional services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {clients.map((client, index) => (
            <div
              key={index}
              className="p-4 bg-card rounded-lg border border-border hover:border-primary hover:shadow-md transition"
            >
              <h3 className="font-semibold text-foreground text-sm mb-2">{client.name}</h3>
              <div className="space-y-1 text-xs text-muted-foreground">
                <p>Experience: {client.experience}</p>
                <p className="text-primary font-medium">Status: {client.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
