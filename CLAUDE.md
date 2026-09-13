@AGENTS.md

# Güçlü Studio — Proje Hafızası

> Bu dosya her oturumda otomatik yüklenir. **Kısa ve güncel** tutulur; detaylar `docs/`'ta.
> Yukarıdaki `@AGENTS.md` Next.js 16'nın ajan kurallarıdır: kod yazmadan önce
> `node_modules/next/dist/docs/` içindeki sürümle-eşleşen dokümanları oku.

## Proje nedir

Yusuf'un kendi geliştirdiği uygulama/oyunları toplayan **vitrin + portfolio** sitesi.
Aynı zamanda **öğrenme amaçlı gerçek bir production projesi** (frontend, backend, DB,
auth, admin/CMS, SEO/GEO, deployment, performans, güvenlik).

## Teknoloji

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 — token'lar `app/globals.css` içinde
- (İleride) Neon Postgres + Prisma • Auth.js • Vercel Blob • Resend
- Hosting: Vercel • Bütçe: ücretsiz katman

## Komutlar

- `npm run dev` — geliştirme sunucusu (localhost:3000)
- `npm run build` — production build (TypeScript kontrolü dahil)
- `npm run lint` • `npm run typecheck` • `npm run format`

## Yapı & kurallar

- `app/` sayfalar/route'lar (kökte, `src/` yok) • `components/` bileşenler • `lib/` veri & yardımcılar
- Arayüz metinleri **Türkçe**.
- Renk/tipografi kararları **yalnızca** `app/globals.css` token'larında. Bileşenlerde
  semantik sınıf kullan: `bg-background`, `text-foreground`, `text-muted-foreground`,
  `border`, `bg-accent`. Sabit renk (örn. `text-zinc-800`) yazma.
- Veri erişimi tek noktadan: `lib/projects.ts` (Faz 2'de mock → Prisma olacak, sayfalar değişmeyecek).
- Etkileşimli bileşenlere `"use client"`; gerisi Server Component kalsın.
- Next 16: sayfa `params`/`searchParams` **Promise** → `await params`.
- `.claude/` klasörüne dokunma (Prettier/ESLint/Git yok sayar).

## Şu an neredeyiz / Sırada ne var

- **Durum:** Faz 0 neredeyse bitti; GitHub'a push edildi → https://github.com/yusufguclu/guclustudio
- **Sırada:** Vercel'e bağlama (otomatik deploy hattı). Sonra **Faz 1** (mock veriyle public site).
- Ayrıntılı ilerleme: `docs/ROADMAP.md`

## Belgeler

- `docs/ROADMAP.md` — fazlar ve ilerleme (`[x]`)
- `docs/DECISIONS.md` — kararlar + gerekçeleri
- `docs/LEARNING-LOG.md` — öğrenme günlüğü

## Çalışma ritmi

Anlamlı her adımdan sonra: ilgili `docs/`'u güncelle → `CLAUDE.md`'deki
"Şu an neredeyiz"i tazele → commit at.
