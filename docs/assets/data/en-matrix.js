/* English for the experiment matrix. Keyed by run id.
 * Fields mirror matrix.js: design, readout, num, says, cannot, trap.
 * Written against the frozen wiki, same as the Chinese.
 */
window.MX_EN = {

A1:{design:'NaCl 50 and 100 mM, trehalose 1.0 mM. Horizontal round plates.',
 readout:'Photographs only',
 says:'We learned to pour plates and get seed to germinate, and we saw that 1.0 mM trehalose on its own suppresses growth.',
 cannot:'Any quantitative conclusion. Nothing was weighed and no chlorophyll was read in this set.',
 trap:'Do not fold the three pretests into a count of eleven sets without saying they are photographs only.'},

A2:{design:'NaCl 100 and 150 mM, trehalose 0.5 mM.',
 readout:'Photographs only',
 says:'Plants are visibly damaged at 150 mM, so the working window sits near 100 mM.',
 cannot:'A dose response. There are no measurements.',
 trap:'Same as above. Call a pretest a pretest.'},

A3:{design:'NaCl 100 mM with trehalose at 0.125, 0.25 and 0.5 mM. Trial 2 repeated the design to add sample size.',
 readout:'Photographs only',
 says:'This is one of the few designs on the whole site that was run twice.',
 cannot:'Any number.',
 trap:'Trial 1 ran 10 days and trial 2 ran 13, so strictly the two are not the same experiment.'},

A4:{design:'NaCl 0 and 100 mM crossed with trehalose 0, 0.25, 0.5 and 1.0 mM. Changed on Prof. Cheng’s advice: sucrose 3 per cent down to 1, horizontal plates to vertical, four-day-old seedlings.',
 readout:'Root length traced by hand in ImageJ, fresh weight, chlorophyll',
 num:'Primary root 46.4 mm at 1.0 mM trehalose against about 35.8 mm in the salted control, so about 30 per cent longer.',
 says:'At 100 mM, 1.0 mM trehalose gave roughly a third more primary root. The 0.25 and 0.5 mM doses did less.',
 cannot:'Fresh weight was not rescued. And panel b, chlorophyll divided by fresh weight, is inflated by the small biomass; the wiki itself points the reader at panel c.',
 trap:'The root-length column carries an ND for contamination. Quote 46.4 without mentioning the ND and a judge who opens the figure legend will find it.'},

A5:{design:'NaCl 0, 150 and 250 mM crossed with trehalose 0, 1, 5 and 10 mM. Cold stratification went from two days to four.',
 readout:'Root length, fresh weight, chlorophyll',
 num:'Longest control root 82.476 mm; about 4 to 5 mm at 150 mM; 1.075 and 0.9415 mm at 250 mM.',
 says:'250 mM is a floor: roots barely grow, so no treatment can separate from another. At 150 mM chlorophyll recovers with dose, and 5 and 10 mM are significant.',
 cannot:'The 250 mM arm cannot compare treatments at all. Every value sits on the detection limit.',
 trap:'Two conditions at 250 mM were lost whole, trehalose 0 and 10 mM, marked ND. That is not missing data, it is two plates gone.'},

A6:{design:'NaCl 0, 75, 100 and 150 mM with trehalose at 0 or 5 mM. Vertical plates.',
 readout:'Root length, fresh weight, chlorophyll',
 num:'Primary root 74.95, 34.77, 11.00 and 1.36 mm at 0, 75, 100 and 150 mM. SD 2.77, 4.41, 4.07 and 1.09.',
 says:'This is our strongest evidence, and what it proves is the stress and not a protectant: the intervals do not overlap, so the assay resolves dose. 75 mM leaves 46 per cent of the control.',
 cannot:'It cannot say any protectant works. And it ran once, with no repetition across runs.',
 trap:'Report the two means and stop. Do not say 42.7-fold or 55-fold: the denominator, 1.36 mm, carries a coefficient of variation near 80 per cent, so the ratio is only known to within about threefold. Also, the wiki’s Outcomes list says 74.95 to 1.36 while the Set 5 text puts the control at 82.476 mm. Those are different sets. Do not mix them.'},

A7:{design:'NaCl 100 mM, CH Bio peptide at 1 in 500, the vendor’s own field dilution, 1 mL poured from above. Horizontal round plates, 40 seeds per plate.',
 readout:'Fresh weight, normalised chlorophyll in mg per g, unnormalised chlorophyll in mg/L',
 says:'Post-treatment gave the highest chlorophyll and the highest fresh weight among the salted arms. Pre-treatment and co-treatment badly suppressed growth.',
 cannot:'Any mechanism. The CH Bio peptide is a finished product and the vendor has not disclosed its active ingredient. This is a product-level comparison.',
 trap:'The seedlings were four days old at treatment, and the wiki itself says four-day-old seedlings are too fragile. So "pre-treatment is harmful" may be seedling age rather than timing.'},

A8:{date:'August', design:'NaCl 0, 75 and 100 mM, CH Bio peptide at 1 in 500. Both the protectant and the NaCl were poured from above, 1 mL each.',
 readout:'Fresh weight, total chlorophyll in mg/L',
 says:'At 75 mM co-treatment helped most; at 100 mM post-treatment was best and came close to the unsalted mock control.',
 cannot:'The two trials disagree on the best timing. Trial 1 says post; trial 2 says co at 75 mM and post at 100 mM. So the best timing moves with dose rather than being one fixed answer.',
 trap:'"Close to the 0 mM control" is a lovely sentence, but it is a single result from one plate of nine.'},

A9:{date:'August', design:'NaCl 75 and 100 mM, CH Bio peptide at 1 in 500.',
 readout:'As above',
 says:'The CH arm is the only design on the site that was run three times.',
 cannot:'The trial 3 numbers on the wiki are incomplete, and the trial numbering disagrees between the table and the figure legend.',
 trap:'The table says trial 1 and trial 3; the legend says trial 2. Settle the numbering with the team before the room.'},

A10:{date:'August', design:'NaCl 0, 75 and 100 mM crossed with ACCD applied not at all, pre, co or post. Three sprays. Supernatant filtered at 0.22 micron.',
 readout:'Fresh weight, chlorophyll, photographs',
 says:'Post-treatment recovered at 75 and 100 mM; co-treatment gave the highest chlorophyll per gram; without salt no treatment differed statistically.',
 cannot:'Nothing at all. The wiki says this set was contaminated throughout and that pre-treatment needs repeating.',
 trap:'This is the n = 40 set. If anyone says "we have n = 40", remember that the n = 40 arms are exactly the ones that were contaminated or never repeated.'},

A11:{date:'September', design:'NaCl 0, 75 and 100 mM against a TB medium control, ACCD pre, co or post. Seed stratified four days, grown at 22 °C for seven, pre-treated on day seven.',
 readout:'Fresh weight, normalised and unnormalised chlorophyll',
 num:'Pre-treatment at 100 mM gave relative chlorophyll near 1.74 mg per g against about 1.03 untreated, so about 70 per cent more. Pre-treatment fresh weight 0.122, 0.164 and 0.225 g at 0, 75 and 100 mM; co-treatment 0.220, 0.144 and 0.114 g.',
 says:'Pre-treated ACCD held more chlorophyll at 100 mM.',
 cannot:'Pre-treatment fresh weight rises with salt, 0.122 to 0.225 g, which is the wrong direction. The wiki itself says the trend needs more trials.',
 trap:'The 100 mM post-treatment plate was excluded for mould, marked ND. So the ranking "pre beats post" is missing one of the things being compared.'},

A12:{date:'October', design:'NaCl 0, 75 and 100 mM against a TB control, BoPep4 applied co or post.',
 readout:'Fresh weight, chlorophyll in mg/L, relative chlorophyll, root length',
 says:'Post-treatment held significantly more normalised chlorophyll at both 75 and 100 mM than its own 0 mM arm, and post at 100 mM had the highest relative total chlorophyll of any salted arm.',
 cannot:'Co-treatment suppressed growth with no salt at all, below the mock control. So the preparation itself costs the plant something.',
 trap:'Say the "it suppresses without salt" part yourself. It is both honest and scientific: something that helps only under stress and harms otherwise makes timing part of the product design.'},

A13:{date:'October', design:'NaCl 0, 75 and 100 mM against a TB control, AtLEA14 applied pre or post. Wild-type sequence.',
 readout:'Fresh weight, normalised chlorophyll in mg per g, unnormalised in mg/L',
 says:'Pre and post both held the most chlorophyll at 75 mM, in the order 75 then 100 then 0 mM.',
 cannot:'The wiki itself calls the differences particularly hard to determine. And the 0 mM post plate was never read, marked ND.',
 trap:'Chlorophyll is higher at 75 mM than at 0 mM, which makes no biological sense: an unstressed plant should not have less. That is a sign that plate-to-plate variation is larger than the treatment effect.'},

H1:{design:'Five days at 37 °C then five days of recovery at 22 °C. Vertical plates, 0.536 mL in three sprays, applied above the root-tip line.',
 readout:'Fresh weight, normalised and unnormalised chlorophyll, root length',
 num:'Heated arms lost about 95 per cent of fresh weight, around 0.02 g. Pre-treatment sat at about 13 per cent of the unstressed arm on unnormalised chlorophyll.',
 says:'Five days at 37 °C is close to lethal for a four-day-old seedling. Fresh weight fell to 0.02 g.',
 cannot:'With 0.02 g as the denominator, normalised chlorophyll returns values the wiki itself calls unreasonable. Read only the unnormalised column in this set.',
 trap:'Three plates were contaminated: unheated co-treatment, heated with no ACCD, and heated co-treatment. Co-treatment lowered survival and yellowed badly, and this is the one place on the site where survival is named explicitly.'},

H2:{design:'As above. Pre-treatment on day 7, co-treatment on day 8 going into five days at 37 °C, post-treatment the day after leaving the incubator.',
 readout:'Fresh weight, normalised chlorophyll',
 num:'Post-treatment held 14 per cent more normalised chlorophyll than the heated control. Order for holding chlorophyll: post, then co, then pre.',
 says:'This is the only agar experiment on the site with two independent trials, and the two put the timings in a different order: trial 1 favoured pre, trial 2 favoured post.',
 cannot:'The 14 per cent uses normalised chlorophyll, and in trial 1 of the same design fresh weight was only 0.02 g. Check that trial 2 fresh weight is off the floor before quoting the percentage.',
 trap:'In trial 2 the unheated control, the pre arm and the post arm were all contaminated, post worst. The two trials disagree, and that is something to say first rather than be asked.'},

H3:{design:'Three days of heat acclimation, post-treatment the day after leaving the heat, three to five days of recovery. 0.536 mL in three sprays.',
 readout:'—',
 says:'Nothing. The wiki gives a method and no result.',
 cannot:'This set does not exist in the results.',
 trap:'The heat protocol list counts one ACC deaminase pretest plus one set of two trials, one LEA14 set and one BoPEP4 set of two trials, but the results page has only ACCD. A judge counting off that list will ask where the other three are. The answer is that they were run and never published, or never finished. Ask the team; do not guess in the room.'},

H4:{set:'(listed, no result)', design:'The protocol list counts one set of two trials.', readout:'—',
 says:'—', cannot:'The results are not on the wiki.',
 trap:'As H3. Confirm before you open your mouth.'},

H5:{set:'(listed, no result)', design:'The protocol list counts one set.', readout:'—',
 says:'—', cannot:'The results are not on the wiki.', trap:'As H3.'},

Y1:{set:'WB800 dilution / pH', design:'Dilutions of undiluted, 1 in 2, 1 in 4, 1 in 8 and 1 in 16, at pH 5.7 against pH 7.1. Eighteen days old, treated five days. WB800 culture fluid carrying no protectant.',
 readout:'Fresh weight, chlorophyll per plant',
 num:'Undiluted and 1 in 2 were severe, yellowed and stunted. 1 in 4, 1 in 8 and 1 in 16 all accumulated anthocyanin visibly. Conclusion: dilute at least sixteenfold.',
 says:'This is the most underrated result the plant team has: what limits the applied dose is not the potency of the protectant but the phytotoxicity of the vehicle. Empty host fluid still shows a stress signal at 1 in 16.',
 cannot:'It cannot tell you whether the cause is the TB components, bacterial metabolites or pH. This set does not separate the three.',
 trap:'This set set a floor at 1 in 16, and then the ACCD salinity run used 1 in 10 and 1 in 20, stronger than our own floor, and bleached the plants. Say that inconsistency yourself.'},

Y2:{set:'CH salt pretest', design:'Thirteen days old, 100 mM NaCl for seven days, peptide at 1 in 500. One box each for pre, co and post, against a salted box with no peptide.',
 readout:'Fresh weight, chlorophyll per plant, relative chlorophyll',
 says:'Co-treatment was best: greenest, largest rosette, highest fresh weight and chlorophyll. 100 mM is not lethal in hydroponics.',
 cannot:'There are no error bars and no n. One box per timing, so treatment and box cannot be separated.',
 trap:'One box per timing means the box effect is completely mixed into the treatment effect. That is confounding, not replication.'},

Y3:{set:'CH heat pretest', design:'Twelve days old, 37 °C for seven days, peptide at 1 in 500.',
 readout:'Fresh weight, chlorophyll per plant, relative chlorophyll',
 says:'Size and colour were indistinguishable, and every treated arm came out below the control on relative chlorophyll.',
 cannot:'Any positive conclusion. The wiki attributes it to handling error.',
 trap:'Attributing a reversed result to handling error without an independent repeat to support the attribution invites the obvious question: how do you know it was handling and not the peptide doing harm? The honest answer is that we do not, and this set needs redoing.'},

Y4:{set:'ACCD against 100 mM', design:'Thirteen days old, 100 mM for five days. ACCD at 1 in 10, 20, 40 and 60 with PLP at 1 in 100. Controls: 1 in 20 WB800, no ACCD, 1 in 20 TB.',
 readout:'Fresh weight, chlorophyll per plant',
 says:'Without salt, 1 in 10 and 1 in 20 bleached, and 1 in 40 came closest to no ACCD. So 1 in 40 became both the highest usable dose and the negative-control strength.',
 cannot:'Any effect of ACCD. The wiki says plainly that the volume of culture fluid added was not standardised, a point Prof. Cheng raised, and that this run cannot determine the effect of ACCD.',
 trap:'This is the cleanest honest sentence on the site, so use it: in this run we did not standardise the volume of culture fluid added, so it can set an upper dose and cannot measure an effect.'},

Y5:{set:'ACCD against 37 \u00b0C', design:'Fifteen days old, or eleven on the Results page, 37 °C for four days. Dilutions 1 in 40, 60, 80 and 100. Controls 0.1 times MS and 1 in 40 WB800.',
 readout:'Fresh weight, chlorophyll per plant',
 says:'1 in 40, 60 and 80 held slightly more chlorophyll than the controls and 1 in 100 held the least. The written conclusion is that ACCD improves heat tolerance at strengths of 1 in 80 or stronger.',
 cannot:'There is no n and no statistics. Slightly higher is slightly higher. And the seedling age disagrees between the two pages, fifteen days against eleven.',
 trap:'"1 in 80 or stronger" is a claim about an interval, but only four points were measured and none repeated. It is a dose trend, not a dose-response curve.'},

Y6:{set:'BoPep4 against 37 \u00b0C', design:'Fifteen days old, 37 °C for four days. Dilutions 1 in 40 through 1 in 100. Controls 1 in 40 WB800 and 0.1 times MS.',
 readout:'Fresh weight, chlorophyll per plant',
 says:'Only 1 in 40 recovered at all, above both controls on chlorophyll. 1 in 60 through 1 in 100 did not differ from the controls.',
 cannot:'1 in 40 is also the strength of the WB800 negative control, so "1 in 40 BoPep4 beats 1 in 40 WB800" is the right comparison, but the effect is described as slight.',
 trap:'The number of heat days disagrees between the figure legend and the text, five against four.'},

Y7:{set:'BoPep4 against 100 mM', design:'Fifteen days old, 100 mM. Dilutions 1 in 40 through 1 in 100. Controls 1 in 40 WB800 and 0.1 times MS.',
 readout:'Fresh weight, chlorophyll per plant — the samples dried between harvest and reading, so only chlorophyll per plant is usable',
 says:'At 100 mM, 1 in 40 BoPep4 stayed green with the highest fresh weight and the highest chlorophyll per plant. The written conclusion is that strengths of 1 in 40 or stronger improve salt tolerance.',
 cannot:'Without salt, every strength from 1 in 40 to 1 in 100 accumulated anthocyanin, which may be growth inhibition. So this behaves like agar Set 10: it helps only under stress.',
 trap:'"The samples dried out" invites a follow-up. It means the relative-chlorophyll column was written off and only chlorophyll per plant remains, so say which column was abandoned and why.'},

S1:{set:'6 Sep method comparison', design:'Two weeks old. A cumulative method, wicking 100 mM from below, against a top-wash method stepping 100 to 200 to 300 mM at 30 to 50 mL per pot with no clear water in between.',
 readout:'Fresh weight, relative chlorophyll',
 num:'Fresh weight about 0.42 g for the cumulative method against 0.15 g for the wash, about 64 per cent lower. Chlorophyll was near 1.0 mg/L for both.',
 says:'100 mM is not enough in soil; the stress only shows at 300 mM. We took the wash method.',
 cannot:'Chlorophyll was the same under both methods, near 1.0, so fresh weight fell 64 per cent while chlorophyll did not move. The two readouts part company right here.',
 trap:'This set is live evidence that fresh weight and chlorophyll measure different things. Use it to answer Kyle’s fourth question.'},

S2:{set:'12 Sep ACCD salt', design:'Two weeks old, washed 100 then 200 then 300 mM, with 300 mM as the reference. TB medium control, ACCD pre, co or post.',
 readout:'Unnormalised and normalised chlorophyll in mg/L',
 num:'Unnormalised chlorophyll in mg/L: control about 1.00, pre 0.67, co 0.30, post 1.13, about 13 per cent above the control.',
 says:'Post-treatment came out slightly above the control and the other two timings came out below it.',
 cannot:'Pre and co falling below the control means they did harm in soil. The wiki says pre and co did not prevent bleaching and that post had limited effect. Normalised, though, co is the highest: the two ways of computing rank the timings in opposite orders.',
 trap:'One dataset, and unnormalised says post is best at 1.13 while normalised says co is best. That is the heart of Kyle’s sixteenth question. Pick one, say why, then show both.'},

S3:{set:'22 Sep ACCD heat t1+t2', n:'1 pot', design:'Ten days old, 37 °C for five days, then five days of recovery at 22 to 25 °C. Two trials, one pot per condition per trial.',
 readout:'Fresh weight, normalised and unnormalised chlorophyll',
 num:'Fresh weight in g: unstressed control about 0.12; heated control 0.195 in trial 1 and 0.225 in trial 2; co-treatment 0.228 and 0.166; post-treatment lowest at 0.103 and 0.052. Normalised chlorophyll index: unstressed about 1.0; trial 1 pre 1.00, heated control 0.55, co 0.48; trial 2 pre 0.77, co 0.69, heated control 0.46.',
 says:'Pre-treatment held the most chlorophyll in both trials, 1.00 and 0.77. That is the one point on which the two trials agree.',
 cannot:'One pot per condition, so each bar is a single measurement and not a mean. The wiki says so itself. No estimate of variation means no statistics.',
 trap:'The heated controls weigh more, 0.195 and 0.225 g, than the unstressed control at 0.12 g. A heated plant should not outweigh an unheated one. This is the most glaring contradiction on the site, most likely a difference in seedling age or pot between batches. A judge will point at it, so be ready to say the two arms are not the same batch and cannot be compared directly.'},

S4:{set:'Soil heat (Results page)', design:'Five days at 37 °C plus five days of recovery at 22 to 25 °C. Planned endpoints: survival, vegetative growth, chlorophyll retention, anthocyanin accumulation.',
 readout:'—',
 says:'Survival is in the plan, and this is the one place on the site where survival is written as an endpoint.',
 cannot:'The Results page has no data at all for soil heat.',
 trap:'The Plants page carries 9/22 soil heat numbers; the Results page has no result for the same experiment. The two pages disagree, so say which page you are quoting.'}
};

window.MX_EN_VERDICT = {
  strong:    'Quantified, effect far larger than the noise, intervals that do not overlap. One row on the whole site.',
  direction: 'Quantified, but n_bio = 1. We saw it; we did not prove it.',
  qual:      'Photographs, or no error bars. Observation only.',
  failed:    'Contamination, a floor effect, or a design that cannot separate the arms. The wiki admits it.',
  planned:   'A protocol exists and the results are not on the wiki. Never claim it.'
};

window.MX_EN_AGENT = {
  treh:    'An off-the-shelf reference compound, not ours.',
  ch:      'A CH Bio product; the formulation is undisclosed.',
  accd:    'The enzyme our bacteria make. The most-tested of the five.',
  bopep:   'The broccoli elicitor peptide our bacteria make.',
  lea:     'Wild-type sequence, made by our bacteria.',
  vehicle: 'WB800 culture fluid or TB medium, carrying no protectant.'
};

window.MX_EN_STRESS = { salt: 'Salt', heat: 'Heat', none: 'Vehicle only' };
