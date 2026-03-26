import { BaseModal } from './BaseModal'
import agbContent from '../../content/legal-agb.json'
import impressumContent from '../../content/legal-impressum.json'

type LegalModalProps = {
  active: 'impressum' | 'agb' | null
  onClose: () => void
}

type LegalLink = {
  href: string
  text: string
}

type LegalParagraph = {
  text: string
  link?: LegalLink
  suffix?: string
}

type LegalSection = {
  title: string
  paragraphs: LegalParagraph[]
}

type LegalContent = {
  title: string
  closeLabel: string
  sections: LegalSection[]
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
            {section.paragraphs.map((paragraph, paragraphIndex) => {
              const hasLink = Boolean(paragraph.link?.href && paragraph.link?.text)
              const hasSuffix = Boolean(paragraph.suffix)

              return (
                <p key={`${section.title}-${paragraphIndex}`}>
                  {paragraph.text}
                  {hasLink ? (
                    <a href={paragraph.link?.href} target="_blank" rel="noreferrer">
                      {paragraph.link?.text}
                    </a>
                  ) : null}
                  {hasSuffix ? paragraph.suffix : null}
                </p>
              )
            })}
          </section>
        ))}
      </div>
    </BaseModal>
  )
}
