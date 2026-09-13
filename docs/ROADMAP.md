# Güçlü Studio — Yol Haritası (ROADMAP)

Bu dosya, onaylanan faz planının **yaşayan hâlidir**. Adımlar tamamlandıkça
`[x]` ile işaretlenir. Yeni kararlar `docs/DECISIONS.md`'ye, öğrenilenler
`docs/LEARNING-LOG.md`'ye yazılır.

---

## Faz 0 — Kurulum & İskelet

- [x] Next.js projesi (TS + Tailwind v4 + ESLint + App Router)
- [x] Kod kalitesi: Prettier + prettier-plugin-tailwindcss; `format`/`lint`/`typecheck` scriptleri
- [x] Tasarım token'ları (`app/globals.css`) + fontlar (Geist Sans/Mono)
- [x] İskelet layout: Header, Footer, Container + placeholder anasayfa
- [x] Yaşayan dokümantasyon: `CLAUDE.md` + `docs/`
- [ ] Git deposu + ilk commit + GitHub push
- [ ] Vercel'e bağlama (otomatik deploy hattı)

## Faz 1 — Public Site (mock veri) + Canlı Sürüm ← ilk büyük milestone

- [ ] `lib/types.ts` (Project tipi) + `lib/projects.ts` (mock veri + `getAllProjects`/`getProjectBySlug`)
- [ ] Anasayfa: hero + öne çıkan projeler
- [ ] Projeler listesi (`/projects`) — `ProjectCard` / `ProjectGrid`
- [ ] Proje detay (`/projects/[slug]`) + `generateStaticParams` + `generateMetadata`
- [ ] İletişim sayfası (statik, modern)
- [ ] Responsive + erişilebilirlik geçişi
- [ ] SEO: `sitemap.ts`, `robots.ts`, OG görsel
- [ ] Vercel'de production yayın + preview deploy testi

## Faz 2 — Veritabanı (Neon + Prisma)

- [ ] Neon Postgres + Prisma şeması (`Project`), migration, seed (mock → DB)
- [ ] `lib/projects.ts` içi Prisma sorgularına döner (sayfalar değişmez)

## Faz 3 — Auth + Admin Panel + CRUD

- [ ] Auth.js ile `/admin` girişi (tek yönetici)
- [ ] Admin'de proje CRUD (ekle/düzenle/sil) + react-hook-form + zod

## Faz 4 — İletişim formu + Görsel + SEO/GEO

- [ ] Gerçek iletişim formu (Resend ile mail)
- [ ] Vercel Blob ile görsel yükleme
- [ ] JSON-LD/structured data, sosyal kart görselleri; GEO (llms.txt vb.)

## Faz 5 — 3D & interaktif animasyonlar

- [ ] Framer Motion (scroll/parallax); gerektiğinde React Three Fiber (3D)

## Faz 6 — Performans, güvenlik, izleme

- [ ] Lighthouse optimizasyonu, güvenlik başlıkları/rate limit, analytics + hata izleme
