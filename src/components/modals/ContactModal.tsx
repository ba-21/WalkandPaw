import { BaseModal } from './BaseModal'
import contactContent from '../../content/contact-modal.json'

type ContactModalProps = {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      titleId="contact-title"
      title={contactContent.title}
      closeLabel={contactContent.closeLabel}
    >
      <form
        className="modal-form"
        action={contactContent.form.action}
        method="POST"
      >
        <input type="hidden" name="_subject" value={contactContent.form.subject} />
        <input
          type="text"
          name={contactContent.form.honeyField}
          style={{ display: 'none' }}
          aria-hidden="true"
          tabIndex={-1}
        />
        {contactContent.form.fields.map((field) => (
          <label key={field.name}>
            {field.label}
            {field.type === 'textarea' ? (
              <textarea
                name={field.name}
                rows={field.rows}
                required={field.required}
                placeholder={field.placeholder}
              />
            ) : (
              <input
                type={field.type}
                name={field.name}
                required={field.required}
                placeholder={field.placeholder}
              />
            )}
          </label>
        ))}
        <div className="modal-actions">
          <button className="ghost" type="button" onClick={onClose}>
            {contactContent.form.buttons.cancel}
          </button>
          <button className="cta" type="submit">
            {contactContent.form.buttons.submit}
          </button>
        </div>
      </form>
    </BaseModal>
  )
}
