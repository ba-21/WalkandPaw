import { withDelay } from '../utils/withDelay'
import aboutContent from '../content/about.json'

type AboutSectionProps = {
  onOpenMapModal: () => void
}

export function AboutSection({ onOpenMapModal }: AboutSectionProps) {
  return (
    <section className="card span-7 accent" style={withDelay(380)}>
      <div className="about">
        <div className="about-text">
          <span className="title bold">{aboutContent.title}</span>
          <span className="subtitle">{aboutContent.subtitle}</span>
          <button
            type="button"
            className="about-map-button"
            onClick={onOpenMapModal}
            aria-label={aboutContent.map.buttonLabel}
          >
            <img
              className="about-map"
              src={aboutContent.map.image}
              alt={aboutContent.map.alt}
            />
          </button>
        </div>
        <img
          className="about-image"
          src={aboutContent.portrait.image}
          alt={aboutContent.portrait.alt}
        />
      </div>
    </section>
  )
}
