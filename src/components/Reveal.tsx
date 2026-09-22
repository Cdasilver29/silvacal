// Server component: renders content fully visible. MotionController arms the
// hidden-then-animate state after mount, and only for elements below the fold.
export default function Reveal({
  children,
  className = '',
  variant = 'rise',
  delay = 0,
  stagger = false,
}: {
  children: React.ReactNode;
  className?: string;
  variant?: 'rise' | 'wipe';
  delay?: number;
  /** Stagger direct children in sequence instead of revealing the wrapper. */
  stagger?: boolean;
}) {
  return (
    <div
      data-reveal={stagger ? 'stagger' : variant}
      className={className}
      style={delay ? ({ '--reveal-delay': `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </div>
  );
}
