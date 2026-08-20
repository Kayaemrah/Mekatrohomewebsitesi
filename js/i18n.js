/* MEKATRO HOME — çok dilli içerik (TR / EN / DE / AR)
   Yeni metin eklerken dört sözlüğe de aynı anahtarla ekleyin.
   Arapça seçilince <html dir="rtl"> olur; RTL stilleri style.css sonundadır. */
(function () {
  "use strict";

  var I18N = {
    /* =============== TÜRKÇE =============== */
    tr: {
      "meta.title": "Mekatro Home Mühendislik | Akıllı Ev, Bina Otomasyonu ve Yazılım Çözümleri",
      "meta.desc": "Mekatro Home Mühendislik: KNX akıllı ev sistemleri, bina otomasyonu, güvenlik kamera sistemleri, mobil uygulama ve web sitesi geliştirme. Keşiften devreye almaya uçtan uca mühendislik.",
      "nav.hizmetler": "Hizmetler", "nav.knx": "KNX", "nav.mobil": "Mobil Kontrol",
      "nav.yazilim": "Yazılım", "nav.surec": "Süreç", "nav.neden": "Neden Biz", "nav.teklif": "Teklif Alın",
      "hero.badge": "KNX Sertifikalı Akıllı Ev & Otomasyon Mühendisliği",
      "hero.t1": "Yaşam alanlarınız", "hero.t2": "artık daha akıllı.",
      "hero.desc": "Akıllı ev sistemlerinden bina otomasyonuna, güvenlik çözümlerinden size özel mobil uygulama ve web yazılımlarına — keşiften devreye almaya kadar uçtan uca mühendislik hizmeti sunuyoruz.",
      "hero.cta1": "Ücretsiz Keşif Talep Edin", "hero.cta2": "Hizmetlerimizi İnceleyin",
      "hero.s1": "Tamamlanan Proje", "hero.s2": "Yıllık Deneyim", "hero.s3": "Müşteri Memnuniyeti",
      "hero.f1s": "Salon · İklimlendirme", "hero.f2t": "Aydınlatma", "hero.f2s": "4 oda aktif",
      "hero.f3t": "Güvenlik", "hero.f3s": "Sistem devrede", "hero.f3off": "Sistem kapalı",
      "code.file": "mekatro-app · akilli-ev.js",
      "hiz.tag": "Hizmetlerimiz", "hiz.t1": "Tek çatı altında", "hiz.t2": "akıllı çözümler",
      "hiz.desc": "Donanımdan yazılıma, projelendirmeden 7/24 desteğe kadar ihtiyacınız olan her şey tek bir mühendislik ekibinden.",
      "c1.t": "KNX Akıllı Ev Sistemleri",
      "c1.d": "Dünya standardı KNX altyapısıyla aydınlatma, perde, ısıtma ve tüm senaryolarınızı tek merkezden yönetin. Sesli komut ve uzaktan erişim desteği.",
      "c1.l1": "Aydınlatma & perde senaryoları", "c1.l2": "Sesli asistan entegrasyonu", "c1.l3": "Enerji tasarrufu optimizasyonu",
      "c2.t": "Bina Otomasyonu",
      "c2.d": "Ofis, otel, AVM ve sitelerde HVAC, aydınlatma ve enerji yönetimini merkezileştiren ölçeklenebilir bina otomasyon çözümleri.",
      "c2.l1": "Merkezi HVAC & enerji yönetimi", "c2.l2": "Ortak alan otomasyonu", "c2.l3": "Raporlama & izleme panelleri",
      "c3.t": "Güvenlik & Kamera Sistemleri",
      "c3.d": "Akıllı kameralar, hareket ve kapı-pencere sensörleriyle eviniz ve işyeriniz her an gözetim altında. Telefonunuzdan canlı izleyin.",
      "c3.l1": "IP kamera kurulumu & kayıt", "c3.l2": "Hareket & kapı-pencere sensörleri", "c3.l3": "Mobil alarm bildirimleri",
      "c4.t": "İklimlendirme & Enerji Kontrolü",
      "c4.d": "Isıtma-soğutma sistemlerinizi odaya, saate ve alışkanlıklarınıza göre optimize edin; konfordan ödün vermeden faturaları düşürün.",
      "c4.l1": "Oda bazlı sıcaklık kontrolü", "c4.l2": "Zamanlama & senaryo yönetimi", "c4.l3": "Tüketim takibi",
      "c5.t": "Mobil Uygulama Geliştirme",
      "c5.d": "iOS ve Android için markanıza özel mobil uygulamalar: akıllı ev kontrol panelleri, kurumsal uygulamalar ve IoT arayüzleri.",
      "c5.l1": "iOS & Android uygulamalar", "c5.l2": "Akıllı ev kontrol arayüzleri", "c5.l3": "Bildirim & uzaktan yönetim",
      "c6.t": "Web Sitesi & Yazılım Çözümleri",
      "c6.d": "Modern, hızlı ve mobil uyumlu web siteleri; işletmenize özel panel ve otomasyon yazılımları ile dijital dönüşümünüzü tamamlayın.",
      "c6.l1": "Kurumsal web siteleri", "c6.l2": "Yönetim panelleri & entegrasyonlar", "c6.l3": "SEO uyumlu, mobil öncelikli tasarım",
      "knx.tag": "KNX Teknolojisi", "knx.t1": "Evinizin görünmez sinir sistemi:",
      "knx.desc": "Dünyanın en yaygın açık bina otomasyon standardı KNX, evinizdeki tüm cihazları tek bir akıllı hat üzerinde konuşturur. Butonlar, sensörler ve motorlar aynı dili konuşur; siz sadece senaryoyu seçersiniz.",
      "knx.b1t": "Tek hat, sınırsız senaryo", "knx.b1d": "Anahtarlar, sensörler ve aktüatörler aynı bus hattı üzerinden haberleşir.",
      "knx.b2t": "Markadan bağımsız", "knx.b2d": "500'den fazla üreticinin cihazı birbiriyle uyumlu çalışır; tek markaya mahkûm kalmazsınız.",
      "knx.b3t": "Geleceğe hazır", "knx.b3d": "İhtiyacınız büyüdükçe hatta yeni cihazlar eklenir; altyapınız aynı kalır.",
      "knx.cta": "KNX Keşfi Talep Edin", "knx.bus": "KNX Bus",
      "knx.dev1": "Akıllı Buton", "knx.dev2": "Hareket Sensörü", "knx.dev3": "Termostat", "knx.dev4": "Panjur Motoru",
      "knx.status": "Bus hattı aktif · cihazlar haberleşiyor",
      "nav.urunler": "Ürünler",
      "nav.hakkimizda": "Hakkımızda",
      "urun.metaTitle": "Ürünlerimiz | Mekatrox, MKT Player, Dijital KPSS, YDS — Mekatro Home",
      "urun.metaDesc": "Mekatro Home'un geliştirdiği yazılımlar: Mekatrox KNX kontrol yazılımı, MKT Player IPTV oynatıcı, Dijital KPSS ve YDS Kelime Ustası eğitim uygulamaları.",
      "urun.lead": "KNX kontrolünden IPTV yayınına, eğitim uygulamalarına kadar kendi geliştirdiğimiz, birden fazla platformda çalışan yazılımlar.",
      "hak.metaTitle": "Hakkımızda | Mekatro Home Mühendislik — Gaziantep",
      "hak.metaDesc": "Mekatro Home Mühendislik; Gaziantep merkezli KNX akıllı ev, bina otomasyonu, güvenlik ve yazılım çözümlerinde uçtan uca mühendislik sunar.",
      "hak.tag": "Hakkımızda", "hak.t1": "Mühendislik disiplini,", "hak.t2": "insan odaklı hizmet.",
      "hak.lead": "Mekatro Home Mühendislik; akıllı ev, bina otomasyonu ve yazılımı tek çatı altında buluşturan bir mühendislik firmasıdır.",
      "hak.p1": "Gaziantep merkezli ekibimiz, KNX sertifikalı mühendislik altyapısıyla konut ve ticari projelerde aydınlatma, iklimlendirme, güvenlik ve enerji yönetimini tek sistemde toplar. Keşiften devreye almaya, bakımdan 7/24 desteğe kadar sürecin tamamını üstleniriz.",
      "hak.p2": "Donanımın yanında yazılımı da kendimiz geliştiririz: KNX kontrol yazılımımız Mekatrox, IPTV oynatıcımız MKT Player ve Google Play'deki eğitim uygulamalarımız bu vizyonun ürünüdür. Amacımız, teknolojiyi yaşam alanlarında sade ve güvenilir biçimde kullanılır kılmaktır.",
      "il.metaTitle": "İletişim | Mekatro Home Mühendislik — Gaziantep",
      "il.metaDesc": "Mekatro Home ile iletişime geçin: telefon +90 540 123 35 36, e-posta mekatrohome@gmail.com, Gaziantep. Ücretsiz keşif ve teklif için formu doldurun.",
      "pro.tag": "Ürünlerimiz", "pro.t1": "Kendi geliştirdiğimiz", "pro.t2": "yazılımlar",
      "pro.desc": "Mühendislik deneyimimizi kendi ürünlerimize taşıyoruz: KNX kontrolünden IPTV yayınına, eğitim uygulamalarına kadar birden fazla platformda çalışan kendi yazılımlarımız.",
      "pro.sub": "KNX Kontrol Yazılımı",
      "pro.mx.desc": "KNX sistemleri için geliştirdiğimiz kontrol yazılımı. Aydınlatma, perde, iklimlendirme, güvenlik ve senaryoları tek arayüzden gerçek zamanlı yönetin.",
      "pro.cta": "Mekatrox Demosu İsteyin",
      "pro.iptv.sub": "IPTV Player Yazılımı",
      "pro.iptv.desc": "Kendi geliştirdiğimiz IPTV oynatıcı yazılımı. Canlı yayın, film ve dizileri akıcı ve modern arayüzle izleyin; LG televizyon, Android ve Windows'ta çalışır.",
      "pro.iptv.cta": "MKT Player Hakkında Bilgi Alın",
      "pro.play": "Google Play'de İncele", "pro.msstore": "Microsoft Store",
      "pro.kpss.sub": "KPSS Hazırlık Uygulaması",
      "pro.kpss.desc": "KPSS'ye hazırlananlar için geliştirdiğimiz mobil uygulama. Güncel sorular, denemeler ve akıllı çalışma araçlarıyla doğru hedefe odaklanın.",
      "pro.yds.sub": "YDS Kelime & Okuma Uygulaması",
      "pro.yds.desc": "YDS'ye hazırlananlar için kelime ve okuma uygulaması. Kelime dağarcığınızı güçlendirin, okuma pratiğiyle sınavda öne geçin.",
      "mob.tag": "Mobil Kontrol", "mob.t1": "Eviniz,", "mob.t2": "cebinizde.",
      "mob.desc": "Nerede olursanız olun; aydınlatmadan güvenliğe, sıcaklıktan perdelere kadar evinizin tüm sistemlerini telefonunuzdan yönetin.",
      "mob.f1t": "Uzaktan tam kontrol", "mob.f1d": "Dünyanın her yerinden evinizi izleyin ve yönetin.",
      "mob.f2t": "Anlık güvenlik bildirimleri", "mob.f2d": "Hareket algılandığında telefonunuza anında bildirim gelsin.",
      "mob.f3t": "Kişisel senaryolar", "mob.f3d": "\"Günaydın\", \"Film gecesi\", \"Evden çıkış\" gibi tek dokunuşluk senaryolar.",
      "mob.f4t": "Enerji takibi", "mob.f4d": "Tüketiminizi gerçek zamanlı izleyin, tasarrufu görün.",
      "mob.cta": "Demo Talep Edin",
      "app.hi": "Hoş geldiniz 👋", "app.panel": "Evim Kontrol Paneli",
      "app.t1": "Salon", "app.t1s": "Açık · %75", "app.t2": "Klima",
      "app.t3": "Perdeler", "app.t3s": "%40 açık", "app.t4": "Alarm", "app.t4s": "Devrede",
      "app.scene": "Aktif Senaryo", "app.scenet": "🌙 Gece Modu", "app.energy": "Bugünkü enerji tüketimi",
      "yaz.tag": "Yazılım & Dijital", "yaz.t1": "Sadece otomasyon değil,", "yaz.t2": "yazılım da biziz.",
      "yaz.desc": "Mühendislik altyapımızı yazılımla birleştiriyoruz. İşletmenize özel mobil uygulamalar, kurumsal web siteleri ve IoT entegrasyonlarıyla dijital dünyada da yanınızdayız.",
      "yaz.m1t": "📱 Mobil Uygulama", "yaz.m1d": "iOS & Android — markanıza özel, mağazalarda yayına hazır.",
      "yaz.m2t": "🌐 Kurumsal Web Sitesi", "yaz.m2d": "Hızlı, modern, SEO uyumlu ve yönetimi kolay siteler.",
      "yaz.m3t": "⚙️ Panel & Otomasyon Yazılımı", "yaz.m3d": "İş süreçlerinizi otomatikleştiren özel yönetim panelleri.",
      "yaz.m4t": "🔗 IoT Entegrasyonları", "yaz.m4d": "Cihazlarınızı ve sistemlerinizi birbirine bağlayan çözümler.",
      "yaz.cta": "Projenizi Konuşalım",
      "sur.tag": "Çalışma Sürecimiz", "sur.t1": "Keşiften teslime", "sur.t2": "4 adım",
      "sur.desc": "Her projede aynı disiplin: dinle, tasarla, kur, destekle.",
      "sur.s1t": "Keşif & Analiz", "sur.s1d": "Mekânınızı yerinde inceliyor, ihtiyaçlarınızı ve bütçenizi birlikte netleştiriyoruz.",
      "sur.s2t": "Projelendirme", "sur.s2d": "Size özel sistem mimarisini çiziyor, şeffaf ve detaylı teklif sunuyoruz.",
      "sur.s3t": "Kurulum & Entegrasyon", "sur.s3d": "Cihaz montajı, yazılım kurulumu ve tüm sistemlerin entegrasyonunu tamamlıyoruz.",
      "sur.s4t": "Devreye Alma & Destek", "sur.s4d": "Sistemi test edip eğitimini veriyor, bakım ve 7/24 destekle yanınızda kalıyoruz.",
      "ned.tag": "Neden Mekatro Home?", "ned.t1": "Farkımız,", "ned.t2": "mühendislik.",
      "ned.w1t": "Uzman Mühendis Kadro", "ned.w1d": "KNX sertifikalı, deneyimli ekibimizle projeleriniz güvenilir ellerde.",
      "ned.w2t": "Uçtan Uca Çözüm", "ned.w2d": "Donanım, yazılım, kurulum ve destek — hepsi tek muhataptan.",
      "ned.w3t": "Dünya Standartları", "ned.w3d": "KNX gibi açık ve global standartlarla markaya bağımlı kalmazsınız.",
      "ned.w4t": "Satış Sonrası Destek", "ned.w4d": "Kurulumdan sonra da bakım, güncelleme ve 7/24 destekle yanınızdayız.",
      "ned.w5t": "Enerji Tasarrufu", "ned.w5d": "Doğru otomasyon, konforu artırırken faturalarınızı düşürür.",
      "ned.w6t": "Güvenlik Önceliği", "ned.w6d": "Verileriniz ve eviniz için güvenliği en baştan tasarlıyoruz.",
      "cta.t": "Projenizi konuşmaya hazır mısınız?", "cta.d": "Ücretsiz keşif ve teklif için bugün bize ulaşın.",
      "cta.btn": "Hemen İletişime Geçin",
      "il.tag": "İletişim", "il.t1": "Bize", "il.t2": "ulaşın",
      "il.desc": "Sorularınız, keşif talepleriniz ve projeleriniz için formu doldurun ya da doğrudan arayın — en kısa sürede dönüş yapalım.",
      "il.c1l": "Telefon", "il.c2l": "E-posta", "il.c3l": "Adres", "il.c3v": "Türkiye / Gaziantep",
      "il.c4v": "Hızlı mesaj gönderin",
      "form.ad": "Ad Soyad", "form.adph": "Adınız Soyadınız", "form.tel": "Telefon",
      "form.ep": "E-posta", "form.hizmet": "İlgilendiğiniz Hizmet",
      "form.o1": "Akıllı Ev Sistemleri", "form.o2": "Bina Otomasyonu", "form.o3": "Güvenlik & Kamera Sistemleri",
      "form.o4": "Mobil Uygulama Geliştirme", "form.o5": "Web Sitesi & Yazılım", "form.o6": "Diğer",
      "form.mesaj": "Mesajınız", "form.mesajph": "Projenizden kısaca bahsedin...",
      "form.btn": "Mesajı Gönder", "form.captcha": "Gönderim sırasında kısa bir robot doğrulaması açılır.", "form.note": "Teşekkürler! Mesajınız bize ulaştı, en kısa sürede dönüş yapacağız.",
      "foot.desc": "Akıllı ev, bina otomasyonu ve yazılım çözümlerinde uçtan uca mühendislik.",
      "foot.h1": "Hizmetler", "foot.l1": "Akıllı Ev Sistemleri", "foot.l2": "Bina Otomasyonu",
      "foot.l3": "Güvenlik Sistemleri", "foot.l4": "Mobil Uygulama", "foot.l5": "Web Sitesi & Yazılım",
      "foot.h2": "Kurumsal", "foot.k1": "Neden Biz", "foot.k2": "Çalışma Sürecimiz", "foot.k3": "İletişim",
      "foot.h3": "İletişim", "foot.rights": "Tüm hakları saklıdır."
    },

    /* =============== ENGLISH =============== */
    en: {
      "meta.title": "Mekatro Home Engineering | Smart Home, Building Automation & Software Solutions",
      "meta.desc": "Mekatro Home Engineering: KNX smart home systems, building automation, security camera systems, mobile app and website development. End-to-end engineering from survey to commissioning.",
      "nav.hizmetler": "Services", "nav.knx": "KNX", "nav.mobil": "Mobile Control",
      "nav.yazilim": "Software", "nav.surec": "Process", "nav.neden": "Why Us", "nav.teklif": "Get a Quote",
      "hero.badge": "KNX Certified Smart Home & Automation Engineering",
      "hero.t1": "Your living spaces", "hero.t2": "are now smarter.",
      "hero.desc": "From smart home systems to building automation, from security solutions to custom mobile apps and web software — end-to-end engineering from survey to commissioning.",
      "hero.cta1": "Request a Free Survey", "hero.cta2": "Explore Our Services",
      "hero.s1": "Completed Projects", "hero.s2": "Years of Experience", "hero.s3": "Customer Satisfaction",
      "hero.f1s": "Living Room · Climate", "hero.f2t": "Lighting", "hero.f2s": "4 rooms on",
      "hero.f3t": "Security", "hero.f3s": "System armed", "hero.f3off": "System off",
      "code.file": "mekatro-app · smart-home.js",
      "hiz.tag": "Our Services", "hiz.t1": "Smart solutions", "hiz.t2": "under one roof",
      "hiz.desc": "Everything you need from a single engineering team — from hardware to software, from design to 24/7 support.",
      "c1.t": "KNX Smart Home Systems",
      "c1.d": "Manage lighting, blinds, heating and all your scenes from one place with world-standard KNX infrastructure. Voice control and remote access included.",
      "c1.l1": "Lighting & blind scenes", "c1.l2": "Voice assistant integration", "c1.l3": "Energy-saving optimization",
      "c2.t": "Building Automation",
      "c2.d": "Scalable building automation that centralizes HVAC, lighting and energy management for offices, hotels, malls and residences.",
      "c2.l1": "Central HVAC & energy management", "c2.l2": "Common-area automation", "c2.l3": "Reporting & monitoring dashboards",
      "c3.t": "Security & CCTV Systems",
      "c3.d": "Smart cameras, motion and door-window sensors keep your home and business watched at all times. Watch live from your phone.",
      "c3.l1": "IP camera installation & recording", "c3.l2": "Motion & door-window sensors", "c3.l3": "Mobile alarm notifications",
      "c4.t": "Climate & Energy Control",
      "c4.d": "Optimize heating and cooling by room, schedule and habits; cut your bills without sacrificing comfort.",
      "c4.l1": "Room-by-room temperature control", "c4.l2": "Scheduling & scene management", "c4.l3": "Consumption tracking",
      "c5.t": "Mobile App Development",
      "c5.d": "Custom iOS and Android apps for your brand: smart home control panels, corporate apps and IoT interfaces.",
      "c5.l1": "iOS & Android apps", "c5.l2": "Smart home control interfaces", "c5.l3": "Notifications & remote management",
      "c6.t": "Website & Software Solutions",
      "c6.d": "Modern, fast, mobile-friendly websites plus custom dashboards and automation software to complete your digital transformation.",
      "c6.l1": "Corporate websites", "c6.l2": "Admin panels & integrations", "c6.l3": "SEO-ready, mobile-first design",
      "knx.tag": "KNX Technology", "knx.t1": "Your home's invisible nervous system:",
      "knx.desc": "KNX, the world's most widespread open building automation standard, lets every device in your home communicate over a single smart bus line. Switches, sensors and motors speak the same language — you just pick the scene.",
      "knx.b1t": "One line, unlimited scenes", "knx.b1d": "Switches, sensors and actuators all communicate over the same bus line.",
      "knx.b2t": "Brand independent", "knx.b2d": "Devices from 500+ manufacturers work together — no vendor lock-in.",
      "knx.b3t": "Future proof", "knx.b3d": "As your needs grow, new devices simply join the line; the infrastructure stays.",
      "knx.cta": "Request a KNX Survey", "knx.bus": "KNX Bus",
      "knx.dev1": "Smart Switch", "knx.dev2": "Motion Sensor", "knx.dev3": "Thermostat", "knx.dev4": "Blind Actuator",
      "knx.status": "Bus active · devices communicating",
      "nav.urunler": "Products",
      "nav.hakkimizda": "About",
      "urun.metaTitle": "Our Products | Mekatrox, MKT Player, Dijital KPSS, YDS — Mekatro Home",
      "urun.metaDesc": "Software built by Mekatro Home: Mekatrox KNX control software, MKT Player IPTV player, Dijital KPSS and YDS Kelime Ustası education apps.",
      "urun.lead": "From KNX control and IPTV streaming to education apps — software we build ourselves that runs across multiple platforms.",
      "hak.metaTitle": "About | Mekatro Home Engineering — Gaziantep",
      "hak.metaDesc": "Mekatro Home Engineering delivers end-to-end engineering in KNX smart home, building automation, security and software, based in Gaziantep, Türkiye.",
      "hak.tag": "About Us", "hak.t1": "Engineering discipline,", "hak.t2": "human-focused service.",
      "hak.lead": "Mekatro Home Engineering brings smart home, building automation and software together under one roof.",
      "hak.p1": "Based in Gaziantep, our KNX-certified engineering team unifies lighting, climate, security and energy management into a single system for residential and commercial projects. We handle the whole process — from survey to commissioning, from maintenance to 24/7 support.",
      "hak.p2": "Beyond hardware, we build our own software: our Mekatrox KNX control software, our MKT Player IPTV player and our education apps on Google Play are products of this vision. Our goal is to make technology simple and dependable in everyday living spaces.",
      "il.metaTitle": "Contact | Mekatro Home Engineering — Gaziantep",
      "il.metaDesc": "Get in touch with Mekatro Home: phone +90 540 123 35 36, email mekatrohome@gmail.com, Gaziantep. Fill in the form for a free survey and quote.",
      "pro.tag": "Our Products", "pro.t1": "The software", "pro.t2": "we build ourselves",
      "pro.desc": "We bring our engineering experience into our own products: from KNX control and IPTV streaming to education apps — software we build that runs across multiple platforms.",
      "pro.sub": "KNX Control Software",
      "pro.mx.desc": "Our in-house control software for KNX systems. Manage lighting, blinds, climate, security and scenes from a single interface in real time.",
      "pro.cta": "Request a Mekatrox Demo",
      "pro.iptv.sub": "IPTV Player Software",
      "pro.iptv.desc": "Our own IPTV player software. Watch live TV, movies and series with a smooth, modern interface — runs on LG TV, Android and Windows.",
      "pro.iptv.cta": "Learn About MKT Player",
      "pro.play": "View on Google Play", "pro.msstore": "Microsoft Store",
      "pro.kpss.sub": "KPSS Exam Prep App",
      "pro.kpss.desc": "Our mobile app for KPSS candidates. Stay focused on your goal with up-to-date questions, mock exams and smart study tools.",
      "pro.yds.sub": "YDS Vocabulary & Reading App",
      "pro.yds.desc": "A vocabulary and reading app for YDS candidates. Strengthen your vocabulary and get ahead in the exam with reading practice.",
      "mob.tag": "Mobile Control", "mob.t1": "Your home,", "mob.t2": "in your pocket.",
      "mob.desc": "Wherever you are, manage every system in your home from your phone — lighting, security, temperature, blinds and more.",
      "mob.f1t": "Full remote control", "mob.f1d": "Monitor and control your home from anywhere in the world.",
      "mob.f2t": "Instant security alerts", "mob.f2d": "Get notified on your phone the moment motion is detected.",
      "mob.f3t": "Personal scenes", "mob.f3d": "One-tap scenes like \"Good morning\", \"Movie night\" and \"Leaving home\".",
      "mob.f4t": "Energy tracking", "mob.f4d": "Watch your consumption in real time and see the savings.",
      "mob.cta": "Request a Demo",
      "app.hi": "Welcome 👋", "app.panel": "My Home Control Panel",
      "app.t1": "Living Room", "app.t1s": "On · 75%", "app.t2": "AC",
      "app.t3": "Blinds", "app.t3s": "40% open", "app.t4": "Alarm", "app.t4s": "Armed",
      "app.scene": "Active Scene", "app.scenet": "🌙 Night Mode", "app.energy": "Today's energy use",
      "yaz.tag": "Software & Digital", "yaz.t1": "Not just automation —", "yaz.t2": "we build software too.",
      "yaz.desc": "We combine our engineering with software: custom mobile apps, corporate websites and IoT integrations for your business.",
      "yaz.m1t": "📱 Mobile App", "yaz.m1d": "iOS & Android — branded for you and store-ready.",
      "yaz.m2t": "🌐 Corporate Website", "yaz.m2d": "Fast, modern, SEO-friendly and easy to manage.",
      "yaz.m3t": "⚙️ Dashboards & Automation Software", "yaz.m3d": "Custom management panels that automate your workflows.",
      "yaz.m4t": "🔗 IoT Integrations", "yaz.m4d": "Solutions that connect your devices and systems.",
      "yaz.cta": "Let's Talk About Your Project",
      "sur.tag": "Our Process", "sur.t1": "From survey to delivery in", "sur.t2": "4 steps",
      "sur.desc": "The same discipline on every project: listen, design, build, support.",
      "sur.s1t": "Survey & Analysis", "sur.s1d": "We inspect your space on site and clarify your needs and budget together.",
      "sur.s2t": "System Design", "sur.s2d": "We draw your custom system architecture and present a transparent, detailed offer.",
      "sur.s3t": "Installation & Integration", "sur.s3d": "We complete device installation, software setup and integration of all systems.",
      "sur.s4t": "Commissioning & Support", "sur.s4d": "We test the system, train you, and stay with you with maintenance and 24/7 support.",
      "ned.tag": "Why Mekatro Home?", "ned.t1": "Our difference:", "ned.t2": "engineering.",
      "ned.w1t": "Expert Engineering Team", "ned.w1d": "KNX-certified, experienced engineers — your project is in safe hands.",
      "ned.w2t": "End-to-End Solution", "ned.w2d": "Hardware, software, installation and support — one single partner.",
      "ned.w3t": "Global Standards", "ned.w3d": "Open, global standards like KNX mean no vendor lock-in.",
      "ned.w4t": "After-Sales Support", "ned.w4d": "Maintenance, updates and 24/7 support long after installation.",
      "ned.w5t": "Energy Savings", "ned.w5d": "The right automation raises comfort while lowering your bills.",
      "ned.w6t": "Security First", "ned.w6d": "We design security in from day one — for your home and your data.",
      "cta.t": "Ready to talk about your project?", "cta.d": "Contact us today for a free survey and quote.",
      "cta.btn": "Get in Touch Now",
      "il.tag": "Contact", "il.t1": "Get in", "il.t2": "touch",
      "il.desc": "Fill in the form for questions, surveys and projects — or just call us. We'll get back to you shortly.",
      "il.c1l": "Phone", "il.c2l": "E-mail", "il.c3l": "Address", "il.c3v": "Gaziantep, Türkiye",
      "il.c4v": "Send a quick message",
      "form.ad": "Full Name", "form.adph": "Your full name", "form.tel": "Phone",
      "form.ep": "E-mail", "form.hizmet": "Service of Interest",
      "form.o1": "Smart Home Systems", "form.o2": "Building Automation", "form.o3": "Security & CCTV Systems",
      "form.o4": "Mobile App Development", "form.o5": "Website & Software", "form.o6": "Other",
      "form.mesaj": "Your Message", "form.mesajph": "Tell us briefly about your project...",
      "form.btn": "Send Message", "form.captcha": "A short robot verification will appear when you submit.", "form.note": "Thank you! Your message has reached us — we'll get back to you soon.",
      "foot.desc": "End-to-end engineering in smart homes, building automation and software.",
      "foot.h1": "Services", "foot.l1": "Smart Home Systems", "foot.l2": "Building Automation",
      "foot.l3": "Security Systems", "foot.l4": "Mobile App", "foot.l5": "Website & Software",
      "foot.h2": "Company", "foot.k1": "Why Us", "foot.k2": "Our Process", "foot.k3": "Contact",
      "foot.h3": "Contact", "foot.rights": "All rights reserved."
    },

    /* =============== DEUTSCH =============== */
    de: {
      "meta.title": "Mekatro Home Engineering | Smart Home, Gebäudeautomation & Softwarelösungen",
      "meta.desc": "Mekatro Home Engineering: KNX-Smart-Home-Systeme, Gebäudeautomation, Sicherheits- und Kamerasysteme, App- und Website-Entwicklung. Engineering aus einer Hand — von der Planung bis zur Inbetriebnahme.",
      "nav.hizmetler": "Leistungen", "nav.knx": "KNX", "nav.mobil": "Mobile Steuerung",
      "nav.yazilim": "Software", "nav.surec": "Ablauf", "nav.neden": "Warum wir", "nav.teklif": "Angebot anfordern",
      "hero.badge": "KNX-zertifiziertes Smart-Home- & Automations-Engineering",
      "hero.t1": "Ihr Zuhause ist", "hero.t2": "jetzt intelligenter.",
      "hero.desc": "Von Smart-Home-Systemen über Gebäudeautomation und Sicherheitslösungen bis zu maßgeschneiderten Apps und Websoftware — Engineering aus einer Hand, von der Planung bis zur Inbetriebnahme.",
      "hero.cta1": "Kostenlose Besichtigung anfragen", "hero.cta2": "Unsere Leistungen entdecken",
      "hero.s1": "Abgeschlossene Projekte", "hero.s2": "Jahre Erfahrung", "hero.s3": "Kundenzufriedenheit",
      "hero.f1s": "Wohnzimmer · Klima", "hero.f2t": "Beleuchtung", "hero.f2s": "4 Räume aktiv",
      "hero.f3t": "Sicherheit", "hero.f3s": "System scharf", "hero.f3off": "System aus",
      "code.file": "mekatro-app · smart-zuhause.js",
      "hiz.tag": "Unsere Leistungen", "hiz.t1": "Intelligente Lösungen", "hiz.t2": "unter einem Dach",
      "hiz.desc": "Alles, was Sie brauchen, aus einer Hand — von Hardware bis Software, von der Planung bis zum 24/7-Support.",
      "c1.t": "KNX-Smart-Home-Systeme",
      "c1.d": "Steuern Sie Beleuchtung, Jalousien, Heizung und alle Szenen zentral über den weltweiten KNX-Standard. Sprachsteuerung und Fernzugriff inklusive.",
      "c1.l1": "Licht- & Jalousienszenen", "c1.l2": "Sprachassistenten-Integration", "c1.l3": "Energiespar-Optimierung",
      "c2.t": "Gebäudeautomation",
      "c2.d": "Skalierbare Gebäudeautomation, die HLK, Beleuchtung und Energiemanagement in Büros, Hotels, Einkaufszentren und Wohnanlagen zentralisiert.",
      "c2.l1": "Zentrales HLK- & Energiemanagement", "c2.l2": "Automation von Gemeinschaftsflächen", "c2.l3": "Reporting- & Monitoring-Dashboards",
      "c3.t": "Sicherheits- & Kamerasysteme",
      "c3.d": "Intelligente Kameras, Bewegungs- und Tür-Fenster-Sensoren überwachen Ihr Zuhause und Geschäft rund um die Uhr. Live-Ansicht auf Ihrem Handy.",
      "c3.l1": "IP-Kamera-Installation & Aufzeichnung", "c3.l2": "Bewegungs- & Tür-Fenster-Sensoren", "c3.l3": "Mobile Alarmbenachrichtigungen",
      "c4.t": "Klima- & Energiesteuerung",
      "c4.d": "Optimieren Sie Heizung und Kühlung nach Raum, Zeitplan und Gewohnheiten; senken Sie Kosten ohne Komfortverlust.",
      "c4.l1": "Raumweise Temperaturregelung", "c4.l2": "Zeitpläne & Szenenverwaltung", "c4.l3": "Verbrauchsüberwachung",
      "c5.t": "App-Entwicklung",
      "c5.d": "Individuelle iOS- und Android-Apps für Ihre Marke: Smart-Home-Bedienpanels, Unternehmens-Apps und IoT-Oberflächen.",
      "c5.l1": "iOS- & Android-Apps", "c5.l2": "Smart-Home-Bedienoberflächen", "c5.l3": "Benachrichtigungen & Fernverwaltung",
      "c6.t": "Website- & Softwarelösungen",
      "c6.d": "Moderne, schnelle, mobiloptimierte Websites sowie individuelle Dashboards und Automatisierungssoftware für Ihre digitale Transformation.",
      "c6.l1": "Unternehmens-Websites", "c6.l2": "Admin-Panels & Integrationen", "c6.l3": "SEO-freundliches, Mobile-First-Design",
      "knx.tag": "KNX-Technologie", "knx.t1": "Das unsichtbare Nervensystem Ihres Hauses:",
      "knx.desc": "KNX, der weltweit verbreitetste offene Standard für Gebäudeautomation, lässt alle Geräte in Ihrem Zuhause über eine einzige intelligente Busleitung kommunizieren. Taster, Sensoren und Antriebe sprechen dieselbe Sprache — Sie wählen nur die Szene.",
      "knx.b1t": "Eine Leitung, unbegrenzte Szenen", "knx.b1d": "Taster, Sensoren und Aktoren kommunizieren über dieselbe Busleitung.",
      "knx.b2t": "Herstellerunabhängig", "knx.b2d": "Geräte von über 500 Herstellern arbeiten nahtlos zusammen — kein Vendor-Lock-in.",
      "knx.b3t": "Zukunftssicher", "knx.b3d": "Wächst Ihr Bedarf, kommen neue Geräte einfach hinzu; die Infrastruktur bleibt.",
      "knx.cta": "KNX-Beratung anfragen", "knx.bus": "KNX-Bus",
      "knx.dev1": "Smarter Taster", "knx.dev2": "Bewegungsmelder", "knx.dev3": "Thermostat", "knx.dev4": "Jalousieaktor",
      "knx.status": "Bus aktiv · Geräte kommunizieren",
      "nav.urunler": "Produkte",
      "nav.hakkimizda": "Über uns",
      "urun.metaTitle": "Unsere Produkte | Mekatrox, MKT Player, Dijital KPSS, YDS — Mekatro Home",
      "urun.metaDesc": "Von Mekatro Home entwickelte Software: Mekatrox KNX-Steuerung, MKT Player IPTV-Player, Dijital KPSS und YDS Kelime Ustası Lern-Apps.",
      "urun.lead": "Von KNX-Steuerung über IPTV-Streaming bis zu Lern-Apps — selbst entwickelte Software, die auf mehreren Plattformen läuft.",
      "hak.metaTitle": "Über uns | Mekatro Home Engineering — Gaziantep",
      "hak.metaDesc": "Mekatro Home Engineering bietet Engineering aus einer Hand für KNX-Smart-Home, Gebäudeautomation, Sicherheit und Software — mit Sitz in Gaziantep.",
      "hak.tag": "Über uns", "hak.t1": "Ingenieursdisziplin,", "hak.t2": "menschzentrierter Service.",
      "hak.lead": "Mekatro Home Engineering vereint Smart Home, Gebäudeautomation und Software unter einem Dach.",
      "hak.p1": "Unser KNX-zertifiziertes Team mit Sitz in Gaziantep vereint Beleuchtung, Klima, Sicherheit und Energiemanagement in einem einzigen System für Wohn- und Gewerbeprojekte. Wir übernehmen den gesamten Prozess — von der Besichtigung bis zur Inbetriebnahme, von der Wartung bis zum 24/7-Support.",
      "hak.p2": "Neben der Hardware entwickeln wir auch eigene Software: unsere KNX-Steuerung Mekatrox, unser IPTV-Player MKT Player und unsere Lern-Apps bei Google Play sind Produkte dieser Vision. Unser Ziel ist es, Technik im Alltag einfach und zuverlässig nutzbar zu machen.",
      "il.metaTitle": "Kontakt | Mekatro Home Engineering — Gaziantep",
      "il.metaDesc": "Kontaktieren Sie Mekatro Home: Telefon +90 540 123 35 36, E-Mail mekatrohome@gmail.com, Gaziantep. Füllen Sie das Formular für Besichtigung und Angebot aus.",
      "pro.tag": "Unsere Produkte", "pro.t1": "Software, die wir", "pro.t2": "selbst entwickeln",
      "pro.desc": "Wir bringen unsere Ingenieurserfahrung in eigene Produkte: von KNX-Steuerung über IPTV-Streaming bis zu Lern-Apps — Software, die auf mehreren Plattformen läuft.",
      "pro.sub": "KNX-Steuerungssoftware",
      "pro.mx.desc": "Unsere selbst entwickelte Steuerungssoftware für KNX-Systeme. Beleuchtung, Jalousien, Klima, Sicherheit und Szenen in Echtzeit über eine Oberfläche.",
      "pro.cta": "Mekatrox-Demo anfragen",
      "pro.iptv.sub": "IPTV-Player-Software",
      "pro.iptv.desc": "Unsere eigene IPTV-Player-Software. Live-TV, Filme und Serien mit einer flüssigen, modernen Oberfläche — läuft auf LG TV, Android und Windows.",
      "pro.iptv.cta": "Mehr über MKT Player",
      "pro.play": "Bei Google Play ansehen", "pro.msstore": "Microsoft Store",
      "pro.kpss.sub": "KPSS-Vorbereitungs-App",
      "pro.kpss.desc": "Unsere mobile App für KPSS-Kandidaten. Bleiben Sie mit aktuellen Fragen, Probeprüfungen und smarten Lernwerkzeugen auf Kurs.",
      "pro.yds.sub": "YDS Vokabel- & Lese-App",
      "pro.yds.desc": "Eine Vokabel- und Lese-App für YDS-Kandidaten. Erweitern Sie Ihren Wortschatz und kommen Sie mit Lesepraxis in der Prüfung voran.",
      "mob.tag": "Mobile Steuerung", "mob.t1": "Ihr Zuhause,", "mob.t2": "in Ihrer Tasche.",
      "mob.desc": "Wo immer Sie sind: Steuern Sie alle Systeme Ihres Hauses vom Handy — Beleuchtung, Sicherheit, Temperatur, Jalousien und mehr.",
      "mob.f1t": "Volle Fernsteuerung", "mob.f1d": "Überwachen und steuern Sie Ihr Zuhause von überall auf der Welt.",
      "mob.f2t": "Sofortige Sicherheitsalarme", "mob.f2d": "Benachrichtigung aufs Handy, sobald Bewegung erkannt wird.",
      "mob.f3t": "Persönliche Szenen", "mob.f3d": "Ein-Tipp-Szenen wie „Guten Morgen“, „Filmabend“ und „Haus verlassen“.",
      "mob.f4t": "Energieüberwachung", "mob.f4d": "Verfolgen Sie Ihren Verbrauch in Echtzeit und sehen Sie die Einsparung.",
      "mob.cta": "Demo anfragen",
      "app.hi": "Willkommen 👋", "app.panel": "Mein Zuhause",
      "app.t1": "Wohnzimmer", "app.t1s": "An · 75 %", "app.t2": "Klima",
      "app.t3": "Jalousien", "app.t3s": "40 % offen", "app.t4": "Alarm", "app.t4s": "Scharf",
      "app.scene": "Aktive Szene", "app.scenet": "🌙 Nachtmodus", "app.energy": "Heutiger Energieverbrauch",
      "yaz.tag": "Software & Digital", "yaz.t1": "Nicht nur Automation —", "yaz.t2": "wir entwickeln auch Software.",
      "yaz.desc": "Wir verbinden Engineering mit Software: individuelle Apps, Unternehmens-Websites und IoT-Integrationen für Ihr Geschäft.",
      "yaz.m1t": "📱 Mobile App", "yaz.m1d": "iOS & Android — mit Ihrem Branding, bereit für die Stores.",
      "yaz.m2t": "🌐 Unternehmens-Website", "yaz.m2d": "Schnell, modern, SEO-freundlich und leicht zu pflegen.",
      "yaz.m3t": "⚙️ Panels & Automatisierungssoftware", "yaz.m3d": "Individuelle Verwaltungspanels, die Ihre Abläufe automatisieren.",
      "yaz.m4t": "🔗 IoT-Integrationen", "yaz.m4d": "Lösungen, die Ihre Geräte und Systeme verbinden.",
      "yaz.cta": "Sprechen wir über Ihr Projekt",
      "sur.tag": "Unser Ablauf", "sur.t1": "Von der Besichtigung zur Übergabe in", "sur.t2": "4 Schritten",
      "sur.desc": "Dieselbe Disziplin bei jedem Projekt: zuhören, planen, bauen, betreuen.",
      "sur.s1t": "Besichtigung & Analyse", "sur.s1d": "Wir besichtigen Ihre Räume vor Ort und klären gemeinsam Bedarf und Budget.",
      "sur.s2t": "Planung", "sur.s2d": "Wir entwerfen Ihre individuelle Systemarchitektur und legen ein transparentes, detailliertes Angebot vor.",
      "sur.s3t": "Installation & Integration", "sur.s3d": "Wir übernehmen Gerätemontage, Softwareeinrichtung und die Integration aller Systeme.",
      "sur.s4t": "Inbetriebnahme & Support", "sur.s4d": "Wir testen das System, schulen Sie und bleiben mit Wartung und 24/7-Support an Ihrer Seite.",
      "ned.tag": "Warum Mekatro Home?", "ned.t1": "Unser Unterschied:", "ned.t2": "Engineering.",
      "ned.w1t": "Erfahrenes Ingenieurteam", "ned.w1d": "KNX-zertifizierte, erfahrene Ingenieure — Ihr Projekt ist in sicheren Händen.",
      "ned.w2t": "Komplettlösung", "ned.w2d": "Hardware, Software, Installation und Support — alles aus einer Hand.",
      "ned.w3t": "Weltstandards", "ned.w3d": "Offene, globale Standards wie KNX — keine Herstellerbindung.",
      "ned.w4t": "After-Sales-Support", "ned.w4d": "Auch nach der Installation: Wartung, Updates und 24/7-Support.",
      "ned.w5t": "Energieeinsparung", "ned.w5d": "Die richtige Automation steigert den Komfort und senkt die Kosten.",
      "ned.w6t": "Sicherheit zuerst", "ned.w6d": "Sicherheit von Anfang an — für Ihr Zuhause und Ihre Daten.",
      "cta.t": "Bereit, über Ihr Projekt zu sprechen?", "cta.d": "Kontaktieren Sie uns noch heute für Besichtigung und Angebot — kostenlos.",
      "cta.btn": "Jetzt Kontakt aufnehmen",
      "il.tag": "Kontakt", "il.t1": "Nehmen Sie", "il.t2": "Kontakt auf",
      "il.desc": "Füllen Sie das Formular für Fragen, Besichtigungen und Projekte aus — oder rufen Sie direkt an. Wir melden uns umgehend.",
      "il.c1l": "Telefon", "il.c2l": "E-Mail", "il.c3l": "Adresse", "il.c3v": "Gaziantep, Türkei",
      "il.c4v": "Schnellnachricht senden",
      "form.ad": "Vor- und Nachname", "form.adph": "Ihr vollständiger Name", "form.tel": "Telefon",
      "form.ep": "E-Mail", "form.hizmet": "Gewünschte Leistung",
      "form.o1": "Smart-Home-Systeme", "form.o2": "Gebäudeautomation", "form.o3": "Sicherheits- & Kamerasysteme",
      "form.o4": "App-Entwicklung", "form.o5": "Website & Software", "form.o6": "Sonstiges",
      "form.mesaj": "Ihre Nachricht", "form.mesajph": "Erzählen Sie kurz von Ihrem Projekt...",
      "form.btn": "Nachricht senden", "form.captcha": "Beim Absenden erscheint eine kurze Roboter-Prüfung.", "form.note": "Vielen Dank! Ihre Nachricht ist bei uns eingegangen — wir melden uns in Kürze.",
      "foot.desc": "Engineering aus einer Hand für Smart Home, Gebäudeautomation und Software.",
      "foot.h1": "Leistungen", "foot.l1": "Smart-Home-Systeme", "foot.l2": "Gebäudeautomation",
      "foot.l3": "Sicherheitssysteme", "foot.l4": "Mobile App", "foot.l5": "Website & Software",
      "foot.h2": "Unternehmen", "foot.k1": "Warum wir", "foot.k2": "Unser Ablauf", "foot.k3": "Kontakt",
      "foot.h3": "Kontakt", "foot.rights": "Alle Rechte vorbehalten."
    },

    /* =============== العربية =============== */
    ar: {
      "meta.title": "مكاترو هوم للهندسة | المنزل الذكي وأتمتة المباني وحلول البرمجيات",
      "meta.desc": "مكاترو هوم للهندسة: أنظمة المنزل الذكي KNX، أتمتة المباني، أنظمة كاميرات المراقبة، تطوير تطبيقات الجوال والمواقع الإلكترونية. هندسة متكاملة من المعاينة حتى التشغيل.",
      "nav.hizmetler": "خدماتنا", "nav.knx": "KNX", "nav.mobil": "التحكم عبر الجوال",
      "nav.yazilim": "البرمجيات", "nav.surec": "مراحل العمل", "nav.neden": "لماذا نحن", "nav.teklif": "اطلب عرض سعر",
      "hero.badge": "هندسة منازل ذكية وأتمتة معتمدة من KNX",
      "hero.t1": "مساحات معيشتك", "hero.t2": "أصبحت أكثر ذكاءً.",
      "hero.desc": "من أنظمة المنزل الذكي إلى أتمتة المباني، ومن الحلول الأمنية إلى تطبيقات الجوال وبرمجيات الويب المصممة خصيصًا لك — نقدم خدمة هندسية متكاملة من المعاينة حتى التشغيل.",
      "hero.cta1": "اطلب معاينة مجانية", "hero.cta2": "استعرض خدماتنا",
      "hero.s1": "مشروع منجز", "hero.s2": "سنوات من الخبرة", "hero.s3": "رضا العملاء",
      "hero.f1s": "الصالة · التكييف", "hero.f2t": "الإضاءة", "hero.f2s": "4 غرف مفعّلة",
      "hero.f3t": "الأمان", "hero.f3s": "النظام مفعّل", "hero.f3off": "النظام متوقف",
      "code.file": "mekatro-app · smart-home.js",
      "hiz.tag": "خدماتنا", "hiz.t1": "حلول ذكية", "hiz.t2": "تحت سقف واحد",
      "hiz.desc": "كل ما تحتاجه من فريق هندسي واحد — من الأجهزة إلى البرمجيات، ومن التصميم إلى الدعم على مدار الساعة.",
      "c1.t": "أنظمة المنزل الذكي KNX",
      "c1.d": "تحكم في الإضاءة والستائر والتدفئة وجميع السيناريوهات من مكان واحد عبر معيار KNX العالمي. مع دعم الأوامر الصوتية والوصول عن بُعد.",
      "c1.l1": "سيناريوهات الإضاءة والستائر", "c1.l2": "التكامل مع المساعد الصوتي", "c1.l3": "تحسين توفير الطاقة",
      "c2.t": "أتمتة المباني",
      "c2.d": "حلول أتمتة قابلة للتوسع تُدير التكييف والإضاءة والطاقة مركزيًا في المكاتب والفنادق والمولات والمجمعات السكنية.",
      "c2.l1": "إدارة مركزية للتكييف والطاقة", "c2.l2": "أتمتة المناطق المشتركة", "c2.l3": "لوحات تقارير ومراقبة",
      "c3.t": "أنظمة الأمان والكاميرات",
      "c3.d": "كاميرات ذكية وحساسات حركة وأبواب ونوافذ تُبقي منزلك وعملك تحت المراقبة دائمًا. شاهد البث المباشر من هاتفك.",
      "c3.l1": "تركيب كاميرات IP والتسجيل", "c3.l2": "حساسات الحركة والأبواب والنوافذ", "c3.l3": "تنبيهات إنذار على الجوال",
      "c4.t": "التحكم في التكييف والطاقة",
      "c4.d": "حسّن أنظمة التدفئة والتبريد حسب الغرفة والوقت وعاداتك؛ وخفّض الفواتير دون التنازل عن الراحة.",
      "c4.l1": "تحكم في الحرارة لكل غرفة", "c4.l2": "الجدولة وإدارة السيناريوهات", "c4.l3": "متابعة الاستهلاك",
      "c5.t": "تطوير تطبيقات الجوال",
      "c5.d": "تطبيقات iOS وAndroid مخصصة لعلامتك التجارية: لوحات تحكم المنزل الذكي وتطبيقات الشركات وواجهات إنترنت الأشياء.",
      "c5.l1": "تطبيقات iOS وAndroid", "c5.l2": "واجهات تحكم المنزل الذكي", "c5.l3": "الإشعارات والإدارة عن بُعد",
      "c6.t": "حلول المواقع والبرمجيات",
      "c6.d": "مواقع حديثة وسريعة ومتوافقة مع الجوال، مع لوحات تحكم وبرمجيات أتمتة مخصصة لإتمام تحولك الرقمي.",
      "c6.l1": "مواقع الشركات", "c6.l2": "لوحات إدارة وتكاملات", "c6.l3": "تصميم متوافق مع SEO وموجه للجوال أولًا",
      "knx.tag": "تقنية KNX", "knx.t1": "الجهاز العصبي الخفي لمنزلك:",
      "knx.desc": "يُعد KNX أوسع معايير أتمتة المباني المفتوحة انتشارًا في العالم، إذ يجعل جميع الأجهزة في منزلك تتواصل عبر خط ذكي واحد. المفاتيح والحساسات والمحركات تتحدث اللغة نفسها — وأنت تختار السيناريو فقط.",
      "knx.b1t": "خط واحد، سيناريوهات بلا حدود", "knx.b1d": "تتواصل المفاتيح والحساسات والمشغّلات عبر خط الناقل نفسه.",
      "knx.b2t": "مستقل عن العلامات التجارية", "knx.b2d": "أجهزة من أكثر من 500 مصنّع تعمل معًا بتوافق تام — دون الارتباط بعلامة واحدة.",
      "knx.b3t": "جاهز للمستقبل", "knx.b3d": "كلما كبرت احتياجاتك تُضاف أجهزة جديدة إلى الخط؛ وتبقى البنية التحتية كما هي.",
      "knx.cta": "اطلب معاينة KNX", "knx.bus": "ناقل KNX",
      "knx.dev1": "مفتاح ذكي", "knx.dev2": "حساس حركة", "knx.dev3": "منظم حرارة", "knx.dev4": "محرك ستائر",
      "knx.status": "الناقل نشط · الأجهزة تتواصل",
      "nav.urunler": "منتجاتنا",
      "nav.hakkimizda": "من نحن",
      "urun.metaTitle": "منتجاتنا | مكاتروكس، MKT Player، Dijital KPSS، YDS — مكاترو هوم",
      "urun.metaDesc": "برمجيات طورتها مكاترو هوم: برنامج التحكم مكاتروكس KNX، مشغّل MKT Player IPTV، وتطبيقا Dijital KPSS وYDS Kelime Ustası التعليميان.",
      "urun.lead": "من التحكم بأنظمة KNX وبث IPTV إلى التطبيقات التعليمية — برمجيات نطوّرها بأنفسنا وتعمل على منصات متعددة.",
      "hak.metaTitle": "من نحن | مكاترو هوم للهندسة — غازي عنتاب",
      "hak.metaDesc": "تقدّم مكاترو هوم للهندسة خدمة هندسية متكاملة في المنزل الذكي KNX وأتمتة المباني والأمان والبرمجيات، ومقرها غازي عنتاب.",
      "hak.tag": "من نحن", "hak.t1": "انضباط هندسي،", "hak.t2": "وخدمة محورها الإنسان.",
      "hak.lead": "تجمع مكاترو هوم للهندسة بين المنزل الذكي وأتمتة المباني والبرمجيات تحت سقف واحد.",
      "hak.p1": "فريقنا المعتمد من KNX ومقرّه غازي عنتاب يوحّد الإضاءة والتكييف والأمان وإدارة الطاقة في نظام واحد للمشاريع السكنية والتجارية. نتولّى العملية كاملة — من المعاينة إلى التشغيل، ومن الصيانة إلى الدعم على مدار الساعة.",
      "hak.p2": "إلى جانب الأجهزة نطوّر برمجياتنا الخاصة: برنامج التحكم مكاتروكس KNX، ومشغّل MKT Player IPTV، وتطبيقاتنا التعليمية على Google Play هي ثمرة هذه الرؤية. هدفنا جعل التقنية بسيطة وموثوقة في مساحات الحياة اليومية.",
      "il.metaTitle": "اتصل بنا | مكاترو هوم للهندسة — غازي عنتاب",
      "il.metaDesc": "تواصل مع مكاترو هوم: هاتف ‎+90 540 123 35 36، بريد mekatrohome@gmail.com، غازي عنتاب. املأ النموذج لمعاينة وعرض سعر مجانيين.",
      "pro.tag": "منتجاتنا", "pro.t1": "برمجيات", "pro.t2": "نطوّرها بأنفسنا",
      "pro.desc": "ننقل خبرتنا الهندسية إلى منتجاتنا الخاصة: من التحكم بأنظمة KNX وبث IPTV إلى تطبيقات تعليمية، برمجيات نطوّرها وتعمل على منصات متعددة.",
      "pro.sub": "برنامج التحكم KNX",
      "pro.mx.desc": "برنامج التحكم الذي طورناه لأنظمة KNX. أدر الإضاءة والستائر والتكييف والأمان والسيناريوهات لحظيًا من واجهة واحدة.",
      "pro.cta": "اطلب عرض مكاتروكس التجريبي",
      "pro.iptv.sub": "برنامج مشغّل IPTV",
      "pro.iptv.desc": "برنامج مشغّل IPTV الذي طورناه بأنفسنا. شاهد البث المباشر والأفلام والمسلسلات بواجهة عصرية سلسة — يعمل على تلفزيون LG وأندرويد وويندوز.",
      "pro.iptv.cta": "تعرّف على MKT Player",
      "pro.play": "عرض على Google Play", "pro.msstore": "Microsoft Store",
      "pro.kpss.sub": "تطبيق التحضير لامتحان KPSS",
      "pro.kpss.desc": "تطبيقنا للجوال للمتقدمين لامتحان KPSS. ركّز على هدفك بأسئلة محدّثة واختبارات تجريبية وأدوات دراسة ذكية.",
      "pro.yds.sub": "تطبيق مفردات وقراءة YDS",
      "pro.yds.desc": "تطبيق مفردات وقراءة للمتقدمين لامتحان YDS. عزّز حصيلتك من المفردات وتقدّم في الامتحان بالتدرّب على القراءة.",
      "mob.tag": "التحكم عبر الجوال", "mob.t1": "منزلك،", "mob.t2": "في جيبك.",
      "mob.desc": "أينما كنت، تحكم في جميع أنظمة منزلك من هاتفك — الإضاءة والأمان والحرارة والستائر وأكثر.",
      "mob.f1t": "تحكم كامل عن بُعد", "mob.f1d": "راقب منزلك وتحكم فيه من أي مكان في العالم.",
      "mob.f2t": "تنبيهات أمنية فورية", "mob.f2d": "يصلك إشعار على هاتفك لحظة رصد أي حركة.",
      "mob.f3t": "سيناريوهات شخصية", "mob.f3d": "سيناريوهات بلمسة واحدة مثل \"صباح الخير\" و\"ليلة سينما\" و\"مغادرة المنزل\".",
      "mob.f4t": "متابعة الطاقة", "mob.f4d": "تابع استهلاكك لحظيًا وشاهد مقدار التوفير.",
      "mob.cta": "اطلب عرضًا تجريبيًا",
      "app.hi": "أهلًا بك 👋", "app.panel": "لوحة تحكم منزلي",
      "app.t1": "الصالة", "app.t1s": "مضاءة · %75", "app.t2": "التكييف",
      "app.t3": "الستائر", "app.t3s": "مفتوحة %40", "app.t4": "الإنذار", "app.t4s": "مفعّل",
      "app.scene": "السيناريو النشط", "app.scenet": "🌙 الوضع الليلي", "app.energy": "استهلاك الطاقة اليوم",
      "yaz.tag": "البرمجيات والرقمنة", "yaz.t1": "لسنا أتمتة فقط —", "yaz.t2": "نطوّر البرمجيات أيضًا.",
      "yaz.desc": "نمزج خبرتنا الهندسية بالبرمجيات: تطبيقات جوال مخصصة ومواقع شركات وتكاملات إنترنت الأشياء لعملك.",
      "yaz.m1t": "📱 تطبيق جوال", "yaz.m1d": "iOS وAndroid — بهوية علامتك وجاهز للنشر في المتاجر.",
      "yaz.m2t": "🌐 موقع شركة", "yaz.m2d": "سريع وحديث ومتوافق مع محركات البحث وسهل الإدارة.",
      "yaz.m3t": "⚙️ لوحات تحكم وبرمجيات أتمتة", "yaz.m3d": "لوحات إدارة مخصصة تُؤتمت سير عملك.",
      "yaz.m4t": "🔗 تكاملات إنترنت الأشياء", "yaz.m4d": "حلول تربط أجهزتك وأنظمتك ببعضها.",
      "yaz.cta": "لنتحدث عن مشروعك",
      "sur.tag": "مراحل عملنا", "sur.t1": "من المعاينة إلى التسليم في", "sur.t2": "4 خطوات",
      "sur.desc": "الانضباط نفسه في كل مشروع: نستمع، نصمم، ننفذ، ندعم.",
      "sur.s1t": "المعاينة والتحليل", "sur.s1d": "نعاين موقعك ميدانيًا ونحدد معك الاحتياجات والميزانية بوضوح.",
      "sur.s2t": "التصميم الهندسي", "sur.s2d": "نرسم بنية النظام الخاصة بك ونقدم عرضًا شفافًا ومفصلًا.",
      "sur.s3t": "التركيب والتكامل", "sur.s3d": "ننجز تركيب الأجهزة وإعداد البرمجيات وتكامل جميع الأنظمة.",
      "sur.s4t": "التشغيل والدعم", "sur.s4d": "نختبر النظام وندرّبك عليه، ونبقى معك بالصيانة والدعم على مدار الساعة.",
      "ned.tag": "لماذا مكاترو هوم؟", "ned.t1": "ما يميزنا:", "ned.t2": "الهندسة.",
      "ned.w1t": "فريق هندسي خبير", "ned.w1d": "مهندسون معتمدون من KNX وذوو خبرة — مشروعك في أيدٍ أمينة.",
      "ned.w2t": "حل متكامل", "ned.w2d": "الأجهزة والبرمجيات والتركيب والدعم — كلها من جهة واحدة.",
      "ned.w3t": "معايير عالمية", "ned.w3d": "معايير مفتوحة وعالمية مثل KNX تعني عدم الارتباط بمورّد واحد.",
      "ned.w4t": "دعم ما بعد البيع", "ned.w4d": "بعد التركيب أيضًا: صيانة وتحديثات ودعم على مدار الساعة.",
      "ned.w5t": "توفير الطاقة", "ned.w5d": "الأتمتة الصحيحة ترفع الراحة وتخفض الفواتير.",
      "ned.w6t": "الأمان أولًا", "ned.w6d": "نصمم الأمان من اليوم الأول — لمنزلك ولبياناتك.",
      "cta.t": "هل أنت مستعد للحديث عن مشروعك؟", "cta.d": "تواصل معنا اليوم لمعاينة وعرض سعر مجانيين.",
      "cta.btn": "تواصل معنا الآن",
      "il.tag": "اتصل بنا", "il.t1": "تواصل", "il.t2": "معنا",
      "il.desc": "املأ النموذج لأسئلتك وطلبات المعاينة ومشاريعك — أو اتصل بنا مباشرة، وسنعاود التواصل معك في أقرب وقت.",
      "il.c1l": "الهاتف", "il.c2l": "البريد الإلكتروني", "il.c3l": "العنوان", "il.c3v": "غازي عنتاب، تركيا",
      "il.c4v": "أرسل رسالة سريعة",
      "form.ad": "الاسم الكامل", "form.adph": "اسمك الكامل", "form.tel": "الهاتف",
      "form.ep": "البريد الإلكتروني", "form.hizmet": "الخدمة التي تهمك",
      "form.o1": "أنظمة المنزل الذكي", "form.o2": "أتمتة المباني", "form.o3": "أنظمة الأمان والكاميرات",
      "form.o4": "تطوير تطبيقات الجوال", "form.o5": "المواقع والبرمجيات", "form.o6": "أخرى",
      "form.mesaj": "رسالتك", "form.mesajph": "حدثنا باختصار عن مشروعك...",
      "form.btn": "إرسال الرسالة", "form.captcha": "سيظهر تحقق قصير من أنك لست روبوتًا عند الإرسال.", "form.note": "شكرًا لك! وصلتنا رسالتك وسنعاود التواصل معك قريبًا.",
      "foot.desc": "هندسة متكاملة في المنازل الذكية وأتمتة المباني والبرمجيات.",
      "foot.h1": "الخدمات", "foot.l1": "أنظمة المنزل الذكي", "foot.l2": "أتمتة المباني",
      "foot.l3": "أنظمة الأمان", "foot.l4": "تطبيق الجوال", "foot.l5": "المواقع والبرمجيات",
      "foot.h2": "الشركة", "foot.k1": "لماذا نحن", "foot.k2": "مراحل العمل", "foot.k3": "اتصل بنا",
      "foot.h3": "اتصل بنا", "foot.rights": "جميع الحقوق محفوظة."
    }
  };


  /* Kod penceresi içerikleri (dile göre) */
  function cw(varn, cls, scenefn, scene, light, setf, blinds, closef, ac, temp, sec, arm, cm, run) {
    return '<span class="c-kw">const</span> <span class="c-var">' + varn + '</span> = <span class="c-kw">new</span> <span class="c-fn">' + cls + '</span>(<span class="c-str">"Mekatro Home"</span>);\n\n' +
      '<span class="c-var">' + varn + '</span>.<span class="c-fn">' + scenefn + '</span>(<span class="c-str">"' + scene + '"</span>, () =&gt; {\n' +
      '  <span class="c-var">' + varn + '</span>.' + light + '.<span class="c-fn">' + setf + '</span>(<span class="c-num">60</span>);\n' +
      '  <span class="c-var">' + varn + '</span>.' + blinds + '.<span class="c-fn">' + closef + '</span>();\n' +
      '  <span class="c-var">' + varn + '</span>.' + ac + '.<span class="c-fn">' + temp + '</span>(<span class="c-num">22.5</span>);\n' +
      '  <span class="c-var">' + varn + '</span>.' + sec + '.<span class="c-fn">' + arm + '</span>();\n' +
      '});\n\n' +
      '<span class="c-cm">// ' + cm + '</span>\n' +
      '<span class="c-var">' + varn + '</span>.<span class="c-fn">' + run + '</span>(<span class="c-str">"' + scene + '"</span>);';
  }
  var CODE = {
    tr: cw("ev", "AkilliEv", "senaryo", "aksam", "aydinlatma", "ayarla", "perdeler", "kapat", "klima", "sicaklik", "guvenlik", "aktifEt", "Tek dokunuşla tüm ev hazır ✨", "calistir"),
    en: cw("home", "SmartHome", "scene", "evening", "lighting", "set", "blinds", "close", "ac", "temperature", "security", "arm", "The whole home ready in one tap ✨", "run"),
    de: cw("haus", "SmartHome", "szene", "abend", "beleuchtung", "setzen", "jalousien", "schliessen", "klima", "temperatur", "sicherheit", "aktivieren", "Mit einem Tipp ist das ganze Haus bereit ✨", "starten"),
    ar: cw("home", "SmartHome", "scene", "evening", "lighting", "set", "blinds", "close", "ac", "temperature", "security", "arm", "المنزل كله جاهز بلمسة واحدة ✨", "run")
  };

  var current = "tr";
  var DEFAULT_LANG = "tr";

  function applyLang(lang) {
    var dict = I18N[lang];
    if (!dict) return;
    current = lang;

    var codeEl = document.getElementById("codeSample");
    if (codeEl && CODE[lang]) codeEl.innerHTML = CODE[lang];

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-ph");
      if (dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
    });

    // Sayfa başlığı/açıklaması — her sayfa <html data-title-key/data-desc-key> ile kendi anahtarını belirtir
    var tKey = document.documentElement.getAttribute("data-title-key") || "meta.title";
    var dKey = document.documentElement.getAttribute("data-desc-key") || "meta.desc";
    document.title = dict[tKey] || dict["meta.title"];
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", dict[dKey] || dict["meta.desc"]);

    var cur = document.getElementById("langCurrent");
    if (cur) cur.textContent = lang.toUpperCase();
    document.querySelectorAll(".lang__option").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

    try { localStorage.setItem("mekatro-dil", lang); } catch (e) {}
  }

  window.mekatroI18n = {
    t: function (key) { var d = I18N[current] || I18N.tr; return d[key]; },
    lang: function () { return current; }
  };

  /* Açılır menü */
  var toggle = document.getElementById("langToggle");
  var menu = document.getElementById("langMenu");
  if (toggle && menu) {
    toggle.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.addEventListener("click", function () {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
    menu.querySelectorAll(".lang__option").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyLang(btn.getAttribute("data-lang"));
        menu.classList.remove("open");
      });
    });
  }

  /* Dili yükle — öncelik: URL (?lang=) > localStorage > varsayılan */
  var urlLang = null;
  try { urlLang = new URLSearchParams(window.location.search).get("lang"); } catch (e) {}
  var saved = null;
  try { saved = localStorage.getItem("mekatro-dil"); } catch (e) {}
  var initial = (urlLang && I18N[urlLang]) ? urlLang : (saved && I18N[saved] ? saved : DEFAULT_LANG);
  if (initial !== DEFAULT_LANG) {
    applyLang(initial);
  }
})();
