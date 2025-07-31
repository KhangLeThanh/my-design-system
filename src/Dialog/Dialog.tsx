import React, { useEffect, useRef } from "react";
import "./dialog.css";

export interface DialogProps
  extends React.DialogHTMLAttributes<HTMLDialogElement> {
  size?: "xs" | "sm" | "md" | "lg";
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Dialog: React.FC<DialogProps> = ({
  size = "sm",
  className = "",
  open = false,
  title = "Title Dialog",
  onClose,
  children,
  ...props
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (open && dialog) {
      dialog.showModal?.();
      dialog.focus();

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [open, onClose]);
  return open ? (
    <dialog
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="dialog-title"
      className={`dialog-backdrop size-${size} ${className}`}
      {...props}
    >
      <div
        className="dialog-wrapper"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="header-dialog">
          <h3 id="dialog-title">{title}</h3>
          <button
            type="button"
            aria-label="Close"
            className="dialog-close-btn"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              aria-hidden="true"
            >
              <path d="M2.146 2.146a.5.5 0 0 1 .708 0L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
        </div>
        <div className="content-dialog">{children}</div>
      </div>
    </dialog>
  ) : (
    <></>
  );
};

export default Dialog;
