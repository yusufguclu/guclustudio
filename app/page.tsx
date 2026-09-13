import Link from "next/link";
import { Container } from "@/components/layout/Container";

export default function Home() {
  return (
    <Container className="py-24 sm:py-32">
      <div className="max-w-2xl">
        <p className="font-mono text-sm text-accent">Güçlü Studio</p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
          Kendi geliştirdiğim uygulama ve oyunlar, tek çatı altında.
        </h1>

        <p className="mt-6 text-lg text-pretty text-muted-foreground">
          Bu site hem projelerimin vitrini hem de baştan sona kendi
          geliştirdiğim gerçek bir production projesi.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="inline-flex h-11 items-center rounded-lg bg-accent px-5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover"
          >
            Projeleri gör
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-11 items-center rounded-lg border px-5 text-sm font-medium transition-colors hover:bg-muted"
          >
            İletişim
          </Link>
        </div>

        <p className="mt-16 font-mono text-xs text-muted-foreground">
          🚧 Faz 0: temel kurulum tamamlandı. Faz 1&apos;de gerçek içerik
          geliyor.
        </p>
      </div>
    </Container>
  );
}
