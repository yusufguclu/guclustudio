/**
 * cn: Koşullu Tailwind sınıflarını birleştiren küçük yardımcı.
 * Örn: cn("px-3", isActive && "font-bold", undefined) -> "px-3 font-bold"
 * Yanlış/boş değerleri (false, null, undefined) atlar.
 */
export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}
