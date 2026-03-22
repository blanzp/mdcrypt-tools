# Business Owner Vault Setup

> Scaffold an entrepreneur's workspace with templates for business plans, customer meetings, financial reviews, marketing campaigns, vendor notes, product roadmap items, board updates, employee reviews, operations checklists, and strategic planning.

## What Gets Created

### Templates (10 templates)
- **Business Plan Section** — executive summary, current state, proposed changes, financial impact, risks, next actions
- **Customer Meeting Notes** — relationship stage, discussion points, pain points, proposed solutions, follow-up, deal notes
- **Financial Review** — revenue summary, expense breakdown, cash flow, vs budget, variances, action items
- **Marketing Campaign Notes** — objective, target audience, channels, messaging, budget, timeline, KPIs, results
- **Vendor / Partner Notes** — service/product, contract terms, contact info, performance notes, renewal date, action items
- **Product Roadmap Item** — problem it solves, target users, success metrics, priority, effort, timeline, dependencies
- **Board / Investor Update** — highlights, metrics dashboard, challenges, asks, next milestone
- **Employee Review Notes** — accomplishments, areas for growth, goals for next period, compensation notes, action items
- **Operations Checklist** — process name, frequency, checklist items, owner, last completed, notes
- **Strategic Planning Notes** — horizon, goals, key initiatives, resources needed, risks, OKRs

### Folder Structure
```
Strategy/
  Plans/
  OKRs/
Finance/
  Monthly/
  Annual/
Marketing/
  Campaigns/
  Content/
Operations/
  Processes/
  Vendors/
Team/
  Reviews/
  Hiring/
Customers/
  Meetings/
  Accounts/
Products/
  Roadmap/
  Research/
```

---

## Setup Prompt

> Copy and paste this prompt into your AI assistant (with mdcrypt MCP configured).

---
You are setting up a Business Owner / Entrepreneur vault in mdcrypt. Follow these steps in order, using the mdcrypt MCP tools.

**Step 1: Identify the target crypt**
Call `list_crypts`. Show me the results and ask which crypt to use. If there is only one or a default is marked, proceed with that one. Remember the `crypt_id` for all subsequent calls.

**Step 2: Create templates**
Create each template below using `create_template`. Use the exact name, description, and content provided.

---

Template 1 — Name: `Business Plan Section`
Description: `Document a section of your business plan with current state, proposals, and financial impact`
Content:
```
# Business Plan Section: [Section Title]

**Section Type:** Executive Summary | Market Analysis | Product/Service | Operations | Financial | Go-to-Market | Team
**Version:** [1.0]
**Date:** [YYYY-MM-DD]
**Author:** [Name]
**Status:** Draft | In Review | Final

---

## Executive Summary of This Section
[2–3 sentences: What is this section about and what is the key conclusion or recommendation?]

## Current State
[Where things stand today — facts, data, and honest assessment]

## Proposed Direction / Changes
[What we plan to do — be specific about what, why, and how]

## Supporting Evidence / Data
- [Market data, customer research, or competitive intelligence supporting this direction]
- [Data point 2]

## Financial Impact
| Scenario | Year 1 | Year 2 | Year 3 |
|---|---|---|---|
| Conservative | $[amount] | $[amount] | $[amount] |
| Base | $[amount] | $[amount] | $[amount] |
| Optimistic | $[amount] | $[amount] | $[amount] |

**Assumptions:**
- [Key assumption 1]
- [Key assumption 2]

## Risks
| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| [Risk 1] | High/Med/Low | High/Med/Low | [Mitigation] |

## Next Actions
- [ ] [Action 1 — owner — due date]
- [ ] [Action 2 — owner — due date]

## Open Questions
- [ ] [Question that needs resolution before this section is finalized]
```

---

Template 2 — Name: `Customer Meeting Notes`
Description: `Capture customer conversations with pain points, solutions, and deal notes`
Content:
```
# Customer Meeting Notes

**Date:** [YYYY-MM-DD]
**Company:** [Company name]
**Contact(s):** [Name, Title | Name, Title]
**Meeting Type:** Discovery | Demo | Check-in | QBR | Negotiation | Renewal
**Relationship Stage:** Prospect | Trial | Customer | At-risk | Churned
**Meeting Duration:** [X minutes]
**Who Was There (Our Side):** [Names and roles]

---

## Context
[Brief background on this customer — how long they've been a customer, key account details, where we left off]

## Agenda / Purpose
[What was the goal of this meeting?]

## Discussion Points
- [Key topic discussed 1]
- [Key topic discussed 2]
- [Key topic discussed 3]

## Pain Points Identified
- [Pain point 1 — in their words where possible]
- [Pain point 2]

## Proposed Solutions / Next Steps from Us
- [What we offered or committed to]

## Customer Commitments
- [What they agreed to do]

## Objections / Concerns Raised
- [Objection 1 — and how we responded]
- [Objection 2]

## Deal Notes
- **Deal Stage:** [Stage in CRM]
- **Deal Size:** $[amount]
- **Timeline:** [When they're looking to decide / renew / expand]
- **Decision Maker(s):** [Who signs off]
- **Competitors in Play:** [Any competitors being evaluated]

## Follow-up Actions
| Action | Owner | Due Date |
|---|---|---|
| [Follow-up action] | [Name] | [Date] |
| [Send proposal / materials] | [Name] | [Date] |

## Sentiment
[Overall tone of the meeting — positive, neutral, at-risk — and key signal]
```

---

Template 3 — Name: `Financial Review`
Description: `Review a financial period with revenue, expenses, cash flow, and variance analysis`
Content:
```
# Financial Review: [Period]

**Period:** [Month/Quarter/Year] [YYYY]
**Prepared by:** [Name]
**Review Date:** [YYYY-MM-DD]
**Reviewed with:** [Accountant / CFO / Board]

---

## Revenue Summary
| Revenue Stream | Actual | Budget | Variance | Notes |
|---|---|---|---|---|
| [Stream 1] | $[amount] | $[amount] | [+/-$] | |
| [Stream 2] | $[amount] | $[amount] | [+/-$] | |
| **Total Revenue** | $[amount] | $[amount] | [+/-$] | |

## Expense Breakdown
| Category | Actual | Budget | Variance | Notes |
|---|---|---|---|---|
| Payroll & Benefits | $[amount] | $[amount] | [+/-$] | |
| Marketing | $[amount] | $[amount] | [+/-$] | |
| Software & Tools | $[amount] | $[amount] | [+/-$] | |
| Office & Facilities | $[amount] | $[amount] | [+/-$] | |
| Professional Services | $[amount] | $[amount] | [+/-$] | |
| Other | $[amount] | $[amount] | [+/-$] | |
| **Total Expenses** | $[amount] | $[amount] | [+/-$] | |

## Bottom Line
- **Gross Profit:** $[amount] ([X]% margin)
- **Net Profit / Loss:** $[amount] ([X]% margin)
- **vs. Budget:** $[+/- amount]

## Cash Flow
- **Cash at start of period:** $[amount]
- **Cash in:** $[amount]
- **Cash out:** $[amount]
- **Cash at end of period:** $[amount]
- **Runway at current burn:** [X months]

## Key Variances (>10% or >$1,000)
- **[Category]:** [Explanation — why over/under budget]
- **[Category]:** [Explanation]

## Key Metrics
| Metric | This Period | Prior Period | Target |
|---|---|---|---|
| MRR / ARR | $[amount] | $[amount] | $[amount] |
| Gross margin % | [X]% | [X]% | [X]% |
| Customer count | [N] | [N] | [N] |
| CAC | $[amount] | $[amount] | $[amount] |
| LTV | $[amount] | $[amount] | $[amount] |

## Action Items
- [ ] [Action — owner — due date]
- [ ] [Action — owner — due date]
```

---

Template 4 — Name: `Marketing Campaign Notes`
Description: `Plan and track a marketing campaign with objective, channels, budget, and KPIs`
Content:
```
# Marketing Campaign: [Campaign Name]

**Objective:** [What business goal does this campaign serve?]
**Campaign Type:** Awareness | Demand gen | Product launch | Retention | Event | Content
**Status:** Planning | Active | Paused | Complete
**Campaign Owner:** [Name]
**Start Date:** [YYYY-MM-DD]
**End Date:** [YYYY-MM-DD]

---

## Target Audience
- **Primary:** [Specific description — role, industry, company size, pain points]
- **Secondary:** [Secondary audience if applicable]

## Messaging
- **Core message / value proposition:** [What we want them to believe or feel]
- **Call to action:** [What we want them to do]
- **Key differentiators to emphasize:** [What makes us different from alternatives]

## Channels & Tactics
| Channel | Tactic | Budget | Owner | Launch Date |
|---|---|---|---|---|
| [e.g. LinkedIn] | [Sponsored posts] | $[amount] | [Name] | [Date] |
| [e.g. Email] | [Nurture sequence] | $[amount] | [Name] | [Date] |
| [e.g. SEO/Content] | [Blog posts] | $[amount] | [Name] | [Date] |

## Budget
- **Total budget:** $[amount]
- **Spent to date:** $[amount]
- **Remaining:** $[amount]

## KPIs & Targets
| KPI | Target | Actual | Notes |
|---|---|---|---|
| Impressions | [N] | | |
| Clicks / Traffic | [N] | | |
| Leads generated | [N] | | |
| Conversion rate | [X%] | | |
| Pipeline influenced | $[amount] | | |
| Revenue influenced | $[amount] | | |

## Assets & Links
- [Landing page URL]
- [Ad creative folder]
- [Email sequence link]

## Results & Learnings (complete post-campaign)
[What worked? What didn't? What to do differently next time?]
```

---

Template 5 — Name: `Vendor / Partner Notes`
Description: `Document a vendor or partner relationship with contract terms and performance notes`
Content:
```
# Vendor / Partner Notes: [Vendor / Partner Name]

**Type:** Vendor | Technology Partner | Agency | Contractor | Strategic Partner
**Service / Product:** [What they provide]
**Status:** Active | Under Evaluation | Former
**Primary Contact:** [Name, Email, Phone]
**Account Manager (their side):** [Name, Email]
**Internal Owner:** [Name — who manages this relationship]

---

## Contract Terms
- **Contract start:** [YYYY-MM-DD]
- **Contract end / renewal date:** [YYYY-MM-DD]
- **Billing:** [Monthly / Annual / Usage-based]
- **Cost:** $[amount] / [period]
- **Auto-renewal:** Yes / No — notice period: [X days]
- **Key terms / SLAs:** [Key contractual commitments]

## What They Do for Us
[Brief description of the service or product and how we use it]

## Integration / Dependencies
[What systems or processes depend on this vendor?]

## Performance Notes
| Date | Observation | Action |
|---|---|---|
| [Date] | [What happened — positive or negative] | [Action taken] |

## Issues Log
- [ ] [Open issue — raised on date — status]

## Renewal Decision
- **Renew / Renegotiate / Cancel**
- **Notes:** [Reasoning and next steps]

## Alternatives to Consider
- [Alternative vendor 1 — brief note]

## Action Items
- [ ] [Action — due date]
```

---

Template 6 — Name: `Product Roadmap Item`
Description: `Define a product feature or initiative with problem, metrics, priority, and timeline`
Content:
```
# Product Roadmap Item: [Feature / Initiative Name]

**Status:** Idea | Under Consideration | Planned | In Development | Launched | Retired
**Priority:** P0 — Critical | P1 — High | P2 — Medium | P3 — Low
**Target Quarter:** [Q1/Q2/Q3/Q4 YYYY]
**Product Owner:** [Name]
**Engineering Lead:** [Name]
**Effort Estimate:** [T-shirt: S/M/L/XL or story points]

---

## Problem Statement
[What problem does this solve? Who has this problem and how often?]

## Target Users
[Specific user segment — be precise: "SMB customers using the API" not "all users"]

## Proposed Solution
[High-level description of what we'll build — not a spec, but enough to communicate the idea]

## Success Metrics
| Metric | Baseline | Target | Measurement Method |
|---|---|---|---|
| [Metric 1] | [current value] | [goal] | [how measured] |
| [Metric 2] | [current value] | [goal] | [how measured] |

## Business Case
- **Revenue impact:** [Estimated upsell, new customer acquisition, or retention effect]
- **Customer signal:** [Feedback, requests, or data supporting this priority]
- **Strategic fit:** [How this aligns with company strategy]

## Dependencies
- [Dependency 1 — team, feature, or external factor]
- [Dependency 2]

## Risks
- [Risk 1 — and mitigation]

## Timeline
| Phase | Description | Target Date |
|---|---|---|
| Design | [Mockups and spec] | [Date] |
| Development | [Build] | [Date] |
| Beta / Testing | [Internal or limited release] | [Date] |
| Launch | [Full release] | [Date] |

## Launch Checklist
- [ ] Engineering complete
- [ ] QA sign-off
- [ ] Documentation updated
- [ ] Marketing / comms prepared
- [ ] Support team briefed
```

---

Template 7 — Name: `Board / Investor Update`
Description: `Prepare a board or investor update with highlights, metrics, challenges, and asks`
Content:
```
# Board / Investor Update

**Date:** [YYYY-MM-DD]
**Period Covered:** [Month / Quarter]
**Prepared by:** [Founder / CEO name]
**Distribution:** [Board members / Investors]

---

## Highlights
- [Most important positive development — be specific]
- [Highlight 2]
- [Highlight 3]

## Key Metrics Dashboard
| Metric | This Period | Prior Period | Target | Trend |
|---|---|---|---|---|
| ARR / MRR | $[amount] | $[amount] | $[amount] | ↑ |
| New customers | [N] | [N] | [N] | |
| Churn rate | [X%] | [X%] | [X%] | |
| Gross margin | [X%] | [X%] | [X%] | |
| Runway | [X months] | [X months] | | |
| Team size | [N] FTEs | [N] FTEs | | |
| Headcount changes | +[N] | | | |

## Product & Customer Progress
[What shipped? What customer wins or milestones were reached?]

## Challenges & What We're Doing About Them
- **[Challenge 1]:** [Honest description] → [What we're doing]
- **[Challenge 2]:** [Honest description] → [What we're doing]

## Asks
> The following are areas where board members can help.

- [ ] **[Ask 1]:** [Specific request — intro, advice, resource]
- [ ] **[Ask 2]:** [Specific request]

## Financial Summary
- **Cash on hand:** $[amount]
- **Monthly burn:** $[amount]
- **Runway:** [X months]
- **Last period P&L:** Revenue $[amount] | Expenses $[amount] | Net $[amount]

## Next Milestone
[The single most important thing we're working toward — what it is and when we expect to hit it]

## Upcoming Board Agenda Items
[Preview of topics for the next board meeting]
```

---

Template 8 — Name: `Employee Review Notes`
Description: `Document an employee performance review with accomplishments, growth areas, and goals`
Content:
```
# Employee Review Notes

**Review Period:** [Start date] to [End date]
**Employee:** [Use role / initials — keep names out of general notes]
**Role:** [Job title]
**Manager:** [Name]
**Review Date:** [YYYY-MM-DD]
**Review Type:** Annual | Mid-year | Probationary | PIP check-in

---

## Overall Assessment
[Overall performance summary — honest and balanced]

**Performance Rating:** [Exceeds | Meets | Partially Meets | Does Not Meet expectations]

## Accomplishments
- [Specific achievement — with impact]
- [Specific achievement]
- [Specific achievement]

## Areas for Growth
- [Area 1 — specific and actionable, not vague]
- [Area 2]

## Feedback Received from Others
[360 feedback themes if applicable — keep summary, not verbatim]

## Goals for Next Period
| Goal | Description | Success Criteria | Timeline |
|---|---|---|---|
| 1 | [Goal description] | [What done looks like] | [Date] |
| 2 | [Goal description] | [What done looks like] | [Date] |

## Development Plan
- [Skill or capability to develop]
- [How: training, mentorship, stretch assignment]

## Compensation Notes
[Salary / equity adjustment, rationale, effective date — keep sensitive]

## Action Items
- [ ] [Action — owner — due date]
- [ ] [Share review with employee by: date]

## Employee Comments (if provided)
[Note key themes from employee's self-assessment or response]
```

---

Template 9 — Name: `Operations Checklist`
Description: `Recurring operational process checklist with owner, frequency, and completion tracking`
Content:
```
# Operations Checklist: [Process Name]

**Owner:** [Name / Role]
**Frequency:** Daily | Weekly | Monthly | Quarterly | Annual
**Estimated Time:** [X minutes]
**Last Completed:** [YYYY-MM-DD]
**Next Due:** [YYYY-MM-DD]

---

## Purpose
[What does this process accomplish? Why is it important?]

## Pre-check
- [ ] [Prerequisite — what must be in place before starting]

## Checklist
- [ ] [Step 1 — specific and actionable]
- [ ] [Step 2]
- [ ] [Step 3]
- [ ] [Step 4]
- [ ] [Step 5]
- [ ] [Step 6]
- [ ] Confirm completion and note date below

## Completion Log
| Date | Completed by | Notes / Issues |
|---|---|---|
| [YYYY-MM-DD] | [Name] | [Any issues encountered] |

## If Something Is Wrong
[What to do if a step fails or an anomaly is found]

## Related Checklists / Processes
- [Related process name — link]

## Notes
[Any operational context, exceptions to be aware of, or recent changes]
```

---

Template 10 — Name: `Strategic Planning Notes`
Description: `Capture strategic planning sessions with goals, initiatives, OKRs, and risks`
Content:
```
# Strategic Planning: [Horizon / Period]

**Planning Horizon:** 1 Year | 3 Year | 5 Year
**Period:** [Fiscal year or date range]
**Session Date:** [YYYY-MM-DD]
**Participants:** [Names / Roles]
**Facilitator:** [Name]

---

## Company Vision (reminder)
[State your long-term vision — what does success look like in 10 years?]

## Where We Are Now
- **Strengths:** [What we do well]
- **Weaknesses:** [Honest gaps or constraints]
- **Opportunities:** [External trends or openings]
- **Threats:** [Competitive or market risks]

## Goals for This Horizon
1. [Goal 1 — specific, measurable, time-bound]
2. [Goal 2]
3. [Goal 3]

## Key Initiatives
| Initiative | Goal it Supports | Owner | Timeline | Budget |
|---|---|---|---|---|
| [Initiative 1] | [Goal #] | [Name] | [Q/Year] | $[amount] |
| [Initiative 2] | [Goal #] | [Name] | [Q/Year] | $[amount] |

## OKRs
### Objective 1: [Objective — ambitious, qualitative]
- KR1: [Key Result — measurable] — Target: [value]
- KR2: [Key Result] — Target: [value]
- KR3: [Key Result] — Target: [value]

### Objective 2: [Objective]
- KR1: [Key Result] — Target: [value]
- KR2: [Key Result] — Target: [value]

## Resources Needed
| Resource | Type | Amount / Headcount | Timeline |
|---|---|---|---|
| [Resource] | Budget / Hire / Tool | [Amount] | [When] |

## Risks to the Plan
| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| [Risk 1] | High/Med/Low | High/Med/Low | [Mitigation] |

## Review Cadence
- **Monthly:** [What metrics / milestones to review]
- **Quarterly:** [Deeper OKR check-in]
- **Annual:** [Full plan review and refresh]
```

---

**Step 3: Create the root-level folders**
Create each of these folders using `create_folder` with the `crypt_id` from Step 1. No `parent_id` needed for root folders.

1. Create folder named `Strategy` in the crypt
2. Create folder named `Finance` in the crypt
3. Create folder named `Marketing` in the crypt
4. Create folder named `Operations` in the crypt
5. Create folder named `Team` in the crypt
6. Create folder named `Customers` in the crypt
7. Create folder named `Products` in the crypt

**Step 4: Create subfolders**
Create each subfolder using `create_folder`, supplying the `parent_id` returned from the parent folder creation in Step 3.

1. Create folder named `Plans` using the ID returned from creating `Strategy`
2. Create folder named `OKRs` using the ID returned from creating `Strategy`
3. Create folder named `Monthly` using the ID returned from creating `Finance`
4. Create folder named `Annual` using the ID returned from creating `Finance`
5. Create folder named `Campaigns` using the ID returned from creating `Marketing`
6. Create folder named `Content` using the ID returned from creating `Marketing`
7. Create folder named `Processes` using the ID returned from creating `Operations`
8. Create folder named `Vendors` using the ID returned from creating `Operations`
9. Create folder named `Reviews` using the ID returned from creating `Team`
10. Create folder named `Hiring` using the ID returned from creating `Team`
11. Create folder named `Meetings` using the ID returned from creating `Customers`
12. Create folder named `Accounts` using the ID returned from creating `Customers`
13. Create folder named `Roadmap` using the ID returned from creating `Products`
14. Create folder named `Research` using the ID returned from creating `Products`

After completing all steps, provide a summary table of templates created and the folder hierarchy.
---
