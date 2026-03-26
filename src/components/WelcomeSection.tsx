import { withDelay } from '../utils/withDelay'
import welcomeContent from '../content/welcome.json'

export function WelcomeSection() {
  return (
    <section className="card accent span-7" style={withDelay(80)}>
      <h1 className="tahu section-title">{welcomeContent.title}</h1>
      <div className="copy">
        {welcomeContent.paragraphs.map((paragraph, index) => (
          <p key={`welcome-${index}`}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}
