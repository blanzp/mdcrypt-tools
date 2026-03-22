# Office Worker Vault Setup

> Scaffold a knowledge worker's workspace with templates for meetings, status reports, project updates, process documentation, action items, stakeholder updates, 1:1s, and decision logs.

## What Gets Created

### Templates (8 templates)
- **Meeting Notes** — date, attendees, agenda, key discussion points, decisions, action items table
- **Weekly Status Report** — accomplishments, in progress, blockers, next week plan, highlights
- **Project Status Update** — overall status (RAG), milestones, risks, decisions needed
- **Process Documentation** — owner, scope, prerequisites, step-by-step procedure, exceptions, related processes
- **Action Items Tracker** — context, action items table with owner, due date, and status
- **Stakeholder Update** — audience, key updates, decisions needed, next steps
- **1:1 Notes** — topics discussed, feedback given/received, action items, follow-up
- **Decision Log** — context, options considered, who decided, rationale, expected outcome, review date

### Folder Structure
```
Projects/
  Active/
  Complete/
Meetings/
  Team/
  1on1s/
  All Hands/
Reports/
  Weekly/
  Monthly/
Processes/
Reference/
  Policies/
  Templates Used/
```

---

## Setup Prompt

> Copy and paste this prompt into your AI assistant (with mdcrypt MCP configured).

---
You are setting up an Office Worker / Knowledge Worker vault in mdcrypt. Follow these steps in order, using the mdcrypt MCP tools.

**Step 1: Identify the target crypt**
Call `list_crypts`. Show me the results and ask which crypt to use. If there is only one or a default is marked, proceed with that one. Remember the `crypt_id` for all subsequent calls.

**Step 2: Create templates**
Create each template below using `create_template`. Use the exact name, description, and content provided.

---

Template 1 — Name: `Meeting Notes`
Description: `Capture attendees, agenda, decisions, and action items from any meeting`
Content:
```
# Meeting Notes: [Meeting Title]

**Date:** [YYYY-MM-DD]
**Time:** [HH:MM – HH:MM timezone]
**Location / Link:** [Room, Zoom, Teams, etc.]
**Meeting Type:** Team sync | 1:1 | Project kickoff | Review | Workshop | All hands
**Facilitator:** [Name]
**Notetaker:** [Name]

---

## Attendees
| Name | Role / Team | Present |
|---|---|---|
| [Name] | [Role] | Yes |
| [Name] | [Role] | Yes |
| [Name] | [Role] | No (sent notes) |

## Agenda
1. [Agenda item 1] — [X min]
2. [Agenda item 2] — [X min]
3. [Agenda item 3] — [X min]

---

## Notes

### [Agenda Item 1]
[Key discussion points — capture the substance, not verbatim]

### [Agenda Item 2]
[Key discussion points]

### [Agenda Item 3]
[Key discussion points]

---

## Decisions Made
- [Decision 1 — include who made it if relevant]
- [Decision 2]

## Action Items
| Action | Owner | Due Date | Status |
|---|---|---|---|
| [Action description] | [Name] | [YYYY-MM-DD] | Open |
| [Action description] | [Name] | [YYYY-MM-DD] | Open |

## Parking Lot
[Topics raised that need a separate discussion or follow-up meeting]

## Next Meeting
**Date:** [YYYY-MM-DD or TBD]
**Standing agenda items:** [carry-forward items]
```

---

Template 2 — Name: `Weekly Status Report`
Description: `Summarize the week's accomplishments, blockers, and plans for next week`
Content:
```
# Weekly Status Report

**Week of:** [YYYY-MM-DD] to [YYYY-MM-DD]
**Name / Team:** [Your name or team name]
**Report Date:** [YYYY-MM-DD]

---

## Accomplishments This Week
- [What you completed — be specific, mention project names]
- [Accomplishment 2]
- [Accomplishment 3]

## In Progress
- [Work that is underway but not yet complete — include % done or next step]
- [In progress item 2]

## Blockers / Needs
| Blocker | Impact | Who Can Unblock |
|---|---|---|
| [Blocker description] | [Impact if unresolved] | [Name / team] |

## Next Week's Plan
- [ ] [Priority 1 — most important thing to accomplish]
- [ ] [Priority 2]
- [ ] [Priority 3]
- [ ] [Priority 4]

## Metrics / Highlights
| Metric | This Week | Last Week | Target |
|---|---|---|---|
| [Metric name] | [value] | [value] | [target] |

## Notes
[Any context, travel, OOO, or other information relevant to your manager or team]
```

---

Template 3 — Name: `Project Status Update`
Description: `Communicate project health with RAG status, milestones, risks, and decisions needed`
Content:
```
# Project Status Update: [Project Name]

**Date:** [YYYY-MM-DD]
**Project Manager:** [Name]
**Stakeholders:** [Distribution list or names]
**Overall Status:** 🟢 Green | 🟡 Yellow | 🔴 Red

---

## Status Summary
[2–3 sentences: What is the current state of the project? What changed since last update?]

**Schedule:** 🟢 On track | 🟡 At risk | 🔴 Behind
**Budget:** 🟢 On track | 🟡 At risk | 🔴 Over
**Scope:** 🟢 Stable | 🟡 Change pending | 🔴 Scope creep

---

## Milestone Progress
| Milestone | Due Date | Status | Notes |
|---|---|---|---|
| [Milestone 1] | [Date] | Complete | |
| [Milestone 2] | [Date] | In Progress | [% complete] |
| [Milestone 3] | [Date] | Not Started | |

## Accomplishments Since Last Update
- [Completed item 1]
- [Completed item 2]

## Planned for Next Period
- [ ] [Planned item 1]
- [ ] [Planned item 2]

## Risks & Issues
| Risk / Issue | Probability | Impact | Mitigation | Owner |
|---|---|---|---|---|
| [Risk 1] | High/Med/Low | High/Med/Low | [Mitigation] | [Name] |

## Decisions Needed
| Decision | Context | Options | Who Decides | By When |
|---|---|---|---|---|
| [Decision] | [Background] | [Options] | [Name/group] | [Date] |

## Budget
- **Total budget:** $[amount]
- **Spent to date:** $[amount]
- **Remaining:** $[amount]
- **Forecast to complete:** $[amount]
```

---

Template 4 — Name: `Process Documentation`
Description: `Document a repeatable business process with procedure, exceptions, and related processes`
Content:
```
# Process: [Process Name]

**Process ID:** [e.g. PROC-042]
**Owner:** [Name / Role]
**Team:** [Team or department]
**Last Updated:** [YYYY-MM-DD]
**Version:** [1.0]
**Status:** Draft | Active | Deprecated

---

## Purpose
[What does this process accomplish? Why does it exist?]

## Scope
- **Applies to:** [Who / what teams this process applies to]
- **Applies when:** [When or how often this process runs]
- **Does not apply to:** [Explicit exclusions]

## Prerequisites
Before starting this process:
- [ ] [Prerequisite 1 — access, materials, or prior steps needed]
- [ ] [Prerequisite 2]

## Roles & Responsibilities
| Role | Responsibility |
|---|---|
| [Role 1] | [What they do in this process] |
| [Role 2] | [What they do] |

---

## Procedure
1. **[Step name]**
   [Description of what to do — be specific]

2. **[Step name]**
   [Description]

3. **[Step name]**
   [Description]

4. **[Step name]**
   [Description]

---

## Exceptions & Edge Cases
| Situation | What to Do |
|---|---|
| [Exception 1] | [Alternate procedure] |
| [Exception 2] | [Alternate procedure] |

## Escalation Path
[Who to contact if something goes wrong or you are unsure]

## Related Processes
- [Process Name — link or note]
- [Process Name — link or note]

## Change Log
| Date | Version | Change | Author |
|---|---|---|---|
| [Date] | 1.0 | Initial version | [Name] |
```

---

Template 5 — Name: `Action Items Tracker`
Description: `Track action items from a meeting or discussion with owners and due dates`
Content:
```
# Action Items Tracker

**Source / Context:** [Meeting name, date, or project]
**Created:** [YYYY-MM-DD]
**Last Updated:** [YYYY-MM-DD]
**Owner:** [Name maintaining this tracker]

---

## Open Action Items
| # | Action | Owner | Due Date | Priority | Status | Notes |
|---|---|---|---|---|---|---|
| 1 | [Action description] | [Name] | [YYYY-MM-DD] | High | Open | |
| 2 | [Action description] | [Name] | [YYYY-MM-DD] | Medium | In Progress | |
| 3 | [Action description] | [Name] | [YYYY-MM-DD] | Low | Open | |

## Completed Action Items
| # | Action | Owner | Completed Date | Notes |
|---|---|---|---|---|
| [N] | [Action] | [Name] | [Date] | [Outcome] |

## Overdue Items
| # | Action | Owner | Due Date | Days Overdue | Notes |
|---|---|---|---|---|---|
| [N] | [Action] | [Name] | [Date] | [X] | [Escalation note] |

## Status Key
- **Open** — not yet started
- **In Progress** — actively being worked
- **Blocked** — waiting on someone else
- **Complete** — done
- **Cancelled** — no longer needed

## Review Cadence
[How often is this tracker reviewed? Who reviews it?]
```

---

Template 6 — Name: `Stakeholder Update`
Description: `Communicate key updates, decisions needed, and next steps to stakeholders`
Content:
```
# Stakeholder Update: [Project / Initiative Name]

**Date:** [YYYY-MM-DD]
**Prepared by:** [Name]
**Audience:** [Executive team | Board | Client | Cross-functional partners]
**Distribution:** [Names or groups]

---

## Context
[1–2 sentences reminding the audience what this project is and why it matters]

## Key Updates
- [Update 1 — most important development since last communication]
- [Update 2]
- [Update 3]

## Status at a Glance
| Area | Status | Notes |
|---|---|---|
| Schedule | 🟢/🟡/🔴 | [Brief note] |
| Budget | 🟢/🟡/🔴 | [Brief note] |
| Team | 🟢/🟡/🔴 | [Brief note] |

## Risks to Be Aware Of
- **[Risk]:** [Brief description and mitigation in progress]

## Decisions Needed
> The following decisions are required from stakeholders to keep this work on track.

1. **[Decision]:** [Context and options] — needed by [Date]
2. **[Decision]:** [Context and options] — needed by [Date]

## Next Steps
| Action | Owner | Timeline |
|---|---|---|
| [Next step 1] | [Name] | [Date or timeframe] |
| [Next step 2] | [Name] | [Date or timeframe] |

## Questions / Feedback Welcome
[Open invitation for questions, plus how to reach the project team]
```

---

Template 7 — Name: `1:1 Notes`
Description: `Record a one-on-one meeting with topics, feedback, and follow-up`
Content:
```
# 1:1 Notes

**Date:** [YYYY-MM-DD]
**With:** [Name — Manager | Direct report | Peer | Skip-level]
**My Role:** [My relationship to this person]
**Frequency:** Weekly | Bi-weekly | Monthly

---

## Check-in
[How is this person doing? Energy level, workload, anything notable going on]

## Topics Discussed
1. [Topic 1 — brief description of discussion]
2. [Topic 2]
3. [Topic 3]

## Feedback Given
[What feedback did I give? Be specific — what behavior, what impact, what to continue or change]

## Feedback Received
[What feedback did I receive? Capture it honestly]

## Career / Development Discussion
[Any discussion about goals, growth, opportunities, or concerns]

## Action Items
| Action | Owner | Due Date |
|---|---|---|
| [Action] | [Me / Them] | [Date] |
| [Action] | [Me / Them] | [Date] |

## Follow-up for Next 1:1
- [ ] [Item to revisit]
- [ ] [Check-in on: action from today]

## Notes
[Any other context, things to remember, or sensitive information to keep track of]
```

---

Template 8 — Name: `Decision Log`
Description: `Record a significant decision with context, options, rationale, and review date`
Content:
```
# Decision Log

**Date:** [YYYY-MM-DD]
**Decision Title:** [Short description of the decision]
**Decision Made By:** [Name / Role / Group]
**Stakeholders Consulted:** [Names or groups]
**Status:** Proposed | Decided | Implemented | Under Review | Reversed

---

## Context
[What situation or problem required a decision? What prompted this now?]

## Options Considered
### Option A: [Name]
- **Description:** [What this option involves]
- **Pros:** [Benefits]
- **Cons:** [Drawbacks]
- **Estimated cost / effort:** [If applicable]

### Option B: [Name]
- **Description:** [What this option involves]
- **Pros:** [Benefits]
- **Cons:** [Drawbacks]
- **Estimated cost / effort:** [If applicable]

### Option C: [Name or "Status Quo"]
- **Description:** [What this option involves]
- **Pros:** [Benefits]
- **Cons:** [Drawbacks]

## Decision
**Chosen option:** [Option A / B / C]

**Rationale:** [Why was this option chosen over the alternatives? Key factors that drove the decision.]

## Expected Outcome
[What do we expect to happen as a result of this decision? What does success look like?]

## Risks of This Decision
- [Risk 1 — and how we'll monitor for it]
- [Risk 2]

## Implementation Notes
[Any key steps needed to put this decision into action]

## Review Date
**Date to evaluate this decision:** [YYYY-MM-DD]
**Criteria for success:** [What we'll look at to determine if this was the right call]
```

---

**Step 3: Create the root-level folders**
Create each of these folders using `create_folder` with the `crypt_id` from Step 1. No `parent_id` needed for root folders.

1. Create folder named `Projects` in the crypt
2. Create folder named `Meetings` in the crypt
3. Create folder named `Reports` in the crypt
4. Create folder named `Processes` in the crypt
5. Create folder named `Reference` in the crypt

**Step 4: Create subfolders**
Create each subfolder using `create_folder`, supplying the `parent_id` returned from the parent folder creation in Step 3.

1. Create folder named `Active` using the ID returned from creating `Projects`
2. Create folder named `Complete` using the ID returned from creating `Projects`
3. Create folder named `Team` using the ID returned from creating `Meetings`
4. Create folder named `1on1s` using the ID returned from creating `Meetings`
5. Create folder named `All Hands` using the ID returned from creating `Meetings`
6. Create folder named `Weekly` using the ID returned from creating `Reports`
7. Create folder named `Monthly` using the ID returned from creating `Reports`
8. Create folder named `Policies` using the ID returned from creating `Reference`
9. Create folder named `Templates Used` using the ID returned from creating `Reference`

After completing all steps, provide a summary table of templates created and the folder hierarchy.
---
