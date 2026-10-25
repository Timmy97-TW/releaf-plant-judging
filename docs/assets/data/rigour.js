/* The boundary standard.
 *
 * Students and advisors both said the same thing about the first answer key:
 * the boundaries were vague. "One plate per condition, so the n is one" is a
 * confession, not a boundary. A boundary says what the measurement does
 * support, over what range, and what else could have produced the number.
 *
 * This file is the standard the Results answers are written to. Hand-written.
 */

window.RIG_LADDER = [
{
  n:'1', t_en:'Observation', t_zh:'觀察',
  d_en:'Something was seen and recorded. No comparison is involved yet. An observation needs a date, a condition and an instrument, and nothing more.',
  d_zh:'看到並記錄下來。還沒有任何比較。一則觀察只需要日期、條件與儀器，不需要別的。',
  ours_en:'At 100 mM on 12 September, the co-treatment and after-treatment plates were dense and green beside a sparse untreated plate.',
  ours_zh:'9月12日，100 mM下共同處理與後處理的皿茂密翠綠，旁邊未處理的皿很稀疏。',
  cost_en:'Costs nothing to assert. Also licenses nothing. A judge who hears only this will ask for the next rung.',
  cost_zh:'講出來不花成本，也換不到任何結論。評審聽到這一層，會直接問下一層。'
},
{
  n:'2', t_en:'Effect estimate', t_zh:'效應估計',
  d_en:'A difference between two groups, with a number on it and a number on how well that number is known. Without the second number it is not an estimate, it is a pair of means.',
  d_zh:'兩組之間的差，附上差值，以及「這個差值有多確定」的數字。少了第二個數字，那不是估計，只是兩個平均值。',
  ours_en:'5 mM trehalose at 100 mM NaCl: +3.71 mm, 95% CI −1.18 to +8.60 mm, Hedges g 0.73, treating the nine seedlings as independent.',
  ours_zh:'100 mM鹽下加5 mM海藻糖：+3.71 mm，95%信賴區間 −1.18 到 +8.60 mm，Hedges g 0.73，前提是把九株當成獨立。',
  cost_en:'Costs an interval. The interval is what makes an unimpressive number honest and an impressive number checkable.',
  cost_zh:'代價是要給出區間。區間讓難看的數字變誠實，也讓好看的數字變成可查核的。'
},
{
  n:'3', t_en:'Warranted claim', t_zh:'可宣稱的結論',
  d_en:'The effect estimate plus the unit of inference. The question is not how many plants were measured. The question is how many independent things received the treatment.',
  d_zh:'效應估計加上「推論單位」。問題不是量了幾株植物，而是有幾個獨立的東西接受了處理。',
  ours_en:'The nine seedlings share one plate, so the plate is the experimental unit and there is one of it. No rescue claim is warranted from set 6 in either direction.',
  ours_zh:'九株共用一皿，所以實驗單位是「皿」，而皿只有一個。第6組不論哪個方向，都不足以支撐救援結論。',
  cost_en:'Costs most of what we would like to say. This is the rung where our plant data stops.',
  cost_zh:'代價是放棄大部分我們想講的話。我們的植物資料就停在這一層。'
},
{
  n:'4', t_en:'Scope', t_zh:'適用範圍',
  d_en:'The conditions the claim is attached to, said as a list and not as a hedge. Species, platform, dose, duration, readout, age. A claim with no scope is a claim about everything, which is why it is read as an overclaim.',
  d_zh:'結論附帶的條件，要用清單講，不要用「可能」帶過。物種、平台、劑量、時長、讀值、苗齡。沒有範圍的結論等於在講全世界，所以才會被當成誇大。',
  ours_en:'The salt ladder is warranted for Arabidopsis, on half-strength MS agar with 1 per cent sucrose, at day 6, on primary root length, between 0 and 150 mM NaCl.',
  ours_zh:'鹽度梯度的適用範圍：阿拉伯芥、½ MS洋菜含1%蔗糖、第6天、主根長、0到150 mM NaCl之間。',
  cost_en:'Costs one sentence and buys the right to state the claim without a disclaimer attached to every word.',
  cost_zh:'代價是一句話，換來的是可以直接講結論，不必每個字都加免責。'
},
{
  n:'5', t_en:'Generalisation', t_zh:'外推',
  d_en:'A claim carried outside its scope. It needs a stated reason for the carry and a stated mechanism of transfer. We do this once in the whole project, and we say so.',
  d_zh:'把結論帶出適用範圍。這需要兩件事：帶出去的理由，以及轉移的機制。整個專案我們只做一次，而且會講明。',
  ours_en:'The injury calibration is carried into the model, because the model consumes a fractional loss and not a millimetre. Nothing about a protectant is carried anywhere.',
  ours_zh:'我們把傷害校正帶進模型，因為模型吃的是「損失比例」不是毫米。關於保護劑的結論，一個字都沒有帶出去。',
  cost_en:'Costs the most and is challenged the hardest. Climb it only when a judge asks, and climb it out loud.',
  cost_zh:'代價最大、最容易被挑戰。只有評審問才上這一層，而且要把理由講出來。'
}
];

window.RIG_TESTS = [
{
  k_en:'What received the treatment?', k_zh:'處理是加在什麼上面？',
  d_en:'Name the experimental unit and count it. Seedlings on a shared plate are observational units; the plate is the experimental unit. Three readings of one extract are technical replicates; they measure the pipette. Give both numbers in the same breath: "nine measured seedlings on one plate".',
  d_zh:'說出實驗單位並數出數量。同一皿上的苗是「觀察單位」，皿才是「實驗單位」。同一份萃取液讀三次是「技術重複」，量的是移液管。兩個數字一起講：「一皿上量了九株」。',
  src:'lazic18 · hurlbert84'
},
{
  k_en:'How big, and how well known?', k_zh:'多大？多確定？',
  d_en:'An effect with no interval is a rumour with a decimal point. Where an interval cannot be computed — one plate, one box, one blot — say that no interval exists. That is a stronger statement than a wide interval, and it is the true one.',
  d_zh:'沒有區間的效應，只是帶小數點的傳聞。如果區間算不出來——一皿、一箱、一張墨點——就說「沒有區間」。這比「區間很寬」更強，而且是真的。',
  src:'nakagawa07 · halsey25'
},
{
  k_en:'What else makes this number?', k_zh:'還有什麼會做出這個數字？',
  d_en:'List the competing explanations before the judge does, and say which control separates each one. For a crude preparation: the host strain, the medium, the nitrogen, the ionic load. For a ratio: the denominator. For a plate: its position in the incubator.',
  d_zh:'在評審開口前先列出競爭解釋，並說哪個對照能分開它們。粗製品要考慮：宿主菌株、培養基、氮、離子負荷。比值要考慮分母。單一培養皿要考慮它在培養箱裡的位置。',
  src:'colla17 · ashraf18'
},
{
  k_en:'Could this design have seen it?', k_zh:'這個設計看得見嗎？',
  d_en:'Work out the smallest difference the design could resolve and compare it with the difference observed. A null from a design that could not have detected the effect is not evidence of no effect. Saying this converts a failure into a design statement.',
  d_zh:'算出這個設計能分辨的最小差異，再和實際觀察到的差異比較。一個本來就看不到效應的設計，得到的「沒差異」不是「沒有效應」的證據。把這點講出來，失敗就變成設計層面的陳述。',
  src:'halsey25'
}
];

window.RIG_TERMS = [
{t_en:'Experimental unit',t_zh:'實驗單位',
 d_en:'The smallest thing that independently received a treatment. Our agar plate, our hydroponic box, our soil tray.',
 d_zh:'獨立接受處理的最小單位。我們的洋菜皿、水耕箱、土耕盤。'},
{t_en:'Observational unit',t_zh:'觀察單位',
 d_en:'The thing measured. Our seedling, our root, our extract. Counting these as n is the error.',
 d_zh:'被量測的東西。我們的苗、根、萃取液。把這些當成n就是錯誤所在。'},
{t_en:'Technical replicate',t_zh:'技術重複',
 d_en:'The same sample measured again. It estimates instrument and handling noise and nothing biological. Our three plate-reader reads.',
 d_zh:'同一個樣本再量一次。估計的是儀器與操作誤差，和生物無關。例如我們的三次讀盤。'},
{t_en:'Biological replicate',t_zh:'生物重複',
 d_en:'An independently treated unit measured once. We have one per condition in almost every plant experiment.',
 d_zh:'獨立處理過的單位各量一次。我們幾乎每個植物實驗的每個條件都只有一個。'},
{t_en:'Pseudoreplication',t_zh:'偽重複',
 d_en:'Running a test using observational units as if they were experimental units. It shrinks the interval and inflates the apparent evidence.',
 d_zh:'把觀察單位當成實驗單位去做統計檢定。區間會縮小，看起來的證據強度會被誇大。'},
{t_en:'Minimum detectable effect',t_zh:'最小可檢出效應',
 d_en:'The smallest difference the design would resolve at the usual power. Below it, a null means the design was too small, not that the effect was absent.',
 d_zh:'在常用檢定力下，這個設計能分辨的最小差異。小於它的「沒差異」，代表設計太小，不代表沒有效應。'},
{t_en:'Floor effect',t_zh:'地板效應',
 d_en:'The readout has run out of range, so a protectant has nothing to improve. Our 150 mM roots sit at 1.36 mm with a spread of 1.09.',
 d_zh:'讀值已經到底，保護劑沒有東西可以改善。我們150 mM的根是1.36 mm、標準差1.09。'},
{t_en:'Ratio denominator',t_zh:'比值的分母',
 d_en:'Dividing by a quantity the treatment also changed. The ratio then reports both, and the smaller denominator wins. Chlorophyll per gram of fresh weight is ours.',
 d_zh:'拿一個「也被處理改變」的量去除。比值同時反映兩者，分母小的那組會勝出。我們的例子是「每克鮮重的葉綠素」。'},
{t_en:'Internal control',t_zh:'內部對照',
 d_en:'The control on the same plate as its treatment. When it fails, the plate loses its reference and every arm on it loses its comparison, not only the arm that failed.',
 d_zh:'和處理在同一皿上的對照。一旦失效，整皿失去參照點，皿上每一組都失去比較基準，不只是失效那一組。'},
{t_en:'Limit of quantification',t_zh:'定量極限',
 d_en:'The lowest value the assay reports as a number instead of as a direction. Below it, report "below the limit", never the figure the instrument printed.',
 d_zh:'檢定能給出「數值」而非只給「方向」的最低值。低於它就寫「低於定量極限」，不要寫儀器印出來的數字。'},
{t_en:'Internal validity',t_zh:'內部效度',
 d_en:'Whether the difference inside this experiment was caused by the treatment. Controls buy this.',
 d_zh:'這個實驗內部的差異，是不是處理造成的。對照組買的是這個。'},
{t_en:'External validity',t_zh:'外部效度',
 d_en:'Whether it still holds outside this experiment. Scope statements buy this, and only partly.',
 d_zh:'在這個實驗之外還成不成立。範圍陳述買的是這個，而且只買到一部分。'}
];

window.RIG_SAY = [
{no_en:'One plate per condition, so the n is one.',
 no_zh:'每個條件一皿，所以n等於一。',
 yes_en:'Nine measured seedlings on one plate, so the plate is the unit and there is one of it. The spread I can quote is between seedlings, and it understates the uncertainty between plates, which we did not measure.',
 yes_zh:'一皿上量了九株，所以單位是皿，而皿只有一個。我能講的標準差是株與株之間的，它低估了皿與皿之間的不確定性，而那個我們沒有量。',
 why_en:'The first sentence apologises. The second names the unit, says which variance it is quoting, and says which variance is missing.',
 why_zh:'第一句在道歉。第二句說出單位、說出引用的是哪個變異、也說出缺的是哪個變異。'},
{no_en:'Trehalose did not work.',
 no_zh:'海藻糖沒有效。',
 yes_en:'Across six sets we did not resolve a rescue. At 100 mM the estimate is +3.71 mm with a 95% interval from −1.18 to +8.60, and the smallest difference this design could have resolved is 6.43 mm. So we cannot separate it from zero, and we also cannot rule out an effect of about 5 mm.',
 yes_zh:'六組下來我們分辨不出救援效果。100 mM時估計是+3.71 mm，95%區間 −1.18 到 +8.60，而這個設計能分辨的最小差異是6.43 mm。所以我們既分不出它和零的差別，也排除不掉約5 mm的效應。',
 why_en:'A negative claim needs the same machinery as a positive one. Without the detectable-effect number, "did not work" is a guess about our own assay.',
 why_zh:'否定的結論和肯定的結論需要同一套工具。沒有「最小可檢出效應」這個數字，「沒有效」只是對自家檢定的猜測。'},
{no_en:'The peptide gave a three and a half fold increase in chlorophyll.',
 no_zh:'胜肽讓葉綠素增加了3.5倍。',
 yes_en:'Against the salted control it reads 3.48 and 3.72 times. Against the unsalted control on the same plate it reads 0.80 and 0.86 times. The second pair is the one that describes the plant: chlorophyll was held near, and below, the unstressed level.',
 yes_zh:'對加鹽對照是3.48與3.72倍；對同一皿的無鹽對照是0.80與0.86倍。第二組數字才是在描述植物：葉綠素被維持在接近無逆境的水準，但仍略低。',
 why_en:'Both ratios are arithmetically correct. The denominator decides which story the same data tells, so name the denominator every time.',
 why_zh:'兩個比值算術上都對。分母決定同一份資料講出哪個故事，所以每次都要說出分母。'},
{no_en:'Normalised to fresh weight, co-treatment was the worst arm.',
 no_zh:'以鮮重標準化，共同處理是最差的一組。',
 yes_en:'Per gram of fresh weight the untreated box ranks first and co-treatment last; per plant the order reverses. The two columns differ by the mass, and dividing the two recovers about 8.6 milligrams per plant untreated against 20.3 for co-treatment. The denominator is itself the outcome, and with one box per arm there is no interval on either column.',
 yes_zh:'以每克鮮重算，未處理第一、共同處理最後；以每株算，順序反過來。兩欄的差別就是質量，把兩欄相除可還原出未處理約每株8.6毫克、共同處理20.3毫克。分母本身就是結果，而且每組一箱，兩欄都算不出區間。',
 why_en:'The flip is not a puzzle once the mass is on the table. Put the mass on the table.',
 why_zh:'只要把質量攤出來，翻轉就不是謎。那就把質量攤出來。'},
{no_en:'We have no activity data.',
 no_zh:'我們沒有活性資料。',
 yes_en:'No batch that was applied to a plant has an activity number behind it. Measurement and Biomanufacturing do report a permeate specific activity, from a different sample, and the one DNPH estimate we have sat below the assay limit of quantification and was not repeated.',
 yes_zh:'施用到植物上的批次，沒有任何一批有活性數值。Measurement與Biomanufacturing確實有報告透過液的比活性，但那是另一個樣本；我們唯一的DNPH估計低於定量極限，而且沒有重複。',
 why_en:'A flat denial is contradicted by our own other pages within a minute. Scope the denial to the sample that matters.',
 why_zh:'一句全盤否認，一分鐘內就會被我們自己其他頁面打臉。把否認限定在真正相關的樣本上。'},
{no_en:'It should transfer to crops.',
 no_zh:'應該可以轉移到作物。',
 yes_en:'It has not been tested on a crop, and I can name what would change: soil delivery, a cuticle instead of an agar surface, a different root architecture, and a salinity measured in decisiemens per metre and not millimolar.',
 yes_zh:'沒有在作物上測過，而且我可以說出哪些會變：土壤的輸送方式、角質層取代洋菜表面、不同的根系結構，以及用dS/m而不是mM表示的鹽度。',
 why_en:'"Should" is a prediction with no mechanism. Listing the four things that differ is a mechanism, and it ends the question.',
 why_zh:'「應該」是沒有機制的預測。列出四個會改變的地方就是機制，而且能結束這個問題。'},
{no_en:'The difference was significant.',
 no_zh:'這個差異是顯著的。',
 yes_en:'Nominally, at the seedling level. Four contrasts were run on that set, the seedlings share a plate, and the one contrast that reaches the usual threshold is +1.17 mm on roots whose mean is 1.36 mm. I would not call it significant; I would call it inside the floor of the assay.',
 yes_zh:'在「把苗當單位」的層次上名目顯著。但那一組做了四個比較、苗共用一皿，而唯一達到慣用門檻的是在平均1.36 mm的根上多1.17 mm。我不會說它顯著，我會說它落在檢定的地板裡。',
 why_en:'The word invites a test we did not earn. Report the estimate, the number of comparisons and the unit, and let the judge draw the word.',
 why_zh:'這個詞會引來我們沒資格做的檢定。報出估計值、比較次數與單位，讓評審自己去下那個詞。'},
{no_en:'We would need more replicates and better controls.',
 no_zh:'我們需要更多重複和更好的對照。',
 yes_en:'One experiment: 100 mM NaCl, three independently poured plates per condition, positions randomised, extraction blind to the arm label, and four arms — buffer, host strain without the gene, heat-denatured preparation, and the live preparation with an activity number on it.',
 yes_zh:'一個實驗：100 mM NaCl，每個條件三個獨立倒的皿，位置隨機，萃取時不知道組別，四組——緩衝液、不帶基因的宿主菌株、熱變性製備、以及有活性數值的活性製備。',
 why_en:'The vague version tells a judge you have not designed it. Numbers, counts and a randomisation rule tell them you have.',
 why_zh:'含糊的版本等於告訴評審你沒設計過。給出數字、數量與隨機化規則，才代表你設計過。'}
];

window.RIG_WORKED = [
{
  id:'W1', t_en:'Two ratios for one fall', t_zh:'同一個下降，兩個倍數',
  q_en:'Our own pages say the root length fall from 0 to 150 mM is 42.7-fold in one place and about 55-fold in another.',
  q_zh:'我們自己的頁面，一邊寫0到150 mM的根長下降是42.7倍，一邊寫約55倍。',
  rows:[
    ['The two means','74.95 mm and 1.36 mm, nine seedlings each'],
    ['The direct ratio','74.95 / 1.36 = 55.1'],
    ['Sum of the nine 150 mM roots','1.36 × 9 = 12.24 mm'],
    ['Drop the two unmeasurable seedlings','12.24 / 7 = 1.749 mm'],
    ['Recompute','74.95 / 1.749 = 42.9, and the figure legend says 42.7'],
    ['95% interval on the ratio','32.6 to 93.1 fold, by the delta method on the log scale'],
    ['Coefficient of variation of the denominator','80 per cent']
  ],
  read_en:'The two numbers are not a contradiction. They are the same data with nine and with seven seedlings in the denominator, and the arithmetic closes to within rounding. The real fault is that we quoted a ratio at all: its denominator carries an 80 per cent coefficient of variation, so the fold change is known only to within a factor of three.',
  read_zh:'這兩個數字不是矛盾。它們是同一筆資料，分母分別用九株和七株，算術上只差到四捨五入。真正的錯是我們根本不該引用倍數：分母的變異係數是80%，所以這個倍數只能確定到三倍的範圍內。',
  do_en:'Quote the two means. The ratio is derived, unstable, and adds nothing the means do not already say.',
  do_zh:'引用兩個平均值。倍數是衍生的、不穩定的，而且沒有講出平均值沒講的東西。'
},
{
  id:'W2', t_en:'The 3.5-fold that is also 0.8-fold', t_zh:'3.5倍同時也是0.8倍',
  q_en:'Trial 4, 5 September: the salted control reads 0.0690 and the co- and after-treatment arms at 100 mM read 0.2398 and 0.2564.',
  q_zh:'9月5日試驗4：加鹽對照0.0690，100 mM的共同處理與後處理是0.2398與0.2564。',
  rows:[
    ['Against the salted control','0.2398 / 0.0690 = 3.48 and 0.2564 / 0.0690 = 3.72'],
    ['Against the unsalted control','0.2398 / 0.2986 = 0.80 and 0.2564 / 0.2986 = 0.86'],
    ['The control ladder on the same plate','0.2986, 0.2479, 0.0690 at 0, 75 and 100 mM — it behaves'],
    ['The 100 mM control as a fraction of unsalted','0.0690 / 0.2986 = 0.23'],
    ['The arm that broke','co-treatment no-salt control 0.0318, which is 0.11 of the main no-salt control and 0.46 of the 100 mM control'],
    ['Replication','one plate per arm; the three reads per arm are technical']
  ],
  read_en:'The same two numbers are a 3.5-fold rise or a 20 per cent shortfall, depending on which control sits in the denominator. The honest reading is the second: chlorophyll under treatment came back to roughly four fifths of the unstressed plate. And one arm on that plate has a no-salt control below every salted arm, which removes the reference the whole plate depends on.',
  read_zh:'同樣兩個數字，可以是3.5倍上升，也可以是比無逆境低兩成，取決於分母放哪個對照。誠實的讀法是後者：處理後的葉綠素回到無逆境皿的大約五分之四。而且那一皿上有一組的無鹽對照低於所有加鹽組，整皿賴以比較的參照點就沒了。',
  do_en:'Give both ratios in one sentence, then give the broken control in the next. Never give the first ratio alone.',
  do_zh:'一句話裡兩個比值都給，下一句馬上給失效的對照。絕對不要只給第一個比值。'
},
{
  id:'W3', t_en:'The normalisation that reverses a ranking', t_zh:'讓排序反過來的標準化',
  q_en:'Hydroponic salinity set 1: per gram of fresh weight the untreated control ranks first and co-treatment last; per plant the order reverses.',
  q_zh:'水耕鹽逆境第1組：以每克鮮重算，未處理對照第一、共同處理最後；以每株算，順序反過來。',
  rows:[
    ['Per gram of fresh weight','0.0828 first down to 0.0617 last, a 1.34-fold span'],
    ['Per plant','1.251 first down to 0.369 last, a 3.39-fold span'],
    ['Untreated control, the two columns divided','0.714 / 0.0828 → about 8.6 mg fresh weight per plant'],
    ['Co-treatment, the two columns divided','1.251 / 0.0617 → about 20.3 mg fresh weight per plant'],
    ['So the mass ratio is','20.3 / 8.6 = 2.4-fold, which is more than enough to reverse a 1.34-fold span'],
    ['Replication','one box per arm, so within-arm variance is undefined and neither column has an interval'],
    ['Design note','no unstressed box was run in this set at all']
  ],
  read_en:'The flip is arithmetic, not biology. The untreated box wins per gram because its plants are the lightest, and they are the lightest because they were the most damaged. Dividing by a mass the treatment changed puts the outcome into the denominator.',
  read_zh:'翻轉是算術，不是生物學。未處理的箱子在「每克」勝出，是因為它的植株最輕；而它最輕，是因為受害最重。拿一個被處理改變過的質量去除，等於把結果放進了分母。',
  do_en:'Report fresh weight as its own outcome, report chlorophyll per plant beside it, and claim no ranking. With one box per arm there is nothing to rank.',
  do_zh:'把鮮重當成一個獨立的結果報出來，旁邊放每株葉綠素，不要宣稱排序。每組一箱，根本沒有排序可言。'
},
{
  id:'W4', t_en:'A result withdrawn for arithmetic', t_zh:'因為算術而撤回的結果',
  q_en:'The heat chlorophyll sheet reads 0.626 mg/g for the control against 0.348, 0.337 and 0.335 for the three timings. It would say the peptide halved chlorophyll.',
  q_zh:'熱逆境葉綠素表：對照0.626 mg/g，三個時機組0.348、0.337、0.335。照這樣讀，就是胜肽讓葉綠素腰斬。',
  rows:[
    ['The pattern','all three treated arms fall to about 54 per cent of control, and they land within 4 per cent of each other'],
    ['What that pattern means','three different application times producing the same number is a signature of the measurement, not of a dose'],
    ['The arithmetic check','in the control row the OD645 and OD663 columns appear transposed relative to every treated row'],
    ['What a transposition does','the two coefficients differ, so swapping the columns shifts the computed value by about the factor seen'],
    ['Precedent in the same project','set 8 gave 0.106, 0.830 and 1.092 from one extract, and two workbooks differ on those rows by 7 to 66 fold'],
    ['Action taken','the sheet is not published and the number is withdrawn']
  ],
  read_en:'Three timings landing on the same value is the clue. A real dose or timing effect varies with the dose or the timing; a column error does not. The transposition explains the whole pattern, so the sheet cannot be used in either direction.',
  read_zh:'三個時機落在同一個值上，就是線索。真正的劑量或時機效應會隨劑量或時機變化，欄位錯置不會。錯置可以解釋整個模式，所以這張表不論往哪個方向都不能用。',
  do_en:'Say we withdrew it and say why. Withdrawing a number for a reason you can state is the strongest thing on this page.',
  do_zh:'說我們撤回了它，並說出原因。能講出理由的撤回，是這一頁最強的東西。'
}
];
