/* Diagrams for the deep-dive page. Drawn here, not taken from anywhere.
 * Every number on a figure is either from our own bench or from a cited paper,
 * and the citation key is printed on the figure itself.
 */
window.FIGS = {};

/* ── 1. The size ladder: what can cross what ── */
window.FIGS.wall =
'<svg viewBox="0 0 760 330" role="img" aria-label="Size ladder of plant surface and wall exclusion limits against protein size">' +
'<style>' +
'.fx{font:12px var(--font-text);fill:var(--ink-2)}' +
'.fxs{font:10.5px var(--font-mono);fill:var(--faint)}' +
'.fxb{font:600 12.5px var(--font-text);fill:var(--ink)}' +
'.fxt{font:600 13.5px var(--font-display);fill:var(--navy)}' +
'</style>' +
'<rect width="760" height="330" fill="#fff"/>' +
'<text class="fxt" x="0" y="16">What gets through, by size</text>' +
'<text class="fxs" x="0" y="34">free-passage limits in nanometres · log scale · Carpita 1979, Eichert 2008, Zhang 2024</text>' +
/* axis: log scale from 0.3 to 60 nm mapped to x 150..720 */
'<line x1="150" y1="290" x2="730" y2="290" stroke="var(--rule)"/>' +
'<g class="fxs" text-anchor="middle">' +
'<line x1="150" y1="290" x2="150" y2="296" stroke="var(--rule)"/><text x="150" y="310">0.3</text>' +
'<line x1="256" y1="290" x2="256" y2="296" stroke="var(--rule)"/><text x="256" y="310">1</text>' +
'<line x1="406" y1="290" x2="406" y2="296" stroke="var(--rule)"/><text x="406" y="310">5</text>' +
'<line x1="470" y1="290" x2="470" y2="296" stroke="var(--rule)"/><text x="470" y="310">10</text>' +
'<line x1="620" y1="290" x2="620" y2="296" stroke="var(--rule)"/><text x="620" y="310">50</text>' +
'<text x="440" y="325" class="fxs">nanometres</text>' +
'</g>' +
/* bars */
'<g>' +
'<text class="fxb" x="0" y="62">Cuticle, polar route</text><text class="fx" x="0" y="78">pore radius under 0.5 nm</text>' +
'<rect x="150" y="50" width="58" height="18" rx="4" fill="var(--red-wash)" stroke="var(--red)"/>' +
'<text class="fxs" x="216" y="63" fill="var(--red)">excludes proteins outright</text>' +
'<text class="fxb" x="0" y="112">Cuticle, astomatous leaf</text><text class="fx" x="0" y="128">equivalent radius 2.0 to 2.4 nm</text>' +
'<rect x="150" y="100" width="170" height="18" rx="4" fill="var(--orange-wash)" stroke="var(--orange)"/>' +
'<text class="fxs" x="328" y="113" fill="var(--orange-ink)">still below a 41 kDa enzyme</text>' +
'<text class="fxb" x="0" y="162">Cell wall pores</text><text class="fx" x="0" y="178">3.5 to 5.2 nm across cell types</text>' +
'<rect x="368" y="150" width="43" height="18" rx="4" fill="var(--amber-wash)" stroke="var(--amber)"/>' +
'<line x1="150" y1="159" x2="366" y2="159" stroke="var(--rule-soft)" stroke-dasharray="3 3"/>' +
'<text class="fxs" x="419" y="163" fill="var(--amber)">the limit our enzyme sits on</text>' +
'<text class="fxb" x="0" y="212">Our ACC deaminase</text><text class="fx" x="0" y="228">41 kDa, about 5.6 nm across</text>' +
'<circle cx="413" cy="206" r="9" fill="var(--navy)"/>' +
'<line x1="404" y1="206" x2="422" y2="206" stroke="#fff" stroke-width="1.5"/>' +
'<text class="fxs" x="430" y="210" fill="var(--navy)">on the wall limit: exclusion expected, and marginal</text>' +
'<text class="fxb" x="0" y="262">Stomatal pore route</text><text class="fx" x="0" y="278">above 10 nm; 43 nm beads entered, 1.1 um never did</text>' +
'<rect x="470" y="250" width="150" height="18" rx="4" fill="var(--green-wash)" stroke="var(--green)"/>' +
'<text class="fxs" x="624" y="263" fill="var(--green-ink)">sparse, unpredictable</text>' +
'</g>' +
'</svg>';

/* ── 2. Where the chemistry happens ── */
window.FIGS.acc =
'<svg viewBox="0 0 760 404" role="img" aria-label="Two routes by which ACC deaminase lowers plant ethylene">' +
'<style>' +
'.ax{font:11.5px var(--font-text);fill:var(--ink-2)}' +
'.axs{font:10.5px var(--font-mono);fill:var(--faint)}' +
'.axb{font:600 12px var(--font-text);fill:var(--ink)}' +
'.axt{font:600 13px var(--font-display);fill:var(--navy)}' +
'.ar{fill:none;stroke:var(--ink-2);stroke-width:1.4;marker-end:url(#ah)}' +
'.ard{fill:none;stroke:var(--orange);stroke-width:1.4;stroke-dasharray:4 3;marker-end:url(#aho)}' +
'</style>' +
'<defs>' +
'<marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">' +
'<path d="M0 0 L10 5 L0 10 z" fill="var(--ink-2)"/></marker>' +
'<marker id="aho" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">' +
'<path d="M0 0 L10 5 L0 10 z" fill="var(--orange)"/></marker>' +
'</defs>' +
'<rect width="760" height="404" fill="#fff"/>' +
'<text class="axt" x="0" y="15">A · the established route: a living bacterium</text>' +
'<rect x="0" y="28" width="360" height="150" rx="10" fill="var(--paper-3)" stroke="var(--rule-soft)"/>' +
'<rect x="14" y="42" width="120" height="122" rx="8" fill="var(--green-wash)" stroke="var(--green)"/>' +
'<text class="axb" x="24" y="60">plant root cell</text>' +
'<text class="ax" x="24" y="78">makes ACC</text>' +
'<text class="ax" x="24" y="94">exports it</text>' +
'<text class="axs" x="24" y="112">LHT1 transporter</text>' +
'<text class="axs" x="24" y="126">Shin 2015</text>' +
'<text class="axb" x="150" y="60">apoplast and</text><text class="axb" x="150" y="76">rhizosphere</text>' +
'<text class="ax" x="150" y="96">ACC pool</text>' +
'<rect x="236" y="42" width="112" height="122" rx="8" fill="var(--blue-wash)" stroke="var(--blue)"/>' +
'<text class="axb" x="246" y="60">bacterium</text>' +
'<text class="ax" x="246" y="78">takes ACC in</text>' +
'<text class="ax" x="246" y="94">enzyme inside</text>' +
'<text class="axs" x="246" y="112">cytoplasm and</text>' +
'<text class="axs" x="246" y="126">periplasm</text>' +
'<text class="axs" x="246" y="144">Moon 2022</text>' +
'<path class="ar" d="M136 104 L230 104"/>' +
'<text class="axs" x="152" y="130">ACC moves to the enzyme</text>' +
'<text class="axt" x="400" y="15">B · our route: the enzyme without the cell</text>' +
'<rect x="400" y="28" width="360" height="150" rx="10" fill="var(--paper-3)" stroke="var(--rule-soft)"/>' +
'<rect x="414" y="42" width="130" height="122" rx="8" fill="var(--green-wash)" stroke="var(--green)"/>' +
'<text class="axb" x="424" y="60">plant cell</text>' +
'<text class="ax" x="424" y="78">makes ACC</text>' +
'<text class="ax" x="424" y="94">exports it</text>' +
'<text class="axs" x="424" y="116">wall excludes a</text>' +
'<text class="axs" x="424" y="130">41 kDa enzyme</text>' +
'<text class="axb" x="560" y="60">apoplast or</text><text class="axb" x="560" y="76">leaf surface film</text>' +
'<text class="ax" x="560" y="96">sprayed enzyme</text>' +
'<text class="ax" x="560" y="112">meets ACC here</text>' +
'<text class="axs" x="560" y="134">no uptake claimed</text>' +
'<path class="ar" d="M548 100 L640 100" transform="translate(0,-8)"/>' +
'<circle cx="700" cy="104" r="11" fill="var(--navy)"/><text class="axs" x="684" y="130" fill="var(--navy)">our enzyme</text>' +
/* lower: the pathway */
'<text class="axt" x="0" y="214">What the enzyme competes with</text>' +
'<g transform="translate(0,230)">' +
'<rect x="0" y="0" width="118" height="46" rx="8" fill="#fff" stroke="var(--rule)"/>' +
'<text class="axb" x="12" y="20">ACC</text><text class="axs" x="12" y="36">in the apoplast</text>' +
'<path class="ar" d="M124 23 L186 23"/>' +
'<rect x="192" y="0" width="140" height="46" rx="8" fill="var(--red-wash)" stroke="var(--red)"/>' +
'<text class="axb" x="204" y="20">ACC oxidase</text><text class="axs" x="204" y="36">makes ethylene</text>' +
'<path class="ar" d="M338 23 L400 23"/>' +
'<rect x="406" y="0" width="150" height="46" rx="8" fill="var(--red-wash)" stroke="var(--red)"/>' +
'<text class="axb" x="418" y="20">stress ethylene</text><text class="axs" x="418" y="36">root growth inhibited</text>' +
'<path class="ard" d="M60 54 L60 90"/>' +
'<rect x="0" y="96" width="250" height="46" rx="8" fill="var(--blue-wash)" stroke="var(--blue)"/>' +
'<text class="axb" x="12" y="116">ACC deaminase intercepts it</text>' +
'<text class="axs" x="12" y="132">gives ammonia + alpha-ketobutyrate</text>' +
'<text class="axs" x="266" y="118" fill="var(--orange-ink)">the ammonia is why a nitrogen-matched</text>' +
'<text class="axs" x="266" y="132" fill="var(--orange-ink)">control is compulsory, not optional</text>' +
'</g>' +
'<text class="axs" x="0" y="384">A and B are not the same mechanism. In A the substrate is carried to the enzyme;</text>' +
'<text class="axs" x="0" y="399">in B the enzyme has to work where the substrate already is.</text>' +
'</svg>';

/* ── 3. Why one molecule can cover three stresses ── */
window.FIGS.converge =
'<svg viewBox="0 0 760 340" role="img" aria-label="Cold drought and salinity converge on cellular dehydration">' +
'<style>' +
'.cx{font:11.5px var(--font-text);fill:var(--ink-2)}' +
'.cxs{font:10.5px var(--font-mono);fill:var(--faint)}' +
'.cxb{font:600 12px var(--font-text);fill:var(--ink)}' +
'.cxt{font:600 13px var(--font-display);fill:var(--navy)}' +
'.cr{fill:none;stroke:var(--ink-2);stroke-width:1.4;marker-end:url(#ch)}' +
'</style>' +
'<defs><marker id="ch" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">' +
'<path d="M0 0 L10 5 L0 10 z" fill="var(--ink-2)"/></marker></defs>' +
'<rect width="760" height="340" fill="#fff"/>' +
'<text class="cxt" x="0" y="15">Three stresses, one endpoint, three candidate mechanisms</text>' +
'<g>' +
'<rect x="0" y="34" width="118" height="36" rx="18" fill="var(--blue-wash)" stroke="var(--blue)"/><text class="cxb" x="22" y="57">low temperature</text>' +
'<rect x="0" y="86" width="118" height="36" rx="18" fill="var(--amber-wash)" stroke="var(--amber)"/><text class="cxb" x="46" y="109">drought</text>' +
'<rect x="0" y="138" width="118" height="36" rx="18" fill="var(--green-wash)" stroke="var(--green)"/><text class="cxb" x="46" y="161">salinity</text>' +
'<path class="cr" d="M124 52 C160 52 160 100 188 104"/>' +
'<path class="cr" d="M124 104 L188 104"/>' +
'<path class="cr" d="M124 156 C160 156 160 108 188 104"/>' +
'</g>' +
'<rect x="194" y="78" width="152" height="52" rx="10" fill="var(--navy)"/>' +
'<text class="cxb" x="208" y="100" fill="#fff">cellular dehydration</text>' +
'<text class="cxs" x="208" y="118" fill="#8fd37c">water potential falls</text>' +
'<path class="cr" d="M352 104 L404 60"/><path class="cr" d="M352 104 L404 104"/><path class="cr" d="M352 104 L404 148"/>' +
'<g>' +
'<rect x="410" y="38" width="340" height="44" rx="8" fill="#fff" stroke="var(--rule)"/>' +
'<text class="cxb" x="422" y="58">1 · osmotic adjustment by small solutes</text>' +
'<text class="cxs" x="422" y="74">prediction: scales with dose, shows without stress</text>' +
'<rect x="410" y="90" width="340" height="44" rx="8" fill="#fff" stroke="var(--rule)"/>' +
'<text class="cxb" x="422" y="110">2 · membrane and protein stabilisation</text>' +
'<text class="cxs" x="422" y="126">prediction: dies on heat denaturation, works in vitro</text>' +
'<rect x="410" y="142" width="340" height="44" rx="8" fill="#fff" stroke="var(--rule)"/>' +
'<text class="cxb" x="422" y="162">3 · induction of the plant own antioxidant response</text>' +
'<text class="cxs" x="422" y="178">prediction: needs a living plant, raises GSH to GSSG</text>' +
'</g>' +
'<text class="cxs" x="410" y="202">Sun 2021 · Hand 2011 · Malecange 2023 · Noctor 2024</text>' +
'<line x1="0" y1="224" x2="750" y2="224" stroke="var(--rule-soft)"/>' +
'<text class="cxt" x="0" y="248">The controls that separate them, in this order</text>' +
'<g transform="translate(0,260)">' +
'<rect x="0" y="0" width="176" height="52" rx="8" fill="var(--orange-wash)" stroke="var(--orange)"/>' +
'<text class="cxb" x="12" y="20">nitrogen-matched arm</text><text class="cxs" x="12" y="38">same total N, no protein</text>' +
'<rect x="188" y="0" width="176" height="52" rx="8" fill="var(--orange-wash)" stroke="var(--orange)"/>' +
'<text class="cxb" x="200" y="20">heat-denatured arm</text><text class="cxs" x="200" y="38">same nutrients, no shape</text>' +
'<rect x="376" y="0" width="176" height="52" rx="8" fill="var(--orange-wash)" stroke="var(--orange)"/>' +
'<text class="cxb" x="388" y="20">scrambled peptide</text><text class="cxs" x="388" y="38">equal mass, no sequence</text>' +
'<rect x="564" y="0" width="186" height="52" rx="8" fill="var(--blue-wash)" stroke="var(--blue)"/>' +
'<text class="cxb" x="576" y="18">no-stress dose series</text>' +
'<text class="cxs" x="576" y="33">nutrition shows here,</text>' +
'<text class="cxs" x="576" y="45">protection does not</text>' +
'</g>' +
'<text class="cxs" x="0" y="332">None of these four arms exists anywhere in our plant data. Say that once, then give the design.</text>' +
'</svg>';

/* ── 4. Who pays for the protection ── */
window.FIGS.cost =
'<svg viewBox="0 0 760 320" role="img" aria-label="Who pays the synthesis cost under endogenous and exogenous protection">' +
'<style>' +
'.px{font:11.5px var(--font-text);fill:var(--ink-2)}' +
'.pxs{font:10.5px var(--font-mono);fill:var(--faint)}' +
'.pxb{font:600 12px var(--font-text);fill:var(--ink)}' +
'.pxt{font:600 13px var(--font-display);fill:var(--navy)}' +
'</style>' +
'<rect width="760" height="320" fill="#fff"/>' +
'<text class="pxt" x="0" y="15">Where the synthesis cost sits</text>' +
'<rect x="0" y="30" width="366" height="128" rx="10" fill="var(--red-wash)" stroke="var(--red)"/>' +
'<text class="pxb" x="14" y="52">Engineered plant · the plant pays</text>' +
'<text class="px" x="14" y="74">carbon and nitrogen go into the protectant</text>' +
'<text class="px" x="14" y="92">the same pools fund growth</text>' +
'<text class="px" x="14" y="110">so a trade-off is expected by construction</text>' +
'<text class="pxs" x="14" y="134">Monson 2022 · He 2022</text>' +
'<text class="pxs" x="14" y="150">this is the case resource allocation theory describes</text>' +
'<rect x="394" y="30" width="366" height="128" rx="10" fill="var(--green-wash)" stroke="var(--green)"/>' +
'<text class="pxb" x="408" y="52">Our route · the reactor pays</text>' +
'<text class="px" x="408" y="74">the bacterium builds the protein in a vessel</text>' +
'<text class="px" x="408" y="92">the plant receives a finished molecule</text>' +
'<text class="px" x="408" y="110">synthesis cost is moved off the plant entirely</text>' +
'<text class="pxs" x="408" y="134">so the dual benefit needs no special explanation</text>' +
'<text class="pxs" x="408" y="150">and the theory does not predict a cost here</text>' +
'<line x1="0" y1="178" x2="750" y2="178" stroke="var(--rule-soft)"/>' +
'<text class="pxt" x="0" y="202">What the plant can still be charged for</text>' +
'<g transform="translate(0,212)">' +
'<rect x="0" y="0" width="178" height="44" rx="8" fill="#fff" stroke="var(--rule)"/>' +
'<text class="pxb" x="12" y="19">uptake and transport</text><text class="pxs" x="12" y="35">energy, transporter use</text>' +
'<rect x="190" y="0" width="178" height="44" rx="8" fill="#fff" stroke="var(--rule)"/>' +
'<text class="pxb" x="202" y="19">detoxification</text><text class="pxs" x="202" y="35">of the crude preparation</text>' +
'<rect x="380" y="0" width="178" height="44" rx="8" fill="#fff" stroke="var(--rule)"/>' +
'<text class="pxb" x="392" y="19">ionic load</text><text class="pxs" x="392" y="35">whatever else is in there</text>' +
'<rect x="570" y="0" width="180" height="44" rx="8" fill="var(--amber-wash)" stroke="var(--amber)"/>' +
'<text class="pxb" x="582" y="19">osmotic burden</text><text class="pxs" x="582" y="35">set 1: 14.6 vs 51.7 mm</text>' +
'</g>' +
'<text class="pxt" x="0" y="292">And the experiment: a no-stress dose series scored to seed set, not to day 13.</text>' +
'<text class="pxs" x="0" y="310">A growth cost can be repaid later in the life cycle, so a 13-day readout can miss it entirely. We have never run this.</text>' +
'</svg>';

/* ── 5. Half-life decides whether pre-treatment can exist ── */
window.FIGS.halflife =
'<svg viewBox="0 0 760 366" role="img" aria-label="Decay curves and the three application windows">' +
'<style>' +
'.hx{font:11.5px var(--font-text);fill:var(--ink-2)}' +
'.hxs{font:10.5px var(--font-mono);fill:var(--faint)}' +
'.hxb{font:600 12px var(--font-text);fill:var(--ink)}' +
'.hxt{font:600 13px var(--font-display);fill:var(--navy)}' +
'</style>' +
'<rect width="760" height="366" fill="#fff"/>' +
'<text class="hxt" x="0" y="15">If the protein is gone before the stress, pre-treatment does not exist</text>' +
'<text class="hxs" x="0" y="32">decay from application to the moment of stress · half-lives bracketed by Zeng 2018 for a plant protein in real soil</text>' +
/* axes: x 60..600 = 0..48 h ; y 60..260 = 100..0 % */
'<line x1="60" y1="270" x2="610" y2="270" stroke="var(--rule)"/>' +
'<line x1="60" y1="60" x2="60" y2="270" stroke="var(--rule)"/>' +
'<g class="hxs">' +
'<text x="18" y="64">100%</text><text x="26" y="166">50%</text><text x="34" y="268">0%</text>' +
'<line x1="60" y1="165" x2="610" y2="165" stroke="var(--rule-soft)" stroke-dasharray="3 3"/>' +
'<text x="54" y="288">0</text><text x="166" y="288">12 h</text><text x="280" y="288">24 h</text><text x="394" y="288">36 h</text><text x="508" y="288">48 h</text>' +
'<text x="300" y="306">time since application</text>' +
'</g>' +
/* pre-treatment window marker at 24 h */
'<line x1="286" y1="54" x2="286" y2="270" stroke="var(--blue)" stroke-width="1.2" stroke-dasharray="5 3"/>' +
'<text class="hxb" x="292" y="50" fill="var(--blue-ink)">stress arrives · our pre-treatment arm applies 24 h early</text>' +
/* curves: y = 60 + 210*(1-2^(-t/T)) ; x = 60 + t*11.458 */
'<polyline points="60.0 60.0 64.8 71.8 69.5 82.9 74.2 93.4 79.0 103.3 83.8 112.7 88.5 121.5 93.2 129.8 98.0 137.7 102.8 145.1 107.5 152.1 112.2 158.8 117.0 165.0 121.8 170.9 126.5 176.5 131.2 181.7 136.0 186.7 140.8 191.3 145.5 195.8 150.2 199.9 155.0 203.9 159.8 207.6 164.5 211.1 169.2 214.4 174.0 217.5 178.8 220.4 183.5 223.2 188.2 225.9 193.0 228.3 197.8 230.7 202.5 232.9 207.2 235.0 212.0 236.9 216.8 238.8 221.5 240.5 226.2 242.2 231.0 243.8 235.8 245.2 240.5 246.6 245.2 247.9 250.0 249.2 254.8 250.3 259.5 251.4 264.2 252.5 269.0 253.5 273.8 254.4 278.5 255.3 283.2 256.1 288.0 256.9 292.8 257.6 297.5 258.3 302.2 259.0 307.0 259.6 311.8 260.2 316.5 260.7 321.2 261.2 326.0 261.7 330.8 262.2 335.5 262.6 340.2 263.0 345.0 263.4 349.8 263.8 354.5 264.2 359.2 264.5 364.0 264.8 368.8 265.1 373.5 265.4 378.2 265.6 383.0 265.9 387.8 266.1 392.5 266.3 397.2 266.5 402.0 266.7 406.8 266.9 411.5 267.1 416.2 267.2 421.0 267.4 425.8 267.5 430.5 267.7 435.2 267.8 440.0 267.9 444.8 268.0 449.5 268.2 454.2 268.3 459.0 268.4 463.8 268.5 468.5 268.5 473.2 268.6 478.0 268.7 482.8 268.8 487.5 268.8 492.2 268.9 497.0 269.0 501.8 269.0 506.5 269.1 511.2 269.1 516.0 269.2 520.8 269.2 525.5 269.3 530.2 269.3 535.0 269.3 539.8 269.4 544.5 269.4 549.2 269.5 554.0 269.5 558.8 269.5 563.5 269.5 568.2 269.6 573.0 269.6 577.8 269.6 582.5 269.6 587.2 269.7 592.0 269.7 596.8 269.7 601.5 269.7 606.2 269.7 611.0 269.7" fill="none" stroke="var(--red)" stroke-width="2"/>' +
'<text class="hxb" x="120" y="232" fill="var(--red)">half-life 6 h</text>' +
'<text class="hxs" x="120" y="246" fill="var(--red)">6% left at 24 h</text>' +
'<polyline points="60.0 60.0 64.8 63.3 69.5 66.5 74.2 69.7 79.0 72.8 83.8 75.9 88.5 78.9 93.2 81.9 98.0 84.8 102.8 87.7 107.5 90.5 112.2 93.3 117.0 96.1 121.8 98.8 126.5 101.4 131.2 104.1 136.0 106.6 140.8 109.2 145.5 111.7 150.2 114.2 155.0 116.6 159.8 119.0 164.5 121.3 169.2 123.6 174.0 125.9 178.8 128.2 183.5 130.4 188.2 132.5 193.0 134.7 197.8 136.8 202.5 138.9 207.2 140.9 212.0 142.9 216.8 144.9 221.5 146.8 226.2 148.8 231.0 150.7 235.8 152.5 240.5 154.3 245.2 156.1 250.0 157.9 254.8 159.7 259.5 161.4 264.2 163.1 269.0 164.7 273.8 166.4 278.5 168.0 283.2 169.6 288.0 171.1 292.8 172.7 297.5 174.2 302.2 175.7 307.0 177.2 311.8 178.6 316.5 180.0 321.2 181.4 326.0 182.8 330.8 184.2 335.5 185.5 340.2 186.8 345.0 188.1 349.8 189.4 354.5 190.6 359.2 191.9 364.0 193.1 368.8 194.3 373.5 195.5 378.2 196.6 383.0 197.8 387.8 198.9 392.5 200.0 397.2 201.1 402.0 202.2 406.8 203.2 411.5 204.3 416.2 205.3 421.0 206.3 425.8 207.3 430.5 208.3 435.2 209.2 440.0 210.2 444.8 211.1 449.5 212.0 454.2 212.9 459.0 213.8 463.8 214.7 468.5 215.6 473.2 216.4 478.0 217.2 482.8 218.1 487.5 218.9 492.2 219.7 497.0 220.4 501.8 221.2 506.5 222.0 511.2 222.7 516.0 223.5 520.8 224.2 525.5 224.9 530.2 225.6 535.0 226.3 539.8 227.0 544.5 227.6 549.2 228.3 554.0 229.0 558.8 229.6 563.5 230.2 568.2 230.8 573.0 231.5 577.8 232.1 582.5 232.6 587.2 233.2 592.0 233.8 596.8 234.4 601.5 234.9 606.2 235.5 611.0 236.0" fill="none" stroke="var(--amber)" stroke-width="2"/>' +
'<text class="hxb" x="330" y="222" fill="var(--amber)">half-life 0.92 d · soil, warm</text>' +
'<text class="hxs" x="330" y="238" fill="var(--amber)">47% left at 24 h</text>' +
'<polyline points="60.0 60.0 64.8 60.3 69.5 60.5 74.2 60.8 79.0 61.1 83.8 61.3 88.5 61.6 93.2 61.9 98.0 62.1 102.8 62.4 107.5 62.7 112.2 62.9 117.0 63.2 121.8 63.5 126.5 63.7 131.2 64.0 136.0 64.3 140.8 64.5 145.5 64.8 150.2 65.0 155.0 65.3 159.8 65.6 164.5 65.8 169.2 66.1 174.0 66.3 178.8 66.6 183.5 66.9 188.2 67.1 193.0 67.4 197.8 67.6 202.5 67.9 207.2 68.2 212.0 68.4 216.8 68.7 221.5 68.9 226.2 69.2 231.0 69.4 235.8 69.7 240.5 70.0 245.2 70.2 250.0 70.5 254.8 70.7 259.5 71.0 264.2 71.2 269.0 71.5 273.8 71.7 278.5 72.0 283.2 72.3 288.0 72.5 292.8 72.8 297.5 73.0 302.2 73.3 307.0 73.5 311.8 73.8 316.5 74.0 321.2 74.3 326.0 74.5 330.8 74.8 335.5 75.0 340.2 75.3 345.0 75.5 349.8 75.8 354.5 76.0 359.2 76.3 364.0 76.5 368.8 76.8 373.5 77.0 378.2 77.2 383.0 77.5 387.8 77.7 392.5 78.0 397.2 78.2 402.0 78.5 406.8 78.7 411.5 79.0 416.2 79.2 421.0 79.5 425.8 79.7 430.5 79.9 435.2 80.2 440.0 80.4 444.8 80.7 449.5 80.9 454.2 81.1 459.0 81.4 463.8 81.6 468.5 81.9 473.2 82.1 478.0 82.4 482.8 82.6 487.5 82.8 492.2 83.1 497.0 83.3 501.8 83.5 506.5 83.8 511.2 84.0 516.0 84.3 520.8 84.5 525.5 84.7 530.2 85.0 535.0 85.2 539.8 85.4 544.5 85.7 549.2 85.9 554.0 86.2 558.8 86.4 563.5 86.6 568.2 86.9 573.0 87.1 577.8 87.3 582.5 87.6 587.2 87.8 592.0 88.0 596.8 88.3 601.5 88.5 606.2 88.7 611.0 89.0" fill="none" stroke="var(--green)" stroke-width="2"/>' +
'<text class="hxb" x="430" y="80" fill="var(--green-ink)">half-life 11.3 d · soil, cool</text>' +
'<text class="hxs" x="430" y="96" fill="var(--green-ink)">94% left at 24 h</text>' +
/* right panel: the consequence */
'<text class="hxt" x="630" y="80">Consequence</text>' +
'<text class="hxs" x="630" y="102">6 h</text><text class="hx" x="630" y="118">pre-treatment is</text><text class="hx" x="630" y="134">deleted; only co-</text><text class="hx" x="630" y="150">and after survive</text>' +
'<text class="hxs" x="630" y="178">0.92 d</text><text class="hx" x="630" y="194">pre-treatment is</text><text class="hx" x="630" y="210">just under half</text><text class="hx" x="630" y="226">a dose</text>' +
'<text class="hxs" x="630" y="250">11 d</text><text class="hx" x="630" y="266">forecast lead time</text><text class="hx" x="630" y="282">is not the limit</text>' +
'<line x1="0" y1="320" x2="750" y2="320" stroke="var(--rule-soft)"/>' +
'<text class="hxs" x="0" y="338">We have never measured a half-life in any medium. The curves are published brackets for a</text>' +
'<text class="hxs" x="0" y="354">comparable protein, drawn to show what the measurement would decide.</text>' +
'</svg>';

/* ── 6. Two glutathione hypotheses, two signatures ── */
window.FIGS.gsh =
'<svg viewBox="0 0 760 376" role="img" aria-label="Substitution versus upstream relief and their predicted glutathione signatures">' +
'<style>' +
'.gx{font:11.5px var(--font-text);fill:var(--ink-2)}' +
'.gxs{font:10.5px var(--font-mono);fill:var(--faint)}' +
'.gxb{font:600 12px var(--font-text);fill:var(--ink)}' +
'.gxt{font:600 13px var(--font-display);fill:var(--navy)}' +
'.gr{fill:none;stroke:var(--ink-2);stroke-width:1.3;marker-end:url(#gh)}' +
'</style>' +
'<defs><marker id="gh" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">' +
'<path d="M0 0 L10 5 L0 10 z" fill="var(--ink-2)"/></marker></defs>' +
'<rect width="760" height="376" fill="#fff"/>' +
'<text class="gxt" x="0" y="15">The plant own redox buffer, and the two ways a protectant could touch it</text>' +
/* cycle */
'<g transform="translate(0,28)">' +
'<rect x="0" y="0" width="330" height="150" rx="10" fill="var(--paper-3)" stroke="var(--rule-soft)"/>' +
'<text class="gxb" x="14" y="22">under stress</text>' +
'<rect x="14" y="34" width="86" height="34" rx="6" fill="var(--red-wash)" stroke="var(--red)"/><text class="gxb" x="38" y="55">ROS</text>' +
'<path class="gr" d="M104 51 L140 51"/>' +
'<rect x="146" y="34" width="86" height="34" rx="6" fill="#fff" stroke="var(--rule)"/><text class="gxb" x="166" y="55">GSH used</text>' +
'<path class="gr" d="M236 51 L272 51"/>' +
'<rect x="236" y="78" width="86" height="34" rx="6" fill="var(--amber-wash)" stroke="var(--amber)"/><text class="gxb" x="262" y="99">GSSG</text>' +
'<path class="gr" d="M232 95 L146 95" />' +
'<rect x="14" y="78" width="124" height="34" rx="6" fill="var(--green-wash)" stroke="var(--green)"/>' +
'<text class="gxb" x="24" y="99">glutathione reductase</text>' +
'<text class="gxs" x="14" y="132">GSH to GSSG falls as the buffer is consumed</text>' +
'<text class="gxs" x="14" y="146">Hasanuzzaman 2017 · Noctor 2024</text>' +
'</g>' +
/* two hypotheses */
'<g transform="translate(360,28)">' +
'<rect x="0" y="0" width="400" height="70" rx="10" fill="var(--blue-wash)" stroke="var(--blue)"/>' +
'<text class="gxb" x="14" y="22">H1 · the protectant substitutes for the function</text>' +
'<text class="gx" x="14" y="40">it scavenges or stabilises directly</text>' +
'<text class="gxs" x="14" y="58">should work in vitro, without the plant own pathway</text>' +
'<rect x="0" y="80" width="400" height="70" rx="10" fill="var(--green-wash)" stroke="var(--green)"/>' +
'<text class="gxb" x="14" y="102">H2 · the protectant relieves the stress upstream</text>' +
'<text class="gx" x="14" y="120">less injury, so the plant own buffer is drawn down less</text>' +
'<text class="gxs" x="14" y="138">needs a living plant; the effect is conditional on stress</text>' +
'</g>' +
'<line x1="0" y1="200" x2="750" y2="200" stroke="var(--rule-soft)"/>' +
'<text class="gxt" x="0" y="224">What each one predicts, on extracts we already take</text>' +
'<g transform="translate(0,236)">' +
'<rect x="0" y="0" width="750" height="26" fill="var(--paper-2)"/>' +
'<text class="gxs" x="10" y="18">measurement</text><text class="gxs" x="300" y="18">H1 substitution</text><text class="gxs" x="530" y="18">H2 upstream relief</text>' +
'<text class="gx" x="10" y="48">GSH to GSSG ratio, stressed plants</text><text class="gxb" x="300" y="48">unchanged or lower</text><text class="gxb" x="530" y="48">higher</text>' +
'<line x1="0" y1="58" x2="750" y2="58" stroke="var(--rule-soft)"/>' +
'<text class="gx" x="10" y="78">GSH to GSSG ratio, unstressed plants</text><text class="gxb" x="300" y="78">may change</text><text class="gxb" x="530" y="78">no change</text>' +
'<line x1="0" y1="88" x2="750" y2="88" stroke="var(--rule-soft)"/>' +
'<text class="gx" x="10" y="108">activity in a cell-free assay</text><text class="gxb" x="300" y="108">present</text><text class="gxb" x="530" y="108">absent</text>' +
'</g>' +
'<text class="gxs" x="0" y="352">We hold no redox measurement of any kind. Prof. Cheng suggested ROS staining in March and we</text>' +
'<text class="gxs" x="0" y="368">did not do it, which is the same gap seen from the other side.</text>' +
'</svg>';
