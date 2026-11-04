/* 七張圖 — 為了「一眼看懂」而畫的，不是 wiki 上的圖。
 *
 * 全部是 inline SVG，白底，用站上的配色。每一張都有一句話的標題與一句話的結論，
 * 因為一張沒有結論的圖在評審室裡沒有用。
 *
 * 色票： 綠 #5aaa47 深綠 #00875C 藍 #0167ef 橘 #F08C00 紅 #d1495b 紫 #7C5CFF 灰 #8a9199
 */
window.DRAW = {};

/* ───────────────────────────────── 1. 證據覆蓋矩陣
 * 三個系統 × 兩種逆境 × 五種施用物。格子的顏色就是證據強度。
 */
window.DRAW.coverage = {
  t_zh:'證據覆蓋矩陣', t_en:'Evidence coverage',
  lede_zh:'三個系統、兩種逆境、五種施用物 = 30 格。有量化結果的只有 13 格，而其中只有 1 格的效果大過雜訊 — 那一格是逆境本身，不是保護劑。',
  take_zh:'先記這張圖的形狀：ACCD 那一行最滿，LEA14 那一行最空，熱逆境整體比鹽逆境空。評審問到空格時，答案是「沒做」，不是「沒效」。',
  svg:`<svg viewBox="0 0 860 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Evidence coverage matrix across three systems, two stresses and five agents">
<style>
.hd{font:600 13px/1 ui-sans-serif,system-ui,sans-serif;fill:#2c3238}
.rw{font:600 13px/1 ui-sans-serif,system-ui,sans-serif;fill:#2c3238}
.sm{font:11px/1 ui-sans-serif,system-ui,sans-serif;fill:#6b7280}
.ce{font:600 11px/1 ui-sans-serif,system-ui,sans-serif;fill:#fff}
.cd{font:600 11px/1 ui-sans-serif,system-ui,sans-serif;fill:#6b7280}
.lg{font:11px/1 ui-sans-serif,system-ui,sans-serif;fill:#2c3238}
</style>
<rect width="860" height="420" fill="#fff"/>
<!-- column group headers -->
<text class="hd" x="232" y="26">瓊脂 Agar</text>
<text class="hd" x="446" y="26">水耕 Hydroponics</text>
<text class="hd" x="648" y="26">土壤 Soil</text>
<line x1="200" y1="34" x2="416" y2="34" stroke="#d9dee3" stroke-width="1.5"/>
<line x1="424" y1="34" x2="616" y2="34" stroke="#d9dee3" stroke-width="1.5"/>
<line x1="624" y1="34" x2="816" y2="34" stroke="#d9dee3" stroke-width="1.5"/>
<!-- stress sub headers -->
<text class="sm" x="248" y="52">鹽 salt</text><text class="sm" x="350" y="52">熱 heat</text>
<text class="sm" x="452" y="52">鹽 salt</text><text class="sm" x="554" y="52">熱 heat</text>
<text class="sm" x="652" y="52">鹽 salt</text><text class="sm" x="754" y="52">熱 heat</text>

<!-- rows: y = 70 + i*58 ; cells x = 208,310,412(gap),... actually 6 columns at 208,310, 428,530, 640,742 -->
<!-- ROW 1 trehalose -->
<text class="rw" x="18" y="92">海藻糖</text><text class="sm" x="18" y="106">Trehalose · 參考化合物</text>
<rect x="208" y="70" width="94" height="40" rx="5" fill="#00875C"/><text class="ce" x="255" y="94" text-anchor="middle">6 組 · 方向</text>
<rect x="310" y="70" width="94" height="40" rx="5" fill="#f1f3f5" stroke="#e3e7eb"/><text class="cd" x="357" y="94" text-anchor="middle">未做</text>
<rect x="428" y="70" width="94" height="40" rx="5" fill="#f1f3f5" stroke="#e3e7eb"/><text class="cd" x="475" y="94" text-anchor="middle">未做</text>
<rect x="530" y="70" width="94" height="40" rx="5" fill="#f1f3f5" stroke="#e3e7eb"/><text class="cd" x="577" y="94" text-anchor="middle">未做</text>
<rect x="640" y="70" width="94" height="40" rx="5" fill="#f1f3f5" stroke="#e3e7eb"/><text class="cd" x="687" y="94" text-anchor="middle">未做</text>
<rect x="742" y="70" width="94" height="40" rx="5" fill="#f1f3f5" stroke="#e3e7eb"/><text class="cd" x="789" y="94" text-anchor="middle">未做</text>

<!-- ROW 2 CH peptide -->
<text class="rw" x="18" y="150">富肽2號</text><text class="sm" x="18" y="164">CH Bio · 商品</text>
<rect x="208" y="128" width="94" height="40" rx="5" fill="#00875C"/><text class="ce" x="255" y="152" text-anchor="middle">3 trial · 方向</text>
<rect x="310" y="128" width="94" height="40" rx="5" fill="#fff4e0" stroke="#F08C00" stroke-dasharray="3 3"/><text class="cd" x="357" y="152" text-anchor="middle" fill="#8a5a00">只有方法</text>
<rect x="428" y="128" width="94" height="40" rx="5" fill="#9fd3b4"/><text class="ce" x="475" y="152" text-anchor="middle" fill="#14492f">描述</text>
<rect x="530" y="128" width="94" height="40" rx="5" fill="#f6d2d7" stroke="#d1495b"/><text class="cd" x="577" y="152" text-anchor="middle" fill="#8c2230">全低於對照</text>
<rect x="640" y="128" width="94" height="40" rx="5" fill="#f1f3f5" stroke="#e3e7eb"/><text class="cd" x="687" y="152" text-anchor="middle">未做</text>
<rect x="742" y="128" width="94" height="40" rx="5" fill="#f1f3f5" stroke="#e3e7eb"/><text class="cd" x="789" y="152" text-anchor="middle">未做</text>

<!-- ROW 3 ACCD -->
<text class="rw" x="18" y="208">ACC 去胺酶</text><text class="sm" x="18" y="222">ACCD · 我們的菌</text>
<rect x="208" y="186" width="94" height="40" rx="5" fill="#00875C"/><text class="ce" x="255" y="204" text-anchor="middle">Set 8+9</text><text class="ce" x="255" y="218" text-anchor="middle">方向</text>
<rect x="310" y="186" width="94" height="40" rx="5" fill="#00875C"/><text class="ce" x="357" y="204" text-anchor="middle">2 trial</text><text class="ce" x="357" y="218" text-anchor="middle">方向</text>
<rect x="428" y="186" width="94" height="40" rx="5" fill="#f6d2d7" stroke="#d1495b"/><text class="cd" x="475" y="210" text-anchor="middle" fill="#8c2230">判不出來</text>
<rect x="530" y="186" width="94" height="40" rx="5" fill="#9fd3b4"/><text class="ce" x="577" y="210" text-anchor="middle" fill="#14492f">≥1/80 方向</text>
<rect x="640" y="186" width="94" height="40" rx="5" fill="#9fd3b4"/><text class="ce" x="687" y="210" text-anchor="middle" fill="#14492f">方向</text>
<rect x="742" y="186" width="94" height="40" rx="5" fill="#f6d2d7" stroke="#d1495b"/><text class="cd" x="789" y="204" text-anchor="middle" fill="#8c2230">一盆一柱</text><text class="cd" x="789" y="218" text-anchor="middle" fill="#8c2230">無統計</text>

<!-- ROW 4 BoPep4 -->
<text class="rw" x="18" y="266">BoPep4</text><text class="sm" x="18" y="280">我們的菌</text>
<rect x="208" y="244" width="94" height="40" rx="5" fill="#9fd3b4"/><text class="ce" x="255" y="268" text-anchor="middle" fill="#14492f">Set 10 · 方向</text>
<rect x="310" y="244" width="94" height="40" rx="5" fill="#fff4e0" stroke="#F08C00" stroke-dasharray="3 3"/><text class="cd" x="357" y="268" text-anchor="middle" fill="#8a5a00">清單有 · 結果無</text>
<rect x="428" y="244" width="94" height="40" rx="5" fill="#00875C"/><text class="ce" x="475" y="268" text-anchor="middle">≥1/40 方向</text>
<rect x="530" y="244" width="94" height="40" rx="5" fill="#9fd3b4"/><text class="ce" x="577" y="268" text-anchor="middle" fill="#14492f">1/40 輕微</text>
<rect x="640" y="244" width="94" height="40" rx="5" fill="#f1f3f5" stroke="#e3e7eb"/><text class="cd" x="687" y="268" text-anchor="middle">未做</text>
<rect x="742" y="244" width="94" height="40" rx="5" fill="#f1f3f5" stroke="#e3e7eb"/><text class="cd" x="789" y="268" text-anchor="middle">未做</text>

<!-- ROW 5 LEA14 -->
<text class="rw" x="18" y="324">LEA14</text><text class="sm" x="18" y="338">野生型 · 我們的菌</text>
<rect x="208" y="302" width="94" height="40" rx="5" fill="#9fd3b4"/><text class="ce" x="255" y="320" text-anchor="middle" fill="#14492f">Set 11</text><text class="ce" x="255" y="334" text-anchor="middle" fill="#14492f">難判讀</text>
<rect x="310" y="302" width="94" height="40" rx="5" fill="#fff4e0" stroke="#F08C00" stroke-dasharray="3 3"/><text class="cd" x="357" y="326" text-anchor="middle" fill="#8a5a00">清單有 · 結果無</text>
<rect x="428" y="302" width="94" height="40" rx="5" fill="#f1f3f5" stroke="#e3e7eb"/><text class="cd" x="475" y="326" text-anchor="middle">未做</text>
<rect x="530" y="302" width="94" height="40" rx="5" fill="#f1f3f5" stroke="#e3e7eb"/><text class="cd" x="577" y="326" text-anchor="middle">未做</text>
<rect x="640" y="302" width="94" height="40" rx="5" fill="#f1f3f5" stroke="#e3e7eb"/><text class="cd" x="687" y="326" text-anchor="middle">未做</text>
<rect x="742" y="302" width="94" height="40" rx="5" fill="#f1f3f5" stroke="#e3e7eb"/><text class="cd" x="789" y="326" text-anchor="middle">未做</text>

<!-- ROW 0 the vehicle, set apart -->
<line x1="18" y1="356" x2="842" y2="356" stroke="#d9dee3"/>
<text class="rw" x="18" y="382">載體本身</text><text class="sm" x="18" y="396">WB800 / TB · 無保護劑</text>
<rect x="428" y="364" width="94" height="40" rx="5" fill="#0167ef"/><text class="ce" x="475" y="382" text-anchor="middle">1/16 地板</text><text class="ce" x="475" y="396" text-anchor="middle">劑量上限</text>
<rect x="640" y="364" width="94" height="40" rx="5" fill="#9fd3b4"/><text class="ce" x="687" y="388" text-anchor="middle" fill="#14492f">方法比較</text>
<text class="sm" x="540" y="390">← 這一列決定了上面所有列能用多濃</text>
</svg>`
};

/* ───────────────────────────────── 2. 劑量天花板 */
window.DRAW.ceiling = {
  t_zh:'劑量天花板', t_en:'The dose ceiling',
  lede_zh:'往右是越濃。植物的忍耐度從右邊壓下來，保護劑的有效濃度從左邊推上來。中間剩下的窗口很窄，而窗口的位置是載體決定的。',
  take_zh:'一句話：The vehicle, not the cargo, sets the usable dose. 這是植物組最原創、也最誠實的發現。',
  svg:`<svg viewBox="0 0 860 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The dilution window between vehicle toxicity and protectant efficacy">
<style>
.ax{font:11px/1 ui-sans-serif,system-ui,sans-serif;fill:#6b7280}
.lb{font:600 12px/1 ui-sans-serif,system-ui,sans-serif;fill:#2c3238}
.nt{font:11px/1 ui-sans-serif,system-ui,sans-serif;fill:#2c3238}
.bg{font:600 11px/1 ui-sans-serif,system-ui,sans-serif;fill:#fff}
</style>
<rect width="860" height="300" fill="#fff"/>
<!-- axis: dilution, left dilute 1/100 -> right concentrated 1/1 -->
<line x1="90" y1="196" x2="800" y2="196" stroke="#2c3238" stroke-width="1.5"/>
<text class="ax" x="90" y="216" text-anchor="middle">1/100</text>
<text class="ax" x="208" y="216" text-anchor="middle">1/80</text>
<text class="ax" x="326" y="216" text-anchor="middle">1/60</text>
<text class="ax" x="444" y="216" text-anchor="middle">1/40</text>
<text class="ax" x="562" y="216" text-anchor="middle">1/20</text>
<text class="ax" x="680" y="216" text-anchor="middle">1/10</text>
<text class="ax" x="790" y="216" text-anchor="middle">原液</text>
<text class="ax" x="90" y="234">← 稀 dilute</text>
<text class="ax" x="800" y="234" text-anchor="end">濃 concentrated →</text>

<!-- toxicity zone from the right -->
<rect x="500" y="56" width="300" height="132" fill="#f6d2d7"/>
<rect x="444" y="56" width="56" height="132" fill="#fdeef0"/>
<text class="lb" x="648" y="80" text-anchor="middle" fill="#8c2230">載體毒性區</text>
<text class="nt" x="648" y="98" text-anchor="middle" fill="#8c2230">1/10 與 1/20 → 漂白</text>
<text class="nt" x="648" y="114" text-anchor="middle" fill="#8c2230">原液與 1/2 → 黃化、變小</text>
<text class="nt" x="648" y="130" text-anchor="middle" fill="#8c2230">1/4 – 1/16 → 花青素累積</text>

<!-- efficacy zone from the left -->
<rect x="90" y="56" width="236" height="132" fill="#eef2f6"/>
<text class="lb" x="208" y="80" text-anchor="middle" fill="#45505c">太稀，沒有效果</text>
<text class="nt" x="208" y="98" text-anchor="middle" fill="#45505c">1/100 ACCD 葉綠素最低</text>
<text class="nt" x="208" y="114" text-anchor="middle" fill="#45505c">1/60–1/100 BoPep4</text>
<text class="nt" x="208" y="130" text-anchor="middle" fill="#45505c">與對照無差別</text>

<!-- the window -->
<rect x="326" y="56" width="174" height="132" fill="#dff0e6" stroke="#00875C" stroke-width="1.5"/>
<text class="lb" x="413" y="80" text-anchor="middle" fill="#14492f">可用窗口</text>
<text class="nt" x="413" y="100" text-anchor="middle" fill="#14492f">ACCD ≥ 1/80</text>
<text class="nt" x="413" y="116" text-anchor="middle" fill="#14492f">BoPep4 ≥ 1/40</text>
<text class="nt" x="413" y="132" text-anchor="middle" fill="#14492f">工作劑量定在 1/40</text>

<!-- the 1/16 floor line -->
<line x1="600" y1="48" x2="600" y2="196" stroke="#0167ef" stroke-width="2" stroke-dasharray="5 4"/>
<rect x="528" y="30" width="144" height="18" rx="4" fill="#0167ef"/>
<text class="bg" x="600" y="43" text-anchor="middle">自己定的 1/16 地板</text>

<!-- the contradiction arrow -->
<path d="M600 172 L680 172" stroke="#d1495b" stroke-width="2" marker-end="url(#ar)"/>
<defs><marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#d1495b"/></marker></defs>
<text class="nt" x="684" y="176" fill="#8c2230">ACCD 對鹽卻用了這裡 → 漂白</text>

<!-- what lands on the plant -->
<line x1="444" y1="196" x2="444" y2="258" stroke="#00875C" stroke-width="1.5"/>
<text class="lb" x="452" y="252" fill="#14492f">在 1/40，實際施到植物上的蛋白</text>
<text class="nt" x="452" y="270">ACCD 9.458 ÷ 40 = 0.236 µg/mL　·　BoPep4 5.230 ÷ 40 = 0.131 µg/mL</text>
<text class="nt" x="452" y="286" fill="#8c2230">而空宿主 WB800 的 ELISA 背景是 4.5–5.5 µg/mL → BoPep4 扣背景後約等於 0</text>
</svg>`
};

/* ───────────────────────────────── 3. 標準化翻轉 */
window.DRAW.norm = {
  t_zh:'標準化翻轉', t_en:'Why dividing by fresh weight flips the ranking',
  lede_zh:'同一組資料，除以鮮重與不除，給出相反的排序。因為在逆境下鮮重自己就在掉 — 分母是逆境的函數。',
  take_zh:'要講的句子：葉綠素除以鮮重，在逆境下量到的是失水，不是色素。所以我們改用每株葉綠素。',
  svg:`<svg viewBox="0 0 860 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="How fresh-weight normalisation reverses the ranking of two treatments">
<style>
.ti{font:600 13px/1 ui-sans-serif,system-ui,sans-serif;fill:#2c3238}
.ax{font:11px/1 ui-sans-serif,system-ui,sans-serif;fill:#6b7280}
.vl{font:600 12px/1 ui-sans-serif,system-ui,sans-serif;fill:#2c3238}
.nt{font:11px/1 ui-sans-serif,system-ui,sans-serif;fill:#45505c}
.mm{font:12px/1 ui-monospace,SFMono-Regular,Menlo,monospace;fill:#2c3238}
</style>
<rect width="860" height="400" fill="#fff"/>

<!-- panel A: total chlorophyll per plant -->
<text class="ti" x="40" y="30">A　每株總葉綠素（不除以鮮重）</text>
<text class="ax" x="40" y="48">chlorophyll per plant</text>
<line x1="40" y1="180" x2="250" y2="180" stroke="#2c3238"/>
<line x1="40" y1="60" x2="40" y2="180" stroke="#2c3238"/>
<rect x="70" y="72" width="54" height="108" fill="#00875C"/><text class="vl" x="97" y="66" text-anchor="middle">1.00</text>
<rect x="156" y="115" width="54" height="65" fill="#9fd3b4"/><text class="vl" x="183" y="109" text-anchor="middle">0.60</text>
<text class="ax" x="97" y="196" text-anchor="middle">對照</text>
<text class="ax" x="183" y="196" text-anchor="middle">處理</text>
<text class="nt" x="40" y="218">對照贏。處理組色素比較少。</text>

<!-- panel B: fresh weight -->
<text class="ti" x="320" y="30">B　鮮重</text>
<text class="ax" x="320" y="48">fresh weight</text>
<line x1="320" y1="180" x2="530" y2="180" stroke="#2c3238"/>
<line x1="320" y1="60" x2="320" y2="180" stroke="#2c3238"/>
<rect x="350" y="72" width="54" height="108" fill="#0167ef"/><text class="vl" x="377" y="66" text-anchor="middle">1.00</text>
<rect x="436" y="148" width="54" height="32" fill="#9ec5fb"/><text class="vl" x="463" y="142" text-anchor="middle">0.30</text>
<text class="ax" x="377" y="196" text-anchor="middle">對照</text>
<text class="ax" x="463" y="196" text-anchor="middle">處理</text>
<text class="nt" x="320" y="218">處理組小很多 — 生長被抑制。</text>

<!-- panel C: the ratio -->
<text class="ti" x="600" y="30">C　A ÷ B（除以鮮重）</text>
<text class="ax" x="600" y="48">chlorophyll mg g⁻¹</text>
<line x1="600" y1="180" x2="810" y2="180" stroke="#2c3238"/>
<line x1="600" y1="60" x2="600" y2="180" stroke="#2c3238"/>
<rect x="630" y="144" width="54" height="36" fill="#F08C00"/><text class="vl" x="657" y="138" text-anchor="middle">1.00</text>
<rect x="716" y="68" width="54" height="112" fill="#F08C00"/><text class="vl" x="743" y="62" text-anchor="middle">2.00</text>
<text class="ax" x="657" y="196" text-anchor="middle">對照</text>
<text class="ax" x="743" y="196" text-anchor="middle">處理</text>
<text class="nt" x="600" y="218" fill="#8c2230">處理組贏兩倍。排序翻過來了。</text>

<!-- the algebra -->
<rect x="40" y="244" width="780" height="128" rx="8" fill="#f7f9fb" stroke="#e3e7eb"/>
<text class="ti" x="60" y="268">算術：沒有任何色素被救起來，比值還是翻倍了</text>
<text class="mm" x="60" y="296">對照　 1.00 ÷ 1.00 = 1.00</text>
<text class="mm" x="60" y="318">處理　 0.60 ÷ 0.30 = 2.00</text>
<text class="nt" x="330" y="296">處理組的色素其實「掉了四成」（1.00 → 0.60）。</text>
<text class="nt" x="330" y="318">但它的鮮重掉了七成，所以除完之後變成兩倍。</text>
<text class="nt" x="60" y="346" fill="#8c2230">一般式：d(C/W) 的方向由 (dC/C) − (dW/W) 決定。只要失水比失色素快，比值就會上升 — 與色素完全無關。</text>
<text class="nt" x="60" y="364">正確的分母：每株、每葉面積，或鮮重已被配對時才用鮮重。熱逆境 trial 1 的鮮重只有 0.02 g，wiki 自己說那樣算出來的值「不合理」。</text>
</svg>`
};

/* ───────────────────────────────── 4. ELISA 的兩個問題 */
window.DRAW.elisa = {
  t_zh:'ELISA 的兩個問題', t_en:'Two problems with the ELISA',
  lede_zh:'競爭型抗 His ELISA。標準曲線只到 3 µg/mL，而所有樣品都在 4.5 到 13.4 之間；空宿主 WB800 自己就讀 4.5 到 5.5。',
  take_zh:'只有 ACCD 明確站在背景之上。LEA14 與 BoPep4 的值落在空宿主背景裡 — 這件事要自己先講。',
  svg:`<svg viewBox="0 0 860 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ELISA standard curve with all samples above the top standard and the empty-host background band">
<style>
.ti{font:600 13px/1 ui-sans-serif,system-ui,sans-serif;fill:#2c3238}
.ax{font:11px/1 ui-sans-serif,system-ui,sans-serif;fill:#6b7280}
.nt{font:11px/1 ui-sans-serif,system-ui,sans-serif;fill:#45505c}
.pt{font:600 11px/1 ui-sans-serif,system-ui,sans-serif;fill:#2c3238}
.wt{font:600 11px/1 ui-sans-serif,system-ui,sans-serif;fill:#fff}
</style>
<rect width="860" height="420" fill="#fff"/>
<text class="ti" x="40" y="28">濃度軸（µg/mL）· 每一個點是 Table 2 的一個樣品</text>

<!-- axis 0 .. 14 mapped to x 70 .. 800 -->
<line x1="70" y1="300" x2="800" y2="300" stroke="#2c3238" stroke-width="1.5"/>
<g class="ax">
<text x="70" y="320" text-anchor="middle">0</text>
<text x="226" y="320" text-anchor="middle">3</text>
<text x="330" y="320" text-anchor="middle">5</text>
<text x="487" y="320" text-anchor="middle">8</text>
<text x="643" y="320" text-anchor="middle">11</text>
<text x="800" y="320" text-anchor="middle">14</text>
</g>

<!-- standard curve valid zone 0.093 .. 3 -->
<rect x="75" y="200" width="151" height="100" fill="#dff0e6" stroke="#00875C"/>
<text class="pt" x="150" y="222" text-anchor="middle" fill="#14492f">標準曲線範圍</text>
<text class="nt" x="150" y="240" text-anchor="middle" fill="#14492f">0.093 – 3 µg/mL</text>
<text class="nt" x="150" y="256" text-anchor="middle" fill="#14492f">六點 · duplicate</text>
<text class="nt" x="150" y="272" text-anchor="middle" fill="#14492f">R² = 0.9967</text>

<!-- extrapolated zone -->
<rect x="226" y="200" width="574" height="100" fill="#fdeef0" stroke="#d1495b" stroke-dasharray="4 3"/>
<text class="pt" x="513" y="222" text-anchor="middle" fill="#8c2230">外插區 — 所有樣品都在這裡</text>
<text class="nt" x="513" y="240" text-anchor="middle" fill="#8c2230">競爭型 ELISA 在這一段已經飽和：%B/B0 的微小差異被放大成很大的濃度差</text>
<text class="nt" x="513" y="256" text-anchor="middle" fill="#8c2230">所以外插區裡的點不能互相比大小</text>

<!-- WB800 background band 4.562 .. 5.452 -->
<rect x="307" y="60" width="70" height="130" fill="#45505c" opacity="0.14"/>
<line x1="307" y1="60" x2="307" y2="190" stroke="#45505c" stroke-dasharray="3 3"/>
<line x1="377" y1="60" x2="377" y2="190" stroke="#45505c" stroke-dasharray="3 3"/>
<rect x="276" y="38" width="132" height="18" rx="4" fill="#45505c"/>
<text class="wt" x="342" y="51" text-anchor="middle">空宿主背景 4.56–5.45</text>

<!-- sample points -->
<!-- x = 70 + v*52.14 -->
<g>
<!-- WB800 -->
<circle cx="308" cy="176" r="6" fill="#45505c"/><circle cx="354" cy="176" r="6" fill="#45505c"/>
<text class="nt" x="332" y="196" text-anchor="middle">WB800</text>
<!-- BoPep4 -->
<circle cx="317" cy="152" r="6" fill="#d1495b"/><circle cx="348" cy="152" r="6" fill="#d1495b"/>
<circle cx="400" cy="152" r="6" fill="#d1495b"/><circle cx="356" cy="152" r="6" fill="#d1495b"/>
<text class="nt" x="360" y="140" text-anchor="middle" fill="#8c2230">BoPep4（WT / v2t1 / v2t2）4.74 – 6.60　← 與背景重疊</text>
<!-- LEA -->
<circle cx="387" cy="124" r="6" fill="#F08C00"/><circle cx="400" cy="124" r="6" fill="#F08C00"/>
<text class="nt" x="412" y="128" fill="#8a5a00">LEA14　6.09 / 6.32　← 僅略高於背景</text>
<!-- AcdS 2.1 -->
<circle cx="497" cy="96" r="6" fill="#0167ef"/><circle cx="563" cy="96" r="6" fill="#0167ef"/>
<text class="nt" x="575" y="100" fill="#0a4fae">AcdS 2.1（最佳化 ACCD）8.20 / 9.46</text>
<!-- Csn-ACCD -->
<circle cx="629" cy="72" r="6" fill="#00875C"/><circle cx="701" cy="72" r="6" fill="#00875C"/>
<text class="nt" x="713" y="76" fill="#14492f">Csn-ACCD（野生型密碼子）12.07 / 13.45</text>
</g>

<!-- bottom readings -->
<rect x="40" y="340" width="780" height="60" rx="8" fill="#f7f9fb" stroke="#e3e7eb"/>
<text class="nt" x="60" y="362">訊噪比：ACCD 約 1.8–2.9 倍背景　·　LEA14 約 1.2 倍　·　BoPep4 約 0.9–1.4 倍。</text>
<text class="nt" x="60" y="382" fill="#8c2230">1.2 倍、單孔、又在量程外 → 不構成偵測。wiki 自己寫：這些值「不應被解讀為重組蛋白的專一產量」。</text>
</svg>`
};

/* ───────────────────────────────── 5. 證據鏈 */
window.DRAW.chain = {
  t_zh:'證據鏈，以及它在哪裡斷', t_en:'The evidence chain and where it breaks',
  lede_zh:'從基因到田間有六節。每一節都有資料，但不是同一批樣品串起來的 — 這就是最弱的那一節。',
  take_zh:'評審問「你們怎麼知道是蛋白造成的」，答案不是背機制，是指出鏈條的哪一節你量過、哪一節沒有。',
  svg:`<svg viewBox="0 0 860 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The evidence chain from gene to field, with solid links measured and dashed links not">
<style>
.bx{font:600 12px/1 ui-sans-serif,system-ui,sans-serif;fill:#fff}
.bs{font:10px/1 ui-sans-serif,system-ui,sans-serif;fill:#fff;opacity:.9}
.lk{font:11px/1 ui-sans-serif,system-ui,sans-serif;fill:#45505c}
.wk{font:600 11px/1 ui-sans-serif,system-ui,sans-serif;fill:#8c2230}
.ti{font:600 13px/1 ui-sans-serif,system-ui,sans-serif;fill:#2c3238}
</style>
<rect width="860" height="340" fill="#fff"/>
<defs><marker id="a2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#45505c"/></marker>
<marker id="a3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#d1495b"/></marker></defs>

<!-- nodes -->
<rect x="24" y="60" width="112" height="52" rx="6" fill="#00875C"/><text class="bx" x="80" y="82" text-anchor="middle">基因與構築</text><text class="bs" x="80" y="98" text-anchor="middle">9/9 junctions</text>
<rect x="176" y="60" width="112" height="52" rx="6" fill="#00875C"/><text class="bx" x="232" y="82" text-anchor="middle">蛋白量</text><text class="bs" x="232" y="98" text-anchor="middle">His-tag ELISA</text>
<rect x="328" y="60" width="112" height="52" rx="6" fill="#0167ef"/><text class="bx" x="384" y="82" text-anchor="middle">酵素活性</text><text class="bs" x="384" y="98" text-anchor="middle">DNPH · 僅 ACCD</text>
<rect x="480" y="60" width="112" height="52" rx="6" fill="#F08C00"/><text class="bx" x="536" y="82" text-anchor="middle">植物效果</text><text class="bs" x="536" y="98" text-anchor="middle">葉綠素 · 鮮重</text>
<rect x="632" y="60" width="112" height="52" rx="6" fill="#9fd3b4"/><text class="bx" x="688" y="82" text-anchor="middle" fill="#14492f">存活與回復</text><text class="bs" x="688" y="98" text-anchor="middle" fill="#14492f">僅熱逆境有回復期</text>
<rect x="760" y="60" width="76" height="52" rx="6" fill="#f1f3f5" stroke="#e3e7eb" stroke-dasharray="3 3"/><text class="bx" x="798" y="82" text-anchor="middle" fill="#8a9199">田間</text><text class="bs" x="798" y="98" text-anchor="middle" fill="#8a9199">未做</text>

<!-- links -->
<line x1="136" y1="86" x2="172" y2="86" stroke="#45505c" stroke-width="2" marker-end="url(#a2)"/>
<line x1="288" y1="86" x2="324" y2="86" stroke="#45505c" stroke-width="2" marker-end="url(#a2)"/>
<line x1="440" y1="86" x2="476" y2="86" stroke="#d1495b" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#a3)"/>
<line x1="592" y1="86" x2="628" y2="86" stroke="#d1495b" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#a3)"/>
<line x1="744" y1="86" x2="756" y2="86" stroke="#8a9199" stroke-width="2" stroke-dasharray="4 4"/>

<!-- link annotations -->
<text class="lk" x="24" y="140">定序沒有從頭到尾做</text>
<text class="lk" x="24" y="156">接點確認 ≠ 序列確認</text>

<text class="lk" x="176" y="140">空宿主也有訊號</text>
<text class="lk" x="176" y="156">只有 ACCD 站在背景之上</text>

<text class="wk" x="328" y="140">鏈條斷在這裡</text>
<text class="lk" x="328" y="156">上植物的那一批上清，</text>
<text class="lk" x="328" y="172">沒有量過活性</text>

<text class="wk" x="480" y="140">鏈條也斷在這裡</text>
<text class="lk" x="480" y="156">只在單一採收日量，</text>
<text class="lk" x="480" y="172">沒有存活率</text>

<text class="lk" x="632" y="140">熱逆境有 5 天回復期，</text>
<text class="lk" x="632" y="156">鹽逆境沒有</text>

<!-- the fix box -->
<rect x="24" y="200" width="812" height="116" rx="8" fill="#f7f9fb" stroke="#e3e7eb"/>
<text class="ti" x="44" y="226">兩個很便宜的補法（當 future work 講，不要當藉口講）</text>
<text class="lk" x="44" y="252">1　每一批要上植物的上清，分一管跑 DNPH，把活性寫在植物結果旁邊。這一步把第三節與第四節接起來，成本是一個管子。</text>
<text class="lk" x="44" y="274">2　在逆境結束當天記存活率，回復期結束再量生物量。這一步把第四節與第五節接起來，成本是兩個記錄日。</text>
<text class="lk" x="44" y="300" fill="#8c2230">第三個補法比較貴但最決定性：把上清煮過當對照（蛋白失活、其他成分不變）。對 ACCD 特別乾淨，因為它是酵素。</text>
</svg>`
};

/* ───────────────────────────────── 6. 推論單位 */
window.DRAW.unit = {
  t_zh:'推論單位：為什麼 40 株是 n = 1', t_en:'Why forty seedlings are n = 1',
  lede_zh:'處理是施在盤上的，不是施在每一株上。所以盤是實驗單位，而一個條件只有一個盤。',
  take_zh:'「一個條件 40 株，但它們共用一個盤，所以生物重複是 1。」這句話要能不假思索地講出來。',
  svg:`<svg viewBox="0 0 860 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="One plate holding forty seedlings is one experimental unit, versus three independently poured plates">
<style>
.ti{font:600 13px/1 ui-sans-serif,system-ui,sans-serif;fill:#2c3238}
.nt{font:11px/1 ui-sans-serif,system-ui,sans-serif;fill:#45505c}
.mm{font:12px/1 ui-monospace,SFMono-Regular,Menlo,monospace;fill:#2c3238}
.bd{font:600 12px/1 ui-sans-serif,system-ui,sans-serif;fill:#fff}
</style>
<rect width="860" height="330" fill="#fff"/>

<!-- LEFT: what we did -->
<text class="ti" x="40" y="30">我們做的：一個條件一個盤</text>
<rect x="40" y="44" width="300" height="150" rx="10" fill="#fdeef0" stroke="#d1495b" stroke-width="1.5"/>
<g fill="#5aaa47">
<circle cx="76" cy="78" r="7"/><circle cx="112" cy="78" r="7"/><circle cx="148" cy="78" r="7"/><circle cx="184" cy="78" r="7"/><circle cx="220" cy="78" r="7"/><circle cx="256" cy="78" r="7"/><circle cx="292" cy="78" r="7"/>
<circle cx="76" cy="110" r="7"/><circle cx="112" cy="110" r="7"/><circle cx="148" cy="110" r="7"/><circle cx="184" cy="110" r="7"/><circle cx="220" cy="110" r="7"/><circle cx="256" cy="110" r="7"/><circle cx="292" cy="110" r="7"/>
<circle cx="76" cy="142" r="7"/><circle cx="112" cy="142" r="7"/><circle cx="148" cy="142" r="7"/><circle cx="184" cy="142" r="7"/><circle cx="220" cy="142" r="7"/><circle cx="256" cy="142" r="7"/><circle cx="292" cy="142" r="7"/>
<circle cx="76" cy="174" r="7"/><circle cx="112" cy="174" r="7"/><circle cx="148" cy="174" r="7"/><circle cx="184" cy="174" r="7"/><circle cx="220" cy="174" r="7"/><circle cx="256" cy="174" r="7"/><circle cx="292" cy="174" r="7"/>
</g>
<rect x="110" y="200" width="160" height="20" rx="5" fill="#d1495b"/>
<text class="bd" x="190" y="214" text-anchor="middle">n_bio = 1</text>
<text class="nt" x="40" y="242">一次倒盤、一個培養箱位置、一次施藥。</text>
<text class="nt" x="40" y="260">28 株的變異是「株與株之間」，它低估了</text>
<text class="nt" x="40" y="278">「盤與盤之間」的不確定性 — 而那個我們沒量過。</text>
<text class="nt" x="40" y="300" fill="#8c2230">圖上的星號是把每一株當獨立算的 → p 值偏寬鬆。</text>

<!-- RIGHT: what would fix it -->
<text class="ti" x="400" y="30">修法：每個條件三個獨立倒的盤，位置隨機</text>
<g>
<rect x="400" y="44" width="130" height="78" rx="8" fill="#dff0e6" stroke="#00875C" stroke-width="1.5"/>
<g fill="#5aaa47"><circle cx="428" cy="68" r="6"/><circle cx="456" cy="68" r="6"/><circle cx="484" cy="68" r="6"/><circle cx="512" cy="68" r="6"/><circle cx="428" cy="96" r="6"/><circle cx="456" cy="96" r="6"/><circle cx="484" cy="96" r="6"/><circle cx="512" cy="96" r="6"/></g>
<rect x="548" y="44" width="130" height="78" rx="8" fill="#dff0e6" stroke="#00875C" stroke-width="1.5"/>
<g fill="#5aaa47"><circle cx="576" cy="68" r="6"/><circle cx="604" cy="68" r="6"/><circle cx="632" cy="68" r="6"/><circle cx="660" cy="68" r="6"/><circle cx="576" cy="96" r="6"/><circle cx="604" cy="96" r="6"/><circle cx="632" cy="96" r="6"/><circle cx="660" cy="96" r="6"/></g>
<rect x="696" y="44" width="130" height="78" rx="8" fill="#dff0e6" stroke="#00875C" stroke-width="1.5"/>
<g fill="#5aaa47"><circle cx="724" cy="68" r="6"/><circle cx="752" cy="68" r="6"/><circle cx="780" cy="68" r="6"/><circle cx="808" cy="68" r="6"/><circle cx="724" cy="96" r="6"/><circle cx="752" cy="96" r="6"/><circle cx="780" cy="96" r="6"/><circle cx="808" cy="96" r="6"/></g>
</g>
<rect x="533" y="134" width="160" height="20" rx="5" fill="#00875C"/>
<text class="bd" x="613" y="148" text-anchor="middle">n_bio = 3</text>
<text class="nt" x="400" y="176">分析時用盤的平均值當一個資料點，或用混合模型</text>
<text class="nt" x="400" y="194">把盤放成隨機效應。</text>

<rect x="400" y="212" width="426" height="100" rx="8" fill="#f7f9fb" stroke="#e3e7eb"/>
<text class="ti" x="418" y="236">要幾個盤？把 CV 代進去就有答案</text>
<text class="mm" x="418" y="262">n ≈ 2 (1.96 + 0.84)² (CV / 效果)²</text>
<text class="nt" x="418" y="286">盤間 CV 15%、要偵測 30% 差異 → n ≈ 4 盤／組</text>
<text class="nt" x="418" y="304">盤間 CV 25% → n ≈ 11 盤／組。所以「三到四盤」是有根據的要求。</text>
</svg>`
};

/* ───────────────────────────────── 7. 時機 */
window.DRAW.timing = {
  t_zh:'三個時機，以及它們為什麼不一致', t_en:'Three timings, and why they disagree',
  lede_zh:'前處理（逆境前一天）、同時處理（逆境當天）、事後處理（逆境後一天）。每一組實驗給出的最佳時機都不一樣。',
  take_zh:'不一致本身就是結論：最佳時機隨逆境種類、強度與系統而動。這對產品是好消息（施用時機是規格），對論文是壞消息（還沒收斂）。',
  svg:`<svg viewBox="0 0 860 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pre, co and post treatment timings and which one won in each experiment">
<style>
.ti{font:600 13px/1 ui-sans-serif,system-ui,sans-serif;fill:#2c3238}
.nt{font:11px/1 ui-sans-serif,system-ui,sans-serif;fill:#45505c}
.ax{font:11px/1 ui-sans-serif,system-ui,sans-serif;fill:#6b7280}
.wn{font:600 11px/1 ui-sans-serif,system-ui,sans-serif;fill:#fff}
.rw{font:600 12px/1 ui-sans-serif,system-ui,sans-serif;fill:#2c3238}
</style>
<rect width="860" height="380" fill="#fff"/>

<!-- timeline -->
<text class="ti" x="40" y="28">時間軸</text>
<line x1="150" y1="60" x2="700" y2="60" stroke="#2c3238" stroke-width="1.5"/>
<circle cx="260" cy="60" r="6" fill="#0167ef"/><text class="ax" x="260" y="82" text-anchor="middle">Day −1</text><text class="rw" x="260" y="46" text-anchor="middle">前 pre</text>
<circle cx="420" cy="60" r="6" fill="#F08C00"/><text class="ax" x="420" y="82" text-anchor="middle">Day 0</text><text class="rw" x="420" y="46" text-anchor="middle">同時 co</text>
<circle cx="580" cy="60" r="6" fill="#00875C"/><text class="ax" x="580" y="82" text-anchor="middle">Day +1</text><text class="rw" x="580" y="46" text-anchor="middle">事後 post</text>
<rect x="420" y="96" width="160" height="16" rx="4" fill="#f6d2d7"/>
<text class="ax" x="500" y="108" text-anchor="middle" fill="#8c2230">逆境開始</text>

<!-- who won -->
<text class="ti" x="40" y="152">每一組裡「最好的時機」</text>
<g>
<text class="nt" x="40" y="180">瓊脂 · 鹽 · CH t1（100 mM）</text>
<rect x="300" y="168" width="56" height="18" rx="4" fill="#e3e7eb"/><text class="ax" x="328" y="181" text-anchor="middle">前</text>
<rect x="364" y="168" width="56" height="18" rx="4" fill="#e3e7eb"/><text class="ax" x="392" y="181" text-anchor="middle">同時</text>
<rect x="428" y="168" width="56" height="18" rx="4" fill="#00875C"/><text class="wn" x="456" y="181" text-anchor="middle">事後</text>
<text class="nt" x="498" y="181">但那一次的苗只有四天齡，wiki 說「太脆弱」</text>
</g>
<g>
<text class="nt" x="40" y="208">瓊脂 · 鹽 · CH t2（75 mM）</text>
<rect x="300" y="196" width="56" height="18" rx="4" fill="#e3e7eb"/><text class="ax" x="328" y="209" text-anchor="middle">前</text>
<rect x="364" y="196" width="56" height="18" rx="4" fill="#F08C00"/><text class="wn" x="392" y="209" text-anchor="middle">同時</text>
<rect x="428" y="196" width="56" height="18" rx="4" fill="#e3e7eb"/><text class="ax" x="456" y="209" text-anchor="middle">事後</text>
<text class="nt" x="498" y="209">同一個胜肽，換個鹽濃度就換了答案</text>
</g>
<g>
<text class="nt" x="40" y="236">瓊脂 · 鹽 · ACCD Set 9</text>
<rect x="300" y="224" width="56" height="18" rx="4" fill="#0167ef"/><text class="wn" x="328" y="237" text-anchor="middle">前</text>
<rect x="364" y="224" width="56" height="18" rx="4" fill="#e3e7eb"/><text class="ax" x="392" y="237" text-anchor="middle">同時</text>
<rect x="428" y="224" width="56" height="18" rx="4" fill="#f1f3f5" stroke="#e3e7eb" stroke-dasharray="2 2"/><text class="ax" x="456" y="237" text-anchor="middle" fill="#8a9199">ND</text>
<text class="nt" x="498" y="237">事後那一盤發霉被排除 → 少一個比較對象</text>
</g>
<g>
<text class="nt" x="40" y="264">瓊脂 · 熱 · ACCD t1</text>
<rect x="300" y="252" width="56" height="18" rx="4" fill="#0167ef"/><text class="wn" x="328" y="265" text-anchor="middle">前</text>
<rect x="364" y="252" width="56" height="18" rx="4" fill="#e3e7eb"/><text class="ax" x="392" y="265" text-anchor="middle">同時</text>
<rect x="428" y="252" width="56" height="18" rx="4" fill="#e3e7eb"/><text class="ax" x="456" y="265" text-anchor="middle">事後</text>
<text class="nt" x="498" y="265">同時處理降低存活率、嚴重黃化</text>
</g>
<g>
<text class="nt" x="40" y="292">瓊脂 · 熱 · ACCD t2</text>
<rect x="300" y="280" width="56" height="18" rx="4" fill="#e3e7eb"/><text class="ax" x="328" y="293" text-anchor="middle">前</text>
<rect x="364" y="280" width="56" height="18" rx="4" fill="#e3e7eb"/><text class="ax" x="392" y="293" text-anchor="middle">同時</text>
<rect x="428" y="280" width="56" height="18" rx="4" fill="#00875C"/><text class="wn" x="456" y="293" text-anchor="middle">事後</text>
<text class="nt" x="498" y="293" fill="#8c2230">與 t1 相反。同一個設計，兩次不同答案。</text>
</g>
<g>
<text class="nt" x="40" y="320">土壤 · 鹽 · ACCD（未標準化）</text>
<rect x="300" y="308" width="56" height="18" rx="4" fill="#e3e7eb"/><text class="ax" x="328" y="321" text-anchor="middle">前</text>
<rect x="364" y="308" width="56" height="18" rx="4" fill="#e3e7eb"/><text class="ax" x="392" y="321" text-anchor="middle">同時</text>
<rect x="428" y="308" width="56" height="18" rx="4" fill="#00875C"/><text class="wn" x="456" y="321" text-anchor="middle">事後</text>
<text class="nt" x="498" y="321" fill="#8c2230">標準化之後變成「同時」最高 → 排序翻轉</text>
</g>
<g>
<text class="nt" x="40" y="348">土壤 · 熱 · ACCD t1+t2</text>
<rect x="300" y="336" width="56" height="18" rx="4" fill="#0167ef"/><text class="wn" x="328" y="349" text-anchor="middle">前</text>
<rect x="364" y="336" width="56" height="18" rx="4" fill="#e3e7eb"/><text class="ax" x="392" y="349" text-anchor="middle">同時</text>
<rect x="428" y="336" width="56" height="18" rx="4" fill="#e3e7eb"/><text class="ax" x="456" y="349" text-anchor="middle">事後</text>
<text class="nt" x="498" y="349">兩個 trial 一致的唯一一點（指數 1.00 與 0.77）</text>
</g>
</svg>`
};
