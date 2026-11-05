/* Shared chrome: nav, language toggle, small helpers. */
(function () {
  /* 學習軌道 — 第一排。 */
  const PAGES = [
    { href: 'index.html',    en: 'Start',    zh: '開始' },
    { href: 'matrix.html',   en: 'Matrix',   zh: '實驗矩陣' },
    { href: 'numbers.html',  en: 'Numbers',  zh: '數字庫' },
    { href: 'tonight.html',  en: 'Kyle 10',  zh: 'Kyle 十問' },
    { href: 'decoder.html',  en: 'Decoder',  zh: '名詞解碼' },
    { href: 'drill.html',    en: 'Drill',    zh: '演練' }
  ];

  /* 深讀 — 10/25 建的那些頁，收在下拉面板裡。 */
  const DEEP = [
    { href: 'facts.html',     en: 'Facts',        zh: '事實庫' },
    { href: 'figures.html',   en: 'Figures',      zh: '圖像記憶' },
    { href: 'mechanism.html', en: 'Mechanisms',   zh: '機制' },
    { href: 'qa.html',        en: 'Q&A 117',      zh: '問答 117' },
    { href: 'results.html',   en: 'Results',      zh: '結果詮釋' },
    { href: 'rigour.html',    en: 'Boundary',     zh: '邊界標準' },
    { href: 'kyle.html',      en: 'Kyle 10/24',   zh: '博後五問' },
    { href: 'deep.html',      en: 'Deep dive',    zh: '五問深讀' },
    { href: 'answer.html',    en: 'Answer shape', zh: '答題架構' },
    { href: 'redlines.html',  en: 'Red lines',    zh: '紅線' }
  ];

  const here = location.pathname.split('/').pop() || 'index.html';

  const leaf = '<svg class="leaf" viewBox="0 0 24 24" fill="none" aria-hidden="true">' +
    '<path d="M20 4c0 9-5.5 14-12 14-1.6 0-3-.3-4-.8" stroke="#5aaa47" stroke-width="2" stroke-linecap="round"/>' +
    '<path d="M4 20c2-7 7-11 13-12" stroke="#0167ef" stroke-width="2" stroke-linecap="round"/></svg>';

  function bil(en, zh) {
    return '<span class="only-en">' + en + '</span><span class="only-zh">' + zh + '</span>';
  }
  function link(p) {
    return '<a href="' + p.href + '"' + (p.href === here ? ' aria-current="page"' : '') + '>' +
      bil(p.en, p.zh) + '</a>';
  }

  function nav() {
    const el = document.querySelector('.nav');
    if (!el) return;
    const chev = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" class="chev">' +
      '<path d="M6 9.5 12 15.5 18 9.5" stroke="currentColor" stroke-width="2.1" ' +
      'stroke-linecap="round" stroke-linejoin="round"/></svg>';
    const burger = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">' +
      '<path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';

    el.innerHTML =
      '<div class="nav-in">' +
        '<a class="nav-brand" href="index.html">' + leaf +
          bil('ReLEAF <i>Plants</i>', 'ReLEAF <i>植物組</i>') + '</a>' +
        '<div class="nav-links">' + PAGES.map(link).join('') + '</div>' +
        '<button type="button" class="nav-more" aria-expanded="false" aria-controls="nav-pop">' +
          bil('Deep', '深讀') + chev + '</button>' +
        '<div class="lang" role="group" aria-label="Language">' +
          '<button type="button" data-lang="en">EN</button>' +
          '<button type="button" data-lang="zh">中</button>' +
        '</div>' +
        '<button type="button" class="nav-burger" aria-expanded="false" aria-controls="nav-pop">' +
          burger + '<span class="sr">Menu</span></button>' +
      '</div>' +
      '<div class="nav-pop" id="nav-pop" hidden><div class="nav-pop-in">' +
        '<div class="nav-pop-g is-primary"><h6>' + bil('Learning track', '學習軌道') + '</h6>' +
          '<div class="nav-pop-l">' + PAGES.map(link).join('') + '</div></div>' +
        '<div class="nav-pop-g"><h6>' + bil('Deeper reading', '深讀') + '</h6>' +
          '<div class="nav-pop-l">' + DEEP.map(link).join('') + '</div></div>' +
      '</div></div>';

    el.querySelectorAll('.lang button').forEach(b =>
      b.addEventListener('click', () => setLang(b.dataset.lang)));

    const pop = el.querySelector('.nav-pop');
    const togs = el.querySelectorAll('.nav-more, .nav-burger');
    function shut() {
      pop.hidden = true;
      togs.forEach(t => t.setAttribute('aria-expanded', 'false'));
    }
    togs.forEach(t => t.addEventListener('click', function (e) {
      e.stopPropagation();
      const open = pop.hidden;
      pop.hidden = !open;
      togs.forEach(x => x.setAttribute('aria-expanded', String(open)));
    }));
    document.addEventListener('click', function (e) {
      if (!pop.hidden && !e.target.closest('.nav')) shut();
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') shut(); });
  }

  function setLang(l) {
    document.documentElement.lang = l;
    try { localStorage.setItem('releaf-plant-lang', l); } catch (e) { /* private mode */ }
    document.querySelectorAll('.lang button').forEach(b =>
      b.setAttribute('aria-pressed', String(b.dataset.lang === l)));
    document.dispatchEvent(new CustomEvent('langchange', { detail: l }));
  }

  let saved = 'zh';
  try { saved = localStorage.getItem('releaf-plant-lang') || 'zh'; } catch (e) { /* ignore */ }

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

    /* Unescaped bilingual wrapper, for markup built elsewhere. */
    biH(en, zh) {
      return '<span class="only-en">' + (en || zh || '') + '</span>' +
             '<span class="only-zh">' + (zh || en || '') + '</span>';
    },
    /* A bilingual <ul>/<ol>: two lists, one shown. */
    biList(tag, cls, en, zh) {
      const one = (arr) => '<' + tag + ' class="' + (cls ? cls + ' ' : '') + '">' +
        (arr || []).map(s => '<li>' + this.esc(s) + '</li>').join('') + '</' + tag + '>';
      return '<span class="only-en blk">' + one(en && en.length ? en : zh) + '</span>' +
             '<span class="only-zh blk">' + one(zh && zh.length ? zh : en) + '</span>';
    },
    shuffle(a) { const x = a.slice(); for (let i = x.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [x[i], x[j]] = [x[j], x[i]]; } return x; },

    /* Citation chips. Keys index window.LIT; an unknown key still prints. */
    cites(keys) {
      if (!keys || !keys.length) return '';
      const L = window.LIT || {};
      return '<div class="citerow">' + keys.map(k => {
        const r = L[k];
        if (!r) return '<span class="cite">' + this.esc(k) + '</span>';
        const label = r.a.split(',')[0].split(' ')[0] + ' ' + r.y;
        return r.pmid
          ? '<a class="cite" href="https://pubmed.ncbi.nlm.nih.gov/' + r.pmid + '/" target="_blank" rel="noopener">' + this.esc(label) + '</a>'
          : '<span class="cite">' + this.esc(label) + '</span>';
      }).join('') + '</div>';
    },

    /* One answer card body. Older questions carry moves/ev/trap only; the
       Results set adds a claim, the arithmetic, the unit of inference and the
       two-column boundary. Every field is optional. */
    qaBody(q) {
      let h = '<div class="q-body">';
      if (q.claim) {
        h += '<h5>' + this.bi('The claim that is warranted', '站得住的結論') + '</h5>' +
             '<p class="claimbox">' + this.esc(q.claim) + '</p>';
      }
      h += '<h5>' + this.bi('The moves', '動作') + '</h5>' +
           '<ol class="q-moves">' + q.moves.map(m => '<li>' + this.esc(m) + '</li>').join('') + '</ol>';
      if (q.stat) {
        h += '<h5>' + this.bi('The arithmetic', '算術') + '</h5>' +
             '<p class="statbox">' + this.esc(q.stat) + '</p>';
      }
      if (q.unit) {
        h += '<h5>' + this.bi('The unit of inference', '推論單位') + '</h5>' +
             '<p class="unitbox">' + this.esc(q.unit) + '</p>';
      }
      if (q.holds || q.fails) {
        h += '<h5>' + this.bi('The boundary, stated exactly', '精確說出邊界') + '</h5><div class="bnd">' +
             '<div class="hold"><h6>' + this.bi('It supports', '支持') + '</h6><ul>' +
               (q.holds || []).map(x => '<li>' + this.esc(x) + '</li>').join('') + '</ul></div>' +
             '<div class="fail"><h6>' + this.bi('It does not support', '不支持') + '</h6><ul>' +
               (q.fails || []).map(x => '<li>' + this.esc(x) + '</li>').join('') + '</ul></div>' +
             '</div>';
      }
      h += '<h5>' + this.bi('Evidence to cite', '要引用的證據') + '</h5>' +
           '<p class="q-ev">' + this.esc(q.ev) + '</p>' +
           '<h5>' + this.bi('What sinks it', '會沉船的地方') + '</h5>' +
           '<p class="q-trap">' + this.esc(q.trap) + '</p>';
      if (q.lit) {
        h += '<h5 style="margin-top:1rem">' + this.bi('Reading behind it', '背後的文獻') + '</h5>' + this.cites(q.lit);
      }
      return h + '</div>';
    }
  };
})();
