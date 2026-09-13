import Link from "next/link";
import { Container } from "./Container";

/**
 * Footer — sayfanın en altındaki bilgi ve linkler.
 * Bu bir Server Component (etkileşim yok), bu yüzden "use client" gerekmez.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t">
      <Container className="flex flex-col gap-8 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-sm">
          <p className="font-mono text-sm font-semibold">Güçlü Studio</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Kendi geliştirdiğim uygulama ve oyunların vitrini.
          </p>
        </div>

        <nav className="flex flex-col gap-2 text-sm sm:items-end">
          <Link
            href="/projects"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Projeler
          </Link>
          <Link
            href="/contact"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            İletişim
          </Link>
        </nav>
      </Container>

      <Container className="border-t py-6">
        <p className="text-xs text-muted-foreground">
          © {year} Güçlü Studio. Tüm hakları saklıdır.
        </p>
      </Container>
    </footer>
  );
}
