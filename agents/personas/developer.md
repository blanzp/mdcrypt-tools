# Developer Vault Setup

> Scaffold a software engineering workspace with templates for bugs, features, design docs, ADRs, sprints, incidents, code review, meetings, releases, and RFCs.

## What Gets Created

### Templates (10 templates)
- **Bug Report** — steps to reproduce, expected/actual behavior, environment details, logs
- **Feature Request** — problem statement, acceptance criteria, technical considerations
- **Technical Design Doc** — goals, design, data model, API, implementation plan, risks
- **Architecture Decision Record** — status, context, decision, consequences, alternatives
- **Sprint Planning** — sprint goal, dates, capacity, committed work table, Definition of Done checklist
- **Incident Report** — timeline table, impact, root cause, resolution, action items, lessons learned
- **Code Review Notes** — PR info, issues found checklist, suggestions, verdict
- **Meeting Notes** — attendees, agenda, discussion notes, decisions, action items table
- **Release Notes** — what's new, bug fixes, breaking changes, migration guide
- **RFC** — executive summary, motivation, detailed design, drawbacks, alternatives, unresolved questions

### Folder Structure
```
Projects/
  Active/
  Archived/
Architecture/
  Decisions/
  Diagrams/
Processes/
  Runbooks/
  Onboarding/
Meetings/
Learning/
  Courses/
  Books/
```

---

## Setup Prompt

> Copy and paste this prompt into your AI assistant (with mdcrypt MCP configured).

---
You are setting up a Software Developer vault in mdcrypt. Follow these steps in order, using the mdcrypt MCP tools.

**Step 1: Identify the target crypt**
Call `list_crypts`. Show me the results and ask which crypt to use. If there is only one or a default is marked, proceed with that one. Remember the `crypt_id` for all subsequent calls.

**Step 2: Create templates**
Create each template below using `create_template`. Use the exact name, description, and content provided.

---

Template 1 — Name: `Bug Report`
Description: `Document a reproducible bug with environment details and logs`
Content:
```
# Bug Report: [Short Title]

**Status:** Open | In Progress | Resolved
**Severity:** Critical | High | Medium | Low
**Reporter:** [Name]
**Date:** [YYYY-MM-DD]
**Assignee:** [Name or TBD]

---

## Summary
[One-paragraph description of the bug]

## Steps to Reproduce
1. [First step]
2. [Second step]
3. [Continue as needed]

## Expected Behavior
[What should happen]

## Actual Behavior
[What actually happens]

## Environment
- **OS:** [e.g. macOS 14.2, Ubuntu 22.04]
- **Browser / Runtime:** [e.g. Chrome 120, Node 20.10]
- **App Version:** [e.g. v2.3.1]
- **Branch / Commit:** [e.g. main @ abc1234]

## Screenshots / Recordings
[Attach or link here]

## Logs
```
[Paste relevant log output here]
```

## Root Cause (if known)
[Leave blank until investigated]

## Fix / Workaround
[Describe any known workaround]

## Related Issues
- [Link to related issue or PR]
```

---

Template 2 — Name: `Feature Request`
Description: `Propose a new feature with acceptance criteria and technical considerations`
Content:
```
# Feature Request: [Feature Title]

**Status:** Proposed | Accepted | In Progress | Done | Declined
**Priority:** P0 | P1 | P2 | P3
**Requester:** [Name]
**Date:** [YYYY-MM-DD]

---

## Problem Statement
[What problem does this feature solve? Who is affected and how often?]

## Proposed Solution
[High-level description of what you want to build]

## Acceptance Criteria
- [ ] [Criterion 1]
- [ ] [Criterion 2]
- [ ] [Criterion 3]

## User Stories
- As a [type of user], I want to [do something] so that [benefit].

## Technical Considerations
[Known constraints, dependencies, or implementation notes]

## Out of Scope
[Explicitly list what this feature will NOT do]

## Success Metrics
[How will we measure whether this feature is successful?]

## Mockups / References
[Link to designs, similar products, or prior art]

## Open Questions
- [ ] [Question 1]
- [ ] [Question 2]
```

---

Template 3 — Name: `Technical Design Doc`
Description: `Detailed technical design including data model, API, and implementation plan`
Content:
```
# Technical Design Doc: [Title]

**Status:** Draft | In Review | Approved | Implemented
**Author(s):** [Names]
**Reviewers:** [Names]
**Created:** [YYYY-MM-DD]
**Last Updated:** [YYYY-MM-DD]

---

## Goals
[What are we trying to achieve? What does success look like?]

## Non-Goals
[What are we explicitly not doing?]

## Background / Context
[Why is this work needed? What led to this design?]

## Design Overview
[High-level description of the approach]

## Data Model
```
[Schema, entity diagram, or table structure]
```

## API / Interface
### Endpoint / Method: [Name]
- **Input:** [description]
- **Output:** [description]
- **Errors:** [description]

## Implementation Plan
| Phase | Tasks | Owner | ETA |
|---|---|---|---|
| 1 | [Tasks] | [Name] | [Date] |
| 2 | [Tasks] | [Name] | [Date] |

## Alternatives Considered
| Option | Pros | Cons | Why Not Chosen |
|---|---|---|---|
| [Option A] | [pros] | [cons] | [reason] |

## Risks & Mitigations
| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| [Risk 1] | Low/Med/High | Low/Med/High | [mitigation] |

## Open Questions
- [ ] [Question 1]
- [ ] [Question 2]

## References
- [Link to related docs, RFCs, issues]
```

---

Template 4 — Name: `Architecture Decision Record`
Description: `Record an architectural decision with context, consequences, and alternatives`
Content:
```
# ADR-[NUMBER]: [Title]

**Status:** Proposed | Accepted | Deprecated | Superseded by ADR-[X]
**Date:** [YYYY-MM-DD]
**Deciders:** [Names]

---

## Context
[What is the issue that motivated this decision? What forces are at play?]

## Decision
[What is the change that we're proposing or have agreed to implement?]

## Consequences

### Positive
- [Positive outcome]
- [Positive outcome]

### Negative
- [Negative outcome / trade-off]
- [Negative outcome / trade-off]

### Neutral
- [Neutral observation]

## Alternatives Considered
### Option A: [Name]
[Description, pros, cons, why not chosen]

### Option B: [Name]
[Description, pros, cons, why not chosen]

## References
- [Link to design doc, issue, or discussion]
```

---

Template 5 — Name: `Sprint Planning`
Description: `Plan a sprint with goals, capacity, committed work, and Definition of Done`
Content:
```
# Sprint [NUMBER] Planning

**Sprint Goal:** [One sentence describing what we aim to achieve]
**Start Date:** [YYYY-MM-DD]
**End Date:** [YYYY-MM-DD]
**Team Capacity:** [X story points / Y person-days]

---

## Team Capacity
| Person | Available Days | Capacity (pts) |
|---|---|---|
| [Name] | [X] | [Y] |
| [Name] | [X] | [Y] |
| **Total** | | |

## Committed Work
| # | Story / Task | Points | Assignee | Priority |
|---|---|---|---|---|
| 1 | [Description] | [pts] | [Name] | High |
| 2 | [Description] | [pts] | [Name] | Medium |

**Total committed:** [X] points

## Stretch Goals
- [Stretch item 1]
- [Stretch item 2]

## Dependencies & Risks
- [Dependency or risk 1]

## Definition of Done
- [ ] Code reviewed and approved
- [ ] Tests written and passing
- [ ] Documentation updated
- [ ] Deployed to staging
- [ ] Product owner acceptance
- [ ] No known P0/P1 bugs introduced

## Notes
[Any other planning notes]
```

---

Template 6 — Name: `Incident Report`
Description: `Post-mortem with timeline, impact, root cause, resolution, and action items`
Content:
```
# Incident Report: [Incident Title]

**Incident ID:** INC-[NUMBER]
**Severity:** SEV1 | SEV2 | SEV3
**Status:** Active | Mitigated | Resolved
**Start Time:** [YYYY-MM-DD HH:MM UTC]
**End Time:** [YYYY-MM-DD HH:MM UTC]
**Duration:** [X hours Y minutes]
**Incident Commander:** [Name]
**Scribe:** [Name]

---

## Impact
- **Users Affected:** [number or percentage]
- **Services Affected:** [list of services]
- **Data Loss:** Yes / No — [details if yes]
- **Customer Facing:** Yes / No

## Timeline
| Time (UTC) | Event |
|---|---|
| [HH:MM] | [What happened] |
| [HH:MM] | [What happened] |
| [HH:MM] | Incident declared |
| [HH:MM] | [Mitigation step] |
| [HH:MM] | Service restored |

## Root Cause
[Detailed explanation of the root cause]

## Contributing Factors
- [Factor 1]
- [Factor 2]

## Resolution
[What was done to resolve the incident]

## Action Items
| Action | Owner | Due Date | Status |
|---|---|---|---|
| [Action 1] | [Name] | [Date] | Open |
| [Action 2] | [Name] | [Date] | Open |

## Lessons Learned
[What did we learn? What went well? What could be improved?]

## Detection
[How was the incident detected? Was alerting sufficient?]
```

---

Template 7 — Name: `Code Review Notes`
Description: `Structured notes for reviewing a pull request`
Content:
```
# Code Review: [PR Title]

**PR #:** [number]
**Author:** [Name]
**Reviewer:** [Name]
**Date:** [YYYY-MM-DD]
**Link:** [PR URL]

---

## Summary
[Brief description of what this PR does]

## Review Checklist
- [ ] Code is readable and well-commented where necessary
- [ ] Logic is correct and handles edge cases
- [ ] Tests cover the changes (unit + integration where relevant)
- [ ] No obvious performance issues
- [ ] No security concerns
- [ ] API / interface changes are backward compatible or properly versioned
- [ ] Documentation updated if needed
- [ ] No hardcoded secrets or environment-specific values

## Issues Found
### Blocking
- [ ] [File:line] — [description of issue]

### Non-Blocking / Suggestions
- [ ] [File:line] — [suggestion]
- [ ] [File:line] — [suggestion]

## Positive Observations
[Note things done well]

## Questions
- [Question about intent or design]

## Verdict
- [ ] Approve
- [ ] Approve with minor changes
- [ ] Request changes
- [ ] Needs discussion

**Notes:** [Any final notes for the author]
```

---

Template 8 — Name: `Meeting Notes`
Description: `Capture attendees, agenda, decisions, and action items from a meeting`
Content:
```
# Meeting: [Meeting Title]

**Date:** [YYYY-MM-DD]
**Time:** [HH:MM – HH:MM timezone]
**Location / Link:** [Room or video call URL]
**Facilitator:** [Name]
**Notetaker:** [Name]

---

## Attendees
- [Name] — [Role]
- [Name] — [Role]

## Agenda
1. [Agenda item 1]
2. [Agenda item 2]
3. [Agenda item 3]

## Notes

### [Agenda item 1]
[Discussion notes]

### [Agenda item 2]
[Discussion notes]

## Decisions Made
- [Decision 1]
- [Decision 2]

## Action Items
| Action | Owner | Due Date |
|---|---|---|
| [Action description] | [Name] | [YYYY-MM-DD] |
| [Action description] | [Name] | [YYYY-MM-DD] |

## Parking Lot
[Topics raised but deferred to another meeting]

## Next Meeting
**Date:** [YYYY-MM-DD]
**Agenda items to carry forward:**
- [Item]
```

---

Template 9 — Name: `Release Notes`
Description: `Document what changed in a release including new features, fixes, and breaking changes`
Content:
```
# Release Notes: v[VERSION]

**Release Date:** [YYYY-MM-DD]
**Release Type:** Major | Minor | Patch
**Release Manager:** [Name]

---

## Highlights
[One paragraph summarizing the most important changes in this release]

## What's New
- **[Feature Name]:** [Description]
- **[Feature Name]:** [Description]

## Improvements
- [Improvement description]
- [Improvement description]

## Bug Fixes
| Issue | Description |
|---|---|
| #[number] | [Bug description and fix summary] |
| #[number] | [Bug description and fix summary] |

## Breaking Changes
> ⚠️ The following changes require action from users upgrading from a previous version.

- **[Change]:** [What changed and why]

## Migration Guide
[Step-by-step instructions for upgrading from the previous version]

```
[Code examples if relevant]
```

## Deprecations
- **[Feature]:** Deprecated as of this release. Will be removed in v[X]. Use [alternative] instead.

## Known Issues
- [Known issue with workaround if available]

## Checksums / Artifacts
| Artifact | SHA256 |
|---|---|
| [filename] | [hash] |
```

---

Template 10 — Name: `RFC`
Description: `Request for Comments: propose a significant change for team discussion`
Content:
```
# RFC: [Title]

**RFC Number:** RFC-[NUMBER]
**Status:** Draft | In Review | Accepted | Rejected | Withdrawn
**Author(s):** [Names]
**Created:** [YYYY-MM-DD]
**Last Updated:** [YYYY-MM-DD]
**Discussion:** [Link to PR, issue, or thread]

---

## Executive Summary
[2–3 sentences describing the proposal and why it matters]

## Motivation
[What problem are we solving? Who is affected? What is the current pain?]

## Detailed Design
[The core of the proposal. Include diagrams, pseudocode, or examples as needed.]

### Example
```
[Code or usage example]
```

## Drawbacks
[What are the reasons we might not want to do this? What costs does it introduce?]

## Alternatives
### Alternative 1: [Name]
[Description and why it was not chosen]

### Alternative 2: [Name]
[Description and why it was not chosen]

## Adoption / Migration Strategy
[How do we roll this out? Is it backward compatible? What do existing users need to do?]

## Unresolved Questions
- [ ] [Question that must be resolved before acceptance]
- [ ] [Question that can be resolved post-acceptance]

## References
- [Link to related issues, papers, or prior art]
```

---

**Step 3: Create the root-level folders**
Create each of these folders using `create_folder` with the `crypt_id` from Step 1. No `parent_id` needed for root folders.

1. Create folder named `Projects` in the crypt
2. Create folder named `Architecture` in the crypt
3. Create folder named `Processes` in the crypt
4. Create folder named `Meetings` in the crypt
5. Create folder named `Learning` in the crypt

**Step 4: Create subfolders**
Create each subfolder using `create_folder`, supplying the `parent_id` returned from the parent folder creation in Step 3.

1. Create folder named `Active` using the ID returned from creating `Projects`
2. Create folder named `Archived` using the ID returned from creating `Projects`
3. Create folder named `Decisions` using the ID returned from creating `Architecture`
4. Create folder named `Diagrams` using the ID returned from creating `Architecture`
5. Create folder named `Runbooks` using the ID returned from creating `Processes`
6. Create folder named `Onboarding` using the ID returned from creating `Processes`
7. Create folder named `Courses` using the ID returned from creating `Learning`
8. Create folder named `Books` using the ID returned from creating `Learning`

After completing all steps, provide a summary table of templates created and the folder hierarchy.
---
