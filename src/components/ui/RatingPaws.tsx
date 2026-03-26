type RatingPawsProps = {
  label: string
  className?: string
}

export function RatingPaws({ label, className }: RatingPawsProps) {
  return (
    <div className={['review-rating', className].filter(Boolean).join(' ')} aria-label={label}>
      <span className="paw" aria-hidden="true" />
      <span className="paw" aria-hidden="true" />
      <span className="paw" aria-hidden="true" />
      <span className="paw" aria-hidden="true" />
      <span className="paw" aria-hidden="true" />
    </div>
  )
}
