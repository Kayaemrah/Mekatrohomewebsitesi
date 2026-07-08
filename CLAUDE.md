# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Proje

Mekatro Home Mühendislik'in kurumsal web sitesi: akıllı ev sistemleri (KNX), bina
otomasyonu, güvenlik/kamera sistemleri ile mobil uygulama ve web yazılımı hizmetlerini
tanıtan **tek sayfalık, tamamen statik** bir site. Build aracı, paket yöneticisi, test
veya lint altyapısı yoktur — düz HTML/CSS/JS.

Tüm içerik **Türkçe**dir; yeni içerik ve commit mesajları da Türkçe yazılmalıdır.

## Geliştirme

Yerelde görüntülemek için herhangi bir statik sunucu yeterli:

```bash
python3 -m http.server 8000   # http://localhost:8000
```

Doğrulama, tarayıcıda (veya Playwright ekran görüntüsüyle) masaüstü + mobil görünümü
kontrol ederek yapılır; otomatik test yoktur.

## Yapı ve mimari

- `index.html` — tüm bölümler tek sayfada, `#` çapa linkli navigasyon:
  hero → hizmetler (`#hizmetler`) → mobil kontrol (`#mobil`) → yazılım (`#yazilim`)
  → süreç (`#surec`) → neden biz (`#neden-biz`) → CTA bandı → iletişim (`#iletisim`) → footer.
- `css/style.css` — tek stil dosyası. Tema koyu ve tek temadır (light mod yok).
  Renk/font/radius değerleri `:root` içindeki CSS değişkenlerinde tanımlı
  (`--cyan`, `--indigo`, `--amber`, `--grad`, `--surface`...); yeni stiller bu
  değişkenleri kullanmalı. Sınıf adlandırması BEM benzeri (`blok__eleman--durum`).
  Responsive kırılımlar: 1024px ve 720px. `prefers-reduced-motion` desteklenir.
- `js/main.js` — bağımlılıksız vanilla JS (IIFE): sticky header, mobil menü,
  `IntersectionObserver` ile `.reveal` scroll animasyonu ve `data-count` sayaçları.
  Yeni animasyonlu bölümlere `reveal` sınıfını eklemek yeterlidir.
- Görseller harici dosya değildir: hero evi ve ikonlar inline SVG, telefon mockup'ı ve
  kod penceresi saf CSS. Harici görsel/CDN eklemekten kaçının; site kendi kendine yeterli
  kalmalı (fontlar hariç — Google Fonts: Inter + Space Grotesk).

## Yer tutucular (gerçek bilgiler gelince güncellenecek)

- Telefon: `+90 500 000 00 00` (tel:, wa.me linkleri, iletişim ve footer)
- E-posta: `info@mekatrohome.com` (mailto:, form `action`, footer)
- Adres: `Türkiye`
- Hero istatistikleri: `data-count` değerleri (150 proje, 10 yıl)

Bunlardan birini güncellerken index.html içinde TÜM geçtiği yerleri değiştirin
(her biri birden fazla yerde geçer).

## Çalışma kuralları

- Geliştirme `claude/mekatrohome-website-redesign-h3ff97` dalında yapılır ve oraya
  push edilir.
- **Bu CLAUDE.md her değişiklikte güncel tutulmalıdır:** yeni bölüm, dosya, kural veya
  yer tutucu değişikliği yapıldığında ilgili kısmı buraya da işleyin ve aynı commit'e
  dahil edin.
