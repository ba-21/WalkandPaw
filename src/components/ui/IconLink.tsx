type IconLinkProps = {
  ariaLabel: string
  src: string
  href: string
  className?: string
  dataTooltip?: string
  target?: string
  rel?: string
}

export function IconLink({
  ariaLabel,
  src,
  href,
  className,
  dataTooltip,
  target,
  rel,
}: IconLinkProps) {
  return (
    <a
      className={className}
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      data-tooltip={dataTooltip}
    >
      <img src={src} alt="" aria-hidden="true" />
    </a>
  )
}
