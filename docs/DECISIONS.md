# Kararlar Günlüğü (Decision Log)

Her önemli teknik kararı ve **neden**ini burada tutuyoruz (mini-ADR yaklaşımı).
En yeni kararlar en üstte. Bu, ileride "neden böyle yaptık?" sorusunu yanıtlar
ve iş görüşmelerinde mühendislik muhakemeni gösterir.

---

## 2026-09-13 — Faz 0 kararları

### Mimari: Next.js (App Router) full-stack

- **Neden:** Frontend + backend + admin tek projede; SEO için SSR/SSG built-in;
  iş piyasasında çok aranıyor; tek dil (TypeScript) ile tüm katmanlar.
- **Sürümler:** Next 16.3.5, React 19.2, TypeScript 5, Tailwind v4.

### Bütçe / Hosting: Ücretsiz katman (Vercel + Neon)

- **Neden:** 0₺ ile production kalitesi. Push → otomatik deploy. Sonra yükseltilebilir.

### Önce public site (mock veri ile)

- **Neden:** Erken görünür sonuç = motivasyon. Veri erişimi `lib/projects.ts`'te
  izole; Faz 2'de mock → Prisma olacak, **sayfalar değişmeyecek**.

### Yaşayan dokümantasyon: `CLAUDE.md` + `docs/`

- **Neden:** `CLAUDE.md` her oturumda otomatik yüklenir → AI'ın hafızası taze kalır.
  `docs/` detayları (roadmap, kararlar, öğrenme) versiyonlu tutar.

### `src/` klasörü kullanılmadı (`app/` kökte)

- **Neden:** Daha sığ, başlangıçta daha az kafa karışıklığı.

### Açık (light) tema; sıcak nötr zemin + kobalt accent

- **Neden:** Referans (Hermes/Nous) minimalist ve nötr. Accent tek CSS değişkeninden
  (`--accent`) değiştirilebilir. Dark mode ileri bir fazda eklenebilir.

### `cn()` bağımlılıksız yazıldı

- **Neden:** Faz 0'ı hafif tutmak. Gerekirse ileride `clsx` + `tailwind-merge`'e yükseltilir.

### `.claude/` araç kapsamı dışında

- **Neden:** Harness'a ait dosyalar projemize ait değil. Prettier (`.prettierignore`),
  ESLint (`eslint.config.mjs`) ve Git (`.gitignore`) yok sayacak.
