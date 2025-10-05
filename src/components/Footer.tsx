import { Button } from '@/components/ui/button';

export function Footer() {
  const footerSections = [
    {
      title: "Customer Service",
      links: [
        "+1 888 721 0610",
        "cs@us.moomoo.com",
        "Mon-Fri, 8:30 - 16:30 ET",
        "Online Inquiry",
        "24/7"
      ]
    },
    {
      title: "Form CRS",
      links: []
    },
    {
      title: "About moomoo",
      links: [
        "About moomoo",
        "Contact Us",
        "Influencer Program",
        "Investor Relations",
        "Newsroom",
        "ESG"
      ]
    },
    {
      title: "Terms and Conditions (Brokerage)",
      links: [
        "Terms of Use",
        "Privacy Policy",
        "Privacy Notice",
        "Customer Agreement",
        "Terms and Agreements",
        "Accessibility Statement",
        "Licensed Entities*"
      ]
    },
    {
      title: "Terms and Conditions (Crypto)",
      links: []
    },
    {
      title: "Careers / Contact:",
      links: [
        "Apply Now",
        "hr@us.moomoo.com"
      ]
    }
  ];

  const socialIcons = [
    { name: "Twitter", icon: "𝕏" },
    { name: "Facebook", icon: "f" },
    { name: "Instagram", icon: "📷" },
    { name: "LinkedIn", icon: "in" },
    { name: "YouTube", icon: "▶" },
    { name: "TradingView", icon: "TV" },
    { name: "Reddit", icon: "r" }
  ];

  return (
    <footer className="bg-black text-white py-12">
      <div className="container px-4 mx-auto max-w-6xl">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-semibold text-white">{section.title}</h3>
              <div className="space-y-6">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </div>
              {section.title === "Customer Service" && (
                <Button
                  variant="outline"
                  className="mt-4 border-gray-600 text-gray-300 hover:bg-gray-800"
                >
                  💬 Online Inquiry
                </Button>
              )}
            </div>
          ))}
        </div>

        {/* Social media */}
        <div className="pt-12 border-t border-gray-800">
          <h3 className="font-semibold mb-6 text-lg">Follow us on</h3>
          <div className="flex flex-wrap gap-6">
            {socialIcons.map((social, index) => (
              <a
                key={index}
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <span className="text-sm">{social.icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Legal disclaimers */}
        <div className="space-y-6 text-sm text-gray-400 leading-relaxed">
          <p>All investing involves risk.</p>

          <p>
            Brokerage services are offered through Moomoo Financial Inc. (&quot;MFI&quot;), a registered broker-dealer and member of FINRA and SIPC. For further information about MFI, visit FINRA&apos;s BrokerCheck.
          </p>

          <p>
            Clearing and custody services are provided by Futu Clearing Inc. (&quot;FUTC&quot;), also a registered broker-dealer and member of FINRA and SIPC. For further information about FUTC, visit FINRA&apos;s BrokerCheck.
          </p>

          <p>
            Cryptocurrency services are offered through Moomoo Crypto Inc. (&quot;MCI&quot;) (NMLS ID: 2287314), a money services business registered with FinCEN (MSB Registration Number: 31000228349013). Moomoo Crypto Inc. is not a broker-dealer. Cryptocurrency assets held with MCI are not FDIC insured or SIPC protected. Cryptocurrency services may not be available in all jurisdictions. You may review MCI&apos;s licenses here.
          </p>

          <p>
            Options trading entails significant risk and is not appropriate for all customers. It is important that investors read Characteristics and Risks of Standardized Options before engaging in any options trading strategies. Options transactions can often involve the potential of losing the entire investment in a relatively short period of time. Certain complex options strategies carry additional risk, including the potential for losses that may exceed the original investment amount. Supporting documentation for any claims, if applicable, will be furnished upon request.
          </p>

          <p>
            $0 commission trading is available only to U.S. residents trading securities in the U.S. markets through Moomoo Financial Inc. Other fees may apply. For more info, visit moomoo.com/us/pricing.
          </p>

          <p>
            Electronic trading involves risks. System availability and responsiveness may vary due to market conditions, system performance, and other factors. Account access and trade execution may be delayed or unavailable during periods of high market volatility.
          </p>

          <p>
            App services Moomoo is a financial information and trading app offered by Moomoo Technologies Inc. (&quot;MTI&quot;). MTI is not a broker-dealer and does not provide investment advice or execute trades. Securities and cryptocurrency trading services available through the app are provided by its affiliated licensed entities, including MFI and MCI.
          </p>

          <p>
            MFI, FUTC, MCI, and MTI are affiliated entities and are indirect wholly owned subsidiaries of Futu Holdings Limited (&quot;Futu&quot;) (Nasdaq: FUTU). These entities are not banks. Brokerage and cryptocurrency products are not FDIC insured, are not deposits or obligations of a bank, and may decline in value.
          </p>

          <p>
            The products and services offered on this website are subject to applicable laws, regulations, and terms of use, and may not be available in all jurisdictions. Please review our Privacy Policy, Terms of Use, and Risk Disclosures for additional important information.
          </p>

          <div className="flex space-x-4 text-moomoo-orange">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:underline">Terms of Use</a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Copyright © 2025 Moomoo Technologies Inc. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
