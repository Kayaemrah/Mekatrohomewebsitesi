# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Proje

Mekatro Home Mühendislik'in kurumsal web sitesi: akıllı ev sistemleri (KNX), bina
otomasyonu, güvenlik/kamera sistemleri ile mobil uygulama ve web yazılımı hizmetlerini
tanıtan **hibrit çok sayfalı, tamamen statik** bir site (ana sayfa + Ürünler,
Hakkımızda, İletişim sayfaları). Build aracı, paket yöneticisi, test veya lint
altyapısı yoktur — düz HTML/CSS/JS.

Tüm içerik **Türkçe**dir; yeni içerik ve commit mesajları da Türkçe yazılmalıdır.

## Geliştirme

Yerelde görüntülemek için herhangi bir statik sunucu yeterli:

```bash
python3 -m http.server 8000   # http://localhost:8000
```

Doğrulama, tarayıcıda (veya Playwright ekran görüntüsüyle) masaüstü + mobil görünümü
kontrol ederek yapılır; otomatik test yoktur.

## Yapı ve mimari

**Hibrit çok sayfalı yapı:** Ana sayfa (`index.html`) tek-akış özettir; ayrıca
`urunler.html`, `hakkimizda.html`, `iletisim.html` ayrı tam sayfalardır. Header ve
footer her sayfada tekrarlanır (build aracı yok) — menü/footer değişikliğini DÖRT
HTML dosyasına da uygulayın. İç sayfa menüsünde ana sayfa bölümleri `index.html#...`
ile, ana sayfada aynı bölümler saf `#...` ile linklenir (ana sayfada kaydırma akıcı
kalsın diye). Her sayfa kendi `<title>`, `meta description`, `canonical`, OG etiketi
ve BreadcrumbList JSON-LD'sine sahiptir; `<html data-title-key/data-desc-key>` ile
dile göre başlık/açıklama i18n'den güncellenir (`js/i18n.js`).

- `index.html` — ana sayfa, `#` çapa linkli navigasyon:
  hero → hizmetler (`#hizmetler`) → KNX (`#knx`, SMIL animasyonlu bus diyagramı)
  → ürünler (`#urunler`, 4 ürün kartı: Mekatrox Control, MKT Player IPTV,
  Dijital KPSS, YDS Kelime Ustası) → mobil kontrol (`#mobil`)
  → yazılım (`#yazilim`) → süreç (`#surec`) → neden biz (`#neden-biz`)
  → CTA bandı → iletişim (`#iletisim`) → footer. Bölüm arka planları
  `section--alt` ile dönüşümlüdür; araya bölüm eklerken sırayı koruyun.
- **Çok dillilik:** site TR/EN/DE/AR destekler. Kaynak metin HTML içinde Türkçedir;
  çeviriler `js/i18n.js` içindeki sözlüklerde durur. Çevrilecek öğeler `data-i18n`
  (metin) ve `data-i18n-ph` (placeholder) öznitelikleriyle işaretlenir. **Yeni metin
  eklerken dört sözlüğe de aynı anahtarı ekleyin.** Arapça seçilince `<html dir="rtl">`
  olur; RTL düzeltmeleri style.css sonundaki `[dir="rtl"]` bloğundadır. Seçim
  `localStorage("mekatro-dil")` ile hatırlanır; dil menüsü header'dadır.
- `css/style.css` — tek stil dosyası. Tema koyu ve tek temadır (light mod yok).
  Renk/font/radius değerleri `:root` içindeki CSS değişkenlerinde tanımlı
  (`--cyan`, `--indigo`, `--amber`, `--grad`, `--surface`...); yeni stiller bu
  değişkenleri kullanmalı. Sınıf adlandırması BEM benzeri (`blok__eleman--durum`).
  Responsive kırılımlar: 1024px (mobil menü burada devreye girer) ve 720px.
  `prefers-reduced-motion` desteklenir.
- `js/main.js` — bağımlılıksız vanilla JS (IIFE): sticky header, mobil menü,
  `IntersectionObserver` ile `.reveal` scroll animasyonu, `data-count` sayaçları ve
  hero'daki etkileşimli akıllı ev demosu (lamba+dimmer, klima fanı, alarm sireni —
  `#smartHouse` üzerindeki `light-on/fan-on/alarm-on` sınıfları ve kartlardaki
  id'lerle çalışır; metinler `window.mekatroI18n.t()` ile dilden gelir).
  Yeni animasyonlu bölümlere `reveal` sınıfını eklemek yeterlidir.
- Yazılım bölümündeki kod penceresi (`#codeSample`) dile göre değişir: içerik
  `js/i18n.js` içindeki `CODE` sözlüğünden innerHTML olarak basılır; dosya adı
  `code.file` anahtarındadır.
- Görseller: marka görselleri `assets/` altındadır — `logo.png` (tam logo, şeffaf),
  `logo-mark.png` (header/footer'daki M monogramı), `favicon.png`, `og-image.png`,
  `mekatrox.png`, `mktplayer.png`, `dijitalkpss.png`, `yds.png` (Ürünler bölümü
  uygulama ikonları). Geri kalan tüm görseller inline
  SVG veya saf CSS'tir (hero evi, KNX diyagramı, telefon mockup'ı, kod penceresi).
  Harici görsel/CDN eklemekten kaçının (fontlar hariç — Google Fonts: Inter + Space Grotesk).

## İletişim bilgileri ve kalan yer tutucular

Gerçek bilgiler (08.07.2026'da güncellendi):

- Telefon: `+90 540 123 35 36` — linklerde `tel:+905401233536` ve `wa.me/905401233536`
- E-posta: `mekatrohome@gmail.com` (mailto: linkleri, footer)
- İletişim formu FormSubmit ile çalışır (`action="https://formsubmit.co/mekatrohome@gmail.com"`).
  Robot doğrulaması açıktır (`_captcha=true` — FormSubmit gönderim sonrası reCAPTCHA
  sayfası gösterir); ek koruma olarak gizli `_honey` tuzak alanı vardır.
  İlk gönderimde FormSubmit e-postaya bir aktivasyon maili yollar; onaylanması gerekir.
  Başarılı gönderim sonrası `?gonderildi=1#iletisim` adresine dönülür ve `js/main.js`
  bu parametreyi görünce teşekkür notunu gösterir.

- Adres: `Türkiye / Gaziantep` (13.07.2026'da güncellendi; dört dil sözlüğünde `il.c3v`)

Hâlâ yer tutucu olanlar:

- Hero istatistikleri: `data-count` değerleri (150 proje, 10 yıl)

Bunlardan birini güncellerken index.html içinde TÜM geçtiği yerleri değiştirin
(her biri birden fazla yerde geçer).

## SEO ve yapay zeka görünürlüğü

- `index.html` `<head>` içinde: canonical, dört dil için `hreflang`, Open Graph +
  Twitter kartı (`assets/og-image.png`, 1200×630) ve **JSON-LD yapılandırılmış veri**
  (`@graph`: Organization/LocalBusiness, WebSite, SoftwareApplication=Mekatrox,
  Service+OfferCatalog, FAQPage). JSON-LD, Google zengin sonuçları ve AI Overviews /
  yapay zeka özetleri için okunan asıl kaynaktır — hizmet, ürün veya iletişim bilgisi
  değişince buradaki şemayı da güncelleyin.
- `sitemap.xml` ve `robots.txt` kök dizindedir; robots yapay zeka botlarına (GPTBot,
  OAI-SearchBot, PerplexityBot, Google-Extended) açıktır ve sitemap'i işaret eder.
- Dil seçimi `?lang=en|de|ar` URL parametresiyle de yüklenir (hreflang uyumu);
  `js/i18n.js` sonunda öncelik: URL > localStorage > varsayılan (tr).
- `assets/og-image.png` PIL ile üretildi; marka/başlık değişirse yeniden üretilmeli.

## Yayınlama

- `.github/workflows/deploy-pages.yml` — geliştirme dalına her push'ta site
  dosyaları `gh-pages` dalına kopyalanır ve GitHub Pages oradan yayınlar
  (https://kayaemrah.github.io/Mekatrohomewebsitesi/). `gh-pages` dalına elle
  push yapmayın; içeriği workflow yönetir. Özel alan adı workflow'daki
  `cname: www.mekatrohome.com` satırıyla korunur — bu satır silinirse her yayında
  GitHub Pages alan adı ayarı kaybolur. (Birincil alan adı `www`'ludur; kök alan adı
  A kayıtları düzelince GitHub kökü otomatik olarak www'ya yönlendirir.)
- Özel alan adı (mekatrohome.com) bağlanacaksa: GitHub repo Settings → Pages →
  Custom domain + isimtescil DNS'inde A/CNAME kayıtları güncellenmeli.

## Çalışma kuralları

- Geliştirme `claude/mekatrohome-website-redesign-h3ff97` dalında yapılır ve oraya
  push edilir.
- **Bu CLAUDE.md her değişiklikte güncel tutulmalıdır:** yeni bölüm, dosya, kural veya
  yer tutucu değişikliği yapıldığında ilgili kısmı buraya da işleyin ve aynı commit'e
  dahil edin.
