# ReLEAF · Plant seat judging prep

Judging preparation for the students holding the **plant seat** in the ReLEAF
(GEMS Taiwan, iGEM 2026) judging session — Room J03, Friday 13 November 2026,
12:00–12:25 Paris.

**Live:** https://timmy97-tw.github.io/releaf-plant-judging/

Chinese explanation, English keywords. The narrative, the mechanism and the
reasoning are in 繁體中文 because that is what the instructor reads fastest; the
keywords, the proper nouns and the sentences to say out loud stay in English
because that is what gets said in the room. The ten pages built on 25 October are
bilingual and kept. Static HTML, no build step — open `docs/index.html` or serve
the `docs/` folder.

## The learning track (5 November)

Rebuilt for the PI, who is learning the plant work from zero in two days in order
to drill the students on Saturday 7 November. These five sit on the first row of
the navigation.

| Page | What it is |
| --- | --- |
| `index.html` | The three sentences, the five pages, and a four-hour route through them |
| `matrix.html` | **The spine.** All 29 runs, one per row: three systems × two stresses × five agents, each with its n, its biological replicate count, what it supports, what it does not, and the trap. Filterable. Opens on a 30-cell coverage diagram |
| `numbers.html` | 21 numbers, each with its unit of inference, its control, the arithmetic and the trap. Carries the full ELISA table with the empty-host row marked, and five diagrams drawn here: the dose ceiling, the normalisation flip, the two ELISA problems, why forty seedlings are n = 1, and where the evidence chain breaks |
| `tonight.html` | Kyle Peng's ten questions of 4 November, each with the keyword flow, the English sentences in the order to say them, the numbers to have ready, the trap, and the instructor's ruling from that evening's meeting. Then Audrey's 25 minuted questions in their seven sections, each with the meeting's answer, the ruling, and what the wiki says that is sharper. Ends with the six things to confirm with the students before the room |
| `decoder.html` | 71 terms for someone who does not do biology: the English term, one line of plain meaning, and where it is stuck in this project. Grouped so the statistics and the protein groups can be read first |
| `drill.html` | Keyword-first drill over three decks — Kyle's 10, Audrey's 25, and the 117 from October — on a 90-second clock. Say the keywords out loud, then open the answer. Wrong answers collect into a shaky list |

## The ten pages from 25 October (kept, second nav row)

| Page | What it is |
| --- | --- |
| `facts.html` | 100 checkable plant facts from the frozen wiki, filterable by area and status, each with its source and its trap |
| `figures.html` | The plant figures grouped into **six shapes**, each figure with what it says and what it cannot say |
| `mechanism.html` | Why each protectant could work — ACC deaminase, LEA14, BoPep4, trehalose, CH peptide, glutathione — with solid and dashed links |
| `qa.html` | 117 questions across eight kinds, with a 90-second drill |
| `results.html` | 28 questions on reading our own Results page, plus four of our numbers worked through with the arithmetic |
| `rigour.html` | The boundary standard: the claim ladder, the four questions that fix a boundary, eight sentences to say instead, and the vocabulary |
| `kyle.html` | The advisor memo of 24 Oct 2026: two highlights and five research questions, each turned into a rehearsal |
| `deep.html` | The same five questions as a course — the science with 29 cited papers, six diagrams drawn here, the numbers, the one experiment each, and self-tests |
| `answer.html` | Six moves that give an answer its shape, the four kinds of not knowing, and a bilingual phrase bank |
| `redlines.html` | Ten sentences never to say with their replacements, the five places our own pages disagree, and what exists on the bench since the 21 Oct freeze |

## Where the content comes from

The learning track was written on 5 November against the live frozen wiki, read
end to end again on that date, plus Kyle Peng's ten questions of 4 November and
Audrey's minute of the meeting the same evening (`11_4 Plant Judging Notes.docx`).
Where the minute and the published numbers disagree, the numbers win and the page
says so.

Everything measured is from the frozen ReLEAF wiki — the
[Plants](https://2026.igem.wiki/gems-taiwan/plant) and
[Results](https://2026.igem.wiki/gems-taiwan/results) pages. Mechanism
reasoning is marked as reasoning. The "since the freeze" section is drawn from
the team's own post-freeze bench files and is deliberately kept apart from the
published record.

**Where this repository and the wiki differ, the wiki wins.**

## Question kinds

`fact` · `design` · `boundary` · `results` (reading our own Results page) ·
`deep` · `reason` (think on your feet) · `hostile` · `kyle` (derived from the
advisor memo)

## How an answer is written

Boundary-kind and Results-kind answers are written to the standard on
`rigour.html`, and carry more than the moves:

- `claim` — the one sentence that is warranted, before any reasoning
- `stat` — the arithmetic: the effect, its interval, the minimum detectable
  difference, or the ratio and its denominator
- `unit` — the unit of inference. What received the treatment, and how many of
  it there were
- `holds` / `fails` — the boundary in two columns, each failure named (floor
  effect, pseudoreplication, ratio denominator, internal control failure,
  provenance, external validity)
- `lit` — keys into `lit.js`, printed as citation chips

Statistics are computed from the means and standard deviations on our own
frozen pages. Intervals are Welch; detectable differences are at alpha 0.05
two-sided and power 0.80. All of them treat seedlings as independent, which is
the pseudoreplication each answer declares in the same breath.

## Editing

All content lives in `docs/assets/data/*.js` as plain objects — no build, no
JSON loading, no server needed. Edit a file, reload the page.

- `facts.js` — the fact base, its groups and its status vocabulary
- `figures.js` — the six clusters and their figures
- `qa-core.js`, `qa-probe.js`, `qa-hard.js`, `qa-results.js` — the question bank
- `kyle.js` — the advisor memo, unpacked
- `deep.js` — the five questions as a course, bilingual
- `figs.js` — the six diagrams, as inline SVG strings
- `lit.js` — the reading list, keyed; PubMed identifiers where they exist
- `rigour.js` — the claim ladder, the four tests, the sentence swaps, the glossary, the four worked examples
- `content.js` — answer architecture, phrase bank, red lines, conflicts, post-freeze notes

The learning track adds five more, same rules, no build:

- `matrix.js` — the 29 runs, plus the verdict / system / agent vocabularies
- `numbers.js` — the 21 numbers in six groups, one of them carrying a table
- `decoder.js` — the 71 terms in five groups
- `tonight.js` — `KYLE10` (ten questions) and `AUDREY` (seven sections, 25 questions)
- `draw.js` — seven diagrams as inline SVG strings, each with a title, a lede and
  the one sentence to take away

`learn.css` carries the styles for those five pages and the two-row navigation.

`RL.qaBody()` in `app.js` renders one answer card for both `qa.html` and
`results.html`; every extra field is optional, so older questions still render.

Figures are copies of the wiki's own files, in `docs/assets/img/fig/`.

## Licence

Content is the team's own, under CC BY 4.0 like the wiki it is drawn from.
