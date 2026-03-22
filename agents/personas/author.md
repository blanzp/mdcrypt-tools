# Author Vault Setup

> Scaffold a creative writing workspace with templates for story outlines, character sheets, world building, chapter drafts, research, scene notes, editorial feedback, query letters, and publishing tracking.

## What Gets Created

### Templates (9 templates)
- **Story Outline** — premise, protagonist, antagonist, three-act structure, themes, ending
- **Character Sheet** — name, role, physical description, personality, backstory, arc, relationships, notes
- **World Building** — geography, history, culture, magic/tech systems, rules, factions, notes
- **Chapter Draft** — chapter number/title, POV, scene goals, draft text, revision notes
- **Research Notes** — topic, sources, key facts, quotes, how it applies to the story
- **Scene Notes** — scene goal, setting, characters present, conflict, outcome, beats
- **Editorial Feedback** — draft version, feedback received, items to address checklist
- **Query Letter** — hook, synopsis, comps, author bio, word count/genre
- **Publishing Tracker** — project, target agents/publishers table, submission date, status, notes

### Folder Structure
```
Projects/
  [Active Project]/
    Drafts/
    Characters/
    World/
    Research/
    Notes/
  Archive/
Ideas/
Research/
Publishing/
  Queries/
  Submissions/
```

---

## Setup Prompt

> Copy and paste this prompt into your AI assistant (with mdcrypt MCP configured).

---
You are setting up an Author / Writer vault in mdcrypt. Follow these steps in order, using the mdcrypt MCP tools.

**Step 1: Identify the target crypt**
Call `list_crypts`. Show me the results and ask which crypt to use. If there is only one or a default is marked, proceed with that one. Remember the `crypt_id` for all subsequent calls.

**Step 2: Create templates**
Create each template below using `create_template`. Use the exact name, description, and content provided.

---

Template 1 — Name: `Story Outline`
Description: `Plan a story from premise through three-act structure to ending`
Content:
```
# Story Outline: [Title]

**Genre:** [Genre]
**Target Word Count:** [e.g. 80,000]
**Target Audience:** [e.g. Adult literary fiction, YA fantasy]
**Status:** Outlining | Drafting | Revising | Complete

---

## Premise
[One to two sentences: Who wants what, why they can't have it, and what's at stake?]

## Logline
[One sentence: [Protagonist] must [goal] before [stakes], but [obstacle].]

## Protagonist
- **Name:** [Name]
- **Want:** [External goal]
- **Need:** [Internal/thematic need]
- **Flaw:** [Core flaw that drives conflict]

## Antagonist / Opposition
- **Name:** [Name or force]
- **Goal:** [What they want]
- **Why They're a Threat:** [Description]

## Themes
- [Theme 1]
- [Theme 2]

---

## Three-Act Structure

### Act 1 — Setup
- **Opening image / scene:** [Description]
- **Inciting incident:** [What disrupts the protagonist's world]
- **Plot point 1 / Act break:** [The point of no return]

### Act 2A — Rising Action
- **Protagonist's plan:** [What they try to do]
- **Midpoint:** [A reversal or revelation that changes everything]

### Act 2B — Complications
- **Things fall apart:** [Escalating obstacles]
- **Dark night of the soul:** [Lowest point]
- **Plot point 2 / Act break:** [Decision to fight back]

### Act 3 — Resolution
- **Climax:** [Final confrontation]
- **Resolution:** [How things settle]
- **Final image / closing:** [Echo of opening image or thematic statement]

---

## Chapter / Scene Sequence
| # | Scene | POV | Goal | Notes |
|---|---|---|---|---|
| 1 | [description] | [character] | [goal] | |

## Notes
[Any other story notes, research needed, or open questions]
```

---

Template 2 — Name: `Character Sheet`
Description: `Detailed profile for a fictional character`
Content:
```
# Character Sheet: [Character Name]

**Role:** Protagonist | Antagonist | Supporting | Minor
**Story / Project:** [Title]

---

## At a Glance
- **Age:** [Age or range]
- **Occupation:** [Job or role in the story world]
- **First Appears:** [Chapter/scene]

## Physical Description
- **Height / Build:** [Description]
- **Notable Features:** [Eyes, hair, scars, mannerisms]
- **How Others Perceive Them:** [First impression]

## Personality
- **Core Traits:** [3–5 adjectives with brief explanation]
- **Strengths:** [What they're good at]
- **Flaws:** [What holds them back or causes conflict]
- **Fear:** [Deepest fear]
- **Desire:** [What they want most]
- **Voice / Speech Patterns:** [How they talk, word choices, habits]

## Backstory
[Key events that shaped who they are. Keep it focused on what's relevant to the story.]

## Arc
- **Where they start:** [Emotional/psychological state at the beginning]
- **What challenges them:** [What forces them to change]
- **Where they end:** [Who they are by the end]

## Relationships
| Character | Relationship | Dynamic |
|---|---|---|
| [Name] | [e.g. best friend] | [e.g. mentor/mentee, rivals] |

## Key Scenes
- [Scene where their flaw is first revealed]
- [Scene where they make the wrong choice]
- [Scene where they change]

## Notes
[Other details, contradictions to explore, open questions]
```

---

Template 3 — Name: `World Building`
Description: `Document the rules, history, and culture of a fictional world`
Content:
```
# World Building: [World or Setting Name]

**Project:** [Story title]
**Genre:** [Fantasy / Sci-fi / Historical / etc.]

---

## Overview
[One paragraph: What kind of world is this? What makes it distinctive?]

## Geography
- **Scale:** [Planet / continent / region / city]
- **Key Locations:** [List with brief descriptions]
- **Climate / Environment:** [Notable features]
- **Map Notes:** [Link or description of map]

## History
- **Founding / Origin:** [How this world or civilization came to be]
- **Key Historical Events:**
  - [Event — date/era — significance]
  - [Event — date/era — significance]
- **Current Era:** [Where we are in history as the story begins]

## Culture & Society
- **Social Structure:** [Class, caste, hierarchy]
- **Government / Power:** [Who rules and how]
- **Economy:** [How people trade, what has value]
- **Religion / Belief Systems:** [What people believe, rituals, taboos]
- **Gender & Family Norms:** [Social expectations]

## Magic / Technology System
- **What It Is:** [Description]
- **How It Works:** [Rules and mechanics]
- **Cost / Limitations:** [What it requires, what can go wrong]
- **Who Has Access:** [Is it rare? Trained? Inherited?]

## Factions & Organizations
| Name | Goals | Leader | Relationship to protagonist |
|---|---|---|---|
| [Name] | [Goals] | [Name] | [Ally/Enemy/Neutral] |

## Language & Communication
- [Any special languages, dialects, writing systems]

## Rules & Consistency Notes
[Things that must stay consistent — e.g. time zones, travel times, what magic can't do]

## Open Questions
- [ ] [Unresolved world-building question]
```

---

Template 4 — Name: `Chapter Draft`
Description: `Draft a chapter with scene goals, prose, and revision notes`
Content:
```
# Chapter [NUMBER]: [Title]

**Project:** [Story title]
**POV Character:** [Name]
**Draft:** First | Second | Third | Final
**Word Count (target):** [e.g. 3,000]
**Word Count (actual):** [update as you write]

---

## Scene Goals
- **Story goal:** [What plot point does this advance?]
- **Character goal:** [What does the POV character want in this scene?]
- **Emotional goal:** [What should the reader feel by the end?]

## Setup
- **Where we are:** [Setting and time relative to previous chapter]
- **Who is present:** [Characters in this chapter]
- **Entering conflict:** [The tension the chapter opens on]

---

## Draft

[Write your chapter here. Don't self-edit — keep going.]

---

## Scene Break Notes
[Notes on each scene break: what changed emotionally, what was accomplished]

## Revision Notes
- [ ] [Issue to address in next pass]
- [ ] [Line or section to cut or expand]
- [ ] [Continuity check needed]

## Notes for Later Chapters
[Setups laid in this chapter that need payoff later]
```

---

Template 5 — Name: `Research Notes`
Description: `Capture research findings and their relevance to your story`
Content:
```
# Research Notes: [Topic]

**Project:** [Story title]
**Date:** [YYYY-MM-DD]
**Source Type:** Book | Article | Interview | Website | Primary Source

---

## Sources
- [Author, Title, Date, URL or library reference]
- [Author, Title, Date, URL or library reference]

## Key Facts
- [Fact — source]
- [Fact — source]
- [Fact — source]

## Quotes Worth Using
> "[Direct quote]" — [Source, page]

> "[Direct quote]" — [Source, page]

## Sensory Details
[Sights, sounds, smells, textures, tastes that could bring scenes to life]

## How It Applies to the Story
- **Scene / chapter:** [Where this research informs the narrative]
- **Character:** [How it affects character behavior or dialogue]
- **World building:** [What it adds to the world]

## Accuracy Flags
[Things I'm unsure about that need verification before publication]

## Further Research Needed
- [ ] [Question to investigate]
- [ ] [Gap to fill]
```

---

Template 6 — Name: `Scene Notes`
Description: `Plan and analyze an individual scene before or after writing it`
Content:
```
# Scene Notes: [Scene Title or Description]

**Project:** [Story title]
**Chapter:** [Chapter number or title]
**POV:** [Character]
**Draft Status:** Planned | Written | Revised

---

## Scene Goal
- **What the POV character wants:** [Immediate desire in this scene]
- **What they're trying to do:** [Action]
- **What's stopping them:** [Obstacle or conflict]
- **Outcome:** Win | Lose | Pyrrhic win | Retreat (scenes should rarely end with a clean win)

## Setting
- **Location:** [Where we are]
- **Time:** [Time of day / relative to story timeline]
- **Atmosphere:** [Mood, weather, sensory details]

## Characters Present
| Character | Goal in Scene | Emotional State |
|---|---|---|
| [Name] | [Goal] | [State] |

## Conflict
[What is the central tension? How does it escalate?]

## Scene Beats
1. [Opening beat / establish situation]
2. [Rising tension]
3. [Confrontation or decision point]
4. [Outcome / aftermath]

## What Changes
[How is the world or character different at the end of this scene vs the beginning?]

## What It Reveals
[What does the reader (and/or POV character) learn?]

## Transition to Next Scene
[How does this scene lead into the next? What question does it leave open?]

## Notes
[Any other craft notes, tone reminders, or things to avoid]
```

---

Template 7 — Name: `Editorial Feedback`
Description: `Organize editorial feedback and track revision items`
Content:
```
# Editorial Feedback: [Title]

**Draft Version:** [e.g. Second draft, MS v3]
**Feedback From:** [Beta readers | Editor | Writing group | Self]
**Date Received:** [YYYY-MM-DD]
**Revision Deadline:** [YYYY-MM-DD or N/A]

---

## Overall Impression
[What was the general response? Overall strengths and weaknesses identified?]

## Strengths to Preserve
- [What's working — don't break this]
- [What's working — don't break this]

## Major Concerns (address before anything else)
- [ ] [Structural issue, plot hole, character inconsistency]
- [ ] [Major concern 2]

## Chapter / Scene Specific Notes
| Chapter | Feedback | Action |
|---|---|---|
| [Ch. 1] | [note] | [ ] [action] |
| [Ch. 5] | [note] | [ ] [action] |

## Line-Level Issues
- [ ] [Page/line — issue]
- [ ] [Page/line — issue]

## Questions to Resolve Before Revising
- [ ] [Question about intent or direction]

## Revision Plan
1. [First pass: address major structural issues]
2. [Second pass: scene-level rewrites]
3. [Third pass: line edits]

## Notes
[Any other thoughts on the feedback or revision approach]
```

---

Template 8 — Name: `Query Letter`
Description: `Draft a query letter to agents or publishers`
Content:
```
# Query Letter: [Project Title]

**Querying:** [Agent / Publisher name — fill in before sending]
**Date Sent:** [YYYY-MM-DD]
**Status:** Draft | Ready to Send | Sent | Response Received

---

## Project Details
- **Title:** [Title]
- **Genre:** [Genre]
- **Word Count:** [e.g. 87,000]
- **Comparable Titles:** [Comp 1 (year)] meets [Comp 2 (year)]

---

## Query Draft

Dear [Agent Name],

**Hook (1–2 sentences):**
[Open with your most compelling hook — the heart of the book's appeal]

**Synopsis (2–3 paragraphs):**
[Paragraph 1: Introduce protagonist, their world, and inciting incident]

[Paragraph 2: The central conflict and what's at stake — include the antagonist or opposing force]

[Paragraph 3: The choice at the climax (don't reveal the ending in a query, but hint at the stakes)]

**Closing — Author Bio:**
[TITLE] is a [word count] [genre] novel. [One sentence about why you wrote it or what makes it distinctive.]

I am [brief bio: relevant writing credits, day job if relevant, where you're based]. This is a standalone novel with series potential / the first in a planned trilogy / etc.

Per your submission guidelines, I have included [pages/synopsis/full manuscript]. Thank you for your time and consideration.

Sincerely,
[Your name]
[Contact info]
[Website / social if relevant]

---

## Personalization Notes
[Why this agent? Mention something specific about their list, a recent interview, a MSWL post]

## Feedback on This Draft
[Notes from critique partners or beta readers on the query itself]
```

---

Template 9 — Name: `Publishing Tracker`
Description: `Track submissions to agents and publishers across projects`
Content:
```
# Publishing Tracker: [Project Title]

**Genre:** [Genre]
**Word Count:** [Word count]
**Query Status:** Querying | On Submission | Offer | Closed

---

## Project Summary
[One-line description of the project for quick reference]

## Query / Submission Log
| # | Agent / Publisher | Agency / House | Date Sent | Materials Sent | Status | Response Date | Notes |
|---|---|---|---|---|---|---|---|
| 1 | [Name] | [Agency] | [Date] | Query + 5 pages | Awaiting | | |
| 2 | [Name] | [Agency] | [Date] | Full MS | Pass | [Date] | Form rejection |

## Status Key
- **Awaiting** — No response yet
- **Nudge sent** — Followed up after query window
- **Partial requested** — Agent requested partial manuscript
- **Full requested** — Agent requested full manuscript
- **Pass** — Rejection received
- **Offer** — Offer of representation / publication
- **Withdrawn** — Submission withdrawn

## Statistics
- **Total sent:** [X]
- **Awaiting response:** [X]
- **Passes:** [X]
- **Requests:** [X partial / X full]

## Next Steps
- [ ] [Research X more agents in this genre]
- [ ] [Revise query after 10+ passes]

## Notes
[Any agent feedback, trends in rejections, or strategy notes]
```

---

**Step 3: Create the root-level folders**
Create each of these folders using `create_folder` with the `crypt_id` from Step 1. No `parent_id` needed for root folders.

1. Create folder named `Projects` in the crypt
2. Create folder named `Ideas` in the crypt
3. Create folder named `Research` in the crypt
4. Create folder named `Publishing` in the crypt

**Step 4: Create subfolders**
Create each subfolder using `create_folder`, supplying the `parent_id` returned from the parent folder creation in Step 3.

1. Create folder named `Active Project` using the ID returned from creating `Projects`
2. Create folder named `Archive` using the ID returned from creating `Projects`
3. Create folder named `Drafts` using the ID returned from creating the `Active Project` folder
4. Create folder named `Characters` using the ID returned from creating the `Active Project` folder
5. Create folder named `World` using the ID returned from creating the `Active Project` folder
6. Create folder named `Research` using the ID returned from creating the `Active Project` folder
7. Create folder named `Notes` using the ID returned from creating the `Active Project` folder
8. Create folder named `Queries` using the ID returned from creating `Publishing`
9. Create folder named `Submissions` using the ID returned from creating `Publishing`

After completing all steps, provide a summary table of templates created and the folder hierarchy.
---
