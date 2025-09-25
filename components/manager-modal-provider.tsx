"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { ManagerCard } from "@/components/my-manager-card";
import { X as CloseIcon } from "lucide-react";

interface ManagerModalContextValue {
  open: () => void;
  close: () => void;
  isOpen: boolean;
}

const ManagerModalContext = createContext<ManagerModalContextValue | undefined>(undefined);

export function useManagerModal(): ManagerModalContextValue {
  const ctx = useContext(ManagerModalContext);
  if (!ctx) throw new Error("useManagerModal must be used within ManagerModalProvider");
  return ctx;
}

export function ManagerModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const previouslyFocusedElementRef = useRef<HTMLElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    previouslyFocusedElementRef.current = document.activeElement as HTMLElement | null;
    const { style } = document.body;
    const prevOverflow = style.overflow;
    style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 0);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }
      if (event.key !== "Tab") return;
      const container = dialogRef.current;
      if (!container) return;
      const focusable = container.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const isShift = event.shiftKey;
      const active = document.activeElement as HTMLElement | null;
      if (!isShift && active === last) {
        event.preventDefault();
        first.focus();
        return;
      }
      if (isShift && active === first) {
        event.preventDefault();
        last.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", handleKeyDown);
      style.overflow = prevOverflow;
      previouslyFocusedElementRef.current?.focus?.();
    };
  }, [isOpen, close]);

  const value = useMemo(() => ({ open, close, isOpen }), [open, close, isOpen]);

  return (
    <ManagerModalContext.Provider value={value}>
      {children}
      {isOpen && (
        <div
          aria-hidden
          className="fixed inset-0 z-[1000] bg-black/70 backdrop-blur-[1px]"
          onClick={close}
        />
      )}
      {isOpen && (
        <div className="fixed inset-0 z-[1001] grid place-items-center p-4 sm:p-6" aria-live="assertive">
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="manager-modal-title"
            className="relative w-full md:w-[846px] outline-none"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              type="button"
              aria-label="Fechar"
              onClick={close}
              className="absolute right-2 top-2 md:right-3 md:top-3 z-[1] inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-600/50 text-white hover:bg-slate-600/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/70"
            >
              <CloseIcon aria-hidden className="h-4 w-4" />
            </button>
            <ManagerCard titleId="manager-modal-title" />
          </div>
        </div>
      )}
    </ManagerModalContext.Provider>
  );
}


