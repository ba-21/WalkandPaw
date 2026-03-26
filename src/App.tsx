import { useState } from 'react'
import { AboutSection } from './components/AboutSection'
import { FooterSection } from './components/FooterSection'
import { GallerySection } from './components/GallerySection'
import { HeroSection } from './components/HeroSection'
import { IndividualCareSection } from './components/IndividualCareSection'
import { PackagesSection } from './components/PackagesSection'
import { ReviewsSection } from './components/ReviewsSection'
import { WelcomeSection } from './components/WelcomeSection'
import { WhyDogwalkingSection } from './components/WhyDogwalkingSection'
import { ContactModal } from './components/modals/ContactModal'
import { LegalModal } from './components/modals/LegalModal'
import { MapModal } from './components/modals/MapModal'

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [legalModal, setLegalModal] = useState<'impressum' | 'agb' | null>(null)
  const [isMapModalOpen, setIsMapModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  const openMapModal = () => setIsMapModalOpen(true)
  const closeMapModal = () => setIsMapModalOpen(false)

  return (
    <div className="page">
      <div className="bento-grid">
        <HeroSection onOpenModal={openModal} />

        <WelcomeSection />

        <WhyDogwalkingSection />

        <IndividualCareSection />

        <PackagesSection />

        <GallerySection />

        <AboutSection onOpenMapModal={openMapModal} />

        <ReviewsSection />

        <FooterSection onOpenModal={openModal} onOpenLegal={setLegalModal} />
      </div>

      <ContactModal isOpen={isModalOpen} onClose={closeModal} />

      <MapModal isOpen={isMapModalOpen} onClose={closeMapModal} />

      <LegalModal active={legalModal} onClose={() => setLegalModal(null)} />
    </div>
  )
}
