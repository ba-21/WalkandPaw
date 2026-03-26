import { withDelay } from '../utils/withDelay'
import individualCareContent from '../content/individual-care.json'

export function IndividualCareSection() {
  return (
    <section className="card span-6" style={withDelay(200)}>
      <h2 className="section-title">{individualCareContent.title}</h2>
      <div className="copy">
        {individualCareContent.paragraphs.map((paragraph, index) => (
          <p key={`care-${index}`}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}
