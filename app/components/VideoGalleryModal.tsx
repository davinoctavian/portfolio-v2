import React from "react";

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
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div
        className="
          bg-white rounded-lg shadow-lg max-w-5xl w-full h-[80vh]
          flex flex-col relative text-black
        "
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-black hover:text-red-600 text-2xl font-bold cursor-pointer"
        >
          ✕
        </button>

        {/* Header */}
        <h2 className="text-2xl font-bold mb-4 text-center pt-4">
          Project Gallery
        </h2>

        {/* Scrollable content */}
        <div className="overflow-y-auto px-6 pb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {videos.map((video) => (
              <div key={video.title} className="flex flex-col items-center">
                <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
                <video
                  src={video.src}
                  controls
                  className="w-full rounded-lg shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
