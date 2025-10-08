export function AccountProtectionSection() {
    const protections = [
      {
        title: "Account protection",
        description: "Moomoo Financial Inc. is a member of SIPC, which protects securities customers of its members up to $500,000 (including $250,000 for claims for cash). Explanatory brochure available upon request or at www.sipc.org.",
        disclaimer: "Disclosure"
      },
      {
        title: "Multi-factor authentication",
        description: "We provide multi-factor authentication on your accounts.",
        disclaimer: ""
      }
    ];
  
    return (
      <section className="bg-[#061519] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Your account is protected
            </h2>
          </div>
  
          <div className="space-y-8">
            {protections.map((protection, index) => (
              <div key={index} className="border-b border-[#0f2b33] pb-6 last:border-b-0">
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                  <div className="lg:col-span-1">
                    <h3 className="text-xl font-semibold text-white">
                      {protection.title}
                    </h3>
                  </div>
  
                  <div className="lg:col-span-2">
                    <p className="text-gray-300 leading-relaxed mb-2">
                      {protection.description}
                    </p>
                    {protection.disclaimer && (
                      <p className="text-sm text-gray-500">
                        {protection.disclaimer}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  