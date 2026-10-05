/** Joins class names, dropping anything falsy — the one helper every component uses. */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}
