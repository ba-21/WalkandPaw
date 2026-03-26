import { withDelay } from '../utils/withDelay'
import packagesContent from '../content/packages.json'

export function PackagesSection() {
  return (
    <section
      id="pakete"
      className="card span-6 accent anchor-target"
      style={withDelay(260)}
      aria-labelledby="pakete-title"
    >
      <h2 id="pakete-title" className="section-title tahu">
        {packagesContent.title}
      </h2>
      <div className="packages">
        {packagesContent.packages.map((pack) => (
          <div className="package" key={pack.title}>
            <span className="tahu">{pack.title}</span>
            <span className="bold">{pack.subtitle}</span>
            <span>{pack.price}</span>
          </div>
        ))}
      </div>
      <p className="note">
        {packagesContent.notes.map((note, index) => (
          <span key={`note-${index}`}>
            <span className="note-bullet note-emphasis">{note}</span>
            {index < packagesContent.notes.length - 1 ? (
              <>
                <br />
                <br />
              </>
            ) : null}
          </span>
        ))}
      </p>
    </section>
  )
}
