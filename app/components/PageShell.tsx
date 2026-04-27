import { useNavigate, useNavigation } from "react-router";
import { useState, useEffect } from "react";
import { Loading } from "../loading/loading";

type PageShellProps = {
  children: React.ReactNode;
  className?: string;
};

type OverlayPhase = "in" | "waiting" | "out" | "done";

export function PageShell({ children, className = "" }: PageShellProps) {
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
    if (phase === "waiting" && navigation.state === "idle") {
      setPhase("out");
    }
  }, [navigation.state, phase]);

  const handleOutDone = () => setPhase("done");

  return (
    <div
      className={`
        relative min-h-screen w-full m-0 p-10
        flex flex-col items-center justify-center
        menu-panel ${className}
      `}
    >
      <div
        className="
          relative z-10 w-full h-full
          bg-[rgba(25,36,37,0.54)]
          p-6 pb-10 rounded-xl
          text-[#88fffe] text-center
          shadow-inner shadow-cyan-300/30
          overflow-y-auto
        "
      >
        {children}
      </div>

      <div
        onClick={handleClose}
        className="
          relative z-20 -top-6
          text-center px-6 py-3 rounded-xl
          bg-[rgba(25,36,37,0.83)]
          shadow-inner shadow-cyan-300/30
          cursor-pointer select-none
        "
      >
        Close
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
