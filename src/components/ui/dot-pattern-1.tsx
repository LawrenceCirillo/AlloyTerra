"use client";

interface DotPatternProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function DotPattern({ width = 5, height = 5, className }: DotPatternProps) {
  return (
    <div className={`absolute inset-0 z-0 ${className}`}>
      <div
        className="absolute h-full w-full"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, #E2E8F0 1px, transparent 1px)",
          backgroundSize: `${width * 2}px ${height * 2}px`,
        }}
      />
    </div>
  );
}
