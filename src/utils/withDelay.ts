import type { CSSProperties } from 'react'

export const withDelay = (delay: number): CSSProperties =>
  ({
    '--delay': `${delay}ms`,
  }) as CSSProperties
