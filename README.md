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
- **SEO hazır** — meta açıklama, Open Graph etiketleri, anlamlı başlık yapısı,
  JSON-LD yapılandırılmış veri ve "Gaziantep akıllı ev / Gaziantep KNX" odaklı
  yerel SEO içeriği.
- **Bölümler:** Hero (animasyonlu akıllı ev görseli) · Hizmetler · Mobil Kontrol ·
  Yazılım & Dijital · Çalışma Süreci · Neden Biz · İletişim formu · Footer
- **Sayfalar:** `index.html` · `gaziantep-akilli-ev.html` (yerel SEO iniş sayfası) ·
  `urunler.html` · `hakkimizda.html` · `iletisim.html`

## İletişim bilgileri

Telefon (`+90 540 123 35 36`) ve e-posta (`mekatrohome@gmail.com`) günceldir.

`index.html` içinde hâlâ yer tutucu olanlar:

| Yer tutucu | Nerede |
|---|---|
| Hero istatistiği (10+ yıl) | `data-count` değeri |

(Adres `Türkiye / Gaziantep` olarak güncellendi; "150+ tamamlanan proje"
istatistiği doğrulanamadığı için kaldırıldı.)

## Yerelde görüntüleme

```bash
# Herhangi bir statik sunucu yeterli, örneğin:
python3 -m http.server 8000
# ardından tarayıcıda http://localhost:8000
```
