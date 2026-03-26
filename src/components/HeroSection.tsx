import { withDelay } from '../utils/withDelay'
import heroContent from '../content/hero.json'
import { IconButton } from './ui/IconButton'
import { IconLink } from './ui/IconLink'

type HeroSectionProps = {
  onOpenModal: () => void
}

export function HeroSection({ onOpenModal }: HeroSectionProps) {
  return (
    <header className="card hero span-12" style={withDelay(0)}>
      <div className="brand">
        <img
          className="logo"
          src="/assets/icons/headerLogo.svg"
          alt={heroContent.logoAlt}
        />
        <div className="brand-text">
          <span className="eyebrow">{heroContent.eyebrow}</span>
          <span className="headline">{heroContent.headline}</span>
        </div>
      </div>
      <div className="hero-contact">
        <span className="hero-location">
          <span className="hero-location-initial">
            {heroContent.location.name.slice(0, 1)}
          </span>
          <span className="hero-location-rest">
            {heroContent.location.name.slice(1)}
          </span>
        </span>
        <div className="hero-phone-row">
          <a
            className="hero-phone tahu"
            href={`tel:${heroContent.phone.tel}`}
            aria-label={heroContent.phone.ariaLabel}
          >
            <img src="/assets/icons/telefon.svg" alt="" aria-hidden="true" />
            {heroContent.phone.display}
          </a>
          <div className="hero-phone-icons">
            <IconButton
              className="hero-contact-icon"
              ariaLabel={heroContent.location.emailAriaLabel}
              src="/assets/icons/mail-outline.svg"
              onClick={onOpenModal}
            />
            <IconLink
              className="hero-contact-icon hero-contact-icon--instagram"
              href={heroContent.location.instagramUrl}
              target="_blank"
              rel="noreferrer"
              ariaLabel={heroContent.location.instagramAriaLabel}
              src="/assets/icons/instagram.svg"
            />
          </div>
        </div>
      </div>
      <div className="hero-accent">
        <span className="tahu">{heroContent.brandName}</span>
        <button className="cta" type="button" onClick={onOpenModal}>
          {heroContent.cta}
        </button>
        <nav className="hero-links" aria-label="Schnellnavigation">
          <a href="#leistungen">Leistungen</a>
          <a href="#pakete">Pakete</a>
          <a href="#kundenstimmen">Kundenstimmen</a>
        </nav>
      </div>
    </header>
  )
}
