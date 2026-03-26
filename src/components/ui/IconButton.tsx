type IconButtonProps = {
  ariaLabel: string
  src: string
  onClick: () => void
  className?: string
  dataTooltip?: string
}

export function IconButton({ ariaLabel, src, onClick, className, dataTooltip }: IconButtonProps) {
  return (
    <button
      type="button"
      className={className}
      aria-label={ariaLabel}
      data-tooltip={dataTooltip}
      onClick={onClick}
    >
      <img src={src} alt="" aria-hidden="true" />
    </button>
  )
}
