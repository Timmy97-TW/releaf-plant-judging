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
'<path d="M60 60 Q 76 200 95 255 T 160 268 L610 269" fill="none" stroke="var(--red)" stroke-width="2"/>' +
'<text class="hxb" x="100" y="246" fill="var(--red)">half-life 6 h</text>' +
'<text class="hxs" x="100" y="262" fill="var(--red)">6% left at 24 h</text>' +
'<path d="M60 60 C 140 135 210 175 286 198 C 400 227 500 243 610 252" fill="none" stroke="var(--amber)" stroke-width="2"/>' +
'<text class="hxb" x="330" y="222" fill="var(--amber)">half-life 0.9 d · soil, warm</text>' +
'<text class="hxs" x="330" y="238" fill="var(--amber)">47% left at 24 h</text>' +
'<path d="M60 60 C 200 72 420 86 610 104" fill="none" stroke="var(--green)" stroke-width="2"/>' +
'<text class="hxb" x="430" y="80" fill="var(--green-ink)">half-life 11.3 d · soil, cool</text>' +
'<text class="hxs" x="430" y="96" fill="var(--green-ink)">94% left at 24 h</text>' +
/* right panel: the consequence */
'<text class="hxt" x="630" y="80">Consequence</text>' +
'<text class="hxs" x="630" y="102">6 h</text><text class="hx" x="630" y="118">pre-treatment is</text><text class="hx" x="630" y="134">deleted; only co-</text><text class="hx" x="630" y="150">and after survive</text>' +
'<text class="hxs" x="630" y="178">0.9 d</text><text class="hx" x="630" y="194">pre-treatment is</text><text class="hx" x="630" y="210">half a dose</text>' +
'<text class="hxs" x="630" y="238">11 d</text><text class="hx" x="630" y="254">forecast lead time</text><text class="hx" x="630" y="270">is not the limit</text>' +
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
