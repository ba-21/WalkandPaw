import type { ReactNode } from 'react'

type BaseModalProps = {
  isOpen: boolean
  onClose: () => void
  title: string
  titleId: string
  className?: string
  closeLabel: string
  children: ReactNode
}

export function BaseModal({
  isOpen,
  onClose,
  title,
  titleId,
  className,
  closeLabel,
  children,
}: BaseModalProps) {
  if (!isOpen) {
    return null
  }

  return (
    <div className="modal-overlay" role="presentation" onClick={onClose}>
      <div
        className={['modal', className].filter(Boolean).join(' ')}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal-header">
          <h2 id={titleId}>{title}</h2>
          <button className="modal-close" type="button" onClick={onClose}>
            {closeLabel}
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}
