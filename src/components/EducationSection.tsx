export function EducationSection() {
    const sections = [
      {
        title: "Learn",
        description: "Build your trading skills and knowledge with 200+ educational resources.",
        cta: "Learn more >",
        icon: "📚"
      },
      {
        title: "24/7 News",
        description: "Updated market and company news from 50+ premium sources",
        cta: "Learn more >",
        icon: "📰"
      },
      {
        title: "Moo Community",
        description: "Connect, chat, and grow with 27 millions moomoo users worldwide.",
        cta: "Learn more >",
        icon: "👥"
      }
    ];
  
    return (
      <section className="relative py-16 lg:py-24 text-white">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop&crop=center')"
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
  
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Navigate trading<br />
              with greater confidence
            </h2>
          </div>
  
          <div className="grid md:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <div key={index} className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-3xl">{section.icon}</span>
                  <h3 className="text-2xl font-bold">{section.title}</h3>
                </div>
  
                <p className="text-gray-200 leading-relaxed mb-6">
                  {section.description}
                </p>
  
                <a
                  href="#"
                  className="text-moomoo-orange font-semibold hover:text-orange-300 transition-colors"
                >
                  {section.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  