export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src="https://cdn.poehali.dev/projects/fd499ac2-df97-4d30-ae92-7fea988e0e55/bucket/719e19c1-1c43-4c0f-ab49-b4d5bf1e356d.jpg"
        alt="Nexus AI"
        className="w-9 h-9 rounded-xl object-cover"
        style={{ filter: "drop-shadow(0 0 8px hsl(210 100% 56% / 0.5))" }}
      />
      <span className="text-xl font-bold tracking-tight">Nexus AI</span>
    </div>
  )
}
