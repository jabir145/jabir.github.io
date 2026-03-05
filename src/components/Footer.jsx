export default function Footer() {
  return (
    <footer className="relative py-10 px-6 border-t border-[rgba(255,255,255,0.05)]" style={{ zIndex: 1 }}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-mono text-sm text-gray-600">
          <span className="text-neon-cyan">{'<'}</span>
          <span className="text-white">MJ</span>
          <span className="text-neon-cyan">{' />'}</span>
          <span className="ml-3">Muhammed Jabir · Dubai, UAE</span>
        </div>
        {/* <p className="font-mono text-xs text-gray-700">
          Crafted with{' '}
          <span className="text-neon-purple">♥</span>
          {' '}using React · Tailwind · Framer Motion
        </p> */}
      </div>
    </footer>
  )
}
