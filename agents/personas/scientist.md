# Scientist Vault Setup

> Scaffold a lab research workspace with templates for lab notebook entries, experiment protocols, data analysis, grant proposals, paper outlines, peer review, conference abstracts, equipment logs, and literature notes.

## What Gets Created

### Templates (9 templates)
- **Lab Notebook Entry** — date, experiment ID, hypothesis, materials, procedure, observations, analysis, conclusions, next steps
- **Experiment Protocol** — protocol ID, purpose, safety, materials, step-by-step procedure, controls, expected outcomes, troubleshooting
- **Data Analysis** — experiment ID, dataset, statistical methods, results, interpretation, limitations, conclusions
- **Grant Proposal Notes** — funding agency, deadline, specific aims, significance, innovation, approach, budget justification
- **Paper Outline** — title, journal target, abstract draft, introduction, methods, results, discussion, conclusion
- **Peer Review** — manuscript title, journal, summary, major concerns, minor concerns, recommendation, line edits
- **Conference Abstract** — title, authors, background, methods, results, conclusion, keywords
- **Equipment Log** — instrument, date, operator, calibration status, run details, issues, maintenance needed
- **Literature Notes** — citation, hypothesis, methods, key findings, limitations, relevance, open questions

### Folder Structure
```
Projects/
  [Project Name]/
    Protocols/
    Experiments/
    Data/
    Analysis/
Lab Notebook/
Grants/
  In Progress/
  Submitted/
  Awarded/
Publications/
  Drafts/
  Published/
Conferences/
Literature/
```

---

## Setup Prompt

> Copy and paste this prompt into your AI assistant (with mdcrypt MCP configured).

---
You are setting up a Scientist / Lab Researcher vault in mdcrypt. Follow these steps in order, using the mdcrypt MCP tools.

**Step 1: Identify the target crypt**
Call `list_crypts`. Show me the results and ask which crypt to use. If there is only one or a default is marked, proceed with that one. Remember the `crypt_id` for all subsequent calls.

**Step 2: Create templates**
Create each template below using `create_template`. Use the exact name, description, and content provided.

---

Template 1 — Name: `Lab Notebook Entry`
Description: `Record a lab experiment with hypothesis, procedure, observations, and conclusions`
Content:
```
# Lab Notebook Entry: [Experiment ID]

**Date:** [YYYY-MM-DD]
**Time Start:** [HH:MM]
**Time End:** [HH:MM]
**Experiment ID:** [e.g. EXP-2025-047]
**Project:** [Project name]
**Experimenter:** [Name]
**Witnessed by:** [Name — required for patent-relevant work]

---

## Objective
[What is the specific question or goal of this experiment?]

## Hypothesis
[State a clear, testable hypothesis]

## Background / Rationale
[Why is this experiment being done? What prior results motivate it?]

## Materials & Equipment
| Item | Quantity / Spec | Lot # / Source |
|---|---|---|
| [Reagent / material] | [Amount / concentration] | [Lot #] |
| [Instrument] | [Model] | [Location] |

## Procedure
1. [Step 1 — be specific: volumes, temperatures, times]
2. [Step 2]
3. [Step 3]

*Note any deviations from the protocol as they occur.*

## Safety & Hazard Notes
- [Hazard 1 — PPE required, disposal method]
- [Hazard 2]

## Raw Observations
[Record exactly what you observe as it happens — do not interpret here]

| Time | Observation |
|---|---|
| [HH:MM] | [Observation] |

### Data Tables
| Sample | [Variable 1] | [Variable 2] | [Measurement] |
|---|---|---|---|
| [Sample ID] | | | |

## Analysis
[Calculations, statistical tests, interpretation of raw data]

## Results
[Summary of findings — what did the data show?]

## Conclusions
[Did results support the hypothesis? What can be concluded?]

## Anomalies & Issues
[Anything unexpected, equipment failures, protocol deviations]

## Next Steps
- [ ] [Follow-up experiment]
- [ ] [Analysis to run]
- [ ] [Protocol to update]
```

---

Template 2 — Name: `Experiment Protocol`
Description: `Standard operating procedure for a repeatable experiment`
Content:
```
# Experiment Protocol: [Protocol Title]

**Protocol ID:** [e.g. PROT-2025-012]
**Version:** [1.0]
**Author:** [Name]
**Date Created:** [YYYY-MM-DD]
**Last Revised:** [YYYY-MM-DD]
**Approved by:** [Name / Date]
**Project:** [Project name]

---

## Purpose
[What does this protocol accomplish? What experiment or technique does it describe?]

## Scope
[When should this protocol be used? Any limitations on its application?]

## Safety Considerations
| Hazard | Risk | Control Measure |
|---|---|---|
| [Chemical / biohazard] | [Risk description] | [PPE, fume hood, disposal] |

## Required Materials
### Reagents
| Reagent | Concentration / Grade | Amount per run | Storage |
|---|---|---|---|
| [Name] | [Spec] | [Amount] | [Temp/conditions] |

### Equipment
| Equipment | Model / Spec | Setting |
|---|---|---|
| [Name] | [Model] | [Settings] |

## Preparation
[Anything that must be done before starting: prepare buffers, calibrate instruments, etc.]

---

## Procedure

### Part 1: [Phase Name]
1. [Step 1 — specific: volume, temperature, time, speed]
2. [Step 2]
3. [Step 3]

### Part 2: [Phase Name]
1. [Step 1]
2. [Step 2]

---

## Controls
| Control | Type | Expected Result |
|---|---|---|
| [Positive control] | Positive | [Expected] |
| [Negative control] | Negative | [Expected] |
| [Blank] | Blank | [Expected] |

## Expected Outcomes
[What results indicate the experiment worked correctly?]

## Data Recording
[What data should be recorded and where? Link to data sheet or notebook template.]

## Troubleshooting
| Problem | Possible Cause | Solution |
|---|---|---|
| [Issue 1] | [Cause] | [Fix] |
| [Issue 2] | [Cause] | [Fix] |

## Waste Disposal
[How to dispose of each type of waste generated by this protocol]

## References
- [Source protocol, paper, or SOP this is based on]
```

---

Template 3 — Name: `Data Analysis`
Description: `Document a data analysis with methods, results, interpretation, and limitations`
Content:
```
# Data Analysis: [Analysis Title]

**Date:** [YYYY-MM-DD]
**Analyst:** [Name]
**Experiment ID(s):** [EXP-XXXX, EXP-XXXX]
**Project:** [Project name]
**Software / Tools:** [R, Python, GraphPad, MATLAB, etc.]
**Script / Notebook Location:** [File path or repository link]

---

## Objective
[What question is this analysis answering?]

## Dataset
- **Source:** [Experiment(s) or data files]
- **n:** [Sample size — number of replicates, animals, samples]
- **Excluded data points:** [Any outliers removed — with justification]

## Statistical Methods
| Test | Variable(s) | Rationale |
|---|---|---|
| [e.g. One-way ANOVA] | [DV, IV] | [Why this test] |
| [Post-hoc test] | [Groups compared] | [Why] |

**Significance threshold:** α = [0.05 / 0.01]

## Results

### Primary Result
[Main finding with test statistic, degrees of freedom, p-value, effect size]
[e.g. F(2, 45) = 12.3, p < 0.001, η² = 0.35]

### Secondary Results
| Comparison | Statistic | p-value | Effect Size |
|---|---|---|---|
| [Group A vs B] | [value] | [p] | [d or r] |

## Figures
- [ ] **Figure 1:** [Description — bar graph, scatter plot, etc.]
- [ ] **Figure 2:** [Description]

## Interpretation
[What do the results mean biologically / scientifically? Relate back to hypothesis.]

## Limitations
- [Limitation 1 — impact on conclusions]
- [Limitation 2]

## Conclusions
[Final conclusions supported by this analysis]

## Next Analysis Steps
- [ ] [Additional analysis or robustness check]
- [ ] [Replication with larger n]
```

---

Template 4 — Name: `Grant Proposal Notes`
Description: `Organize notes for a scientific grant application`
Content:
```
# Grant Proposal Notes: [Grant Title]

**Funding Agency:** [NIH / NSF / ERC / private foundation]
**Program / FOA:** [Program name and number]
**Deadline:** [YYYY-MM-DD]
**Mechanism:** [R01 / R21 / K-award / proposal type]
**PI:** [Name]
**Institution:** [Institution]
**Budget (direct costs):** $[amount/year] for [X years]
**Status:** Developing | Writing | Internal review | Submitted | Scored | Funded | Not Funded

---

## Eligibility Check
- [ ] PI meets career stage requirements
- [ ] Institution is eligible
- [ ] Research area fits program priorities
- [ ] Budget is within allowable limits

## Specific Aims (1 page — most critical)
**Overall Objective:** [What this project will accomplish]

**Central Hypothesis:** [Testable hypothesis driving the project]

**Aim 1:** [Title]
[1–2 sentence description of the aim and expected outcome]

**Aim 2:** [Title]
[1–2 sentence description]

**Aim 3:** [Title — if applicable]
[1–2 sentence description]

**Innovation:** [What is novel about this approach or question?]

**Impact:** [What will be the field impact if successful?]

## Significance
[Why is this research important? What gap does it fill? What is the clinical / scientific relevance?]

## Innovation
[How does this project challenge existing paradigms or apply new approaches?]

## Approach
[Outline of the experimental strategy for each aim — include preliminary data summary]

### Preliminary Data Summary
[Key results that support the hypothesis and demonstrate feasibility]

## Budget Justification Notes
| Category | Amount | Justification |
|---|---|---|
| Personnel | $[amount] | [Names, % effort, roles] |
| Equipment | $[amount] | [Items — why needed] |
| Supplies | $[amount] | [Key consumables] |
| Travel | $[amount] | [Conferences] |
| Indirect costs | $[amount] | [Rate: X%] |

## Reviewers to Consider (Study Section)
[Names of study section members and any conflicts of interest to declare]

## Revision History
[If resubmission: summary of reviewer critiques and how addressed]
```

---

Template 5 — Name: `Paper Outline`
Description: `Plan a scientific paper from abstract through conclusion`
Content:
```
# Paper Outline: [Working Title]

**Target Journal:** [Journal name]
**Impact Factor:** [IF]
**Article Type:** Original Research | Review | Brief Communication | Letter
**Submission Target:** [YYYY-MM-DD]
**Authors:** [Author list — in order]
**Corresponding Author:** [Name]

---

## Abstract Draft (250 words max)
**Background:** [1–2 sentences of context]
**Objective:** [What question did we ask?]
**Methods:** [Brief summary of approach]
**Results:** [Key findings with numbers]
**Conclusion:** [Main takeaway and implication]

---

## Introduction
1. [Opening — broad context, why this area matters]
2. [Narrow to specific problem — what is known and unknown]
3. [Gap in knowledge this study addresses]
4. [Brief statement of approach]
5. [Objectives / aims of this study]

## Methods
- [ ] Study design and rationale
- [ ] Participants / subjects / samples
- [ ] Key procedures (with citation to protocols)
- [ ] Data collection instruments
- [ ] Statistical analysis plan
- [ ] Ethical approval statement

## Results
### Figure / Table Plan
| Figure | Type | Shows |
|---|---|---|
| Fig 1 | [Bar graph / western blot / etc.] | [What data] |
| Fig 2 | [Type] | [What data] |

### Results Outline
1. [Result 1 — figure reference]
2. [Result 2 — figure reference]
3. [Result 3 — figure reference]

## Discussion
1. [Restate main finding]
2. [Contextualize vs prior literature — what does this confirm / contradict?]
3. [Mechanistic interpretation]
4. [Limitations]
5. [Future directions]
6. [Conclusion / broader significance]

## Key References to Include
- [Author Year] — [why essential]
- [Author Year] — [why essential]

## Supplementary Materials Plan
- [Supplementary figure / table description]
```

---

Template 6 — Name: `Peer Review`
Description: `Structure a scientific peer review with concerns and recommendation`
Content:
```
# Peer Review: [Manuscript Title]

**Journal:** [Journal name]
**Manuscript ID:** [ID]
**Date Received:** [YYYY-MM-DD]
**Review Due:** [YYYY-MM-DD]
**Submitted:** [YYYY-MM-DD]

---

## Summary
[3–4 sentences: What did the authors study, what approach did they use, what did they find, what do they conclude?]

## Assessment of Significance
[Is this an important question? Does this advance the field meaningfully?]

## Assessment of Rigor
[Are the methods sound? Are controls appropriate? Is the statistical analysis correct?]

## Major Concerns (required for publication)
1. **[Concern title]:** [Specific concern — cite figure/line/page. State what experiment or revision would address it.]
2. **[Concern title]:** [Specific concern]
3. **[Concern title]:** [Specific concern]

## Minor Concerns (should be addressed)
- [ ] [Minor issue — figure/line]
- [ ] [Clarification needed — section]
- [ ] [Missing citation]

## Statistical Review
- [ ] Sample sizes are reported and justified
- [ ] Statistical tests are appropriate for the data
- [ ] Error bars are defined in figure legends
- [ ] Exact p-values reported (not just < 0.05)
- [ ] Effect sizes reported where appropriate

## Figure / Table Comments
| Figure | Comment |
|---|---|
| Fig [N] | [Specific comment] |
| Table [N] | [Specific comment] |

## Recommendation
- [ ] Accept
- [ ] Minor revision
- [ ] Major revision
- [ ] Reject

**Summary for authors:** [1–2 sentences on the main barrier to publication and what would change the decision]
```

---

Template 7 — Name: `Conference Abstract`
Description: `Draft a scientific conference abstract for submission`
Content:
```
# Conference Abstract: [Title]

**Conference:** [Conference name and year]
**Submission Deadline:** [YYYY-MM-DD]
**Abstract Type:** Poster | Oral | Either
**Word Limit:** [X words]
**Authors:** [Author list]
**Presenting Author:** [Name, institution]

---

## Abstract

**Title:** [Title — typically Title Case, under 20 words]

**Authors:** [First Author¹, Second Author², Presenting Author¹]
**Affiliations:** [¹Institution, ²Institution]

**Background:**
[1–3 sentences: Why is this question important? What is the gap in knowledge?]

**Methods:**
[2–4 sentences: Study design, subjects/samples, key procedures, analysis approach]

**Results:**
[3–5 sentences: Key findings with specific numbers, statistical results, effect sizes]

**Conclusion:**
[1–2 sentences: What do these results mean? What is the scientific or clinical impact?]

**Keywords:** [keyword1], [keyword2], [keyword3], [keyword4]

---

## Submission Notes
- **Word count:** [X / X words]
- **Figures allowed:** Yes / No (X figures)
- **Category / Track:** [Conference track or category]
- **Conflicts of interest:** [None / list]
- **Funding:** [Grant numbers to acknowledge]

## Submission Status
- [ ] Abstract drafted
- [ ] Co-authors reviewed and approved
- [ ] Submitted
- [ ] Notification received: [Accepted / Rejected / Date]
```

---

Template 8 — Name: `Equipment Log`
Description: `Track instrument usage, calibration, and maintenance`
Content:
```
# Equipment Log: [Instrument Name]

**Instrument:** [Full name and model]
**Manufacturer:** [Manufacturer]
**Serial Number:** [Serial #]
**Location:** [Lab / room number]
**Responsible Party:** [Name / lab]

---

## Usage Entry

**Date:** [YYYY-MM-DD]
**Time:** [HH:MM – HH:MM]
**Operator:** [Name]
**Project / Experiment ID:** [Project / EXP-XXXX]

### Calibration Check
- [ ] Calibration performed — standards used: [list]
- [ ] Calibration verified — last formal calibration date: [Date]
- [ ] Calibration out of tolerance — action taken: [description]

### Run Details
| Sample ID | Parameters / Settings | Result / Output | Notes |
|---|---|---|---|
| [ID] | [Settings] | [Result] | |

### Issues Noted
[Any problems with the instrument during this run — error codes, unexpected behavior, performance issues]

### Maintenance Performed
- [ ] [Maintenance action — e.g. cleaned probe, replaced filter]

---

## Maintenance Schedule
| Maintenance Task | Frequency | Last Done | Next Due | Performed by |
|---|---|---|---|---|
| [Task 1] | [Weekly/Monthly] | [Date] | [Date] | [Name] |
| [Task 2] | [Frequency] | [Date] | [Date] | [Name] |

## Service History
| Date | Issue | Action Taken | Technician |
|---|---|---|---|
| [Date] | [Issue] | [Action] | [Name / Company] |
```

---

Template 9 — Name: `Literature Notes`
Description: `Capture detailed notes on a scientific paper`
Content:
```
# Literature Notes: [Author(s) Year — Short Title]

**Full Citation:** [Author(s). Year. Title. Journal. Volume(Issue):Pages. DOI]
**Date Read:** [YYYY-MM-DD]
**Project Relevance:** [Which of my projects does this inform?]

---

## Central Question / Hypothesis
[What question were the authors trying to answer?]

## Methods Summary
- **Model system:** [Cell line, animal model, patient cohort, etc.]
- **Key techniques:** [Western blot, RNA-seq, mouse genetics, etc.]
- **n / replicates:** [Sample sizes]
- **Controls:** [What controls were used?]

## Key Findings
1. [Finding 1 — with numbers where possible]
2. [Finding 2]
3. [Finding 3]

## Figures / Data I Want to Reference
- **Fig [N]:** [What it shows — why I'd cite it]

## Limitations
- [Limitation 1]
- [Limitation 2]

## Relevance to My Research
- **Supports:** [How this backs up my hypothesis]
- **Contradicts:** [How this challenges my model — how to explain the discrepancy?]
- **Methods I can adapt:** [Techniques or approaches to borrow]

## Open Questions Raised
- [ ] [Question this paper leaves unanswered that I could address]

## Key Terms / Concepts to Follow Up
- [Term — definition or link]

## Cited Works to Follow Up
- [Author Year] — [why read]
```

---

**Step 3: Create the root-level folders**
Create each of these folders using `create_folder` with the `crypt_id` from Step 1. No `parent_id` needed for root folders.

1. Create folder named `Projects` in the crypt
2. Create folder named `Lab Notebook` in the crypt
3. Create folder named `Grants` in the crypt
4. Create folder named `Publications` in the crypt
5. Create folder named `Conferences` in the crypt
6. Create folder named `Literature` in the crypt

**Step 4: Create subfolders**
Create each subfolder using `create_folder`, supplying the `parent_id` returned from the parent folder creation in Step 3.

1. Create folder named `Project Name` using the ID returned from creating `Projects`
2. Create folder named `Protocols` using the ID returned from creating the `Project Name` folder
3. Create folder named `Experiments` using the ID returned from creating the `Project Name` folder
4. Create folder named `Data` using the ID returned from creating the `Project Name` folder
5. Create folder named `Analysis` using the ID returned from creating the `Project Name` folder
6. Create folder named `In Progress` using the ID returned from creating `Grants`
7. Create folder named `Submitted` using the ID returned from creating `Grants`
8. Create folder named `Awarded` using the ID returned from creating `Grants`
9. Create folder named `Drafts` using the ID returned from creating `Publications`
10. Create folder named `Published` using the ID returned from creating `Publications`

After completing all steps, provide a summary table of templates created and the folder hierarchy.
---
