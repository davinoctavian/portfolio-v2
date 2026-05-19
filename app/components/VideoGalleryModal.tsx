import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type VideoGalleryModalProps = {
  isOpen: boolean;
  onClose: () => void;
  videos: { src: string; title: string }[];
};

export default function VideoGalleryModal({
  isOpen,
  onClose,
  videos,
}: VideoGalleryModalProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      if (scrollRef.current) scrollRef.current.scrollTop = 0;
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Portal renders directly into document.body — completely outside any
  // parent stacking context (PageShell, layout divs, etc.) so z-index
  // is guaranteed to be on top of everything.
  return createPortal(
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        background: "rgba(3,4,13,.92)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
      }}
    >
      <div
        style={{ display: "flex", flexDirection: "column", height: "100dvh" }}
      >
        {/* Header */}
        <div
          className="flex-shrink-0 flex items-center justify-between px-5 py-4 border-b border-[rgba(0,240,255,.12)]"
          style={{ background: "rgba(5,18,30,.98)" }}
        >
          <p className="section-title text-sm">Project Videos</p>
          <button onClick={onClose} className="close-btn" aria-label="Close">
            <svg viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            Close
          </button>
        </div>

        {/* Scrollable body */}
        <div
          ref={scrollRef}
          className="overflow-y-auto p-4 sm:p-6"
          style={{ height: "calc(100dvh - 65px)" }}
        >
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
            {videos.map((video) => (
              <div key={video.title} className="flex flex-col gap-2">
                <p className="text-[rgba(255,255,255,.7)] text-xs tracking-wide font-semibold uppercase">
                  {video.title}
                </p>
                <video
                  src={video.src}
                  controls
                  preload="none"
                  className="w-full rounded-xl"
                  style={{ border: "1px solid rgba(0,240,255,.12)" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
