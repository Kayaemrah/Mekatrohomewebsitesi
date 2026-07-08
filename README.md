# Mekatro Home Mühendislik — Web Sitesi

Akıllı ev sistemleri, bina otomasyonu, güvenlik çözümleri ile mobil uygulama ve web
yazılımı hizmetlerini tanıtan modern, tek sayfalık kurumsal web sitesi.

## Yapı

```
index.html          Ana sayfa (tüm bölümler)
css/style.css       Site stilleri (koyu tema, responsive)
js/main.js          Etkileşimler (menü, animasyonlar, sayaçlar)
assets/favicon.svg  Site simgesi
```

## Özellikler

- **Tamamen statik** — herhangi bir hosting'e (cPanel, Netlify, GitHub Pages, Vercel)
  dosyaları yükleyerek yayınlanabilir; sunucu tarafı gerektirmez.
- **Mobil uyumlu** — telefon, tablet ve masaüstünde sorunsuz görünüm.
- **Koyu, teknoloji odaklı tasarım** — akıllı ev/otomasyon sektörüne uygun premium görünüm.
- **SEO hazır** — meta açıklama, Open Graph etiketleri, anlamlı başlık yapısı.
- **Bölümler:** Hero (animasyonlu akıllı ev görseli) · Hizmetler · Mobil Kontrol ·
  Yazılım & Dijital · Çalışma Süreci · Neden Biz · İletişim formu · Footer

## İletişim bilgileri

Telefon (`+90 540 123 35 36`) ve e-posta (`mekatrohome@gmail.com`) günceldir.

`index.html` içinde hâlâ yer tutucu olanlar:

| Yer tutucu | Nerede |
|---|---|
| `Türkiye` (adres) | İletişim bölümündeki adres kartı |
| Hero istatistikleri (150+ proje, 10+ yıl) | `data-count` değerleri |

## Yerelde görüntüleme

```bash
# Herhangi bir statik sunucu yeterli, örneğin:
python3 -m http.server 8000
# ardından tarayıcıda http://localhost:8000
```
