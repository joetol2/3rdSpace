import { useState, type ReactNode } from "react";

type Item = { title: string; content: ReactNode };

export function Accordion({ items }: { items: Item[] }) {
  return (
    <div className="divide-y divide-border rounded-2xl border border-border bg-card">
      {items.map((item, i) => (
        <Row key={i} title={item.title}>
          {item.content}
        </Row>
      ))}
    </div>
  );
}

function Row({ title, children }: { title: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-medium text-foreground transition-colors hover:bg-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:text-lg"
      >
        <span>{title}</span>
        <span
          aria-hidden="true"
          className={`shrink-0 text-xl transition-transform ${open ? "rotate-45" : ""}`}
        >
          +
        </span>
      </button>
      {open && (
        <div className="space-y-3 px-5 pb-5 pt-1 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
          {children}
        </div>
      )}
    </div>
  );
}
