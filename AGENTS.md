<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Content voice & style

Reference: hrushikesh-yadav.vercel.app (a colleague's portfolio) — its writing is the bar for
future copy on this site. Match it when writing or editing anything in `content/*.ts` or inline
JSX copy (hero, about, contact, section headers, etc.):

- **No marketing adjectives.** Cut "world-class", "cutting-edge", "seamless(ly)", "bleeding
  edge", "state-of-the-art", "revolutionary", "robust", "powerful". State what was built instead
  of praising it — the fact should do the convincing, not the adjective.
- **Concrete numbers over vague claims.** "5,700+ commits over 4.5 years without a rewrite" beats
  "extensive experience." Every claim of scale or impact should be backed by a number, a named
  product, or both.
- **Short aphorism + evidence, for principles/beliefs.** One plain-language claim (e.g.
  "Architecture is a feature"), then 1–2 sentences of a specific, real example that proves it —
  never leave a principle abstract.
- **Verb-first, compressed bullets** for project/experience highlights ("Owned the web console…",
  "Built a fully custom HLS video player…") — not full narrative sentences stacked with clauses.
- **Plain section headers** ("Selected Work", "Career", "Stack") — no cute/forced wordplay.
- If a rewrite still reads like a pitch instead of a fact, cut adjectives until it's just the
  fact.
- **Simple, everyday words over formal/heavy ones.** She's explicitly asked for this twice —
  titles and body copy should read as plain English, not resume-speak. Swap "architected" →
  "built", "instrumented" → "added", "internationalization" → "multi-language support" /
  "every language", "established/drove adoption of" → "set/brought", "from primitives" → "from
  scratch", "end-to-end" → "start to finish", "sacrificing stability" → "breaking things". Keep
  real technical nouns (React, GraphQL, HLS, i18n as a stack-tag) — simplify the connecting
  prose around them, not the tech itself. Principle/belief titles especially should be short,
  plain statements (e.g. "Speed comes first.", "Keep it simple to use.") rather than literary or
  abstract phrasing.
