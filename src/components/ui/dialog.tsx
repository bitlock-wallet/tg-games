import * as React from "react";
import { X } from "lucide-react";
import { cn } from "./utils";

type DialogContextValue = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

const DialogContext = React.createContext<DialogContextValue>({});

export function Dialog({ open, onOpenChange, children }: React.PropsWithChildren<{ open?: boolean; onOpenChange?: (o: boolean) => void }>) {
  return <DialogContext.Provider value={{ open, onOpenChange }}>{children}</DialogContext.Provider>;
}

export function DialogContent({ className = "", children, showCloseButton = true }: React.PropsWithChildren<{ className?: string; showCloseButton?: boolean }>) {
  const ctx = React.useContext(DialogContext);
  const open = !!ctx.open;
  const onOpenChange = ctx.onOpenChange || (() => {});

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-0">
      <div className="absolute inset-0 bg-black/80" onClick={(e) => { e.stopPropagation(); onOpenChange(false); }} />

      <div
        data-slot="dialog-content"
        className={cn(
          "relative z-50 w-full max-w-[min(92%,420px)] sm:max-w-lg max-h-[80vh] overflow-y-auto small-scrollbar scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent border bg-background p-4 sm:p-6 shadow-lg sm:rounded-lg",
          className
        )}
        role="dialog"
        aria-modal="true"
      >
        <div onClick={(e) => e.stopPropagation()}>
          {children}
        </div>

        {showCloseButton && (
          <button
            onClick={(e) => { e.stopPropagation(); onOpenChange(false); }}
            className="absolute right-3 top-3 rounded-sm opacity-70 hover:opacity-100 focus:outline-none"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}

export const DialogHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = "", ...props }) => (
  <div data-slot="dialog-header" className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)} {...props} />
);

export const DialogTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ className = "", ...props }) => (
  <h3 data-slot="dialog-title" className={cn("text-lg font-semibold leading-none tracking-tight", className)} {...props} />
);

export const DialogDescription: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = "", ...props }) => (
  <div data-slot="dialog-description" className={cn("text-sm text-muted-foreground", className)} {...props} />
);

export default Dialog;
