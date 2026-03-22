# Researcher Vault Setup

> Scaffold an academic research workspace with templates for proposals, literature review, experiments, data analysis, paper drafts, peer review, conferences, grants, and reading notes.

## What Gets Created

### Templates (9 templates)
- **Research Proposal** — title, background, research questions, methodology, expected outcomes, timeline, budget
- **Literature Review Entry** — citation, summary, key arguments, methodology, relevance, gaps, quotes
- **Experiment Log** — hypothesis, materials, procedure, observations, results, conclusions, next steps
- **Data Analysis Notes** — dataset, variables, methods, findings, visualizations needed, limitations
- **Paper Draft Section** — section title, outline, draft text, citations, revision notes
- **Peer Review Notes** — paper title, summary, strengths, weaknesses, major concerns, recommendation
- **Conference Notes** — conference, talk title/speaker, key points, questions, connections to own work
- **Grant Application Notes** — funding body, deadline, requirements, specific aims, budget outline
- **Reading Notes** — source, thesis, key arguments, methodology, evidence, critique, relevance

### Folder Structure
```
Projects/
  [Project Name]/
    Experiments/
    Data/
    Writing/
Literature/
  By Topic/
  To Read/
Grants/
  Active/
  Archive/
Conferences/
Writing/
  Papers/
  Presentations/
```

---

## Setup Prompt

> Copy and paste this prompt into your AI assistant (with mdcrypt MCP configured).

---
You are setting up an Academic Researcher vault in mdcrypt. Follow these steps in order, using the mdcrypt MCP tools.

**Step 1: Identify the target crypt**
Call `list_crypts`. Show me the results and ask which crypt to use. If there is only one or a default is marked, proceed with that one. Remember the `crypt_id` for all subsequent calls.

**Step 2: Create templates**
Create each template below using `create_template`. Use the exact name, description, and content provided.

---

Template 1 — Name: `Research Proposal`
Description: `Draft a research proposal with questions, methodology, timeline, and budget`
Content:
```
# Research Proposal: [Title]

**Principal Investigator:** [Name]
**Institution / Affiliation:** [Institution]
**Submission Date:** [YYYY-MM-DD]
**Funding Target:** [Funding body or internal]
**Status:** Draft | Under Review | Submitted | Funded | Rejected

---

## Abstract
[150–250 words summarizing the proposed research, its significance, and expected outcomes]

## Background and Significance
[What is the state of knowledge in this area? What gap does this research address? Why does it matter?]

## Research Questions
1. [Primary research question]
2. [Secondary research question]
3. [Additional question if applicable]

## Hypotheses
- H1: [Hypothesis 1]
- H2: [Hypothesis 2]

## Methodology
### Study Design
[Experimental / observational / qualitative / mixed-methods — describe the overall approach]

### Participants / Sample
[Who or what will be studied? Inclusion/exclusion criteria. Sample size and justification.]

### Data Collection
[How will data be collected? Instruments, protocols, tools.]

### Data Analysis
[How will data be analyzed? Statistical methods, qualitative coding, etc.]

### Ethical Considerations
[IRB/ethics board requirements, consent procedures, data privacy, potential risks]

## Expected Outcomes
[What do you expect to find? What will be the contribution to the field?]

## Timeline
| Phase | Activities | Duration | Start |
|---|---|---|---|
| 1 | Literature review | [X weeks] | [Date] |
| 2 | Data collection | [X weeks] | [Date] |
| 3 | Analysis | [X weeks] | [Date] |
| 4 | Writing & dissemination | [X weeks] | [Date] |

## Budget Outline
| Category | Item | Cost |
|---|---|---|
| Personnel | [Role — X% effort] | $[amount] |
| Equipment | [Item] | $[amount] |
| Supplies | [Description] | $[amount] |
| Travel | [Conference / fieldwork] | $[amount] |
| **Total** | | $[amount] |

## References
- [Citation 1]
- [Citation 2]
```

---

Template 2 — Name: `Literature Review Entry`
Description: `Capture a single paper or source for a systematic literature review`
Content:
```
# Literature Review Entry

**Citation:** [Author(s), Year. Title. Journal, Volume(Issue), Pages. DOI]
**Date Read:** [YYYY-MM-DD]
**Project:** [Research project this relates to]
**Tags:** [topic, method, theory]

---

## Summary
[2–4 sentence summary: What did they study, how, and what did they find?]

## Key Arguments
- [Argument 1]
- [Argument 2]
- [Argument 3]

## Methodology
- **Design:** [Experimental / qualitative / survey / meta-analysis / etc.]
- **Sample:** [N = X; description of participants or data]
- **Methods:** [Key methods used]
- **Analysis:** [How data was analyzed]

## Key Findings
- [Finding 1 — with effect size or p-value if quantitative]
- [Finding 2]
- [Finding 3]

## Limitations (as noted by authors)
- [Limitation 1]
- [Limitation 2]

## Critique
[My assessment: What are the methodological strengths? What concerns do I have?]

## Relevance to My Research
[How does this directly support, contradict, or contextualize my work?]

## Gaps This Identifies
[What questions does this raise that my research could address?]

## Notable Quotes
> "[Direct quote]" (p. X)

## Related Works to Follow Up
- [Author, Year — reason to read]
```

---

Template 3 — Name: `Experiment Log`
Description: `Record a single experiment with hypothesis, procedure, observations, and conclusions`
Content:
```
# Experiment Log: [Experiment ID / Title]

**Date:** [YYYY-MM-DD]
**Project:** [Project name]
**Experimenter:** [Name]
**Location:** [Lab / field site / computational environment]

---

## Hypothesis
[State the specific, testable hypothesis for this experiment]

## Independent Variable(s)
- [Variable name] — [levels or range]

## Dependent Variable(s)
- [Variable name] — [unit of measurement]

## Controlled Variables
- [Variable — held constant at: value]

## Materials & Equipment
- [Item — quantity / spec]
- [Item — quantity / spec]

## Procedure
1. [Step 1]
2. [Step 2]
3. [Step 3]
4. [Continue as needed]

## Safety / Ethics Notes
[Any safety precautions, IRB requirements, or data handling protocols]

## Raw Observations
[Record observations as they happen — data tables, field notes, anomalies]

| Trial | [Variable] | [Measurement] | Notes |
|---|---|---|---|
| 1 | | | |
| 2 | | | |

## Analysis
[How were the data analyzed? Statistical tests applied?]

## Results
[Summary of results — refer to tables/figures if applicable]

## Conclusions
[Does the data support or refute the hypothesis? What can be concluded?]

## Anomalies / Unexpected Observations
[Anything unexpected that occurred during the experiment]

## Next Steps
- [ ] [Follow-up experiment or analysis]
- [ ] [Replication needed]
```

---

Template 4 — Name: `Data Analysis Notes`
Description: `Document a data analysis session with methods, findings, and limitations`
Content:
```
# Data Analysis Notes: [Dataset / Analysis Title]

**Date:** [YYYY-MM-DD]
**Project:** [Project name]
**Analyst:** [Name]
**Dataset:** [Name, version, source]

---

## Objective
[What question is this analysis trying to answer?]

## Dataset Description
- **Source:** [Where the data came from]
- **N:** [Sample size]
- **Time period:** [Date range if applicable]
- **Format:** [CSV / SQL / JSON / etc.]
- **Key variables:**
  - `[variable_name]` — [type, description]
  - `[variable_name]` — [type, description]

## Pre-processing Steps
- [ ] Missing data: [how handled]
- [ ] Outliers: [how identified and handled]
- [ ] Transformations: [normalizations, encodings, derived variables]
- [ ] Exclusions: [criteria and count of excluded records]

## Methods
- **Statistical approach:** [e.g. linear regression, ANOVA, thematic coding]
- **Software / tools:** [R, Python, SPSS, NVivo]
- **Code / script location:** [Path or repo link]

## Findings
### Primary Result
[Main finding with statistic, effect size, confidence interval]

### Secondary Results
- [Finding 2]
- [Finding 3]

## Tables & Figures Needed
- [ ] [Figure 1: description]
- [ ] [Table 1: description]

## Limitations
- [Limitation 1 — impact on interpretation]
- [Limitation 2]

## Interpretation
[What do these findings mean in the context of the research question?]

## Next Analysis Steps
- [ ] [Follow-up analysis or robustness check]
```

---

Template 5 — Name: `Paper Draft Section`
Description: `Draft a section of an academic paper with outline, prose, and citations`
Content:
```
# Paper Draft: [Section Title]

**Paper Title:** [Full paper title]
**Section:** Introduction | Literature Review | Methods | Results | Discussion | Conclusion
**Target Journal:** [Journal name]
**Draft Number:** [1st / 2nd / 3rd]
**Target Word Count:** [X words]
**Actual Word Count:** [update as you write]

---

## Section Outline
1. [Point 1]
2. [Point 2]
3. [Point 3]

## Key Claims to Make
- [Claim that this section needs to establish]
- [Claim 2]

## Citations to Include
- [Author, Year] — [why it belongs here]
- [Author, Year] — [why it belongs here]

---

## Draft

[Write your prose here. Use [CITE: Author Year] as inline placeholders for citations.]

---

## Revision Notes
- [ ] [Improve transition from previous section]
- [ ] [Clarify argument at paragraph 3]
- [ ] [Add citation for claim on line X]
- [ ] [Tighten — currently over word count]

## Reviewer Concerns to Pre-empt
[What objections might a reviewer raise? Address them in the text or note where to add caveats.]
```

---

Template 6 — Name: `Peer Review Notes`
Description: `Structure a peer review with strengths, concerns, and recommendation`
Content:
```
# Peer Review: [Manuscript Title]

**Journal:** [Journal name]
**Manuscript ID:** [ID from journal system]
**Date Received:** [YYYY-MM-DD]
**Review Due:** [YYYY-MM-DD]
**Review Submitted:** [YYYY-MM-DD]

---

## Summary
[2–3 sentences: What is the paper about, what is its central claim, and what methods does it use?]

## Overall Assessment
[Your overall impression before diving into specifics — is this paper close to publishable? Needs major work? Reject?]

## Strengths
- [Strength 1 — be specific]
- [Strength 2]
- [Strength 3]

## Major Concerns (must be addressed for publication)
1. [Major concern 1 — be specific, cite section/page where possible]
2. [Major concern 2]
3. [Major concern 3]

## Minor Concerns (should be addressed)
- [ ] [Minor issue — page/section]
- [ ] [Minor issue — page/section]

## Specific Comments
| Location | Comment |
|---|---|
| p. [X], para [Y] | [Comment] |
| Table [N] | [Comment] |
| Figure [N] | [Comment] |

## Statistical / Methodological Review
[Are the methods appropriate? Are analyses correctly reported? Any red flags?]

## Recommendation
- [ ] Accept as is
- [ ] Minor revisions
- [ ] Major revisions
- [ ] Reject

**Rationale:** [1–2 sentences supporting your recommendation]
```

---

Template 7 — Name: `Conference Notes`
Description: `Capture key insights from a conference talk or session`
Content:
```
# Conference Notes: [Talk / Session Title]

**Conference:** [Conference name and year]
**Date:** [YYYY-MM-DD]
**Speaker(s):** [Name(s) and affiliation(s)]
**Session Type:** Keynote | Talk | Panel | Poster | Workshop

---

## Talk Summary
[2–3 sentence summary of what was presented]

## Key Points
- [Point 1]
- [Point 2]
- [Point 3]

## Methods / Findings of Interest
[Any specific methods, datasets, or results that are relevant to your work]

## Notable Quotes
> "[Quote]" — [Speaker name]

## Figures / Slides Worth Noting
[Description of any figures, tables, or visuals worth referencing later]

## Questions I Had
- [Question 1 — did they answer it?]
- [Question 2]

## Connections to My Work
- [How this relates to my current project]
- [Potential collaboration or citation]

## Follow-up Actions
- [ ] [Download slides or paper if available]
- [ ] [Email speaker about X]
- [ ] [Add to literature review]

## Networking Notes
[Brief notes on conversations had at this session or event]
```

---

Template 8 — Name: `Grant Application Notes`
Description: `Organize notes for a grant application including aims, budget, and requirements`
Content:
```
# Grant Application Notes: [Grant Name / Program]

**Funding Body:** [Agency or foundation]
**Program / FOA:** [Program name or funding opportunity announcement number]
**Deadline:** [YYYY-MM-DD]
**Amount Requested:** $[amount]
**PI:** [Name]
**Status:** Researching | Writing | Under Review | Funded | Not Funded

---

## Eligibility & Fit
- [Eligibility requirement 1 — do we meet it?]
- [Eligibility requirement 2 — do we meet it?]
- [Why our work fits this funding priority]

## Required Documents
- [ ] Specific aims / project summary (limit: [X pages])
- [ ] Research strategy (limit: [X pages])
- [ ] Budget and justification
- [ ] Biosketches for key personnel
- [ ] Letters of support
- [ ] [Other required document]

## Specific Aims Draft
[Draft your 1-page specific aims here — the most important part of most grant applications]

**Overall Goal:** [What the project will accomplish]

**Aim 1:** [Title]
[One sentence description]

**Aim 2:** [Title]
[One sentence description]

**Aim 3:** [Title] *(if applicable)*
[One sentence description]

## Significance & Innovation
[What gap does this fill? What is novel about the approach?]

## Budget Outline
| Category | Item | Amount |
|---|---|---|
| Personnel | [Names / roles] | $[amount] |
| Indirect costs | [Rate: X%] | $[amount] |
| Equipment | [Items] | $[amount] |
| Travel | [Conferences / fieldwork] | $[amount] |
| **Total** | | $[amount] |

## Review Criteria (per FOA)
[List the review criteria and note how our application addresses each]

## Notes & Strategy
[Any strategic notes — reviewer preferences, past feedback on similar applications, collaborators to include]
```

---

Template 9 — Name: `Reading Notes`
Description: `Capture detailed notes on a book, paper, or other source`
Content:
```
# Reading Notes: [Title]

**Author(s):** [Author(s)]
**Year:** [Year]
**Type:** Journal Article | Book | Book Chapter | Report | Thesis
**Citation:** [Full citation]
**Date Read:** [YYYY-MM-DD]
**Project:** [Research project]

---

## Central Thesis
[One sentence: What is the author's main argument or claim?]

## Key Arguments
1. [Argument 1 — brief explanation]
2. [Argument 2]
3. [Argument 3]

## Methodology
[How was the research conducted? What approach or framework is used?]

## Evidence & Examples
- [Key piece of evidence — p. X]
- [Key piece of evidence — p. X]

## Critique
**Strengths:**
- [What the author does well]

**Weaknesses:**
- [Methodological gaps, unsupported claims, blind spots]

## Relevance to My Research
[How does this support, contradict, or complicate my work?]

## Key Quotes
> "[Quote]" (p. X)

> "[Quote]" (p. X)

## Concepts / Terms to Follow Up
- [Concept — definition or link to another source]

## Related Works Cited
- [Author, Year — why to read]
```

---

**Step 3: Create the root-level folders**
Create each of these folders using `create_folder` with the `crypt_id` from Step 1. No `parent_id` needed for root folders.

1. Create folder named `Projects` in the crypt
2. Create folder named `Literature` in the crypt
3. Create folder named `Grants` in the crypt
4. Create folder named `Conferences` in the crypt
5. Create folder named `Writing` in the crypt

**Step 4: Create subfolders**
Create each subfolder using `create_folder`, supplying the `parent_id` returned from the parent folder creation in Step 3.

1. Create folder named `Project Name` using the ID returned from creating `Projects`
2. Create folder named `Experiments` using the ID returned from creating the `Project Name` folder
3. Create folder named `Data` using the ID returned from creating the `Project Name` folder
4. Create folder named `Writing` using the ID returned from creating the `Project Name` folder
5. Create folder named `By Topic` using the ID returned from creating `Literature`
6. Create folder named `To Read` using the ID returned from creating `Literature`
7. Create folder named `Active` using the ID returned from creating `Grants`
8. Create folder named `Archive` using the ID returned from creating `Grants`
9. Create folder named `Papers` using the ID returned from creating the root `Writing` folder
10. Create folder named `Presentations` using the ID returned from creating the root `Writing` folder

After completing all steps, provide a summary table of templates created and the folder hierarchy.
---
