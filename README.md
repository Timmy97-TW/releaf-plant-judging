# ReLEAF · Plant seat judging prep

Judging preparation for the students holding the **plant seat** in the ReLEAF
(GEMS Taiwan, iGEM 2026) judging session — Room J03, Friday 13 November 2026,
12:00–12:25 Paris.

**Live:** https://timmy97-tw.github.io/releaf-plant-judging/

Bilingual EN / 繁體中文. Static HTML, no build step — open `docs/index.html`
or serve the `docs/` folder.

## What is in it

| Page | What it is |
| --- | --- |
| `index.html` | The session, the three sentences to own, and how to use the week before |
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

`RL.qaBody()` in `app.js` renders one answer card for both `qa.html` and
`results.html`; every extra field is optional, so older questions still render.

Figures are copies of the wiki's own files, in `docs/assets/img/fig/`.

## Licence

Content is the team's own, under CC BY 4.0 like the wiki it is drawn from.
