# Öğrenme Günlüğü (Learning Log)

Her oturumda ne öğrendiğimizi buraya yazıyoruz. Hem bilgiyi pekiştirir hem de
CV/mülakat için "ne öğrendim, nasıl uyguladım" hikâyesini oluşturur.

---

## 2026-09-13 — Faz 0: Kurulum & İskelet

### Ne yaptık

- `create-next-app` ile Next.js 16 projesi kurduk (TypeScript + Tailwind v4 + ESLint + App Router).
- Prettier + Tailwind class sıralama eklentisini ekledik; `format`/`lint`/`typecheck` scriptleri.
- `app/globals.css`'te tasarım token'ları (CSS değişkenleri) tanımladık.
- Header / Footer / Container bileşenlerini ve placeholder anasayfayı yazdık.
- Yaşayan dokümantasyon sistemini kurduk (bu dosyalar).
- Git deposunu başlattık (`main` dalı), ilk commit'i attık ve `gh` CLI ile GitHub'a **public** push ettik.

### Öğrenilen kavramlar

- **App Router (dosya tabanlı routing):** Klasör = URL. `app/page.tsx` → `/`,
  `app/contact/page.tsx` → `/contact`, `app/projects/[slug]/page.tsx` → `/projects/...`.
- **Server vs Client Component:** Varsayılan **Server** (tarayıcıya JS gitmez, hızlı).
  Etkileşim gerekiyorsa (state, event, tarayıcı API'si) dosyanın başına `"use client"`.
  Örn: `Header` client (mobil menü + aktif link), `Footer` server.
- **Next 16 kırıcı değişiklik:** Sayfa `params` ve `searchParams` artık **Promise**.
  Kullanım: `const { slug } = await params`. (Faz 1'de dinamik route'ta uygulayacağız.)
- **PageProps / LayoutProps<'/route'>:** Next'in dev/build sırasında otomatik ürettiği
  global tipler; route'a göre `params` tiplerini kendisi çıkarır.
- **next/font:** Geist fontları build zamanında optimize edilip CSS değişkeni olarak veriliyor
  (`--font-geist-sans`). Harici font isteği yok → performans + gizlilik.
- **Tailwind v4:** Yapılandırma artık JS config değil, CSS içinde `@theme`. Token'larımızı
  `@theme inline` ile utility sınıflarına bağladık (`bg-accent`, `text-muted-foreground`).
- **`cn()` deseni:** Koşullu class'ları temiz birleştirme (`cn("px-3", isActive && "font-bold")`).

### Komutlar (ezber)

- `npm run dev` → geliştirme (localhost:3000, canlı yenileme)
- `npm run build` → production build + TypeScript kontrolü
- `npm run lint` / `npm run typecheck` / `npm run format`
