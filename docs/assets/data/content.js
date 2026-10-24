/* Prose data: how to shape an answer, what never to say, and what the wiki
 * does not yet carry. Hand-written, never generated.
 */

window.ANSWER_STEPS = [
{
  t_en:'Receive', t_zh:'接球',
  d_en:'One short acknowledgement, then stop. Thanking the judge buys you two seconds to choose the shape of the answer, and nothing more. If the question has two halves, say so now, so the judge knows you heard both.',
  d_zh:'一句簡短的回應，然後停。謝謝評審只是替你買兩秒鐘去決定答案的形狀，沒有別的用途。如果問題有兩個部分，現在就說出來，讓評審知道你兩個都聽到了。',
  say_en:'Thank you — that is two questions, and I will take the mechanism first.',
  say_zh:'謝謝您——這其實是兩個問題，我先回答機制的部分。',
  dont_en:'Do not open with "that is a very good question". It is filler, and everyone in the room has heard it four times today.',
  dont_zh:'不要用「這是個很好的問題」開場。那是填充詞，評審今天已經聽過四次了。'
},
{
  t_en:'Headline', t_zh:'先給結論',
  d_en:'The answer in one sentence, before any reasoning. A judge should be able to stop you after the first sentence and still have the answer. If the honest headline is "no", the headline is still "no" — said first, not discovered at the end of a paragraph.',
  d_zh:'一句話先給答案，再講推理。評審應該在你第一句之後打斷你，仍然拿到答案。如果誠實的結論是「沒有」，那第一句就是「沒有」，不要讓它在一段話的最後才浮現。',
  say_en:'No. On the published wiki, our own ACC deaminase has never rescued a plant.',
  say_zh:'沒有。在我們公布的wiki上，我們自己的ACC脫胺酶從來沒有救起過植物。',
  dont_en:'Do not build up to it. A three-sentence run-up before the answer reads as an attempt to make the answer sound better than it is.',
  dont_zh:'不要鋪陳。先講三句再講答案，聽起來就像在替答案化妝。'
},
{
  t_en:'Evidence', t_zh:'給證據',
  d_en:'One number, with its condition and its sample size, from our own bench. A number without a condition is a rumour. Say the measurement, the n, and the date if you have it.',
  d_zh:'一個數字，附上它的條件與樣本數，而且是我們自己做的。沒有條件的數字只是傳聞。講量到的值、n、如果記得就講日期。',
  say_en:'Root length falls from 74.95 to 1.36 millimetres across 0 to 150 millimolar, nine seedlings per group, day six.',
  say_zh:'根長從74.95毫米降到1.36毫米，鹽度0到150毫莫耳，每組九株，第六天。',
  dont_en:'Do not say "significantly better" unless a test was run. Our agar bars are three reads of one pooled extract; that is not a significance claim.',
  dont_zh:'沒做統計就不要說「顯著更好」。我們洋菜的長條是同一份混合萃取液的三次讀值，那不是顯著性。'
},
{
  t_en:'Boundary', t_zh:'畫出邊界',
  d_en:'Say what the number does not cover, before the judge finds it. This is the move that converts a weak result into a credible one. It also ends the line of questioning, because there is nothing left to catch you with.',
  d_zh:'在評審找到之前，先說這個數字不涵蓋什麼。這一步能把弱的結果變成可信的結果，也會結束這條追問，因為已經沒有東西可以抓你。',
  say_en:'That is Arabidopsis on agar, one plate per condition, so the biological n is one. It sets our stress window; it does not transfer to a crop.',
  say_zh:'那是洋菜上的阿拉伯芥，每個條件一皿，所以生物重複數是一。它界定我們的逆境範圍，但不能外推到作物。',
  dont_en:'Do not let the judge discover the limitation. A limitation you volunteer is a method; a limitation you are caught with is a flaw.',
  dont_zh:'不要讓評審自己發現限制。你主動說出來的限制叫做方法；被抓到的限制叫做缺陷。'
},
{
  t_en:'Contribution', t_zh:'講貢獻',
  d_en:'Finish on what another team can take. A contribution is something executable: a protocol, a measured ladder, a rule that cost us a month. Not "we hope this inspires future teams".',
  d_zh:'用「別人能拿走什麼」收尾。貢獻必須是可執行的：一份流程、一條量好的梯度、一個讓我們賠掉一個月的規則。不是「希望能啟發未來的隊伍」。',
  say_en:'Any team can take our salt ladder and pick a stress level without burning a month, and take the two rules that cost us sets: enter hydroponics from agar, and blot every batch before it touches a plant.',
  say_zh:'任何隊伍都可以拿我們的鹽度梯度直接選逆境強度，不用再燒掉一個月；也可以拿走讓我們賠掉整組的兩條規則：水耕要從洋菜移苗進去、每批蛋白上植物前先做墨點。',
  dont_en:'Do not describe a conclusion as a contribution. A conclusion is yours; a contribution is theirs to run.',
  dont_zh:'不要把結論當成貢獻。結論是你的，貢獻是別人可以拿去跑的。'
},
{
  t_en:'Hand over', t_zh:'交棒',
  d_en:'If the question has left your territory, hand it over by name, with one accurate sentence attached. Handing over with a sentence is competence. Handing over with a shrug is not.',
  d_zh:'如果問題離開你的領域，點名交棒，並附上一句準確的話。附一句話的交棒是能力；聳肩的交棒不是。',
  say_en:'That is the reactor side — the run held four days unattended at crossflow near 371 millilitres a minute. Chloe can take the membrane question.',
  say_zh:'那是反應器那邊的——那次運轉無人看管撐了四天，錯流約每分鐘371毫升。膜的問題請Chloe接。',
  dont_en:'Do not answer outside your seat to be helpful. A wrong number from the wrong person costs more than a pause.',
  dont_zh:'不要為了幫忙而回答不是你守備範圍的問題。錯的人給錯的數字，代價比停頓大得多。'
}
];

window.DONT_KNOW = [
{
  t_en:'You know it is not measured',
  t_zh:'你知道那是沒量過的',
  d_en:'The strongest case. Say it is not measured, say why it matters, and name the experiment. Three sentences and the question is answered better than a guess would have answered it.',
  d_zh:'這是最強的情況。說沒量過、說它為什麼重要、說出那個實驗。三句話，比猜一個答案更完整。',
  say_en:'We have never measured a half-life in any medium. It matters because our whole timing argument depends on it — spike a known batch into each medium, sample over time, read the His tag.',
  say_zh:'我們在任何介質裡都沒量過半衰期。這很重要，因為我們整個時機論述都靠它——把已知批次加進各介質、定時取樣、用His標籤讀。'
},
{
  t_en:'You half remember a number',
  t_zh:'你只記得一半的數字',
  d_en:'Give the shape, not the digits, and say it is the shape. A judge can work with "the control was about four times the treated arms"; a judge cannot forgive 0.238 when the sheet says 0.0238.',
  d_zh:'給形狀不要給位數，而且說明你給的是形狀。評審可以接受「對照大約是處理組的四倍」；但表上寫0.0238你說成0.238，是不能挽回的。',
  say_en:'I do not want to give you a wrong digit — the shape is that the salted control is several times lower, and I can give you the exact value from the figure.',
  say_zh:'我不想給您錯的位數——形狀是加鹽對照低好幾倍，確切數值我可以從圖上給您。'
},
{
  t_en:'It is another seat\'s question',
  t_zh:'那是別人的守備範圍',
  d_en:'Hand over by name with one true sentence. Never invent a bridge sentence to sound coordinated.',
  d_zh:'點名交棒，附一句真的話。不要為了聽起來有默契而發明一句橋接的話。',
  say_en:'That is the cloning record — nine Level-1 modules each with a sequencing date. Chloe has the detail.',
  say_zh:'那是選殖的紀錄——九個Level-1模組各有定序日期。細節請Chloe回答。'
},
{
  t_en:'You genuinely have no idea',
  t_zh:'你是真的完全不知道',
  d_en:'Say so, then reason out loud toward what would settle it. Judges score the reasoning. What they cannot score is a confident wrong answer, because it makes them doubt the ones you got right.',
  d_zh:'直接說，然後把「什麼能解決它」的推理講出來。評審給的是推理的分數。他們無法給分的是自信但錯誤的答案，因為那會讓他們懷疑你答對的那些。',
  say_en:'I do not know. If I had to find out, I would start from whether the effect survives heat denaturation of the same preparation, because that separates the molecule from the medium.',
  say_zh:'我不知道。如果要查，我會先看同一批製備熱變性後效應還在不在，因為那能把分子和介質分開。'
}
];

window.PHRASES = [
{g_en:'Conceding without collapsing',g_zh:'承認但不崩盤',items:[
 {en:'That is correct, and it is on our own page in those words.',zh:'您說得對，而且我們自己的頁面就是這樣寫的。'},
 {en:'We cannot claim that yet. Here is the experiment that would let us.',zh:'這一點我們還不能宣稱。能讓我們宣稱的實驗是這樣的。'},
 {en:'We observed it; we did not establish it.',zh:'我們觀察到了，但沒有建立起來。'},
 {en:'That is a limitation we published rather than one we worked around.',zh:'那是我們公開寫出來的限制，不是我們繞過去的限制。'}]},
{g_en:'Putting a number in its place',g_zh:'把數字放回它的位置',items:[
 {en:'Nine seedlings per group, one plate, day six.',zh:'每組九株，一個皿，第六天。'},
 {en:'That difference sits inside its own spread.',zh:'那個差值落在它自己的誤差區間裡。'},
 {en:'Un-normalised; normalised to fresh weight it goes the other way.',zh:'這是未標準化的；用鮮重標準化之後方向相反。'},
 {en:'The biological unit is the plate, not the seedling.',zh:'生物學上的單位是皿，不是苗。'}]},
{g_en:'Owning a failure',g_zh:'承接失敗',items:[
 {en:'We voided that set rather than normalising around it.',zh:'我們把那一組作廢，而不是想辦法繞過去。'},
 {en:'The outcome was a protocol gate, not a data point.',zh:'那次的產出是一道流程關卡，不是一個資料點。'},
 {en:'We found that from our own blot, and we published it.',zh:'那是我們自己的墨點發現的，而且我們公開了。'},
 {en:'Three trials, three orderings. That is the honest summary.',zh:'三次試驗，三種排序。這才是誠實的總結。'}]},
{g_en:'Buying two seconds',g_zh:'買兩秒鐘',items:[
 {en:'Let me take the second half first, because it is the one we have data for.',zh:'我先回答後半，因為那部分我們有資料。'},
 {en:'Can I check I have the question right — you are asking about soil, not agar?',zh:'我確認一下問題——您問的是土耕，不是洋菜，對嗎？'},
 {en:'I will give you the number, then the limitation on it.',zh:'我先給您數字，再講它的限制。'}]},
{g_en:'Handing over',g_zh:'交棒',items:[
 {en:'That is the measurement side — Jacquelyn can take it.',zh:'那是量測那邊的——請Jacquelyn接。'},
 {en:'I will give you the one sentence I am sure of, and pass the detail across.',zh:'我先給您我確定的那一句，細節交給隊友。'}]},
{g_en:'Closing on contribution',g_zh:'用貢獻收尾',items:[
 {en:'Any team can take the ladder and pick a stress level without burning a month.',zh:'任何隊伍都能拿這條梯度直接選逆境強度，不用再花一個月。'},
 {en:'The two rules that cost us sets are in the protocol we published.',zh:'讓我們賠掉整組的那兩條規則，都寫進我們公開的流程裡了。'},
 {en:'The three-timing design is the part we would most like another team to copy.',zh:'三個時機的設計，是我們最希望別的隊伍拿去用的部分。'}]}
];

/* ── Red lines ── */
window.NEVER_SAY = [
{no_en:'Our protectant rescued the plants.',
 no_zh:'我們的保護劑救活了植物。',
 yes_en:'We have one large difference on one plate whose own no-salt control failed, so we cannot claim a rescue.',
 yes_zh:'我們有一盤看到很大的差異，但那一盤自己的無鹽對照失效了，所以不能宣稱救援。',
 why_en:'Our own Results page says no protectant rescue survives its controls.'},
{no_en:'Trehalose is our positive control.',
 no_zh:'海藻糖是我們的陽性對照。',
 yes_en:'Trehalose is the reference compound we ran to ask whether the assay can see a rescue. After six sets, it cannot serve as a validated positive control.',
 yes_zh:'海藻糖是我們用來檢查「檢定看不看得見救援」的參考化合物。六組之後，它不能當作已驗證的陽性對照。',
 why_en:'A positive control that never worked is not a control.'},
{no_en:'We measured ACC deaminase activity.',
 no_zh:'我們量了ACC脫胺酶的活性。',
 yes_en:'There is no activity assay behind any plant result. Measurement and Biomanufacturing report permeate activity from the reactor; no plant run is tied to an activity number for the batch sprayed.',
 yes_zh:'沒有任何植物結果背後有活性分析。Measurement與Biomanufacturing頁有反應器透膜液的活性；但沒有任何植物實驗連到所噴批次的活性數值。',
 why_en:'The Results page states there is no activity assay in the wet lab archive. Know the difference between the two statements before you speak.'},
{no_en:'The light switch turns production on and off.',
 no_zh:'光開關可以開關生產。',
 yes_en:'The optogenetic modules are built and sequence-confirmed, and no experiment has shown output changing with green light. Everything we sprayed was constitutive.',
 yes_zh:'光調控模組已建好並定序確認，但沒有任何實驗顯示輸出隨綠光改變。我們噴的全部都是組成型表現。',
 why_en:'Results §4 in our own words: no induction curve exists.'},
{no_en:'The engineered variants kept their activity.',
 no_zh:'改造過的變體保有活性。',
 yes_en:'The variants are assembled and sequence-verified. No wild-type against variant comparison has been run on a plant.',
 yes_zh:'變體已組裝並定序確認。沒有在植物上做過野生型對變體的比較。',
 why_en:'The claim appears in the advisor memo and has no figure behind it.'},
{no_en:'Our system is contained.',
 no_zh:'我們的系統有阻隔。',
 yes_en:'Two platings, no replicate and no log reduction value — preliminary evidence of retention.',
 yes_zh:'兩次平板、沒有重複、沒有對數削減值——這是初步的滯留證據。',
 why_en:'Results §8. We also give two different cell dimensions for B. subtilis, neither cited.'},
{no_en:'The peptide halved chlorophyll under heat.',
 no_zh:'熱逆境下胜肽讓葉綠素減半。',
 yes_en:'We withdrew that sheet. The control row has OD645 and OD663 apparently transposed, which would produce exactly that pattern.',
 yes_zh:'那份資料我們撤下了。對照列的OD645與OD663看起來互換了，正好會造成那個模式。',
 why_en:'Results §6.3.'},
{no_en:'Significantly better.',
 no_zh:'顯著更好。',
 yes_en:'Larger, and the difference sits inside the spread of the group.',
 yes_zh:'比較大，但差值落在組內的誤差範圍裡。',
 why_en:'Our agar bars are three reads of one pooled extract. No test was run.'},
{no_en:'It works in soil too.',
 no_zh:'在土裡也有效。',
 yes_en:'Soil trials went into the incubator in September and are not scored on the wiki. The one comparison of salt schedules was decided by eye with no data collected.',
 yes_zh:'土耕試驗九月才進培養箱，wiki上沒有評分。唯一一次加鹽排程的比較是用眼睛判斷，沒有收資料。',
 why_en:'Plants §4.3.'},
{no_en:'Our protocol is validated.',
 no_zh:'我們的流程已經驗證過了。',
 yes_en:'Our protocol is documented and published, and the part of it that is validated is the salt calibration.',
 yes_zh:'我們的流程有文件也公開了，其中真正驗證過的部分是鹽度校正。',
 why_en:'Say what is validated, not that the whole thing is.'}
];

window.CONFLICTS = [
{t_en:'Plants says clearest rescue · Results says no rescue',
 t_zh:'Plants說最清楚的救援 · Results說沒有救援',
 d_en:'Both are ours and both are deliberate. Plants describes an observation; Results applies the standard for a claim. Say the difference out loud rather than choosing a page.',
 d_zh:'兩句都是我們寫的，而且是刻意的。Plants描述觀察，Results套用宣稱的標準。把這個差別講出來，不要選邊站。'},
{t_en:'42.7-fold · about 55-fold',
 t_zh:'42.7倍 · 約55倍',
 d_en:'74.95 divided by 1.36 is 55.1. The Results figure uses seven measurable seedlings in its 150 mM control, not nine. Quote the means, not the ratio.',
 d_zh:'74.95除以1.36是55.1。Results的圖在150 mM對照用的是7株而不是9株。引用平均值，不要引用倍數。'},
{t_en:'The hydroponic agent is named · the hydroponic agent is unnamed',
 t_zh:'水耕的藥劑有名字 · 水耕的藥劑沒有名字',
 d_en:'The run\'s own timeline sheet names CH Bio peptide. The data archive contains no file that names it. Both sentences are on our wiki, so hold both.',
 d_zh:'該次運行的時程表上寫了正瀚胜肽，但資料檔裡沒有任何一份指明。兩句都在wiki上，兩句都要承認。'},
{t_en:'No activity assay · permeate specific activity',
 t_zh:'沒有活性分析 · 透膜液比活性',
 d_en:'Results says there is no ACC deaminase activity measurement in the wet lab archive. The reactor pages report specific activity in the shell permeate. The reconciliation is that no plant run is tied to an activity number for the batch applied — say that, not "we have none".',
 d_zh:'Results說濕實驗檔案裡沒有ACC脫胺酶活性量測；反應器那邊的頁面有殼側透膜液的比活性。調和的說法是：沒有任何植物實驗連到所施用批次的活性數值——這樣講，而不是說「我們完全沒有」。'},
{t_en:'8–10 seedlings per plate · 12 seedlings per plate',
 t_zh:'每皿8–10株 · 每皿12株',
 d_en:'Section 1.1 and section 1.4 of the Plants page give different densities. Answer with the number our statistics use: nine measured seedlings per group in set 6.',
 d_zh:'Plants頁1.1節與1.4節寫的密度不同。用我們統計實際使用的數字回答：第6組每組量了九株。'}
];

window.NEW_SINCE_FREEZE = [
{t_en:'Sets 9, 10 and 11 exist',t_zh:'第9、10、11組是存在的',
 d_en:'Set 9 is the official ACC deaminase salinity run from 17 September, set 10 is BoPep4 from 23 September, set 11 is LEA14 from 9 October. All three are twelve plates, one plate per condition, 0, 75 and 100 mM NaCl with the three timings.',
 d_zh:'第9組是9月17日的ACC脫胺酶正式鹽逆境，第10組是9月23日的BoPep4，第11組是10月9日的LEA14。三組都是12皿、每個條件一皿、0/75/100 mM配三個時機。'},
{t_en:'They carry almost no numbers',t_zh:'它們幾乎沒有數值',
 d_en:'The decks are photograph albums. The master index has a row for each of them with every column blank, and the root length workbook stops at set 6. The only numbers live in the team\'s own draft prose.',
 d_zh:'那些簡報是照片集。總表為每一組留了一列，但每一欄都是空的；根長的工作簿停在第6組。唯一的數值在隊上自己的草稿文字裡。'},
{t_en:'The two numbers that do exist',t_zh:'確實存在的兩個數字',
 d_en:'Pre-treatment ACC deaminase under 37 °C on agar retained about thirteen per cent more chlorophyll than its non-stressed reference, n = 10 with three of eight plates contaminated. In soil at 300 mM, post-treatment read 1.13 mg/L against an untreated control at about 1.00.',
 d_zh:'洋菜37 °C下，前處理的ACC脫胺酶葉綠素比自身無逆境參考高約13%，n=10，八皿中三皿污染。土耕300 mM下，後處理1.13 mg/L，未處理對照約1.00。'},
{t_en:'The direction is not consistent',t_zh:'方向並不一致',
 d_en:'Pre-treatment best under agar heat, post-treatment best under soil salinity, post-treatment worse than the stressed control under soil heat. A protectant that helps in three different orders on three platforms is not yet a result.',
 d_zh:'洋菜熱是前處理最好，土耕鹽是後處理最好，土耕熱的後處理比逆境對照更差。同一個保護劑在三個平台有三種順序，還不能算結論。'},
{t_en:'BoPep4 has a growth penalty with no stress',t_zh:'BoPep4在無逆境下有生長代價',
 d_en:'The team\'s own draft says the co-treated plates without salt grow less than the mock control. That is the trade-off question answering itself, and it is worth saying before a judge finds it.',
 d_zh:'隊上自己的草稿寫：無鹽的共同處理皿比空白對照長得差。那就是取捨問題自己回答了，值得在評審發現前先講。'},
{t_en:'The team\'s own replication sentence',t_zh:'隊上自己的重複性陳述',
 d_en:'"The only experimental replicate was ACCD heat stress on agar and ACCD heat stress on soil, but these also only had 2 replicates." If you are asked about replication in the new work, that sentence is the answer.',
 d_zh:'「唯一有重複的是洋菜ACCD熱逆境與土耕ACCD熱逆境，而且也只有2次重複。」被問到新資料的重複性，就用這句。'},
{t_en:'The activity estimate is below the limit',t_zh:'活性估計低於極限',
 d_en:'A DNPH-based estimate exists and sat below the assay\'s quantification limit, unreplicated. It is not an activity measurement you can quote.',
 d_zh:'有一個DNPH的估計值，低於該分析的定量極限且沒有重複。那不是可以引用的活性數值。'},
{t_en:'Kyle\'s "Trial 2, Figs. e–g"',t_zh:'Kyle說的「試驗2，圖e–g」',
 d_en:'That is set 7 trial 2, the 100 mM block: e untreated, f co-treatment, g post-treatment. They are representative photographs. The word "significant" belongs to the separate quantitative figure with n = 9, not to the photographs.',
 d_zh:'那是第7組試驗2的100 mM區塊：e未處理、f共同處理、g後處理。那是代表性照片。「顯著」屬於另一張n=9的量化圖，不屬於照片。'}
];
