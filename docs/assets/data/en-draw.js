/* English SVG variants of the seven diagrams, plus their English lede and take-away.
 * Generated from draw.js with a label map, so the geometry is identical.
 */
window.DRAW_EN = {};

window.DRAW_EN.coverage = {
  lede: "Three systems, two stresses, five agents: thirty cells. Thirteen carry a quantified result, and in only one of those is the effect larger than the noise \u2014 and that one is the stress itself, not a protectant.",
  take: "Learn the shape of this figure first: the ACCD row is the fullest, the LEA14 row the emptiest, and heat is emptier than salt throughout. When a judge points at an empty cell, the answer is \"not done\", never \"did not work\".",
  svg: `<svg viewBox="0 0 860 442" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Evidence coverage matrix across three systems, two stresses and five agents">
<style>
.hd{font:600 13px/1 ui-sans-serif,system-ui,sans-serif;fill:#2c3238}
.rw{font:600 13px/1 ui-sans-serif,system-ui,sans-serif;fill:#2c3238}
.sm{font:11px/1 ui-sans-serif,system-ui,sans-serif;fill:#6b7280}
.ce{font:600 11px/1 ui-sans-serif,system-ui,sans-serif;fill:#fff}
.cd{font:600 11px/1 ui-sans-serif,system-ui,sans-serif;fill:#6b7280}
.lg{font:11px/1 ui-sans-serif,system-ui,sans-serif;fill:#2c3238}
</style>
<rect width="860" height="442" fill="#fff"/>
<!-- column group headers -->
<text class="hd" x="232" y="26">Agar</text>
<text class="hd" x="446" y="26">Hydroponics</text>
<text class="hd" x="648" y="26">Soil</text>
<line x1="200" y1="34" x2="416" y2="34" stroke="#d9dee3" stroke-width="1.5"/>
<line x1="424" y1="34" x2="616" y2="34" stroke="#d9dee3" stroke-width="1.5"/>
<line x1="624" y1="34" x2="816" y2="34" stroke="#d9dee3" stroke-width="1.5"/>
<!-- stress sub headers -->
<text class="sm" x="248" y="52">salt</text><text class="sm" x="350" y="52">heat</text>
<text class="sm" x="452" y="52">salt</text><text class="sm" x="554" y="52">heat</text>
<text class="sm" x="652" y="52">salt</text><text class="sm" x="754" y="52">heat</text>

<!-- rows: y = 70 + i*58 ; cells x = 208,310,412(gap),... actually 6 columns at 208,310, 428,530, 640,742 -->
<!-- ROW 1 trehalose -->
<text class="rw" x="18" y="92">Trehalose</text><text class="sm" x="18" y="106">Trehalose · reference compound</text>
<rect x="208" y="70" width="94" height="40" rx="5" fill="#00875C"/><text class="ce" x="255" y="94" text-anchor="middle">6 sets · direction</text>
<rect x="310" y="70" width="94" height="40" rx="5" fill="#f1f3f5" stroke="#e3e7eb"/><text class="cd" x="357" y="94" text-anchor="middle">not done</text>
<rect x="428" y="70" width="94" height="40" rx="5" fill="#f1f3f5" stroke="#e3e7eb"/><text class="cd" x="475" y="94" text-anchor="middle">not done</text>
<rect x="530" y="70" width="94" height="40" rx="5" fill="#f1f3f5" stroke="#e3e7eb"/><text class="cd" x="577" y="94" text-anchor="middle">not done</text>
<rect x="640" y="70" width="94" height="40" rx="5" fill="#f1f3f5" stroke="#e3e7eb"/><text class="cd" x="687" y="94" text-anchor="middle">not done</text>
<rect x="742" y="70" width="94" height="40" rx="5" fill="#f1f3f5" stroke="#e3e7eb"/><text class="cd" x="789" y="94" text-anchor="middle">not done</text>

<!-- ROW 2 CH peptide -->
<text class="rw" x="18" y="150">CH peptide</text><text class="sm" x="18" y="164">CH Bio · commercial</text>
<rect x="208" y="128" width="94" height="40" rx="5" fill="#00875C"/><text class="ce" x="255" y="152" text-anchor="middle">3 trials · direction</text>
<rect x="310" y="128" width="94" height="40" rx="5" fill="#fff4e0" stroke="#F08C00" stroke-dasharray="3 3"/><text class="cd" x="357" y="152" text-anchor="middle" fill="#8a5a00">methods only</text>
<rect x="428" y="128" width="94" height="40" rx="5" fill="#9fd3b4"/><text class="ce" x="475" y="152" text-anchor="middle" fill="#14492f">qualitative</text>
<rect x="530" y="128" width="94" height="40" rx="5" fill="#f6d2d7" stroke="#d1495b"/><text class="cd" x="577" y="152" text-anchor="middle" fill="#8c2230">all below control</text>
<rect x="640" y="128" width="94" height="40" rx="5" fill="#f1f3f5" stroke="#e3e7eb"/><text class="cd" x="687" y="152" text-anchor="middle">not done</text>
<rect x="742" y="128" width="94" height="40" rx="5" fill="#f1f3f5" stroke="#e3e7eb"/><text class="cd" x="789" y="152" text-anchor="middle">not done</text>

<!-- ROW 3 ACCD -->
<text class="rw" x="18" y="208">ACC deaminase</text><text class="sm" x="18" y="222">ACCD · our strain</text>
<rect x="208" y="186" width="94" height="40" rx="5" fill="#00875C"/><text class="ce" x="255" y="204" text-anchor="middle">Set 8+9</text><text class="ce" x="255" y="218" text-anchor="middle">direction</text>
<rect x="310" y="186" width="94" height="40" rx="5" fill="#00875C"/><text class="ce" x="357" y="204" text-anchor="middle">2 trial</text><text class="ce" x="357" y="218" text-anchor="middle">direction</text>
<rect x="428" y="186" width="94" height="40" rx="5" fill="#f6d2d7" stroke="#d1495b"/><text class="cd" x="475" y="210" text-anchor="middle" fill="#8c2230">undetermined</text>
<rect x="530" y="186" width="94" height="40" rx="5" fill="#9fd3b4"/><text class="ce" x="577" y="210" text-anchor="middle" fill="#14492f">≥1/80 direction</text>
<rect x="640" y="186" width="94" height="40" rx="5" fill="#9fd3b4"/><text class="ce" x="687" y="210" text-anchor="middle" fill="#14492f">direction</text>
<rect x="742" y="186" width="94" height="40" rx="5" fill="#f6d2d7" stroke="#d1495b"/><text class="cd" x="789" y="204" text-anchor="middle" fill="#8c2230">one pot per bar</text><text class="cd" x="789" y="218" text-anchor="middle" fill="#8c2230">no statistics</text>

<!-- ROW 4 BoPep4 -->
<text class="rw" x="18" y="266">BoPep4</text><text class="sm" x="18" y="280">our strain</text>
<rect x="208" y="244" width="94" height="40" rx="5" fill="#9fd3b4"/><text class="ce" x="255" y="268" text-anchor="middle" fill="#14492f">Set 10 · direction</text>
<rect x="310" y="244" width="94" height="40" rx="5" fill="#fff4e0" stroke="#F08C00" stroke-dasharray="3 3"/><text class="cd" x="357" y="268" text-anchor="middle" fill="#8a5a00">listed · no result</text>
<rect x="428" y="244" width="94" height="40" rx="5" fill="#00875C"/><text class="ce" x="475" y="268" text-anchor="middle">≥1/40 direction</text>
<rect x="530" y="244" width="94" height="40" rx="5" fill="#9fd3b4"/><text class="ce" x="577" y="268" text-anchor="middle" fill="#14492f">1/40 slight</text>
<rect x="640" y="244" width="94" height="40" rx="5" fill="#f1f3f5" stroke="#e3e7eb"/><text class="cd" x="687" y="268" text-anchor="middle">not done</text>
<rect x="742" y="244" width="94" height="40" rx="5" fill="#f1f3f5" stroke="#e3e7eb"/><text class="cd" x="789" y="268" text-anchor="middle">not done</text>

<!-- ROW 5 LEA14 -->
<text class="rw" x="18" y="324">LEA14</text><text class="sm" x="18" y="338">wild type · our strain</text>
<rect x="208" y="302" width="94" height="40" rx="5" fill="#9fd3b4"/><text class="ce" x="255" y="320" text-anchor="middle" fill="#14492f">Set 11</text><text class="ce" x="255" y="334" text-anchor="middle" fill="#14492f">hard to read</text>
<rect x="310" y="302" width="94" height="40" rx="5" fill="#fff4e0" stroke="#F08C00" stroke-dasharray="3 3"/><text class="cd" x="357" y="326" text-anchor="middle" fill="#8a5a00">listed · no result</text>
<rect x="428" y="302" width="94" height="40" rx="5" fill="#f1f3f5" stroke="#e3e7eb"/><text class="cd" x="475" y="326" text-anchor="middle">not done</text>
<rect x="530" y="302" width="94" height="40" rx="5" fill="#f1f3f5" stroke="#e3e7eb"/><text class="cd" x="577" y="326" text-anchor="middle">not done</text>
<rect x="640" y="302" width="94" height="40" rx="5" fill="#f1f3f5" stroke="#e3e7eb"/><text class="cd" x="687" y="326" text-anchor="middle">not done</text>
<rect x="742" y="302" width="94" height="40" rx="5" fill="#f1f3f5" stroke="#e3e7eb"/><text class="cd" x="789" y="326" text-anchor="middle">not done</text>

<!-- ROW 0 the vehicle, set apart -->
<line x1="18" y1="356" x2="842" y2="356" stroke="#d9dee3"/>
<text class="rw" x="18" y="382">The vehicle</text><text class="sm" x="18" y="396">WB800 / TB · no protectant</text>
<rect x="428" y="364" width="94" height="40" rx="5" fill="#0167ef"/><text class="ce" x="475" y="382" text-anchor="middle">1/16 floor</text><text class="ce" x="475" y="396" text-anchor="middle">dose ceiling</text>
<rect x="640" y="364" width="94" height="40" rx="5" fill="#9fd3b4"/><text class="ce" x="687" y="388" text-anchor="middle" fill="#14492f">method choice</text>
<text class="sm" x="18" y="426">this row sets how strong every row above may be</text>
</svg>`
};

window.DRAW_EN.ceiling = {
  lede: "To the right is stronger. The plant\u2019s tolerance presses down from the right and the protectant\u2019s useful concentration pushes up from the left. The window left in between is narrow, and where it sits was decided by the vehicle.",
  take: "One sentence: the vehicle, not the cargo, sets the usable dose. It is the plant team\u2019s most original and most honest finding.",
  svg: `<svg viewBox="0 0 860 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The dilution window between vehicle toxicity and protectant efficacy">
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
<text class="ax" x="790" y="216" text-anchor="middle">neat</text>
<text class="ax" x="90" y="234">← weaker</text>
<text class="ax" x="800" y="234" text-anchor="end">stronger →</text>

<!-- toxicity zone from the right -->
<rect x="500" y="56" width="300" height="132" fill="#f6d2d7"/>
<rect x="444" y="56" width="56" height="132" fill="#fdeef0"/>
<text class="lb" x="648" y="80" text-anchor="middle" fill="#8c2230">Vehicle toxicity</text>
<text class="nt" x="648" y="98" text-anchor="middle" fill="#8c2230">1/10 and 1/20 → bleaching</text>
<text class="nt" x="648" y="114" text-anchor="middle" fill="#8c2230">Neat and 1/2 → yellowing, stunting</text>
<text class="nt" x="648" y="130" text-anchor="middle" fill="#8c2230">1/4 to 1/16 → anthocyanin</text>

<!-- efficacy zone from the left -->
<rect x="90" y="56" width="236" height="132" fill="#eef2f6"/>
<text class="lb" x="208" y="80" text-anchor="middle" fill="#45505c">Too weak to do anything</text>
<text class="nt" x="208" y="98" text-anchor="middle" fill="#45505c">1/100 ACCD holds the least chlorophyll</text>
<text class="nt" x="208" y="114" text-anchor="middle" fill="#45505c">1/60–1/100 BoPep4</text>
<text class="nt" x="208" y="130" text-anchor="middle" fill="#45505c">no different from control</text>

<!-- the window -->
<rect x="326" y="56" width="174" height="132" fill="#dff0e6" stroke="#00875C" stroke-width="1.5"/>
<text class="lb" x="413" y="80" text-anchor="middle" fill="#14492f">Usable window</text>
<text class="nt" x="413" y="100" text-anchor="middle" fill="#14492f">ACCD ≥ 1/80</text>
<text class="nt" x="413" y="116" text-anchor="middle" fill="#14492f">BoPep4 ≥ 1/40</text>
<text class="nt" x="413" y="132" text-anchor="middle" fill="#14492f">Working dose set at 1/40</text>

<!-- the 1/16 floor line -->
<line x1="600" y1="48" x2="600" y2="196" stroke="#0167ef" stroke-width="2" stroke-dasharray="5 4"/>
<rect x="528" y="30" width="144" height="18" rx="4" fill="#0167ef"/>
<text class="bg" x="600" y="43" text-anchor="middle">our own 1/16 floor</text>

<!-- the contradiction arrow -->
<path d="M600 172 L680 172" stroke="#d1495b" stroke-width="2" marker-end="url(#ar)"/>
<defs><marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#d1495b"/></marker></defs>
<text class="nt" x="684" y="176" fill="#8c2230">ACCD salt used this → bleaching</text>

<!-- what lands on the plant -->
<line x1="444" y1="196" x2="444" y2="258" stroke="#00875C" stroke-width="1.5"/>
<text class="lb" x="452" y="252" fill="#14492f">What actually lands on the plant at 1/40</text>
<text class="nt" x="452" y="270">ACCD 9.458 ÷ 40 = 0.236 µg/mL  ·  BoPep4 5.230 ÷ 40 = 0.131 µg/mL</text>
<text class="nt" x="452" y="286" fill="#8c2230">empty host WB800 reads 4.5–5.5 µg/mL → BoPep4 ≈ 0 after background</text>
</svg>`
};

window.DRAW_EN.norm = {
  lede: "One dataset, divided by fresh weight and not divided, gives opposite rankings. Under stress the fresh weight is falling by itself \u2014 the denominator is a function of the stress.",
  take: "The sentence to say: chlorophyll divided by fresh weight measures water loss under stress, not pigment. So we moved to chlorophyll per plant.",
  svg: `<svg viewBox="0 0 860 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="How fresh-weight normalisation reverses the ranking of two treatments">
<style>
.ti{font:600 13px/1 ui-sans-serif,system-ui,sans-serif;fill:#2c3238}
.ax{font:11px/1 ui-sans-serif,system-ui,sans-serif;fill:#6b7280}
.vl{font:600 12px/1 ui-sans-serif,system-ui,sans-serif;fill:#2c3238}
.nt{font:11px/1 ui-sans-serif,system-ui,sans-serif;fill:#45505c}
.mm{font:12px/1 ui-monospace,SFMono-Regular,Menlo,monospace;fill:#2c3238}
</style>
<rect width="860" height="400" fill="#fff"/>

<!-- panel A: total chlorophyll per plant -->
<text class="ti" x="40" y="30">A  Total chlorophyll per plant (not divided)</text>
<text class="ax" x="40" y="48">chlorophyll per plant</text>
<line x1="40" y1="180" x2="250" y2="180" stroke="#2c3238"/>
<line x1="40" y1="60" x2="40" y2="180" stroke="#2c3238"/>
<rect x="70" y="72" width="54" height="108" fill="#00875C"/><text class="vl" x="97" y="66" text-anchor="middle">1.00</text>
<rect x="156" y="115" width="54" height="65" fill="#9fd3b4"/><text class="vl" x="183" y="109" text-anchor="middle">0.60</text>
<text class="ax" x="97" y="196" text-anchor="middle">control</text>
<text class="ax" x="183" y="196" text-anchor="middle">treated</text>
<text class="nt" x="40" y="218">Control wins. The treated plants hold less pigment.</text>

<!-- panel B: fresh weight -->
<text class="ti" x="320" y="30">B  Fresh weight</text>
<text class="ax" x="320" y="48">fresh weight</text>
<line x1="320" y1="180" x2="530" y2="180" stroke="#2c3238"/>
<line x1="320" y1="60" x2="320" y2="180" stroke="#2c3238"/>
<rect x="350" y="72" width="54" height="108" fill="#0167ef"/><text class="vl" x="377" y="66" text-anchor="middle">1.00</text>
<rect x="436" y="148" width="54" height="32" fill="#9ec5fb"/><text class="vl" x="463" y="142" text-anchor="middle">0.30</text>
<text class="ax" x="377" y="196" text-anchor="middle">control</text>
<text class="ax" x="463" y="196" text-anchor="middle">treated</text>
<text class="nt" x="320" y="218">Treated plants much smaller: growth suppressed.</text>

<!-- panel C: the ratio -->
<text class="ti" x="600" y="30">C  A ÷ B (divided by fresh weight)</text>
<text class="ax" x="600" y="48">chlorophyll mg g⁻¹</text>
<line x1="600" y1="180" x2="810" y2="180" stroke="#2c3238"/>
<line x1="600" y1="60" x2="600" y2="180" stroke="#2c3238"/>
<rect x="630" y="144" width="54" height="36" fill="#F08C00"/><text class="vl" x="657" y="138" text-anchor="middle">1.00</text>
<rect x="716" y="68" width="54" height="112" fill="#F08C00"/><text class="vl" x="743" y="62" text-anchor="middle">2.00</text>
<text class="ax" x="657" y="196" text-anchor="middle">control</text>
<text class="ax" x="743" y="196" text-anchor="middle">treated</text>
<text class="nt" x="600" y="218" fill="#8c2230">Treated wins by two. The ranking has inverted.</text>

<!-- the algebra -->
<rect x="40" y="244" width="780" height="128" rx="8" fill="#f7f9fb" stroke="#e3e7eb"/>
<text class="ti" x="60" y="268">The arithmetic: no pigment was rescued and the ratio still doubled</text>
<text class="mm" x="60" y="296">control   1.00 ÷ 1.00 = 1.00</text>
<text class="mm" x="60" y="318">treated   0.60 ÷ 0.30 = 2.00</text>
<text class="nt" x="330" y="296">The treated plants actually lost 40 per cent of their pigment (1.00 → 0.60).</text>
<text class="nt" x="330" y="318">But they lost 70 per cent of their weight, so the ratio comes out twice as high.</text>
<text class="nt" x="60" y="346" fill="#8c2230">In general the sign of d(C/W) is the sign of (dC/C) − (dW/W). If water goes faster than pigment the ratio rises, with nothing to do with pigment.</text>
<text class="nt" x="60" y="364">Safe denominators: per plant, per leaf area, or fresh weight only when matched. Heat trial 1 weighed 0.02 g and the wiki calls those values unreasonable.</text>
</svg>`
};

window.DRAW_EN.elisa = {
  lede: "A competitive anti-His ELISA. The standard curve stops at 3 \u00b5g/mL and every sample lands between 4.5 and 13.4; the empty host WB800 reads 4.5 to 5.5 on its own.",
  take: "Only ACCD stands clearly above the background. The LEA14 and BoPep4 values fall inside the empty-host background \u2014 say that before you are asked.",
  svg: `<svg viewBox="0 0 886 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ELISA standard curve with all samples above the top standard and the empty-host background band">
<style>
.ti{font:600 13px/1 ui-sans-serif,system-ui,sans-serif;fill:#2c3238}
.ax{font:11px/1 ui-sans-serif,system-ui,sans-serif;fill:#6b7280}
.nt{font:11px/1 ui-sans-serif,system-ui,sans-serif;fill:#45505c}
.pt{font:600 11px/1 ui-sans-serif,system-ui,sans-serif;fill:#2c3238}
.wt{font:600 11px/1 ui-sans-serif,system-ui,sans-serif;fill:#fff}
</style>
<rect width="886" height="420" fill="#fff"/>
<text class="ti" x="40" y="28">Concentration (µg/mL) · each point is one Table 2 sample</text>

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
<text class="pt" x="150" y="222" text-anchor="middle" fill="#14492f">Standard curve</text>
<text class="nt" x="150" y="240" text-anchor="middle" fill="#14492f">0.093 – 3 µg/mL</text>
<text class="nt" x="150" y="256" text-anchor="middle" fill="#14492f">six points · duplicate</text>
<text class="nt" x="150" y="272" text-anchor="middle" fill="#14492f">R² = 0.9967</text>

<!-- extrapolated zone -->
<rect x="226" y="200" width="574" height="100" fill="#fdeef0" stroke="#d1495b" stroke-dasharray="4 3"/>
<text class="pt" x="513" y="222" text-anchor="middle" fill="#8c2230">Extrapolated — every sample is in here</text>
<text class="nt" x="513" y="240" text-anchor="middle" fill="#8c2230">A competitive ELISA saturates here: tiny differences in %B/B0 blow up into large differences in concentration</text>
<text class="nt" x="513" y="256" text-anchor="middle" fill="#8c2230">so points in this region cannot be ranked against each other</text>

<!-- WB800 background band 4.562 .. 5.452 -->
<rect x="307" y="60" width="70" height="130" fill="#45505c" opacity="0.14"/>
<line x1="307" y1="60" x2="307" y2="190" stroke="#45505c" stroke-dasharray="3 3"/>
<line x1="377" y1="60" x2="377" y2="190" stroke="#45505c" stroke-dasharray="3 3"/>
<rect x="276" y="38" width="132" height="18" rx="4" fill="#45505c"/>
<text class="wt" x="342" y="51" text-anchor="middle">Empty host 4.56–5.45</text>

<!-- sample points -->
<!-- x = 70 + v*52.14 -->
<g>
<!-- WB800 -->
<circle cx="308" cy="176" r="6" fill="#45505c"/><circle cx="354" cy="176" r="6" fill="#45505c"/>
<text class="nt" x="332" y="196" text-anchor="middle">WB800</text>
<!-- BoPep4 -->
<circle cx="317" cy="152" r="6" fill="#d1495b"/><circle cx="348" cy="152" r="6" fill="#d1495b"/>
<circle cx="400" cy="152" r="6" fill="#d1495b"/><circle cx="356" cy="152" r="6" fill="#d1495b"/>
<text class="nt" x="360" y="140" text-anchor="middle" fill="#8c2230">BoPep4 (WT / v2t1 / v2t2) 4.74 – 6.60  ← overlaps background</text>
<!-- LEA -->
<circle cx="387" cy="124" r="6" fill="#F08C00"/><circle cx="400" cy="124" r="6" fill="#F08C00"/>
<text class="nt" x="412" y="128" fill="#8a5a00">LEA14  6.09 / 6.32  ← barely above background</text>
<!-- AcdS 2.1 -->
<circle cx="497" cy="96" r="6" fill="#0167ef"/><circle cx="563" cy="96" r="6" fill="#0167ef"/>
<text class="nt" x="575" y="100" fill="#0a4fae">AcdS 2.1 (optimised ACCD) 8.20 / 9.46</text>
<!-- Csn-ACCD -->
<circle cx="629" cy="72" r="6" fill="#00875C"/><circle cx="701" cy="72" r="6" fill="#00875C"/>
<text class="nt" x="713" y="76" fill="#14492f">Csn-ACCD WT 12.07 / 13.45</text>
</g>

<!-- bottom readings -->
<rect x="40" y="340" width="780" height="60" rx="8" fill="#f7f9fb" stroke="#e3e7eb"/>
<text class="nt" x="60" y="362">Signal to background: ACCD 1.8–2.9×  ·  LEA14 about 1.2×  ·  BoPep4 about 0.9–1.4×.</text>
<text class="nt" x="60" y="382" fill="#8c2230">1.2×, one well, out of range → not a detection. The wiki says these values should not be read as recombinant protein-specific yields.</text>
</svg>`
};

window.DRAW_EN.chain = {
  lede: "Six links run from gene to field. Every link has data, and none of it is strung together from one batch of sample \u2014 that is the weakest link.",
  take: "Asked how you know the protein caused it, the answer is not to recite mechanism. It is to say which links you measured and which you did not.",
  svg: `<svg viewBox="0 0 860 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The evidence chain from gene to field, with solid links measured and dashed links not">
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
<rect x="24" y="60" width="112" height="52" rx="6" fill="#00875C"/><text class="bx" x="80" y="82" text-anchor="middle">Gene and construct</text><text class="bs" x="80" y="98" text-anchor="middle">9/9 junctions</text>
<rect x="176" y="60" width="112" height="52" rx="6" fill="#00875C"/><text class="bx" x="232" y="82" text-anchor="middle">Protein amount</text><text class="bs" x="232" y="98" text-anchor="middle">His-tag ELISA</text>
<rect x="328" y="60" width="112" height="52" rx="6" fill="#0167ef"/><text class="bx" x="384" y="82" text-anchor="middle">Enzyme activity</text><text class="bs" x="384" y="98" text-anchor="middle">DNPH · ACCD only</text>
<rect x="480" y="60" width="112" height="52" rx="6" fill="#F08C00"/><text class="bx" x="536" y="82" text-anchor="middle">Plant effect</text><text class="bs" x="536" y="98" text-anchor="middle">chlorophyll · fresh weight</text>
<rect x="632" y="60" width="112" height="52" rx="6" fill="#9fd3b4"/><text class="bx" x="688" y="82" text-anchor="middle" fill="#14492f">Survival and recovery</text><text class="bs" x="688" y="98" text-anchor="middle" fill="#14492f">heat work only</text>
<rect x="760" y="60" width="76" height="52" rx="6" fill="#f1f3f5" stroke="#e3e7eb" stroke-dasharray="3 3"/><text class="bx" x="798" y="82" text-anchor="middle" fill="#8a9199">Field</text><text class="bs" x="798" y="98" text-anchor="middle" fill="#8a9199">not done</text>

<!-- links -->
<line x1="136" y1="86" x2="172" y2="86" stroke="#45505c" stroke-width="2" marker-end="url(#a2)"/>
<line x1="288" y1="86" x2="324" y2="86" stroke="#45505c" stroke-width="2" marker-end="url(#a2)"/>
<line x1="440" y1="86" x2="476" y2="86" stroke="#d1495b" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#a3)"/>
<line x1="592" y1="86" x2="628" y2="86" stroke="#d1495b" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#a3)"/>
<line x1="744" y1="86" x2="756" y2="86" stroke="#8a9199" stroke-width="2" stroke-dasharray="4 4"/>

<!-- link annotations -->
<text class="lk" x="24" y="140">no end-to-end sequencing</text>
<text class="lk" x="24" y="156">junction ≠ full sequence</text>

<text class="lk" x="176" y="140">the empty host reads too</text>
<text class="lk" x="176" y="156">only ACCD above background</text>

<text class="wk" x="328" y="140">The chain breaks here</text>
<text class="lk" x="328" y="156">The batch of supernatant</text>
<text class="lk" x="328" y="172">on plants was never assayed</text>

<text class="wk" x="480" y="140">And it breaks here too</text>
<text class="lk" x="480" y="156">One harvest day only,</text>
<text class="lk" x="480" y="172">with no survival recorded</text>

<text class="lk" x="632" y="140">The heat work has a 5-day recovery,</text>
<text class="lk" x="632" y="156">the salt work has none</text>

<!-- the fix box -->
<rect x="24" y="200" width="812" height="116" rx="8" fill="#f7f9fb" stroke="#e3e7eb"/>
<text class="ti" x="44" y="226">Two cheap repairs (offer them as future work, not as an excuse)</text>
<text class="lk" x="44" y="252">1  For every batch going onto plants, split one tube for DNPH and print the activity beside the plant result. That joins link three to link four, and it costs one tube.</text>
<text class="lk" x="44" y="274">2  Record survival on the day the stress ends and weigh biomass when recovery ends. That joins link four to link five, and it costs two recording days.</text>
<text class="lk" x="44" y="300" fill="#8c2230">A third repair costs more and settles most: a heat-killed supernatant control, protein dead and all else unchanged. Especially clean for ACCD, an enzyme.</text>
</svg>`
};

window.DRAW_EN.unit = {
  lede: "The treatment is applied to the plate, not to each seedling. So the plate is the experimental unit, and each condition has exactly one.",
  take: "Forty seedlings per condition, but they share one plate, so the biological replicate is one. That sentence should come out without thinking.",
  svg: `<svg viewBox="0 0 860 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="One plate holding forty seedlings is one experimental unit, versus three independently poured plates">
<style>
.ti{font:600 13px/1 ui-sans-serif,system-ui,sans-serif;fill:#2c3238}
.nt{font:11px/1 ui-sans-serif,system-ui,sans-serif;fill:#45505c}
.mm{font:12px/1 ui-monospace,SFMono-Regular,Menlo,monospace;fill:#2c3238}
.bd{font:600 12px/1 ui-sans-serif,system-ui,sans-serif;fill:#fff}
</style>
<rect width="860" height="330" fill="#fff"/>

<!-- LEFT: what we did -->
<text class="ti" x="40" y="30">What we did: one plate per condition</text>
<rect x="40" y="44" width="300" height="150" rx="10" fill="#fdeef0" stroke="#d1495b" stroke-width="1.5"/>
<g fill="#5aaa47">
<circle cx="76" cy="78" r="7"/><circle cx="112" cy="78" r="7"/><circle cx="148" cy="78" r="7"/><circle cx="184" cy="78" r="7"/><circle cx="220" cy="78" r="7"/><circle cx="256" cy="78" r="7"/><circle cx="292" cy="78" r="7"/>
<circle cx="76" cy="110" r="7"/><circle cx="112" cy="110" r="7"/><circle cx="148" cy="110" r="7"/><circle cx="184" cy="110" r="7"/><circle cx="220" cy="110" r="7"/><circle cx="256" cy="110" r="7"/><circle cx="292" cy="110" r="7"/>
<circle cx="76" cy="142" r="7"/><circle cx="112" cy="142" r="7"/><circle cx="148" cy="142" r="7"/><circle cx="184" cy="142" r="7"/><circle cx="220" cy="142" r="7"/><circle cx="256" cy="142" r="7"/><circle cx="292" cy="142" r="7"/>
<circle cx="76" cy="174" r="7"/><circle cx="112" cy="174" r="7"/><circle cx="148" cy="174" r="7"/><circle cx="184" cy="174" r="7"/><circle cx="220" cy="174" r="7"/><circle cx="256" cy="174" r="7"/><circle cx="292" cy="174" r="7"/>
</g>
<rect x="110" y="200" width="160" height="20" rx="5" fill="#d1495b"/>
<text class="bd" x="190" y="214" text-anchor="middle">n_bio = 1</text>
<text class="nt" x="40" y="242">One pour, one place in the incubator, one application.</text>
<text class="nt" x="40" y="260">Variation among 28 seedlings is seedling-to-seedling, and it understates</text>
<text class="nt" x="40" y="278">the plate-to-plate uncertainty — which we never measured.</text>
<text class="nt" x="40" y="300" fill="#8c2230">Asterisks treat each seedling as independent → p values too generous.</text>

<!-- RIGHT: what would fix it -->
<text class="ti" x="400" y="30">The fix: three independently poured plates per arm, randomised</text>
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
<text class="nt" x="400" y="176">Analyse the plate mean as one data point, or fit a mixed model</text>
<text class="nt" x="400" y="194">with plate as a random effect.</text>

<rect x="400" y="212" width="426" height="100" rx="8" fill="#f7f9fb" stroke="#e3e7eb"/>
<text class="ti" x="418" y="236">How many plates? Put the CV in and the formula answers</text>
<text class="mm" x="418" y="262">n ≈ 2 (1.96 + 0.84)² (CV / effect)²</text>
<text class="nt" x="418" y="286">CV 15 % between plates, to detect 30 % → n ≈ 4 plates per arm</text>
<text class="nt" x="418" y="304">CV 25 % → n ≈ 11 plates per arm. So "three or four plates" is a grounded ask.</text>
</svg>`
};

window.DRAW_EN.timing = {
  lede: "Pre-treatment the day before the stress, co-treatment on the day, post-treatment the day after. Every set names a different best timing.",
  take: "The disagreement is itself the conclusion: the best timing moves with the kind of stress, its strength and the system. Good news for a product, where timing is a specification; bad news for a paper, where it has not converged.",
  svg: `<svg viewBox="0 0 860 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pre, co and post treatment timings and which one won in each experiment">
<style>
.ti{font:600 13px/1 ui-sans-serif,system-ui,sans-serif;fill:#2c3238}
.nt{font:11px/1 ui-sans-serif,system-ui,sans-serif;fill:#45505c}
.ax{font:11px/1 ui-sans-serif,system-ui,sans-serif;fill:#6b7280}
.wn{font:600 11px/1 ui-sans-serif,system-ui,sans-serif;fill:#fff}
.rw{font:600 12px/1 ui-sans-serif,system-ui,sans-serif;fill:#2c3238}
</style>
<rect width="860" height="380" fill="#fff"/>

<!-- timeline -->
<text class="ti" x="40" y="28">Timeline</text>
<line x1="150" y1="60" x2="700" y2="60" stroke="#2c3238" stroke-width="1.5"/>
<circle cx="260" cy="60" r="6" fill="#0167ef"/><text class="ax" x="260" y="82" text-anchor="middle">Day −1</text><text class="rw" x="260" y="46" text-anchor="middle">pre</text>
<circle cx="420" cy="60" r="6" fill="#F08C00"/><text class="ax" x="420" y="82" text-anchor="middle">Day 0</text><text class="rw" x="420" y="46" text-anchor="middle">co</text>
<circle cx="580" cy="60" r="6" fill="#00875C"/><text class="ax" x="580" y="82" text-anchor="middle">Day +1</text><text class="rw" x="580" y="46" text-anchor="middle">post</text>
<rect x="420" y="96" width="160" height="16" rx="4" fill="#f6d2d7"/>
<text class="ax" x="500" y="108" text-anchor="middle" fill="#8c2230">stress begins</text>

<!-- who won -->
<text class="ti" x="40" y="152">The best timing in each set</text>
<g>
<text class="nt" x="40" y="180">Agar · salt · CH t1 (100 mM)</text>
<rect x="300" y="168" width="56" height="18" rx="4" fill="#e3e7eb"/><text class="ax" x="328" y="181" text-anchor="middle">pre</text>
<rect x="364" y="168" width="56" height="18" rx="4" fill="#e3e7eb"/><text class="ax" x="392" y="181" text-anchor="middle">co</text>
<rect x="428" y="168" width="56" height="18" rx="4" fill="#00875C"/><text class="wn" x="456" y="181" text-anchor="middle">post</text>
<text class="nt" x="498" y="181">but those seedlings were four days old, which the wiki calls too fragile</text>
</g>
<g>
<text class="nt" x="40" y="208">Agar · salt · CH t2 (75 mM)</text>
<rect x="300" y="196" width="56" height="18" rx="4" fill="#e3e7eb"/><text class="ax" x="328" y="209" text-anchor="middle">pre</text>
<rect x="364" y="196" width="56" height="18" rx="4" fill="#F08C00"/><text class="wn" x="392" y="209" text-anchor="middle">co</text>
<rect x="428" y="196" width="56" height="18" rx="4" fill="#e3e7eb"/><text class="ax" x="456" y="209" text-anchor="middle">post</text>
<text class="nt" x="498" y="209">same peptide, different salt, different answer</text>
</g>
<g>
<text class="nt" x="40" y="236">Agar · salt · ACCD Set 9</text>
<rect x="300" y="224" width="56" height="18" rx="4" fill="#0167ef"/><text class="wn" x="328" y="237" text-anchor="middle">pre</text>
<rect x="364" y="224" width="56" height="18" rx="4" fill="#e3e7eb"/><text class="ax" x="392" y="237" text-anchor="middle">co</text>
<rect x="428" y="224" width="56" height="18" rx="4" fill="#f1f3f5" stroke="#e3e7eb" stroke-dasharray="2 2"/><text class="ax" x="456" y="237" text-anchor="middle" fill="#8a9199">ND</text>
<text class="nt" x="498" y="237">the post plate was lost to mould → one comparison missing</text>
</g>
<g>
<text class="nt" x="40" y="264">Agar · heat · ACCD t1</text>
<rect x="300" y="252" width="56" height="18" rx="4" fill="#0167ef"/><text class="wn" x="328" y="265" text-anchor="middle">pre</text>
<rect x="364" y="252" width="56" height="18" rx="4" fill="#e3e7eb"/><text class="ax" x="392" y="265" text-anchor="middle">co</text>
<rect x="428" y="252" width="56" height="18" rx="4" fill="#e3e7eb"/><text class="ax" x="456" y="265" text-anchor="middle">post</text>
<text class="nt" x="498" y="265">co-treatment lowered survival and yellowed badly</text>
</g>
<g>
<text class="nt" x="40" y="292">Agar · heat · ACCD t2</text>
<rect x="300" y="280" width="56" height="18" rx="4" fill="#e3e7eb"/><text class="ax" x="328" y="293" text-anchor="middle">pre</text>
<rect x="364" y="280" width="56" height="18" rx="4" fill="#e3e7eb"/><text class="ax" x="392" y="293" text-anchor="middle">co</text>
<rect x="428" y="280" width="56" height="18" rx="4" fill="#00875C"/><text class="wn" x="456" y="293" text-anchor="middle">post</text>
<text class="nt" x="498" y="293" fill="#8c2230">the opposite of t1. One design, two different answers.</text>
</g>
<g>
<text class="nt" x="40" y="320">Soil · salt · ACCD (unnormalised)</text>
<rect x="300" y="308" width="56" height="18" rx="4" fill="#e3e7eb"/><text class="ax" x="328" y="321" text-anchor="middle">pre</text>
<rect x="364" y="308" width="56" height="18" rx="4" fill="#e3e7eb"/><text class="ax" x="392" y="321" text-anchor="middle">co</text>
<rect x="428" y="308" width="56" height="18" rx="4" fill="#00875C"/><text class="wn" x="456" y="321" text-anchor="middle">post</text>
<text class="nt" x="498" y="321" fill="#8c2230">normalised, co comes out highest → the ranking flips</text>
</g>
<g>
<text class="nt" x="40" y="348">Soil · heat · ACCD t1+t2</text>
<rect x="300" y="336" width="56" height="18" rx="4" fill="#0167ef"/><text class="wn" x="328" y="349" text-anchor="middle">pre</text>
<rect x="364" y="336" width="56" height="18" rx="4" fill="#e3e7eb"/><text class="ax" x="392" y="349" text-anchor="middle">co</text>
<rect x="428" y="336" width="56" height="18" rx="4" fill="#e3e7eb"/><text class="ax" x="456" y="349" text-anchor="middle">post</text>
<text class="nt" x="498" y="349">the one point both trials agree on (index 1.00 and 0.77)</text>
</g>
</svg>`
};
