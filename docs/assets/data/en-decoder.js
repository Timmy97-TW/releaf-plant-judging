/* English for the decoder. Keyed by the English term exactly as it appears in decoder.js. */
window.DEC_EN = {

'Arabidopsis thaliana (Col-0)':{
 one:'A small brassica with a six to eight week life cycle, a small fully sequenced genome. The fruit fly of plant biology. Col-0 is the standard accession.',
 room:'All three of our systems use it. The honest limit: it is not a crop. We never tested rice or tomato, so this is a lab proof of concept.'},
'rosette':{
 one:'The flat radial whorl of leaves Arabidopsis makes before it flowers. Rosette area is just how wide the leaves spread.',
 room:'Rosette area on the wiki is qualitative, read off photographs. Measuring the same photographs in ImageJ is free, and it is the cheapest new endpoint available.'},
'bolting':{
 one:'Sending a flowering stalk up from the centre of the rosette. The switch from vegetative to reproductive growth.',
 room:'The soil heat post-treatment arm bolted most and grew the tallest stems. Stress often accelerates bolting, so more bolting is not health; it may be an escape response.'},
'senescence':{
 one:'Programmed ageing and nutrient recovery, leaves turning yellow. Not death — the plant is actively moving resources out.',
 room:'A month-old plant is near the end of its life cycle, which is why the soil work failed with month-old plants and moved to two-week-old ones.'},
'stratification / vernalisation':{
 one:'Holding seed at 4 °C for a few days to break dormancy and synchronise germination. Levelling the starting line.',
 room:'We used four days, though some tables say two and some say three. Germination out of step means seedlings of different ages, which is an uncontrolled variable.'},
'primary root':{
 one:'The first root out of the seed. Its length is the most salt-sensitive readout and on a vertical plate it can be traced straight into ImageJ.',
 room:'This is our cleanest measurement, the salt ladder from 74.95 down to 1.36 mm. But it was traced by hand, so it carries operator bias.'},
'halotropism':{
 one:'Roots bend away from higher salt. A gradient descent, essentially.',
 room:'On a plate this makes a root look shorter when it has really curved. Tracing the path avoids it; measuring tip-to-seed in a straight line does not.'},
'anthocyanin':{
 one:'A purple-red flavonoid pigment. It accumulates under stress and is generally read as an antioxidant and light-screening response.',
 room:'In the hydroponic WB800 dilution test, 1 in 4 through 1 in 16 all accumulated anthocyanin visibly — direct evidence that the vehicle itself stresses the plant. Purple does not mean dead, but it does mean stressed.'},
'chlorosis / bleaching':{
 one:'Loss of chlorophyll: leaves go from green to yellow, chlorosis, or to white, bleaching. Bleaching is the worse of the two.',
 room:'ACCD at 1 in 10 and 1 in 20 bleached in hydroponics, and that is toxicity, not stress. Separating stress-driven yellowing from treatment-driven bleaching is the whole point.'},
'turgor':{
 one:'The water pressure inside a cell that holds it rigid. Lose turgor and the plant wilts.',
 room:'Early in a stress, what fresh weight loses is mostly water, not biomass. That is where the difference between fresh and dry weight comes from.'},
'fresh weight vs dry weight':{
 one:'Fresh weight is biomass plus water. Dry weight is what is left after the oven. Fresh weight is easy to take and mixes in water status.',
 room:'We only ever took fresh weight. Dry weight, 48 h in an oven at 65 °C, is close to free and separates "lost water" from "grew less" — one of the best answers to Kyle’s fifth question.'},
'two-phase salinity response':{
 one:'The Munns and Tester framework: phase one is osmotic and fast, a water-deficit effect; phase two is ionic and slow, Na⁺ accumulating to toxicity.',
 room:'Our experiments run five to seven days, so most of them are still in phase one. What we measured is osmotic tolerance, not ionic tolerance. Drawing that distinction sounds expert.'},
'osmotic adjustment':{
 one:'The plant accumulates solutes — proline, betaine, sugars — to lower its internal water potential so it can keep taking up water.',
 room:'This is the route by which trehalose might work. But we never measured any osmolyte, so the mechanism is inference and not measurement.'},
'thermopriming':{
 one:'A mild heat exposure first makes the plant more tolerant of a stronger one later. Pre-warming the engine.',
 room:'Our heat protocols say three days of thermo-priming for CH and five days for the others, which is inconsistent. And five days at 37 °C is close to lethal for a four-day-old seedling: fresh weight falls 95 per cent.'},
'recovery period':{
 one:'The stretch back in normal conditions after the stress ends. Whether a plant recovers says more about tolerance than how it looks at the worst moment.',
 room:'Only the heat work has a five-day recovery; the salt work has none. Kyle’s sixth question, whether small but alive counts as better, gets stuck right here.'},

'chlorophyll a / b':{
 one:'Two light-harvesting pigments with different absorption peaks, about 663 nm for a and 645 nm for b. Reading two wavelengths therefore resolves both.',
 room:'We extract in 80 per cent acetone, read A645 and A663, and apply the Arnon equations. That is the standard method and saying it cleanly is enough.'},
'Arnon equations':{
 one:'Empirical formulae from 1949 that turn the two absorbances into concentrations of chlorophyll a, b and total. Linear combinations, nothing mysterious.',
 room:'Citing Arnon (1949) is enough. Asked how it was calculated, "80 per cent acetone, A645 and A663, Arnon" is a complete answer.'},
'thylakoid':{
 one:'The stacked membranes inside a chloroplast where the light reactions happen, with the chlorophyll embedded in them.',
 room:'Stress damages membranes and the pigment goes with them. So chlorophyll is a proxy for membrane damage, not a direct measure of photosynthetic rate.'},
'ROS (reactive oxygen species)':{
 one:'Hydrogen peroxide, superoxide and relatives. Stress makes the electron transport chain leak them, and they attack membrane lipids and proteins.',
 room:'This is the mechanistic bridge from salt or heat to falling chlorophyll. We measured no ROS marker at all, so it is a literature route and not our data.'},
'lipid peroxidation':{
 one:'ROS oxidising and breaking the unsaturated fatty acids in a membrane. The direct chemical consequence of membrane damage.',
 room:'The standard way to measure it is MDA. Our phase 3 protocol lists MDA and the result is not on the wiki.'},
'MDA / TBARS':{
 one:'Malondialdehyde, an end product of lipid peroxidation, measured by the thiobarbituric acid colour reaction. Cheap, fast and standard equipment in stress work.',
 room:'The first answer to Kyle’s fifth question. We listed it and never reported it. The honest line is: it was in the plan, time ran out, it was not finished.'},
'Fv/Fm (chlorophyll fluorescence)':{
 one:'A PAM fluorometer reading the maximum quantum efficiency of photosystem II. A healthy plant sits near 0.80 to 0.83 and stress pulls it down. Non-destructive.',
 room:'The strongest answer to Kyle’s fifth question. Non-destructive means the same plant can be followed through stress and into recovery — exactly the design gap we have. The reason we did not is that we have no instrument.'},
'relative water content (RWC)':{
 one:'(fresh weight minus dry weight) over (turgid weight minus dry weight). A water-status index between 0 and 1.',
 room:'It needs one soak to saturation and one oven step. It pulls the water term out of fresh weight, which settles the normalisation argument directly.'},
'electrolyte leakage':{
 one:'Float leaf tissue in water and read the conductivity: the more broken the membranes, the more ions leak out. All it needs is a conductivity meter.',
 room:'Cheap, and a direct measure of membrane integrity. Another answer to "is there a better parameter".'},
'Na⁺/K⁺ ratio':{
 one:'The molar ratio of sodium to potassium in the tissue. A mechanistic marker of salt tolerance — tolerant plants exclude Na⁺ or lock it in the vacuole and keep the ratio low.',
 room:'If you want to claim a salt-tolerance mechanism, this is the answer the judge has in mind. We did not measure it, so what we claim is tolerance at the phenotype level.'},
'proline':{
 one:'An amino acid that accumulates under stress, acting as an osmolyte and an antioxidant. The ninhydrin colour assay for it is very cheap.',
 room:'One of the standard markers. Not done.'},

'ethylene':{
 one:'A gaseous plant hormone. Stress produces it in quantity and it drives leaf senescence, abscission and root growth inhibition.',
 room:'Our entire ACCD story rests on "more ethylene is bad". That is the correct consensus in the literature, and we never measured ethylene.'},
'ACC':{
 one:'1-aminocyclopropane-1-carboxylic acid, the last precursor in ethylene biosynthesis. ACC oxidase makes the final step to ethylene.',
 room:'ACC is the substrate of ACCD. The whole chain: remove ACC, no ethylene can be made, less stress damage.'},
'ACC deaminase (AcdS)':{
 one:'A bacterial enzyme that cleaves ACC into α-ketobutyrate and ammonia, draining away the ethylene precursor. About 41 kDa.',
 room:'Our lead. Note that it is a bacterial enzyme and not the plant’s own, so it has to consume ACC outside the plant or in the rhizosphere to do anything.'},
'α-ketobutyrate (α-KB)':{
 one:'The product of the ACCD reaction. Measuring it is measuring enzyme activity.',
 room:'This is what the DNPH assay reads. One unit is 1 µmol of α-KB per hour.'},
'PLP (pyridoxal-5′-phosphate)':{
 one:'The active form of vitamin B6 and the cofactor of ACCD. Without it the enzyme does not work.',
 room:'Results Fig 12: activity rises with PLP added. We also added PLP at 1 in 100 for the hydroponic application. Asked how you know the enzyme is alive, lead with DNPH and follow with the PLP dependence.'},
'PGPR':{
 one:'Plant growth-promoting rhizobacteria. ACC deaminase activity is the most classic of their mechanisms.',
 room:'A double-edged fact: it supports our mechanism, and it also means the bacteria themselves may promote growth — which is why the empty-host control is indispensable. Bacillus subtilis is itself a well-known PGPR.'},
'LEA protein':{
 one:'Late embryogenesis abundant proteins, a family that appears in bulk as seed dries down. Mostly intrinsically disordered, thought to act like a molecular shield stabilising membranes and other proteins.',
 room:'LEA14 is one of them. The mechanism is at the level of hypothesis — there is no accepted catalytic activity to measure, so LEA14 has no activity assay. That is also why it is the hardest of the three to prove.'},
'intrinsically disordered protein':{
 one:'A protein with no fixed three-dimensional structure, whose function comes from flexibility rather than a binding pocket. Structure prediction means almost nothing for it.',
 room:'This is why LEA14 has neither a structural model nor an activity assay. It makes a good honest answer.'},
'Pep / elicitor peptide':{
 one:'A small peptide signal the plant makes itself; a PEPR receptor catches it and it switches on immune and stress responses. An amplifier, not a protectant.',
 room:'BoPep4 is a broccoli elicitor peptide. Its mechanism is to make the plant mobilise its own defences, so a cost when there is no stress is exactly what theory predicts — and exactly what we saw.'},
'PTI':{
 one:'Pattern-triggered immunity, the first layer of defence once the plant detects a pathogen-associated molecular pattern. It shifts resources from growth to defence.',
 room:'The growth-defence trade-off. BoPep4 suppressing growth without salt moves from a defect to a mechanistic consistency once you frame it this way.'},
'trehalose / T6P / trehalase':{
 one:'Trehalose is a disaccharide osmoprotectant. T6P is its precursor and also a sugar-signalling molecule in plants; trehalase degrades trehalose applied from outside.',
 room:'This explains why low-dose trehalose suppressed growth, through T6P signalling, and why high doses were degraded. Six sets gave no stable effect, so we treat it as a reference compound.'},
'osmoprotectant':{
 one:'A small molecule that can sit at high concentration without disturbing metabolism, holding up internal osmotic pressure and stabilising proteins. Trehalose, glycine betaine and proline all qualify.',
 room:'Keep it distinct from "biostimulant". Our external positioning is a biostimulant, not the regulatory category of a protectant.'},

'Bacillus subtilis 168 / WB800':{
 one:'168 is the standard laboratory strain. WB800 is derived from it with eight extracellular proteases knocked out, so secreted protein is not digested by its own host.',
 room:'Choosing WB800 to protect our product is a good design answer. But it still secretes plenty of its own proteins, so the supernatant is not only our material.'},
'signal peptide (SamyQ / Csn)':{
 one:'A short sequence at the N terminus that acts like a mailing label, telling the cell to export the protein. It is cleaved off on the way out.',
 room:'Our two ACCD constructs use different signal peptides, Csn and SamyQ, and also differ in codon usage, so the codon-optimisation comparison is confounded. This is the key to Kyle’s first question.'},
'codon optimisation':{
 one:'The same amino acid sequence can be encoded by different codons. Switching to the host’s preferred codons should translate faster and yield more. The protein itself is unchanged.',
 room:'The point: it changes yield, not protective effect. That is the first line of Audrey’s meeting feedback. And the yield we measured actually went down, by a factor of 1.45.'},
'truncation':{
 one:'Cutting a stretch out of a protein, usually a dispensable region, to make it smaller and easier to express or secrete.',
 room:'Same as above: the aim is production and secretion, not more protection. Never say the truncation was meant to strengthen the protective effect.'},
'His-tag (6×His)':{
 one:'Six histidines added at one end of a protein. Two uses: an anti-His antibody recognises it, for detection, and a nickel column grips it, for purification.',
 room:'The whole answer to Kyle’s tenth question is here. We are not using an antibody against the protein itself; we use one against the His tag, so mutations in the protein sequence do not affect recognition.'},
'IMAC':{
 one:'Immobilised metal affinity chromatography. A nickel column holds the His tag, everything else washes off, and imidazole elutes the target. One step from supernatant to relatively pure protein.',
 room:'All three of our proteins carry a His tag, so this route is open. The honest answer to "why did you not purify" is time and consumables, not inability.'},
'competitive ELISA':{
 one:'Antigen in the sample competes with a fixed amount of labelled antigen for a limited amount of antibody. Lower signal means higher concentration — the opposite direction to a sandwich ELISA.',
 room:'This is the format we used, read as %B/B0. Its upper region saturates, so samples above the top standard cannot be ranked against each other — and all of ours are above it.'},
'standard curve / %B/B0':{
 one:'Known concentrations give a signal-against-concentration relationship and the sample signal is read back through it. %B/B0 is the normalised signal of a competitive format.',
 room:'Our curve runs 0.093 to 3 µg/mL at R² = 0.9967, which is lovely. The problem is that the samples land at 4.5 to 13.4, all off the end of it.'},
'supernatant vs lysate':{
 one:'Supernatant is the liquid after a spin, containing what was secreted. Lysate is everything inside the cells once they are broken open.',
 room:'Our ELISA reads the cell-free supernatant, which is right, because the product is the secreted protein. The Western used lysate.'},
'Western blot / kDa':{
 one:'Separate proteins by size and stain with an antibody to confirm there is a band in the right place. kDa is the unit of molecular weight.',
 room:'Our ACCD should be about 41 kDa, yet the blot is described as just below 100 kDa and between 75 and 100. The wiki never explains the discrepancy — it could be a multimer, but that was never tested.'},
'DNPH assay':{
 one:'2,4-dinitrophenylhydrazine reacts with the carbonyl of α-KB to give a compound that absorbs strongly at 540 nm, so absorbance is proportional to enzyme activity.',
 room:'This is our only evidence of activity, and only ACCD has it. LEA14 and BoPep4 have no activity assay: one is a disordered protein and the other a signalling peptide, neither with a catalytic activity to measure.'},
'specific activity (U/mg)':{
 one:'Substrate turned over per milligram of protein per hour. The index that separates "how much protein" from "how good the protein is".',
 room:'The membrane reactor reports 6.3 U/mg at 18 h and 5 to 8.4 U/mg out to 72 h. Another line in the same passage says 6 to 8 U/mg, which does not match.'},
'OD600':{
 one:'Turbidity at 600 nm, used as a proxy for bacterial concentration. OD 1 is of order 10⁸ cells/mL.',
 room:'OD600 in the ELISA table is only 0.4 to 0.7, so these are early-growth harvests, not high density. Concentration per OD600 is the yield per cell.'},
'TB medium (Terrific Broth)':{
 one:'Tryptone, 24 g/L yeast extract, 0.4 per cent glycerol and 72 mM phosphate buffer. Rich, strongly buffered, and carrying no NaCl. Built for high cell density and high protein yield.',
 room:'Kyle’s eighth question. The best reason for choosing it: LB carries 10 g/L NaCl, about 171 mM, so pouring LB onto a salinity experiment is adding salt yourself. TB has no NaCl and therefore does not contaminate the variable under test.'},
'LB medium (Lysogeny Broth)':{
 one:'Tryptone 10, yeast extract 5 and NaCl 10 g/L. The usual general-purpose medium, but low in carbon, unbuffered, and it will not carry cells to high density.',
 room:'We used LB only for plating after transformation, never on plants. Make that distinction clearly or someone will assume we ran a salt experiment in a salted medium.'},
'½ MS medium':{
 one:'The Murashige and Skoog plant tissue culture formulation at half strength. The standard base medium for plant work.',
 room:'The base for both our agar and hydroponic work. The hydroponics is written three different ways, ½ MS, 0.1× MS and 1 per cent MS. Settle that before the room.'},
'0.22 µm filtration':{
 one:'A 0.22 micron membrane holds bacteria back and lets molecules through. Sterilising without removing molecules.',
 room:'The phase 3 supernatant was filtered. So nothing live went onto the plants, and everything dissolved is still in there — which is exactly what Kyle’s seventh question asks about.'},
'cell-free':{
 one:'Molecules without living cells. The foundation of our entire biosafety case: the product is a protein, not a bacterium.',
 room:'This is the core of containment and the reason we can say no GMO goes into the field.'},
'erythromycin':{
 one:'An antibiotic used to keep plasmid-bearing cells. The resistance gene is on the plasmid, so only cells that carry it grow.',
 room:'The supernatant applied to plants also contains antibiotic. That is one concrete answer to Kyle’s seventh question about what else is in the preparation — and a point that will be pushed on.'},

'experimental unit':{
 one:'The thing the treatment is actually applied to. Spray a plate and the plate is the unit, however many seedlings are on it.',
 room:'The single most important term on this site. Forty seedlings on one plate, unit is the plate, n = 1. You should be able to say that without thinking.'},
'biological vs technical replicate':{
 one:'A biological replicate is an independent individual or batch — a separately poured plate, a separate colony. A technical replicate is the same sample read three times, which only reduces reading error.',
 room:'Kyle’s third question. Our 9, 25 and 40 are seedlings within a plate, not independent repeats. ACCD has two independent trials; everything else has one.'},
'pseudoreplication':{
 one:'Treating observations that are not independent as if they were. The result is confidence intervals that are too narrow and p values that are too small.',
 room:'The asterisks on the wiki figures were computed this way. Admitting it beats being caught at it.'},
'design effect / ICC':{
 one:'deff = 1 + (m − 1)ρ, where m is observations per cluster and ρ the intraclass correlation. Effective sample size is the total divided by deff.',
 room:'m = 40 and ρ = 0.3 give deff = 12.7 and an effective n near 3. That line is the most forceful thing you can hand anyone: forty pseudoreplicates are worth three independent units.'},
'floor effect':{
 one:'The control is already at the limit of measurement, treated arms cannot go lower, the effect is compressed and power goes to zero.',
 room:'Root length at 250 mM, about 1 mm, and fresh weight under heat, 0.02 g, are both floors. Those conditions cannot compare treatments.'},
'normalisation / denominator':{
 one:'Dividing one quantity by another to make things comparable. It is only safe when the denominator is independent of the treatment.',
 room:'Chlorophyll divided by fresh weight, where fresh weight is itself a function of the stress: the denominator is affected by the treatment and the ratio is uninterpretable. This is Audrey’s sixteenth through eighteenth questions.'},
'SEM vs SD':{
 one:'SD describes spread between individuals. SEM is SD over the square root of n and describes the precision of the mean. SEM is always smaller and always looks nicer.',
 room:'Our figure legends say mean ± SEM. If the n is pseudoreplicated, the SEM has been shrunk twice over: the denominator is too large and the n is not legitimate in the first place.'},
'effect size':{
 one:'How big the effect is, independent of sample size — for instance the difference in means over the pooled standard deviation, Cohen’s d.',
 room:'With a small n, reporting an effect size and an interval is far more honest than reporting a p value. It is standard practice in ecology, where replication is limited, and it is the point the instructor made in Audrey’s notes.'},
'minimum detectable difference / power':{
 one:'The smallest real difference you would catch 80 per cent of the time at a given n, variability and α. n ≈ 2(1.96+0.84)²(CV/effect)².',
 room:'Use the formula as a weapon: at a between-plate CV of 15 per cent, detecting a 30 per cent difference reliably takes three to four independent plates per arm. That is a grounded next step, not a vague promise.'},
'negative / mock / vehicle control':{
 one:'A negative control gets nothing; a mock gets the same handling without the active ingredient; a vehicle control gets the carrier itself, the TB or the WB800 supernatant.',
 room:'We have TB controls on agar and in soil and WB800 controls in hydroponics. What is missing is heat-killed protectant supernatant — the one cheap control that would separate the protein from everything else in the preparation.'},
'confounding':{
 one:'Two variables moving together so their effects cannot be separated — one timing per box, say, mixes the timing effect into the box effect.',
 room:'The hydroponic CH set is exactly that, three timings in three boxes. So is the codon-optimisation comparison, where the signal peptide changed along with the codons.'},
'randomisation / blinding':{
 one:'Randomisation spreads nuisance factors such as position and order evenly; blinding keeps the person measuring from knowing which group a sample belongs to.',
 room:'Root length was traced by hand, so blinding here is not a luxury. We did not do it; say so, and say how next time — code the filenames before measuring.'},
'ND (not determined)':{
 one:'No number for that cell. Contamination, a plate discarded, or a reading never taken.',
 room:'We have several: the two 250 mM arms in Set 5, the 100 mM post arm in Set 9, the 0 mM post arm in Set 11, and the root length in Set 4. An ND is not a gap, it is an event that needs explaining.'},
'matrix effect':{
 one:'Components of the sample solution interfering with the assay reading, so the standard curve no longer applies.',
 room:'Results Fig 38 plots the effect of TB on the α-KB standard curve. The team knew about it, and that is an honest point in our favour.'}
};

window.DEC_EN_GROUPS = {
  plant: 'Follow which phase and which organ the judge is asking about.',
  chl:   'Kyle’s fourth and fifth questions live entirely in this group.',
  mech:  'Why these three proteins might work. Watch which parts are literature and which are our data.',
  prot:  'The vocabulary for Kyle’s first, seventh, eighth and tenth questions.',
  stat:  'The native language of the argument. Kyle’s third question and Audrey’s sixteenth through eighteenth.'
};
