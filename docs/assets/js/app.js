/* Shared chrome: nav, language toggle, small helpers. */
(function () {
  const PAGES = [
    { href: 'index.html',     en: 'Start',      zh: '開始' },
    { href: 'facts.html',     en: 'Facts',      zh: '事實庫' },
    { href: 'figures.html',   en: 'Figures',    zh: '圖像記憶' },
    { href: 'mechanism.html', en: 'Mechanisms', zh: '機制' },
    { href: 'qa.html',        en: 'Q&A drill',  zh: '問答演練' },
    { href: 'kyle.html',      en: "Kyle's five", zh: '博後五問' },
    { href: 'answer.html',    en: 'Answer shape', zh: '答題架構' },
    { href: 'redlines.html',  en: 'Red lines',  zh: '紅線' }
  ];

  const here = location.pathname.split('/').pop() || 'index.html';

  const leaf = '<svg class="leaf" viewBox="0 0 24 24" fill="none" aria-hidden="true">' +
    '<path d="M20 4c0 9-5.5 14-12 14-1.6 0-3-.3-4-.8" stroke="#5aaa47" stroke-width="2" stroke-linecap="round"/>' +
    '<path d="M4 20c2-7 7-11 13-12" stroke="#0167ef" stroke-width="2" stroke-linecap="round"/></svg>';

  function nav() {
    const el = document.querySelector('.nav');
    if (!el) return;
    el.innerHTML =
      '<div class="nav-in">' +
      '<a class="nav-brand" href="index.html">' + leaf +
      '<span class="only-en">ReLEAF · Plants</span><span class="only-zh">ReLEAF · 植物組</span></a>' +
      '<div class="nav-links">' +
      PAGES.map(p => '<a href="' + p.href + '"' + (p.href === here ? ' aria-current="page"' : '') +
        '><span class="only-en">' + p.en + '</span><span class="only-zh">' + p.zh + '</span></a>').join('') +
      '</div>' +
      '<div class="lang" role="group" aria-label="Language">' +
      '<button type="button" data-lang="en">EN</button>' +
      '<button type="button" data-lang="zh">中</button>' +
      '</div></div>';
    el.querySelectorAll('.lang button').forEach(b =>
      b.addEventListener('click', () => setLang(b.dataset.lang)));
  }

  function setLang(l) {
    document.documentElement.lang = l;
    try { localStorage.setItem('releaf-plant-lang', l); } catch (e) { /* private mode */ }
    document.querySelectorAll('.lang button').forEach(b =>
      b.setAttribute('aria-pressed', String(b.dataset.lang === l)));
    document.dispatchEvent(new CustomEvent('langchange', { detail: l }));
  }

  let saved = 'en';
  try { saved = localStorage.getItem('releaf-plant-lang') || 'en'; } catch (e) { /* ignore */ }

  document.addEventListener('DOMContentLoaded', function () {
    nav();
    setLang(saved);
    lightbox();
  });

  /* Click any .figc image to see it large. */
  function lightbox() {
    document.addEventListener('click', function (e) {
      const img = e.target.closest('.figc img');
      if (!img) return;
      const box = document.createElement('div');
      box.className = 'lb';
      box.innerHTML = '<button class="lb-x" aria-label="Close">✕</button><div><img alt=""><div class="lb-cap"></div></div>';
      box.querySelector('img').src = img.src;
      box.querySelector('img').alt = img.alt;
      box.querySelector('.lb-cap').textContent = img.alt;
      box.addEventListener('click', () => box.remove());
      document.body.appendChild(box);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') document.querySelectorAll('.lb').forEach(b => b.remove());
    });
  }

  /* Helpers used by the data-driven pages. */
  window.RL = {
    esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); },
    bi(en, zh) {
      return '<span class="only-en">' + this.esc(en) + '</span>' +
             '<span class="only-zh">' + this.esc(zh || en) + '</span>';
    },
    lang() { return document.documentElement.lang || 'en'; },
    shuffle(a) { const x = a.slice(); for (let i = x.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [x[i], x[j]] = [x[j], x[i]]; } return x; }
  };
})();
