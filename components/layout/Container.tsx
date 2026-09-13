import { cn } from "@/lib/utils";

/**
 * Container: Sayfa içeriğini ortalar ve maksimum genişlik + yatay
 * boşluk verir. Tüm sayfalarda tutarlı hizalama için kullanılır.
 */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)}
    >
      {children}
    </div>
  );
}
