export function Loading() {
  return (
    <div
      className="
            fixed inset-0 bg-black z-[9999]
            pointer-events-none overflow-hidden
            animate-warpFade
        "
    >
      {Array.from({ length: 80 }).map((_, i) => {
        const angle = Math.floor(Math.random() * 360) + "deg";
        return (
          <div
            key={i}
            className="absolute top-1/2 left-1/2
                w-[2px] h-20
                bg-white opacity-80
                origin-center
                animate-warpStreak
            "
            style={{ ["--angle" as any]: angle }}
          />
        );
      })}
    </div>
  );
}
