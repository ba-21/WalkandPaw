import galleryContent from '../content/gallery.json'
import { withDelay } from '../utils/withDelay'

export function GallerySection() {
  return (
    <section className="card span-12 gallery" style={withDelay(320)}>
      <div className="gallery-grid">
        {galleryContent.images.map((image, index) => (
          <figure key={image.src} className={`gallery-item ${image.className ?? ''}`.trim()}>
            {image.label ? <span className="gallery-label">{image.label}</span> : null}
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              decoding="async"
            />
          </figure>
        ))}
      </div>
    </section>
  )
}
