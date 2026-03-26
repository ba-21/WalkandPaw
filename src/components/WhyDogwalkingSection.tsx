import { withDelay } from '../utils/withDelay'
import whyDogwalkingContent from '../content/why-dogwalking.json'

export function WhyDogwalkingSection() {
  return (
    <section
      id="leistungen"
      className="card span-5 anchor-target"
      style={withDelay(140)}
      aria-label="Leistungen"
    >
      <h2 className="section-title">{whyDogwalkingContent.title}</h2>
      <div className="copy">
        {whyDogwalkingContent.paragraphs.map((paragraph, index) => (
          <p key={`why-${index}`}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}
