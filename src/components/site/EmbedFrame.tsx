type Props = {
  src: string;
  title: string;
  fallbackLink: string;
  fallbackLabel: string;
  minHeight?: number;
};

const PLACEHOLDER_PREFIX = "REPLACE_WITH_";

export function EmbedFrame({ src, title, fallbackLink, fallbackLabel, minHeight = 600 }: Props) {
  const isPlaceholder = src.startsWith(PLACEHOLDER_PREFIX);
  const linkIsPlaceholder = fallbackLink.startsWith(PLACEHOLDER_PREFIX);

  return (
    <div className="w-full">
      <div
        className="w-full overflow-hidden rounded-2xl border border-border bg-card"
        style={{ minHeight }}
      >
        {isPlaceholder ? (
          <div
            className="flex h-full w-full items-center justify-center p-8 text-center text-sm text-muted-foreground"
            style={{ minHeight }}
          >
            <div>
              <p className="font-medium text-foreground">{title} embed goes here</p>
              <p className="mt-2">
                Replace the placeholder URL in <code className="rounded bg-muted px-1 py-0.5">src/config/site.ts</code>.
              </p>
            </div>
          </div>
        ) : (
          <iframe
            src={src}
            title={title}
            loading="lazy"
            className="h-full w-full"
            style={{ minHeight, border: 0 }}
          />
        )}
      </div>
      {!linkIsPlaceholder && (
        <p className="mt-3 text-sm">
          <a
            href={fallbackLink}
            target="_blank"
            rel="noreferrer noopener"
            className="underline underline-offset-4 hover:text-accent"
          >
            {fallbackLabel}
          </a>
        </p>
      )}
    </div>
  );
}
