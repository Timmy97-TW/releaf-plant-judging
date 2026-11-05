/* 實驗矩陣 — 植物組做過的每一次 run，一列一個。
 *
 * 這是整個 plant 故事的骨架。三個系統 × 兩種逆境 × 五種施用物 × 三個時機。
 * 讀法：先看 verdict 這一欄。全站只有一個 run 是 'strong'，那就是鹽梯度本身。
 *
 * 欄位
 *   sys      agar | hydro | soil
 *   stress   salt | heat | none（none = 只測載體本身）
 *   agent    treh | ch | accd | bopep | lea | vehicle
 *   n        一個條件裡量了幾株（wiki 寫 "per condition for each extraction"）
 *   nbio     獨立的生物重複數 — 獨立倒的盤 / 獨立的盆 / 獨立的 run
 *   verdict  strong | direction | qual | failed | planned
 *   says     這一 run 能支撐的一句話
 *   cannot   它不能支撐的
 *   trap     評審會從哪裡切進來
 *
 * 所有數字出自凍結後的 wiki（plant 與 results 兩頁）。英文關鍵字保留原文，
 * 因為那是評審室裡要講出口的字。
 */
window.MATRIX = [

/* ─────────────────────────── 瓊脂 · 鹽 · 海藻糖（參考化合物） */
{id:'A1', sys:'agar', stress:'salt', agent:'treh', set:'Set 1', date:'5/10 – 5/23',
 label_zh:'第一次摸瓊脂', label_en:'First agar pretest',
 design_zh:'NaCl 50 / 100 mM，海藻糖 1.0 mM。水平圓盤。',
 n:'—', nbio:1, days:14, readout_zh:'只有照片',
 verdict:'qual',
 says_zh:'我們學會了怎麼倒盤、怎麼讓種子長起來，並看到 1.0 mM 海藻糖本身就壓抑生長。',
 cannot_zh:'任何定量結論。這一組沒有量過鮮重或葉綠素。',
 trap_zh:'不要把前三組 pretest 算進「我們做了十一組」的數字裡而不說明它們只有照片。'},

{id:'A2', sys:'agar', stress:'salt', agent:'treh', set:'Set 2', date:'5/20 – 6/4',
 label_zh:'把鹽往上推', label_en:'Pushing the salt up',
 design_zh:'NaCl 100 / 150 mM，海藻糖 0.5 mM。',
 n:'—', nbio:1, days:16, readout_zh:'只有照片', verdict:'qual',
 says_zh:'150 mM 下植株明顯受害，所以工作區間在 100 mM 附近。',
 cannot_zh:'劑量反應。沒有量測值。',
 trap_zh:'同上 — pretest 就說 pretest。'},

{id:'A3', sys:'agar', stress:'salt', agent:'treh', set:'Set 3 t1+t2', date:'5/27 – 6/11',
 label_zh:'低劑量海藻糖，做兩次', label_en:'Low-dose trehalose, twice',
 design_zh:'NaCl 100 mM，海藻糖 0.125 / 0.25 / 0.5 mM。t2 是為了補樣本數而重做。',
 n:'—', nbio:2, days:'10 / 13', readout_zh:'只有照片', verdict:'qual',
 says_zh:'這是全站少數「同一設計做了兩次」的例子之一。',
 cannot_zh:'任何數字。',
 trap_zh:'t1 與 t2 的天數不同（10 天 vs 13 天），所以兩次嚴格說不是同一個實驗。'},

{id:'A4', sys:'agar', stress:'salt', agent:'treh', set:'Set 4', date:'6/18 – 6/30',
 label_zh:'改成直立盤，開始量根長', label_en:'Vertical plates, root length begins',
 design_zh:'NaCl 0 / 100 mM × 海藻糖 0 / 0.25 / 0.5 / 1.0 mM。鄭教授建議後改：蔗糖 3%→1%、水平→直立、四天齡苗。',
 n:'9', nbio:1, days:14, readout_zh:'根長（ImageJ 手工描）、鮮重、葉綠素',
 verdict:'direction',
 num_zh:'1.0 mM 海藻糖主根 46.4 mm，對照受鹽組約 35.8 mm（+約 30%）。',
 says_zh:'在 100 mM 下，1.0 mM 海藻糖讓主根長了約三成；0.25 與 0.5 mM 效果較小。',
 cannot_zh:'鮮重沒有被救起來。而且 panel b（除以鮮重的葉綠素）被生物量拉高了，wiki 自己說要看 panel c。',
 trap_zh:'根長那一欄有 ND（污染）。如果你引用 46.4 而不講 ND，評審翻圖說明就會看到。',
 fig:'r-set4-rootlength.webp'},

{id:'A5', sys:'agar', stress:'salt', agent:'treh', set:'Set 5 t2', date:'7/4 – 7/12',
 label_zh:'推到 250 mM，天花板出現', label_en:'Up to 250 mM, the ceiling appears',
 design_zh:'NaCl 0 / 150 / 250 mM × 海藻糖 0 / 1 / 5 / 10 mM。冷層積由 2 天改 4 天。',
 n:'—', nbio:1, days:12, readout_zh:'根長、鮮重、葉綠素',
 verdict:'direction',
 num_zh:'對照主根最長到 82.476 mm；150 mM 剩約 4–5 mm；250 mM 到 1.075 與 0.9415 mm。',
 says_zh:'250 mM 是地板效應 — 根幾乎不長，任何處理都看不出差別。150 mM 下葉綠素有劑量依賴的回復，5 與 10 mM 顯著。',
 cannot_zh:'250 mM 組不能用來比較任何處理：量到的值已經貼在偵測下限。',
 trap_zh:'250 mM 有兩個條件整盤丟掉（0 與 10 mM 海藻糖，ND）。那不是「資料缺漏」，那是兩個盤沒了。',
 fig:'r-set5t2-rootlength.webp'},

{id:'A6', sys:'agar', stress:'salt', agent:'treh', set:'Set 6', date:'7/29 – 8/3',
 label_zh:'鹽梯度 — 全站唯一乾淨的劑量反應', label_en:'The salt ladder',
 design_zh:'NaCl 0 / 75 / 100 / 150 mM × 海藻糖 0 或 5 mM。直立盤。',
 n:'9', nbio:1, days:13, readout_zh:'根長、鮮重、葉綠素',
 verdict:'strong',
 num_zh:'主根 74.95 / 34.77 / 11.00 / 1.36 mm，對應 0 / 75 / 100 / 150 mM。SD 2.77 / 4.41 / 4.07 / 1.09。',
 says_zh:'這一組是我們最強的證據，而它證明的是逆境本身而不是保護劑：區間不重疊，所以這個 assay 分得出劑量。75 mM 留下對照的 46%。',
 cannot_zh:'它不能說任何保護劑有效。而且只做了一次，沒有跨 run 的重複。',
 trap_zh:'只報兩個平均值，不要報 42.7 倍或 55 倍。分母（1.36 mm）的變異係數約 80%，倍數只知道到大約三倍的精度之內。另外：wiki 的 Outcomes 清單寫 74.95→1.36，但本文的 Set 5 寫對照到 82.476 mm — 兩個數字來自不同組，別混用。',
 fig:'s-exp6-rootlength.webp'},

/* ─────────────────────────── 瓊脂 · 鹽 · CH 富肽2號（商品） */
{id:'A7', sys:'agar', stress:'salt', agent:'ch', set:'Set 7 t1', date:'8/1 – 8/8',
 label_zh:'商品胜肽，三個時機', label_en:'The commercial peptide, three timings',
 design_zh:'NaCl 100 mM，富肽2號 1/500（廠商自己的田間稀釋），1 mL 上方淋灌。水平圓盤，每盤 40 顆種子。',
 n:'25', nbio:1, days:8, readout_zh:'鮮重、標準化葉綠素 mg g⁻¹、未標準化葉綠素 mg/L',
 verdict:'direction',
 says_zh:'事後處理（post-treatment）在受鹽組裡葉綠素與鮮重都最高；前處理與同時處理嚴重抑制生長。',
 cannot_zh:'任何機制。富肽2號是成品，正瀚沒有揭露有效成分。這是產品層級的比較。',
 trap_zh:'這一次的苗在處理時只有四天齡，wiki 自己寫「四天齡苗太脆弱」。所以「前處理有害」可能是苗齡造成的，不是前處理這個時機本身。',
 fig:'r-set7t1-phenotype.webp'},

{id:'A8', sys:'agar', stress:'salt', agent:'ch', set:'Set 7 t2', date:'8 月',
 label_zh:'同一個胜肽，換成九株與十二天', label_en:'Same peptide, n = 9 and twelve days',
 design_zh:'NaCl 0 / 75 / 100 mM，富肽2號 1/500，保護劑與 NaCl 都用上方淋灌各 1 mL。',
 n:'9', nbio:1, days:12, readout_zh:'鮮重、總葉綠素 mg/L',
 verdict:'direction',
 says_zh:'75 mM 下同時處理最有幫助；100 mM 下事後處理最好，接近 0 mM 的 mock 對照。',
 cannot_zh:'兩個 trial 的最佳時機不一致（t1 說 post，t2 說 75 mM 要 co、100 mM 要 post），所以最佳時機隨劑量而動，不是一個固定答案。',
 trap_zh:'「接近 0 mM 對照」是很漂亮的句子，但那是一盤九株的單次結果。',
 fig:'r-set7t2-phenotype.webp'},

{id:'A9', sys:'agar', stress:'salt', agent:'ch', set:'Set 7 t3', date:'8 月',
 label_zh:'第三次', label_en:'Third trial',
 design_zh:'NaCl 75 / 100 mM，富肽2號 1/500。',
 n:'—', nbio:1, days:'—', readout_zh:'同上', verdict:'qual',
 says_zh:'CH 這一組是全站做到三次的唯一設計。',
 cannot_zh:'wiki 上 t3 的數字不完整，trial 編號在表格與圖說之間也對不上。',
 trap_zh:'表格寫 trial 1 / trial 3，圖說寫 trial 2。先跟濕式組對齊編號再進評審室。'},

/* ─────────────────────────── 瓊脂 · 鹽 · ACCD */
{id:'A10', sys:'agar', stress:'salt', agent:'accd', set:'Set 8（pretest）', date:'8 月',
 label_zh:'ACCD 第一次上盤 — 整組污染', label_en:'ACCD pretest, contaminated throughout',
 design_zh:'NaCl 0 / 75 / 100 mM × ACCD 無 / 前 / 同時 / 事後。噴 3 下。0.22 µm 過濾後的上清。',
 n:'40', nbio:1, days:8, readout_zh:'鮮重、葉綠素、照片',
 verdict:'failed',
 says_zh:'事後處理在 75 與 100 mM 有回復；同時處理每公克葉綠素最高；無鹽各處理之間沒有統計差異。',
 cannot_zh:'什麼都不能說 — wiki 自己寫「整組都污染」，而且前處理需要重做。',
 trap_zh:'這是四十株的那一組。如果有人說「我們有 n=40」，要記得 n=40 的那幾組正是污染或還沒重複的那幾組。',
 fig:'r-set8-phenotype.webp'},

{id:'A11', sys:'agar', stress:'salt', agent:'accd', set:'Set 9（official）', date:'9 月',
 label_zh:'ACCD 正式組 — 前處理最好的一次', label_en:'ACCD official, pre-treatment best',
 design_zh:'NaCl 0 / 75 / 100 mM，對照為 TB 培養基，ACCD 前 / 同時 / 事後。種子冷層積 4 天、22 °C 長 7 天、第 7 天前處理。',
 n:'9', nbio:1, days:13, readout_zh:'鮮重、標準化與未標準化葉綠素',
 verdict:'direction',
 num_zh:'前處理 100 mM 相對葉綠素約 1.74 mg g⁻¹，未處理約 1.03（約 +70%）。前處理鮮重 0.122 / 0.164 / 0.225 g（0 / 75 / 100 mM）；同時處理 0.220 / 0.144 / 0.114 g。',
 says_zh:'前處理的 ACCD 在 100 mM 下保住了較多葉綠素。',
 cannot_zh:'前處理的鮮重隨鹽濃度「上升」（0.122 → 0.225 g），方向是反的。wiki 自己說這個趨勢需要更多 trial 才能驗證。',
 trap_zh:'100 mM 事後處理那一盤因發霉被排除（ND）。所以「前處理 > 事後處理」這個排序，少了一個被比較的對象。',
 fig:'fig-agar-control-vs-accd.webp'},

/* ─────────────────────────── 瓊脂 · 鹽 · BoPep4 與 LEA14 */
{id:'A12', sys:'agar', stress:'salt', agent:'bopep', set:'Set 10', date:'10 月',
 label_zh:'BoPep4 — 有鹽才幫忙，沒鹽會扯後腿', label_en:'BoPep4 helps under salt, hurts without it',
 design_zh:'NaCl 0 / 75 / 100 mM，對照 TB，BoPep4 同時 / 事後。',
 n:'40', nbio:1, days:17, readout_zh:'鮮重、葉綠素 mg/L、相對葉綠素、根長',
 verdict:'direction',
 says_zh:'事後處理在 75 與 100 mM 的標準化葉綠素都顯著高於自己的 0 mM；事後 100 mM 是受鹽組裡相對總葉綠素最高的。',
 cannot_zh:'同時處理在完全沒有鹽的情況下也抑制生長，比 mock 對照更差。所以這個製劑本身對植物有代價。',
 trap_zh:'「沒鹽也會抑制」這件事要自己先講。它同時是誠實也是科學：一個只在逆境下有益、在平時有害的東西，施用時機就是產品設計的一部分。'},

{id:'A13', sys:'agar', stress:'salt', agent:'lea', set:'Set 11', date:'10 月',
 label_zh:'LEA14 — 效果最難判讀的一組', label_en:'LEA14, the hardest to read',
 design_zh:'NaCl 0 / 75 / 100 mM，對照 TB，AtLEA14 前 / 事後。用的是野生型序列。',
 n:'40', nbio:1, days:17, readout_zh:'鮮重、標準化葉綠素 mg g⁻¹、未標準化 mg/L',
 verdict:'direction',
 says_zh:'前處理與事後處理在 75 mM 都保住最多葉綠素，順序是 75 > 100 > 0 mM。',
 cannot_zh:'wiki 自己寫「差異特別難判定」。而且 0 mM 事後那一盤沒讀到（ND）。',
 trap_zh:'75 mM 的葉綠素比 0 mM 高，這在生物上講不通（沒有逆境的植物不該比受逆境的少）。那是在提示你盤間變異大過處理效果。'},

/* ─────────────────────────── 瓊脂 · 熱 */
{id:'H1', sys:'agar', stress:'heat', agent:'accd', set:'Heat t1', date:'—',
 label_zh:'ACCD 熱逆境第一次 — 地板效應', label_en:'ACCD heat trial 1, floor effect',
 design_zh:'37 °C 五天，再 22 °C 回復五天。直立盤，噴 0.536 mL 分三下，噴在根尖線以上。',
 n:'9', nbio:1, days:17, readout_zh:'鮮重、標準化與未標準化葉綠素、根長',
 verdict:'failed',
 num_zh:'受熱組鮮重約低 95%（約 0.02 g）。前處理在未標準化葉綠素約為未受逆境的 13%。',
 says_zh:'37 °C 五天對四天齡的苗來說接近致死 — 鮮重掉到 0.02 g。',
 cannot_zh:'鮮重 0.02 g 當分母時，標準化葉綠素會算出 wiki 自己稱為「不合理」的值。這一組只能讀未標準化那一欄。',
 trap_zh:'三個盤污染（無熱同時處理、受熱無 ACCD、受熱同時處理）。同時處理降低存活率且嚴重黃化 — 這是全站唯一一處明確提到存活率的地方。',
 fig:'fig-heat-day4-panel.webp'},

{id:'H2', sys:'agar', stress:'heat', agent:'accd', set:'Heat t2', date:'—',
 label_zh:'ACCD 熱逆境第二次 — 14% 那個數字', label_en:'ACCD heat trial 2, the 14 per cent',
 design_zh:'同上。第 7 天前處理、第 8 天同時處理（送 37 °C 五天）、出培養箱隔天事後處理。',
 n:'9', nbio:1, days:17, readout_zh:'鮮重、標準化葉綠素',
 verdict:'direction',
 num_zh:'事後處理的標準化葉綠素比受熱對照高 14%。保住葉綠素的順序：post > co > pre。',
 says_zh:'這是全站唯一有兩個獨立 trial 的瓊脂實驗，而且兩次的時機排序不同（t1 前處理較好，t2 事後較好）。',
 cannot_zh:'14% 這個數字用的是標準化葉綠素，而同一組 t1 的鮮重只有 0.02 g。先確認 t2 的鮮重不在地板上，再引用這個百分比。',
 trap_zh:'t2 的無熱對照、前處理、事後處理三組都污染（事後最嚴重）。兩個 trial 的結論不一致，這件事要主動講。'},

{id:'H3', sys:'agar', stress:'heat', agent:'ch', set:'Heat phase 1', date:'—',
 label_zh:'CH 胜肽熱逆境 — 只有方法沒有結果', label_en:'CH peptide heat, methods only',
 design_zh:'熱預馴三天、離熱隔天事後處理、回復 3–5 天。噴 0.536 mL 分三下。',
 n:'—', nbio:0, days:'—', readout_zh:'—', verdict:'planned',
 says_zh:'什麼都不能說。wiki 寫了方法，沒有結果。',
 cannot_zh:'這一組不存在於結果裡。',
 trap_zh:'熱逆境的 protocol 清單寫「ACC deaminase 1 pretest + 1 set 2 trials、LEA14 1 set、BoPEP4 1 set 2 trials」，但結果頁只有 ACCD。如果評審照清單數，會問另外三組在哪。答案是：做了但沒有上 wiki，或沒有做完 — 這件事去跟濕式組確認，不要在房間裡猜。'},

{id:'H4', sys:'agar', stress:'heat', agent:'bopep', set:'（清單上有，結果沒有）', date:'—',
 label_zh:'BoPep4 熱逆境', label_en:'BoPep4 heat',
 design_zh:'protocol 清單寫 1 set / 2 trials。', n:'—', nbio:0, days:'—', readout_zh:'—',
 verdict:'planned', says_zh:'—', cannot_zh:'結果不在 wiki 上。',
 trap_zh:'同 H3。先確認再開口。'},

{id:'H5', sys:'agar', stress:'heat', agent:'lea', set:'（清單上有，結果沒有）', date:'—',
 label_zh:'LEA14 熱逆境', label_en:'LEA14 heat',
 design_zh:'protocol 清單寫 1 set。', n:'—', nbio:0, days:'—', readout_zh:'—',
 verdict:'planned', says_zh:'—', cannot_zh:'結果不在 wiki 上。',
 trap_zh:'同 H3。'},

/* ─────────────────────────── 水耕 */
{id:'Y1', sys:'hydro', stress:'none', agent:'vehicle', set:'WB800 稀釋／pH', date:'—',
 label_zh:'載體本身的毒性 — 整個劑量天花板從這裡來', label_en:'The vehicle is phytotoxic',
 design_zh:'稀釋倍數 0、1、1/2、1/4、1/8、1/16，pH 5.7 對 pH 7.1。18 天齡，處理 5 天。不含保護劑的 WB800 培養液。',
 n:'—', nbio:1, days:5, readout_zh:'鮮重、每株葉綠素',
 verdict:'direction',
 num_zh:'原液與 1/2 嚴重（黃化、變小）；1/4、1/8、1/16 有明顯花青素累積。結論：至少稀釋 16 倍。',
 says_zh:'這是整個植物組最被低估的一個結果：限制施用劑量的不是保護劑的效價，而是載體的植物毒性。空的宿主培養液在 1/16 以內都還看得到逆境訊號。',
 cannot_zh:'它不能告訴你是 TB 的成分、菌的代謝物、還是 pH 造成的 — 這一組沒有把三者分開。',
 trap_zh:'這一組定了 1/16 的地板，可是後面 ACCD 對鹽那一組卻用了 1/10 與 1/20，比自己定的地板更濃 — 結果就是漂白。這個不一致要自己先講。',
 fig:'fig-hydro-set1-boxes.webp'},

{id:'Y2', sys:'hydro', stress:'salt', agent:'ch', set:'CH 鹽 pretest', date:'7/25 – 8/4',
 label_zh:'CH 胜肽水耕鹽逆境', label_en:'CH peptide, hydroponic salt',
 design_zh:'13 天齡，100 mM NaCl 七天，1/500。前／同時／事後各一盒，對照為有鹽無胜肽。',
 n:'—', nbio:1, days:7, readout_zh:'鮮重、每株葉綠素、相對葉綠素',
 verdict:'qual',
 says_zh:'同時處理最好（最綠、蓮座最大、鮮重與葉綠素最高）。100 mM 在水耕下不致死。',
 cannot_zh:'沒有 error bar，沒有 n。三個時機各一盒，所以處理與盒子無法分離。',
 trap_zh:'「一個時機一個盒子」意思是盒子效應完全混在處理效應裡。這是 confounding，不是 replication。'},

{id:'Y3', sys:'hydro', stress:'heat', agent:'ch', set:'CH 熱 pretest', date:'8/14 – 8/22',
 label_zh:'CH 胜肽水耕熱逆境 — 全部比對照差', label_en:'CH peptide heat, all below control',
 design_zh:'12 天齡，37 °C 七天，1/500。', n:'—', nbio:1, days:7, readout_zh:'鮮重、每株葉綠素、相對葉綠素',
 verdict:'failed',
 says_zh:'大小與顏色看不出差別；所有處理的相對葉綠素都「低於」對照。',
 cannot_zh:'任何正向結論。wiki 把它歸因於「操作失誤」。',
 trap_zh:'把一組反向的結果歸因於操作失誤，而沒有獨立重複去支持這個歸因 — 評審會問你怎麼知道是操作而不是胜肽有害。誠實的答案是：我們不知道，這一組要重做。'},

{id:'Y4', sys:'hydro', stress:'salt', agent:'accd', set:'ACCD 對 100 mM', date:'—',
 label_zh:'ACCD 水耕鹽逆境 — 判不出來的一次', label_en:'ACCD hydroponic salt, undetermined',
 design_zh:'13 天齡，100 mM 五天。ACCD 稀釋 1/10、1/20、1/40、1/60，加 PLP 1:100。對照：1/20 WB800、0 ACCD、1/20 TB。',
 n:'—', nbio:1, days:5, readout_zh:'鮮重、每株葉綠素',
 verdict:'failed',
 says_zh:'無鹽時 1/10 與 1/20 漂白；1/40 最接近 0 ACCD。因此把 1/40 定為最高可用劑量與負對照濃度。',
 cannot_zh:'ACCD 的效果。wiki 自己寫：培養液體積沒有標準化（鄭教授指出），這一 run 無法判定 ACCD 的效果。',
 trap_zh:'這是最乾淨的一句誠實話，拿去用：「這一 run 我們沒有標準化加入的培養液體積，所以它只能定出劑量上限，不能測效果。」'},

{id:'Y5', sys:'hydro', stress:'heat', agent:'accd', set:'ACCD 對 37 °C', date:'—',
 label_zh:'ACCD 水耕熱逆境', label_en:'ACCD hydroponic heat',
 design_zh:'15 天齡（results 頁寫 11 天齡），37 °C 四天。稀釋 1/40、1/60、1/80、1/100。對照 0.1× MS 與 1/40 WB800。',
 n:'—', nbio:1, days:4, readout_zh:'鮮重、每株葉綠素',
 verdict:'direction',
 says_zh:'1/40、1/60、1/80 的葉綠素略高於對照；1/100 最低。結論寫成「濃度 ≥ 1/80 時 ACCD 改善耐熱性」。',
 cannot_zh:'沒有 n，沒有統計。「略高」就是略高。而且苗齡在兩頁之間不一致（15 天 vs 11 天）。',
 trap_zh:'「≥ 1/80」是個區間宣稱，但只測了四個點而且沒有重複。它是劑量趨勢，不是劑量反應曲線。'},

{id:'Y6', sys:'hydro', stress:'heat', agent:'bopep', set:'BoPep4 對 37 °C', date:'—',
 label_zh:'BoPep4 水耕熱逆境', label_en:'BoPep4 hydroponic heat',
 design_zh:'15 天齡，37 °C 四天。稀釋 1/40 – 1/100。對照 1/40 WB800 與 0.1× MS。',
 n:'—', nbio:1, days:4, readout_zh:'鮮重、每株葉綠素',
 verdict:'direction',
 says_zh:'只有 1/40 有輕微回復（葉綠素高於兩個對照）；1/60 到 1/100 與對照沒有差別。',
 cannot_zh:'1/40 同時是 WB800 負對照的濃度。所以「1/40 BoPep4 優於 1/40 WB800」是對的比較，但效果被描述為 slight。',
 trap_zh:'熱逆境天數在圖說與正文之間不一致（5 天 vs 4 天）。'},

{id:'Y7', sys:'hydro', stress:'salt', agent:'bopep', set:'BoPep4 對 100 mM', date:'—',
 label_zh:'BoPep4 水耕鹽逆境 — 水耕裡最好的一筆', label_en:'BoPep4 hydroponic salt, the best hydroponic result',
 design_zh:'15 天齡，100 mM。稀釋 1/40 – 1/100。對照 1/40 WB800 與 0.1× MS。',
 n:'—', nbio:1, days:5, readout_zh:'鮮重、每株葉綠素（樣品在採收與讀值之間乾掉，所以只能用每株葉綠素）',
 verdict:'direction',
 says_zh:'100 mM 下 1/40 BoPep4 保持綠色，鮮重與每株葉綠素都最高。結論寫成「濃度 ≥ 1/40 改善耐鹽性」。',
 cannot_zh:'無鹽時 1/40 到 1/100 都有花青素累積，可能是生長抑制。所以跟瓊脂 Set 10 一樣：有鹽才幫忙。',
 trap_zh:'「樣品乾掉」是個會被追問的句子。它意味著相對葉綠素那一欄作廢，只剩每株葉綠素 — 要主動說是哪一欄被放棄以及為什麼。'},

/* ─────────────────────────── 土壤 */
{id:'S1', sys:'soil', stress:'salt', agent:'vehicle', set:'9/6 方法比較', date:'9/6',
 label_zh:'兩種上鹽方式，選了比較狠的那個', label_en:'Two ways of salting, the harsher one wins',
 design_zh:'兩週齡。累積法（底部吸水、100 mM）對上方淋洗法（100 → 200 → 300 mM，每盆 30–50 mL，中間不給清水）。',
 n:'—', nbio:1, days:5, readout_zh:'鮮重、相對葉綠素',
 verdict:'direction',
 num_zh:'鮮重：累積法約 0.42 g，淋洗法 0.15 g（約 −64%）。葉綠素兩者都約 1.0 mg/L。',
 says_zh:'土壤裡 100 mM 不夠，要到 300 mM 才看得到逆境。選了淋洗法。',
 cannot_zh:'葉綠素在兩法之間一樣（都約 1.0），所以鮮重掉 64% 的同時葉綠素沒掉 — 這兩個指標在這裡就分家了。',
 trap_zh:'這一組正好是「鮮重與葉綠素量的是不同東西」的現場證據。拿它去回答 Kyle 第 4 題。',
 fig:'p-260822-soil-pots.webp'},

{id:'S2', sys:'soil', stress:'salt', agent:'accd', set:'9/12 ACCD 鹽', date:'9/12',
 label_zh:'土壤 ACCD 鹽逆境', label_en:'Soil ACCD salinity',
 design_zh:'兩週齡，淋洗 100 → 200 → 300 mM，以 300 mM 為基準。對照 TB 培養基，ACCD 前／同時／事後。',
 n:'—', nbio:1, days:5, readout_zh:'未標準化與標準化葉綠素（mg/L）',
 verdict:'direction',
 num_zh:'未標準化葉綠素 mg/L：對照約 1.00、前處理 0.67、同時 0.30、事後 1.13（比對照高約 13%）。',
 says_zh:'事後處理略高於對照，其他兩個時機都比對照低。',
 cannot_zh:'前處理與同時處理「低於對照」意思是在土壤裡它們有害。wiki 寫前／同時處理沒有阻止漂白，事後處理效果有限。標準化後卻是同時處理最高 — 兩種算法給相反的排序。',
 trap_zh:'同一組資料，未標準化說事後最好（1.13），標準化說同時最好。這就是 Kyle 第 16 題的核心。選一種算法，講出為什麼，然後兩種都呈現。'},

{id:'S3', sys:'soil', stress:'heat', agent:'accd', set:'9/22 ACCD 熱 t1+t2', date:'9/22',
 label_zh:'土壤 ACCD 熱逆境 — 每一根柱子都是一個盆', label_en:'Soil ACCD heat, one pot per bar',
 design_zh:'10 天齡，37 °C 五天，再 22–25 °C 回復五天。兩個 trial，每個條件每個 trial 只有一盆。',
 n:'1 盆', nbio:2, days:'5 + 5', readout_zh:'鮮重、標準化與未標準化葉綠素',
 verdict:'failed',
 num_zh:'鮮重 g：未受逆境對照約 0.12；受熱對照 0.195（t1）、0.225（t2）；同時處理 0.228（t1）、0.166（t2）；事後處理最低 0.103（t1）、0.052（t2）。標準化葉綠素指數：未受逆境約 1.0；t1 前處理 1.00、受熱對照 0.55、同時 0.48；t2 前處理 0.77、同時 0.69、受熱對照 0.46。',
 says_zh:'前處理在兩個 trial 都保住最多葉綠素（1.00 與 0.77），這是兩次一致的唯一一點。',
 cannot_zh:'每個條件一盆，所以每根柱子是一次測量，不是平均值 — wiki 自己這樣寫。沒有變異估計，就沒有統計。',
 trap_zh:'受熱對照的鮮重（0.195、0.225 g）比未受逆境對照（0.12 g）「高」。受熱的植物不該比沒受熱的重。這是全站最刺眼的一個矛盾 — 大概是對照盆的苗齡或盆子不同。評審一定會指這裡，先準備好說「這兩組不是同一批，不能直接比」。'},

{id:'S4', sys:'soil', stress:'heat', agent:'accd', set:'土壤熱（results 頁）', date:'—',
 label_zh:'results 頁的土壤熱 — 只有方法', label_en:'Soil heat on Results, methods only',
 design_zh:'37 °C 五天 + 22–25 °C 回復五天。計畫的終點：存活率、營養生長、葉綠素保留、花青素累積。',
 n:'—', nbio:0, days:'—', readout_zh:'—', verdict:'planned',
 says_zh:'計畫裡有存活率 — 這是全站唯一把存活率寫成終點的地方。',
 cannot_zh:'results 頁的土壤熱沒有任何數據。',
 trap_zh:'plant 頁有 9/22 的土壤熱數字，results 頁同一個實驗沒有結果。兩頁不一致 — 引用時說清楚你用的是 plant 頁。'}
];

/* 判讀等級的說明文字，給頁面用。 */
window.MATRIX_VERDICT = {
  strong:    {zh:'站得住', en:'Defensible',  note_zh:'量化、效果遠大於雜訊、區間不重疊。全站只有一列。'},
  direction: {zh:'只是方向', en:'A direction', note_zh:'量化了，但 n_bio = 1。可以說「我們看到」，不能說「我們證明」。'},
  qual:      {zh:'只有描述', en:'Qualitative', note_zh:'照片或沒有 error bar。只能講觀察。'},
  failed:    {zh:'這一 run 判不出來', en:'Undetermined', note_zh:'污染、地板效應、或設計上無法分離。wiki 自己承認。'},
  planned:   {zh:'只有方法', en:'Methods only', note_zh:'protocol 寫了，結果不在 wiki 上。絕對不要宣稱。'}
};

window.MATRIX_SYS = {
  agar:  {zh:'瓊脂平板', en:'Agar'},
  hydro: {zh:'水耕',     en:'Hydroponics'},
  soil:  {zh:'土壤盆栽', en:'Soil'}
};

window.MATRIX_AGENT = {
  treh:    {zh:'海藻糖',       en:'Trehalose',      note_zh:'市售參考化合物，不是我們做的。'},
  ch:      {zh:'富肽2號',      en:'CH Bio peptide', note_zh:'正瀚生技的商品，成分未揭露。'},
  accd:    {zh:'ACC 去胺酶',   en:'ACC deaminase',  note_zh:'我們的菌做的酵素。測得最多的一個。'},
  bopep:   {zh:'BoPep4',       en:'BoPep4',         note_zh:'我們的菌做的青花菜 elicitor peptide。'},
  lea:     {zh:'LEA14',        en:'LEA14',          note_zh:'野生型序列，我們的菌做的。'},
  vehicle: {zh:'載體本身',     en:'The vehicle',    note_zh:'WB800 培養液 / TB 培養基，不含保護劑。'}
};
