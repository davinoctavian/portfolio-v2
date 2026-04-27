const STREAK_COUNT = 60;
const STREAKS = Array.from({ length: STREAK_COUNT }, (_, i) => ({
  id: i,
  angle: Math.round((360 / STREAK_COUNT) * i + (i % 3) * 4) + "deg",
}));

type LoadingProps = {
  phase: "in" | "out";
  onInDone?: () => void;
  onOutDone?: () => void;
};

export function Loading({ phase, onInDone, onOutDone }: LoadingProps) {
  return (
    <div
      className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden"
      style={{
        background: "black",
        animation:
          phase === "in"
            ? "warpIn 0.8s ease-in forwards"
            : "warpOut 0.6s ease-out forwards",
        willChange: "opacity",
      }}
      onAnimationEnd={(e) => {
        if (e.target !== e.currentTarget) return;
        if (phase === "in") onInDone?.();
        else onOutDone?.();
      }}
    >
      {phase === "in" &&
        STREAKS.map(({ id, angle }) => (
          <div
            key={id}
            className="absolute top-1/2 left-1/2 w-[2px] h-20 bg-white opacity-80 origin-center"
            style={{
              ["--angle" as any]: angle,
              animation: "warpStreak 0.7s ease-in forwards",
              willChange: "transform, opacity",
            }}
          />
        ))}
    </div>
  );
}
