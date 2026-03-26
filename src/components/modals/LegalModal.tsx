import { BaseModal } from './BaseModal'
import agbContent from '../../content/legal-agb.json'
import impressumContent from '../../content/legal-impressum.json'

type LegalModalProps = {
  active: 'impressum' | 'agb' | null
  onClose: () => void
}

type LegalSegment = string | { link: { href: string; text: string } }

type LegalSection = {
  title: string
  paragraphs: LegalSegment[][]
}

type LegalContent = {
  title: string
  closeLabel: string
  sections: LegalSection[]
}

const renderSegment = (segment: LegalSegment, key: string) => {
  if (typeof segment === 'string') {
    return <span key={key}>{segment}</span>
  }

  if ('link' in segment) {
    return (
      <a key={key} href={segment.link.href} target="_blank" rel="noreferrer">
        {segment.link.text}
      </a>
    )
  }

  return null
}

export function LegalModal({ active, onClose }: LegalModalProps) {
  if (!active) {
    return null
  }

  const content: LegalContent = active === 'impressum' ? impressumContent : agbContent

  return (
    <BaseModal
      isOpen={Boolean(active)}
      onClose={onClose}
      titleId="legal-title"
      title={content.title}
      closeLabel={content.closeLabel}
    >
      <div className="modal-body legal">
        {content.sections.map((section) => (
          <section className="legal-section" key={section.title}>
            <h3>{section.title}</h3>
            {section.paragraphs.map((paragraph, paragraphIndex) => (
              <p key={`${section.title}-${paragraphIndex}`}>
                {paragraph.map((segment, segmentIndex) =>
                  renderSegment(segment, `${section.title}-${paragraphIndex}-${segmentIndex}`)
                )}
              </p>
            ))}
          </section>
        ))}
      </div>
    </BaseModal>
  )
}
