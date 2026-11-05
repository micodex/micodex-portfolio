"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Dialog({ isOpen, onClose, children }: DialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === dialogRef.current) {
          onClose();
        }
      }}
      aria-labelledby="dialog-title"
      className="skill-dialog
        m-auto w-[calc(100%-2rem)] max-w-2xl
        rounded-2xl border-2 border-gray-300
        bg-white p-0 text-gray-800 shadow-2xl
        dark:border-gray-800 dark:bg-gray-900
        dark:text-gray-100
      "
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close dialog"
        className="absolute top-4 left-4
            rounded-full p-2 text-gray-500
            transition hover:bg-gray-100 hover:text-gray-900
            dark:hover:bg-gray-800 dark:hover:text-white
          "
      >
        <X size={20} />
      </button>

      <div className="max-h-[100vh] overflow-y-auto p-6">{children}</div>
    </dialog>
  );
}
