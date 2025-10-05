import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { NavigationCards } from '@/components/NavigationCards';
import { WhatsNewSection } from '@/components/WhatsNewSection';
import { PartnerLogos } from '@/components/PartnerLogos';
import { LowerFeesSection } from '@/components/LowerFeesSection';
import { StockMarketSection } from '@/components/StockMarketSection';
import { FeatureCardsSection } from '@/components/FeatureCardsSection';
import { OneStopTradingSection } from '@/components/OneStopTradingSection';
import { OptionsSection } from '@/components/OptionsSection';
import { EducationSection } from '@/components/EducationSection';
import { AccountProtectionSection } from '@/components/AccountProtectionSection';
import { PromotionSection } from '@/components/PromotionSection';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <NavigationCards />
      <WhatsNewSection />
      <PartnerLogos />
      <LowerFeesSection />
      <StockMarketSection />
      <FeatureCardsSection />
      <OneStopTradingSection />
      <OptionsSection />
      <EducationSection />
      <AccountProtectionSection />
      <PromotionSection />
      <Footer />
    </div>
  );
}
