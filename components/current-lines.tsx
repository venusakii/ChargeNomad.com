export function CurrentLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-current-flow"
          style={{
            top: `${20 + i * 20}%`,
            width: "100%",
            animationDelay: `${i * 0.6}s`,
          }}
        />
      ))}
    </div>
  )
}
