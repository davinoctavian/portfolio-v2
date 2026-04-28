import { useNavigate, useNavigation } from "react-router";
import { useState, useEffect } from "react";
import { Loading } from "../loading/loading";

type PageShellProps = {
  children: React.ReactNode;
  bgClass?: string;
  title?: string;
  hideBack?: boolean;
};

type OverlayPhase = "in" | "waiting" | "out" | "done";

export function PageShell({
  children,
  bgClass = "",
  title,
  hideBack = false,
}: PageShellProps) {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const [phase, setPhase] = useState<OverlayPhase>("done");

  const handleClose = () => {
    if (phase !== "done") return;
    setPhase("in");
  };

  const handleInDone = () => {
    setPhase("waiting");
    navigate("/");
  };

  useEffect(() => {
    if (phase === "waiting" && navigation.state === "idle") setPhase("out");
  }, [navigation.state, phase]);

  const handleOutDone = () => setPhase("done");

  return (
    <div
      className={`relative min-h-screen w-full flex flex-col items-center justify-start ${bgClass}`}
    >
      {bgClass && (
        <div className="absolute inset-0 bg-[#03040d]/60 pointer-events-none" />
      )}

      {/* Back button — hidden when a modal is open on top */}
      {!hideBack && (
        <div className="fixed top-5 right-6 z-30">
          <button onClick={handleClose} className="close-btn">
            <svg viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>Back</span>
          </button>
        </div>
      )}

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-8 py-16 page-enter">
        {title && (
          <div className="mb-8 text-center">
            <p className="section-title">{title}</p>
            <div className="mt-2 mx-auto w-16 h-px bg-gradient-to-r from-transparent via-[var(--cyan)] to-transparent opacity-60" />
          </div>
        )}
        {children}
      </div>

      {phase !== "done" && (
        <Loading
          phase={phase === "in" ? "in" : "out"}
          onInDone={handleInDone}
          onOutDone={handleOutDone}
        />
      )}
    </div>
  );
}
