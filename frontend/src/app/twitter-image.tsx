/**
 * Twitter/X uses the same card as Open Graph, so the image itself is
 * re-exported rather than duplicated — the two can never drift apart.
 *
 * `runtime` is the exception: Next reads it statically at build time and needs
 * a literal here, so it is declared rather than forwarded.
 */
export const runtime = "edge";

export { alt, size, contentType, default } from "./opengraph-image";
