import Nav from './components/Nav'
import Hero from './components/Hero'
import ProblemSection from './components/ProblemSection'
import Features from './components/Features'
import AISection from './components/AISection'
import HowItWorks from './components/HowItWorks'
import DashboardPreview from './components/DashboardPreview'
import Pricing from './components/Pricing'
import TrustSection from './components/TrustSection'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'

export default function App() {
  return (
    <div className="font-sans">
      <Nav />
      <Hero />
      <ProblemSection />
      <Features />
      <AISection />
      <HowItWorks />
      <DashboardPreview />
      <TrustSection />
      <Pricing />
      <FAQ />
      <Footer />
      <CookieConsent />
    </div>
  )
}
