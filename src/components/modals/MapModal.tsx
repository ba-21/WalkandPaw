import { BaseModal } from './BaseModal'
import mapContent from '../../content/map-modal.json'

type MapModalProps = {
  isOpen: boolean
  onClose: () => void
}

export function MapModal({ isOpen, onClose }: MapModalProps) {
  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      titleId="map-title"
      title={mapContent.title}
      closeLabel={mapContent.closeLabel}
      className="map-modal"
    >
      <div className="map-modal-body">
        <img
          className="map-modal-image"
          src={mapContent.image.src}
          alt={mapContent.image.alt}
        />
      </div>
    </BaseModal>
  )
}
