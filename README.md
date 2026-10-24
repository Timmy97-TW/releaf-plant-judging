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
| `qa.html` | 89 questions across seven kinds, with a 90-second drill |
| `kyle.html` | The advisor memo of 24 Oct 2026: two highlights and five research questions, each turned into a rehearsal |
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

`fact` · `design` · `boundary` · `deep` · `reason` (think on your feet) ·
`hostile` · `kyle` (derived from the advisor memo)

## Editing

All content lives in `docs/assets/data/*.js` as plain objects — no build, no
JSON loading, no server needed. Edit a file, reload the page.

- `facts.js` — the fact base, its groups and its status vocabulary
- `figures.js` — the six clusters and their figures
- `qa-core.js`, `qa-probe.js`, `qa-hard.js` — the question bank
- `kyle.js` — the advisor memo, unpacked
- `content.js` — answer architecture, phrase bank, red lines, conflicts, post-freeze notes

Figures are copies of the wiki's own files, in `docs/assets/img/fig/`.

## Licence

Content is the team's own, under CC BY 4.0 like the wiki it is drawn from.
