// PDFModal.tsx
import { useEffect, useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  src?: string;      // public URL to a PDF
  file?: File;       // or a File selected by the user
  title?: string;
};

export default function PDFModal({ open, onClose, src, file, title = "Preview" }: Props) {
  const [blobUrl, setBlobUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    setBlobUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  useEffect(() => {
    // Close on Esc
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    // Prevent background scroll while open
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = original; };
  }, [open]);

  if (!open) return null;

  const url = blobUrl ?? src;
  return (
    <div
      className="fixed inset-0 z-50 bg-black/60"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
    >

      {/* Modal panel */}
      <div className="absolute inset-0 p-4 sm:p-6 flex items-center justify-center">
        <div className="w-full max-w-5xl h-[80dvh] flex flex-col bg-white dark:bg-neutral-900 rounded-xl shadow-xl overflow-hidden relative" onClick={(e) => e.stopPropagation()}>
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 shrink-0 px-4 py-3 border-b border-neutral-200 dark:border-neutral-800">
            <h2 className="text-sm font-medium text-neutral-700 dark:text-neutral-200">
              {title}
            </h2>
            <div className="flex items-center gap-3">
            {url && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 dark:text-blue-400 underline"
              >
                Open PDF
              </a>
            )}
            <button
              type="button"
              onClick={onClose}
              className="text-neutral-700 dark:text-neutral-200 rounded px-3 cursor-pointer py-1.5 text-sm border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              Close
            </button>
            </div>
          </div>

          {/* Content */}
          <div className="w-full flex-1 min-h-0">
            {url ? (
              <iframe
                title={title}
                src={`${url}#page=1&zoom=page-width`}
                className="w-full h-full"
              />
            ) : (
              <div className="w-full h-full grid place-items-center text-neutral-500">
                No PDF provided
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
