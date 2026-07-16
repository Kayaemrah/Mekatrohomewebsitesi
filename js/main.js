/* MEKATRO HOME — site etkileşimleri */
(function () {
  "use strict";

  /* Yıl */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* Kaydırınca header arka planı */
  var header = document.getElementById("header");
  function onScroll() {
    header.classList.toggle("scrolled", window.scrollY > 30);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Mobil menü */
  var navToggle = document.getElementById("navToggle");
  var nav = document.getElementById("nav");
  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      navToggle.classList.toggle("open", open);
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        navToggle.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* Scroll ile görünme animasyonu */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("visible"); });
  }

  /* Sayaç animasyonu */
  var counters = document.querySelectorAll(".stat__num[data-count]");
  function animateCounter(el) {
    var target = parseInt(el.getAttribute("data-count"), 10);
    var duration = 1600;
    var start = null;
    function tick(ts) {
      if (!start) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(target * eased);
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  if ("IntersectionObserver" in window) {
    var cio = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            cio.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    counters.forEach(function (el) { cio.observe(el); });
  } else {
    counters.forEach(function (el) {
      el.textContent = el.getAttribute("data-count");
    });
  }

  /* Hero: etkileşimli akıllı ev demosu */
  var house = document.getElementById("smartHouse");
  if (house) {
    var state = { light: true, fan: true, alarm: true, dim: 60 };
    var lampGlow = document.getElementById("lampGlow");
    var lampBulb = document.getElementById("lampBulb");
    var alarmDome = document.getElementById("alarmDome");
    var dimmer = document.getElementById("dimmer");
    var dimVal = document.getElementById("dimVal");

    function t(key, fallback) {
      var v = window.mekatroI18n && window.mekatroI18n.t(key);
      return v || fallback;
    }
    function setSwitch(cardId, on) {
      var sw = document.querySelector("#" + cardId + " .switch");
      if (sw) sw.classList.toggle("switch--on", on);
      var card = document.getElementById(cardId);
      if (card) card.setAttribute("aria-pressed", on ? "true" : "false");
    }
    function renderLight() {
      house.classList.toggle("light-on", state.light);
      if (lampGlow) lampGlow.style.opacity = state.light ? (0.25 + 0.75 * state.dim / 100) : 0;
      if (lampBulb) lampBulb.setAttribute("fill", state.light ? "#fde68a" : "rgba(148,163,184,.4)");
      if (dimVal) dimVal.textContent = "%" + state.dim;
      setSwitch("cardLight", state.light);
    }
    function renderFan() {
      house.classList.toggle("fan-on", state.fan);
      setSwitch("cardClimate", state.fan);
    }
    function renderAlarm() {
      house.classList.toggle("alarm-on", state.alarm);
      if (alarmDome) alarmDome.setAttribute("fill", state.alarm ? "#ef4444" : "#64748b");
      var lbl = document.getElementById("secLabel");
      if (lbl) {
        var key = state.alarm ? "hero.f3s" : "hero.f3off";
        lbl.setAttribute("data-i18n", key);
        lbl.textContent = t(key, state.alarm ? "Sistem devrede" : "Sistem kapalı");
      }
      var dot = document.querySelector("#cardSec .dot-live");
      if (dot) {
        dot.style.background = state.alarm ? "" : "rgba(148,163,184,.5)";
        dot.style.animation = state.alarm ? "" : "none";
        dot.style.boxShadow = state.alarm ? "" : "none";
      }
      var card = document.getElementById("cardSec");
      if (card) card.setAttribute("aria-pressed", state.alarm ? "true" : "false");
    }
    function bindCard(id, handler) {
      var card = document.getElementById(id);
      if (!card) return;
      card.addEventListener("click", function (e) {
        if (e.target && e.target.tagName === "INPUT") return;
        handler();
      });
      card.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handler(); }
      });
    }
    bindCard("cardLight", function () { state.light = !state.light; renderLight(); });
    bindCard("cardClimate", function () { state.fan = !state.fan; renderFan(); });
    bindCard("cardSec", function () { state.alarm = !state.alarm; renderAlarm(); });
    if (dimmer) {
      dimmer.addEventListener("input", function () {
        state.dim = parseInt(dimmer.value, 10);
        if (!state.light) state.light = true;
        renderLight();
      });
    }
    renderLight(); renderFan(); renderAlarm();
  }

  /* Form gönderildiyse (FormSubmit ?gonderildi=1 ile geri yönlendirir) teşekkür notu göster */
  var note = document.getElementById("formNote");
  if (note && new URLSearchParams(window.location.search).has("gonderildi")) {
    note.hidden = false;
    var iletisim = document.getElementById("iletisim");
    if (iletisim) iletisim.scrollIntoView();
  }
})();
