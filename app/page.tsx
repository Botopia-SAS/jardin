import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import MenuSection from '@/components/MenuSection'
import ReservationSection from '@/components/ReservationSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <MenuSection />
      <ReservationSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
