import { withDelay } from '../utils/withDelay'
import footerContent from '../content/footer.json'
import { IconButton } from './ui/IconButton'
import { IconLink } from './ui/IconLink'

type FooterSectionProps = {
  onOpenModal: () => void
  onOpenLegal: (modal: 'impressum' | 'agb') => void
}

export function FooterSection({ onOpenModal, onOpenLegal }: FooterSectionProps) {
  return (
    <footer className="card span-12 footer" style={withDelay(500)}>
      <div className="footer-left">
        <div className="contact-list">
          <IconLink
            href={`tel:${footerContent.phone.tel}`}
            ariaLabel={footerContent.phone.ariaLabel}
            dataTooltip={footerContent.phone.tooltip}
            src="/assets/icons/telefon.svg"
          />
          <IconButton
            ariaLabel={footerContent.email.ariaLabel}
            dataTooltip={footerContent.email.tooltip}
            src="/assets/icons/mail.svg"
            onClick={onOpenModal}
          />
          <IconLink
            href={footerContent.instagram.url}
            target="_blank"
            rel="noreferrer"
            ariaLabel={footerContent.instagram.ariaLabel}
            dataTooltip={footerContent.instagram.tooltip}
            src="/assets/icons/instagram.svg"
          />
        </div>
      </div>
      <div className="footer-copy tahu">
        &copy; {new Date().getFullYear()} {footerContent.copyright}
      </div>
      <span className="footer-links">
        <button
          type="button"
          className="link-button"
          onClick={() => onOpenLegal('impressum')}
        >
          {footerContent.legal.impressumLabel}
        </button>{' '}
        /{' '}
        <button type="button" className="link-button" onClick={() => onOpenLegal('agb')}>
          {footerContent.legal.agbLabel}
        </button>
      </span>
    </footer>
  )
}
