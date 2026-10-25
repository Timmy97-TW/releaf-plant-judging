/* The reading list behind the deep-dive answers.
 * Every entry is a real paper, cited so a judge can follow it. Where a PubMed
 * identifier is given the link resolves; where it is not, the citation is
 * complete enough to find.
 *
 * Rule for using these in the room: cite a paper for a MECHANISM or a METHOD,
 * never for a result of ours. A citation supports "this is how it could work"
 * or "this is the standard way to measure it". It can never upgrade our own n.
 */
window.LIT = {

/* ── the cell wall and the surfaces ── */
carpita79:{a:'Carpita, Sabularse, Montezinos & Delmer',y:1979,
  t:'Determination of the pore size of cell walls of living plant cells',
  j:'Science 205:1144–1147',pmid:'17735052',
  use:'The primary measurement of wall porosity: free passage limited to 3.5–3.8 nm in root hairs and cotton fibres, 4.5–5.2 nm in leaf palisade cells. This is the number that decides whether a 41 kDa enzyme can enter.'},
titel97:{a:'Titel, Ehwald, Wagner et al.',y:1997,
  t:'Dynamics of limiting cell wall porosity in plant suspension cultures',
  j:'Planta 203:320–326',
  use:'Porosity is not a constant: mean size limit 1.75–3.8 nm depending on species and growth phase, and it falls as cultures leave the growth phase. Use this when asked whether the wall limit is fixed.'},
eichert08a:{a:'Eichert, Kurtz, Steiner & Goldbach',y:2008,
  t:'Size exclusion limits and lateral heterogeneity of the stomatal foliar uptake pathway for aqueous solutes and water-suspended nanoparticles',
  j:'Physiologia Plantarum 134:151–160',pmid:'18494856',
  use:'43 nm particles entered leaves through stomatal pores; 1.1 µm particles never did. The stomatal route has a size limit above 10 nm but is sparse and unpredictable — the right citation for "could a sprayed protein get in at all?".'},
eichert08b:{a:'Eichert & Goldbach',y:2008,
  t:'Equivalent pore radii of hydrophilic foliar uptake routes in stomatous and astomatous leaf surfaces',
  j:'Physiologia Plantarum 132:1–10',
  use:'Cuticular route pore radii below 0.5 nm for the sucrose-excluding pathway, 2.0–2.4 nm on astomatous surfaces. The cuticle excludes proteins by two orders of magnitude; only the stomatal route is even arguable.'},
zhang24:{a:'Zhang, Y. et al.',y:2024,
  t:'Polymeric nanocarriers autonomously cross the plant cell wall and enable protein delivery for stress sensing',
  j:'Advanced Materials 36:2308252',
  use:'Engineered carriers below a ~14 nm cutoff crossed the wall and delivered a protein cargo. Cite it for the honest version: getting a protein into a plant cell is a solved problem only when you build a carrier for it, which we have not.'},

/* ── ACC, ethylene and the enzyme ── */
gamalero23:{a:'Gamalero, Lingua & Glick',y:2023,
  t:'Ethylene, ACC, and the plant growth-promoting enzyme ACC deaminase',
  j:'Biology 12:1043',pmid:'37626930',
  use:'The current model of how ACC deaminase lowers plant ethylene, including the IAA loop, and the evidence that ACC is itself a signal independent of ethylene. The single best reference for Q4.'},
moon22:{a:'Moon & Ali',y:2022,
  t:'Possible mechanisms for the equilibrium of ACC and role of ACC deaminase-producing bacteria',
  j:'Applied Microbiology and Biotechnology 106:877–887',pmid:'35061091',
  use:'The paper that states the problem Kyle is really pointing at: the enzyme sits in the bacterial cytoplasm and periplasm while ACC is outside, and how ACC gets to the enzyme is not settled. Read before claiming the canonical model works for a free enzyme.'},
shahid23:{a:'Shahid, Singh, Khan et al.',y:2023,
  t:'Bacterial ACC deaminase: insights into enzymology, biochemistry, genetics, and potential role in amelioration of environmental stress in crop plants',
  j:'Frontiers in Microbiology 14:1132770',pmid:'37180266',
  use:'Enzymology and the stress range covered by ACC deaminase bacteria. Use for the claim that the activity is established and the delivery route is what is new.'},
shin15:{a:'Shin, Lee, Lee et al.',y:2015,
  t:'Genetic identification of ACC-RESISTANT2 reveals involvement of LYSINE HISTIDINE TRANSPORTER1 in the uptake of ACC in Arabidopsis thaliana',
  j:'Plant and Cell Physiology 56:572–582',pmid:'25520403',
  use:'ACC is moved across the plasma membrane by an amino acid transporter, so an apoplastic ACC pool exists and is accessible. This is the mechanistic foundation for an enzyme that never enters a cell.'},

/* ── biostimulants, peptides and the nitrogen confound ── */
malecange23:{a:'Malécange, Sergheraert, Teulat et al.',y:2023,
  t:'Biostimulant properties of protein hydrolysates: recent advances and future challenges',
  j:'International Journal of Molecular Sciences 24:9714',pmid:'37298664',
  use:'The review that names osmotic adjustment, antioxidant induction and hormone-like activity as the candidate modes of action, and says plainly that mechanism knowledge is piecemeal. The honest frame for the CH peptide.'},
colla17:{a:'Colla, Hoagland, Ruzzi et al.',y:2017,
  t:'Biostimulant action of protein hydrolysates: unravelling their effects on plant physiology and microbiome',
  j:'Frontiers in Plant Science 8:2202',pmid:'29312427',
  use:'Separates the direct plant effects from the indirect nutritional and microbiome effects. This is the reference that makes the nitrogen control compulsory, not optional.'},
ashraf18:{a:'Ashraf, Shahzad, Imtiaz & Rizwan',y:2018,
  t:'Nitrogen nutrition and adaptation of glycophytes to saline environment: a review',
  j:'Archives of Agronomy and Soil Science 64:1181–1206',
  use:'Nitrogen form and supply change salinity tolerance on their own, through proline, glycine betaine and nitrate signalling. The confound is documented, not hypothetical.'},
alfosea20:{a:'Alfosea-Simón, Simón-Grao, Zavala-Gonzalez et al.',y:2020,
  t:'Effect of foliar application of amino acids on the salinity tolerance of tomato plants cultivated under hydroponic system',
  j:'Scientia Horticulturae 272:109509',
  use:'Free amino acids alone reversed part of a 50 mM NaCl effect, and did it without changing leaf Na or Cl. A nitrogen-matched arm is therefore not a formality: amino acids are an active comparator.'},

/* ── LEA, dehydrins and why one molecule covers three stresses ── */
hand11:{a:'Hand, Menze, Toner, Boswell & Moore',y:2011,
  t:'LEA proteins during water stress: not just for plants anymore',
  j:'Annual Review of Physiology 73:115–134',
  use:'LEA proteins stabilise proteins and membranes during drying, and do it better in the presence of sugars such as trehalose. The mechanistic basis for LEA14 and for the convergence argument.'},
sun21:{a:'Sun, Li, Zhang et al.',y:2021,
  t:'Plant dehydrins: expression, regulatory networks, and protective roles in plants challenged by abiotic stress',
  j:'International Journal of Molecular Sciences 22:12619',pmid:'34884426',
  use:'Low temperature, drought and high salinity all induce the same dehydrin family. Use it to say the convergence of three stresses on one protectant is expected, not lucky.'},
murray22:{a:'Murray & Graether',y:2022,
  t:'Physiological, structural, and functional insights into the cryoprotection of membranes by the dehydrins',
  j:'Frontiers in Plant Science 13:886525',
  use:'The K-segment binds membranes and lowers the transition temperature. The specific, checkable mechanism to offer when asked how a disordered peptide could protect anything.'},

/* ── glutathione and redox ── */
hasanuzzaman17:{a:'Hasanuzzaman, Nahar, Anee & Fujita',y:2017,
  t:'Glutathione in plants: biosynthesis and physiological role in environmental stress tolerance',
  j:'Physiology and Molecular Biology of Plants 23:249–268',pmid:'28461715',
  use:'The standard account of what glutathione does under abiotic stress, including the glyoxalase route. Background for Q5.'},
noctor24:{a:'Noctor, Cohen, Trémulot et al.',y:2024,
  t:'Glutathione: a key modulator of plant defence and metabolism through multiple mechanisms',
  j:'Journal of Experimental Botany 75:4549–4572',
  use:'Glutathione is an interface between signalling and metabolism, not only an antioxidant. Cite when distinguishing "substitutes for an antioxidant" from "changes a signal".'},
zhou17:{a:'Zhou, Diao, Wang et al.',y:2017,
  t:'Exogenous glutathione alleviates salt-induced oxidative stress in tomato seedlings by regulating glutathione metabolism, redox status, and the antioxidant system',
  j:'Scientia Horticulturae 220:90–101',
  use:'Applied glutathione raised the GSH/GSSG ratio and the activity of the cycle enzymes under 100 mM NaCl. This is the published template for the experiment we have not run.'},

/* ── growth, defence and the cost of tolerance ── */
monson21:{a:'Monson, Trowbridge, Lindroth & Lerdau',y:2022,
  t:'Coordinated resource allocation to plant growth–defence trade-offs',
  j:'New Phytologist 233:1051–1066',
  use:'The modern statement of the trade-off, including why a trade-off can be buffered instead of strict. Use it to avoid both "there is always a cost" and "there is no cost".'},
he22:{a:'He, Webster & He',y:2022,
  t:'Growth–defense trade-offs in plants',
  j:'Current Biology 32:R634–R639',
  use:'A short primer: the trade-off is often an active reallocation, not a shortage. The clean source for the distinction between paying for synthesis and paying for signalling.'},

/* ── persistence in the environment ── */
zeng18:{a:'Zeng, Zhang, Li et al.',y:2018,
  t:'Effects of temperature, water content, pH and soil sterilization on the degradation of CP4-EPSPS protein released from herbicide-tolerant corn leaves in the soil',
  j:'Soil Biology and Biochemistry 125:1–10',
  use:'A plant-expressed protein in real soil: DT50 0.92–11.3 days, DT90 3.1–36.6 days, faster when warm and when the soil is not sterile. The nearest published anchor for our missing half-life, and it brackets our pre-treatment window.'},
li17:{a:'Li, Nelson, Trösch et al.',y:2017,
  t:'Protein degradation rate in Arabidopsis thaliana leaf growth and development',
  j:'Plant Cell 29:207–228',
  use:'In-plant protein half-lives run from hours to months and are set by complex membership and domain, not by size. Use it to refuse the assumption that one half-life covers all three of our protectants.'},

/* ── salinity physiology ── */
munns08:{a:'Munns & Tester',y:2008,
  t:'Mechanisms of salinity tolerance',
  j:'Annual Review of Plant Biology 59:651–681',pmid:'18444910',
  use:'The two-phase model: a fast osmotic phase that stops young leaf and root growth, and a slow ionic phase that senesces mature leaves. This is what tells you that our day-6 root reading and our day-12 chlorophyll reading are measuring different phases.'},
agathokleous20:{a:'Agathokleous, Feng, Peñuelas',y:2020,
  t:'Chlorophyll hormesis: are chlorophylls major components of stress biology in higher plants?',
  j:'Science of the Total Environment 726:138637',pmid:'32330746',
  use:'Across 177 dose responses, low-level stress RAISES chlorophyll and high-level stress lowers it. Read before interpreting any treated arm that beats its own unstressed control.'},

/* ── inference and design ── */
hurlbert84:{a:'Hurlbert',y:1984,
  t:'Pseudoreplication and the design of ecological field experiments',
  j:'Ecological Monographs 54:187–211',
  use:'The paper that defines the error we have to declare: using inferential statistics where treatments are not replicated, though samples are. Nine seedlings on one plate is the textbook case.'},
lazic18:{a:'Lazic, Clarke-Williams & Munafò',y:2018,
  t:'What exactly is "N" in cell culture and animal experiments?',
  j:'PLoS Biology 16:e2005282',pmid:'29617358',
  use:'Separates the biological unit, the experimental unit and the observational unit, and shows that pseudoreplication inflates the apparent evidence. The vocabulary to use when a judge asks what our n is.'},
nakagawa07:{a:'Nakagawa & Cuthill',y:2007,
  t:'Effect size, confidence interval and statistical significance: a practical guide for biologists',
  j:'Biological Reviews 82:591–605',pmid:'17944619',
  use:'Report the magnitude and its precision, not a verdict. Every number we quote in the room should come with an interval or an explicit statement that no interval exists.'},
halsey25:{a:'Halsey',y:2025,
  t:'Saying "no" with confidence: statistical approaches to test for the absence of an effect',
  j:'Biology Letters 21:20240621',pmid:'41151754',
  use:'How to make a negative claim properly: equivalence tests and intervals, not a non-significant p. This is what turns "trehalose did nothing" from a shrug into a result.'}
};
