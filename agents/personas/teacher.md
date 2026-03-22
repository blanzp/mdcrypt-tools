# Teacher Vault Setup

> Scaffold an educator's workspace with templates for lesson plans, course outlines, assessments, student progress notes, parent communication, professional development, unit plans, staff meetings, and reflections.

## What Gets Created

### Templates (9 templates)
- **Lesson Plan** — subject, grade, duration, objectives, standards, materials, procedure, assessment, differentiation
- **Course Outline** — course title, description, learning objectives, unit schedule, assessment breakdown, resources
- **Assessment Design** — assessment title, type, objectives assessed, rubric, instructions, accommodations
- **Student Progress Note** — anonymized student, strengths, areas for growth, observations, next steps, parent communication
- **Parent Communication** — date, topic, key points discussed, agreements, follow-up needed
- **Professional Development Log** — date, activity/training, key takeaways, how to apply, action items
- **Unit Plan** — unit title, duration, essential questions, big ideas, skills, summative assessment, lesson sequence
- **Staff Meeting Notes** — date, attendees, agenda items, decisions, action items
- **Reflection Journal** — date, what went well, what to improve, student engagement observations, adjustments

### Folder Structure
```
Courses/
  [Course Name]/
    Lessons/
    Assessments/
    Resources/
Students/
  Observations/
  Communications/
Professional Development/
Administration/
  Meetings/
  Policies/
Planning/
```

---

## Setup Prompt

> Copy and paste this prompt into your AI assistant (with mdcrypt MCP configured).

---
You are setting up a Teacher / Educator vault in mdcrypt. Follow these steps in order, using the mdcrypt MCP tools.

**Step 1: Identify the target crypt**
Call `list_crypts`. Show me the results and ask which crypt to use. If there is only one or a default is marked, proceed with that one. Remember the `crypt_id` for all subsequent calls.

**Step 2: Create templates**
Create each template below using `create_template`. Use the exact name, description, and content provided.

---

Template 1 — Name: `Lesson Plan`
Description: `Plan a single lesson with objectives, procedure, and assessment`
Content:
```
# Lesson Plan: [Lesson Title]

**Subject:** [Subject area]
**Grade Level:** [Grade(s)]
**Duration:** [e.g. 50 minutes]
**Date / Period:** [YYYY-MM-DD, Period X]
**Unit:** [Unit title this lesson belongs to]

---

## Learning Objectives
By the end of this lesson, students will be able to:
- [Objective 1 — use action verb: analyze, explain, create, evaluate]
- [Objective 2]
- [Objective 3]

## Standards Addressed
- [Standard code]: [Standard description]
- [Standard code]: [Standard description]

## Materials
- [Material / resource 1]
- [Material / resource 2]
- [Technology needed]

---

## Procedure

### Introduction / Hook (X minutes)
[How will you capture student interest and activate prior knowledge?]

### Direct Instruction (X minutes)
[What will you explicitly teach? Key concepts, vocabulary, demonstration.]

### Guided Practice (X minutes)
[How will students practice with teacher support?]

### Independent / Group Practice (X minutes)
[What will students do on their own or in groups?]

### Closure (X minutes)
[How will you wrap up and check for understanding? Exit ticket, discussion, summary.]

---

## Assessment
- **Formative:** [How will you check for understanding during the lesson?]
- **Summative:** [How does this connect to upcoming assessment?]
- **Success Criteria:** [How will students know if they met the objectives?]

## Differentiation
- **Support (struggling learners):** [Scaffolds, modified materials, pairing strategies]
- **Extension (advanced learners):** [Enrichment tasks or deeper questions]
- **ELL / Special needs:** [Language supports, accommodations]

## Reflection (complete after teaching)
- What went well?
- What would I change?
- Who needs additional support?
```

---

Template 2 — Name: `Course Outline`
Description: `Plan a full course with objectives, unit schedule, and assessment breakdown`
Content:
```
# Course Outline: [Course Title]

**Subject:** [Subject area]
**Grade Level:** [Grade(s)]
**Academic Year / Semester:** [e.g. 2025–2026, Semester 1]
**Instructor:** [Name]
**Room / Platform:** [Location or LMS]

---

## Course Description
[2–3 sentences: What will students study? What is the course's purpose?]

## Learning Objectives
By the end of this course, students will be able to:
1. [Objective 1]
2. [Objective 2]
3. [Objective 3]
4. [Objective 4]

## Required Materials
- [Textbook or primary resource]
- [Supplemental materials]
- [Technology requirements]

---

## Unit Schedule
| Unit | Title | Duration | Dates | Key Topics |
|---|---|---|---|---|
| 1 | [Title] | [X weeks] | [Date–Date] | [Topics] |
| 2 | [Title] | [X weeks] | [Date–Date] | [Topics] |
| 3 | [Title] | [X weeks] | [Date–Date] | [Topics] |

## Assessment Breakdown
| Assessment Type | Weight | Description |
|---|---|---|
| Formative (daily) | [X%] | Exit tickets, participation, homework |
| Unit tests | [X%] | End-of-unit assessments |
| Projects | [X%] | [Description] |
| Final exam / project | [X%] | [Description] |
| **Total** | 100% | |

## Grading Scale
| Grade | Percentage |
|---|---|
| A | 90–100% |
| B | 80–89% |
| C | 70–79% |
| D | 60–69% |
| F | Below 60% |

## Course Policies
- **Attendance:** [Policy]
- **Late work:** [Policy]
- **Academic integrity:** [Policy]

## Resources
- [Key website or database]
- [Support resource for students]
```

---

Template 3 — Name: `Assessment Design`
Description: `Design an assessment with objectives, rubric, and accommodations`
Content:
```
# Assessment: [Assessment Title]

**Course:** [Course name]
**Unit:** [Unit title]
**Type:** Quiz | Test | Project | Performance Task | Essay | Lab | Presentation
**Date / Due Date:** [YYYY-MM-DD]
**Points / Weight:** [X points / X% of grade]

---

## Learning Objectives Assessed
- [Objective 1 — standard code if applicable]
- [Objective 2]

## Instructions for Students
[Clear, student-facing instructions. What exactly must they do? What will they submit?]

## Rubric
| Criterion | Excellent (4) | Proficient (3) | Developing (2) | Beginning (1) |
|---|---|---|---|---|
| [Criterion 1] | [Description] | [Description] | [Description] | [Description] |
| [Criterion 2] | [Description] | [Description] | [Description] | [Description] |
| [Criterion 3] | [Description] | [Description] | [Description] | [Description] |

**Total Points:** [X]

## Answer Key / Model Response
[For objective assessments: answer key. For essays/projects: annotated exemplar or model response.]

## Accommodations
- **Extended time:** [For students with IEP/504 — X minutes additional]
- **Modified format:** [e.g. oral response option, reduced items]
- **Other:** [Any other standard accommodations]

## Feedback Plan
[How and when will students receive feedback? How will results inform instruction?]
```

---

Template 4 — Name: `Student Progress Note`
Description: `Document observations of an individual student's progress and next steps`
Content:
```
# Student Progress Note

**Student ID / Pseudonym:** [Use initials or pseudonym — do not use full name in notes]
**Grade:** [Grade level]
**Date:** [YYYY-MM-DD]
**Subject / Context:** [Class or context of observation]

---

## Strengths
- [Specific strength observed — with concrete example]
- [Strength 2]

## Areas for Growth
- [Area 1 — specific and actionable]
- [Area 2]

## Recent Observations
[Describe 2–3 specific, recent observations of this student's work or behavior. Be objective and evidence-based.]

- **[Date]:** [Observation]
- **[Date]:** [Observation]

## Academic Performance
- **Current grade / level:** [Grade or performance level]
- **Assessment results:** [Recent test or assignment scores]
- **Compared to expectations:** [On track / above / below]

## Social-Emotional Notes
[Relevant observations about engagement, wellbeing, or classroom dynamics — keep brief and professional]

## Next Steps
- [ ] [Instructional strategy to try]
- [ ] [Check-in scheduled for: date]
- [ ] [Referral needed: [specialist/support]]

## Parent / Guardian Communication
- **Last contact:** [Date and method]
- **Topics discussed:** [Brief note]
- **Follow-up needed:** Yes / No — [details]
```

---

Template 5 — Name: `Parent Communication`
Description: `Document a parent or guardian communication with outcomes and follow-up`
Content:
```
# Parent Communication Log

**Date:** [YYYY-MM-DD]
**Time:** [HH:MM]
**Method:** Phone | Email | In-person | Video call
**Student:** [Initials or pseudonym]
**Parent / Guardian:** [Relationship, e.g. "Mother" — avoid full name in notes]
**Initiated by:** Teacher | Parent | Administration

---

## Purpose / Topic
[Why was this contact made? What issue or occasion prompted it?]

## Key Points Discussed
- [Point 1]
- [Point 2]
- [Point 3]

## Parent / Guardian Response
[How did they respond? Any context they provided about the student?]

## Agreements / Next Steps
- [ ] [Agreement — who will do what by when]
- [ ] [Follow-up action]

## Follow-up Needed
- **Yes / No**
- **Date for follow-up:** [YYYY-MM-DD]
- **Method:** [Phone / Email / In-person]

## Notes
[Any other relevant context — tone of conversation, concerns raised, resources provided]
```

---

Template 6 — Name: `Professional Development Log`
Description: `Record professional development activities with takeaways and action items`
Content:
```
# Professional Development Log

**Date:** [YYYY-MM-DD]
**Activity / Training:** [Name of PD, workshop, conference, or course]
**Provider / Facilitator:** [Name or organization]
**Hours / Credits:** [X hours / X PD credits]
**Format:** Workshop | Conference | Online course | Observation | Reading | Coaching

---

## Summary
[2–3 sentences: What was this PD about? What was covered?]

## Key Takeaways
- [Takeaway 1 — most important insight]
- [Takeaway 2]
- [Takeaway 3]

## Strategies / Approaches to Try
- [Strategy 1 — when and how I'll try it]
- [Strategy 2]

## How It Connects to My Practice
[How does this relate to current challenges or goals in my classroom?]

## Resources Received
- [Book / article / website / tool]
- [Handout or material to keep]

## Action Items
- [ ] [Action 1 — by when]
- [ ] [Action 2 — by when]

## Reflection
[What resonated? What questions do I still have? Would I recommend this PD to colleagues?]
```

---

Template 7 — Name: `Unit Plan`
Description: `Design a multi-lesson unit with essential questions, sequence, and summative assessment`
Content:
```
# Unit Plan: [Unit Title]

**Course:** [Course name]
**Grade Level:** [Grade(s)]
**Duration:** [X weeks / X lessons]
**Start Date:** [YYYY-MM-DD]

---

## Essential Questions
- [Big question that frames the unit — open-ended, thought-provoking]
- [Essential question 2]

## Big Ideas / Enduring Understandings
[What should students remember years from now? What broad principles does this unit teach?]
- [Big idea 1]
- [Big idea 2]

## Learning Objectives
By the end of this unit, students will be able to:
1. [Objective 1 — action verb + content]
2. [Objective 2]
3. [Objective 3]

## Standards
- [Standard code]: [Description]

## Prior Knowledge Required
[What must students already know before starting this unit?]

## Key Vocabulary
| Term | Definition |
|---|---|
| [Term] | [Student-friendly definition] |

---

## Lesson Sequence
| Lesson | Title | Objectives | Key Activities | Assessment |
|---|---|---|---|---|
| 1 | [Title] | [Obj #] | [Activities] | [Formative] |
| 2 | [Title] | [Obj #] | [Activities] | [Formative] |
| 3 | [Title] | [Obj #] | [Activities] | [Formative] |

## Summative Assessment
- **Type:** [Project / test / performance task / essay]
- **Description:** [What students must do]
- **Criteria:** [What success looks like]
- **Weight:** [Points or % of grade]

## Resources & Materials
- [Textbook chapter / pages]
- [Supplemental texts or media]
- [Technology tools]

## Differentiation Plan
- **Support:** [How you'll scaffold for struggling learners]
- **Extension:** [How you'll challenge advanced learners]
```

---

Template 8 — Name: `Staff Meeting Notes`
Description: `Capture agenda items, decisions, and action items from a staff meeting`
Content:
```
# Staff Meeting Notes

**Date:** [YYYY-MM-DD]
**Time:** [HH:MM – HH:MM]
**Location:** [Room or video link]
**Facilitator:** [Name / Role]
**Notetaker:** [Name]

---

## Attendees
[List names or note "Full staff present" / "X absent"]

## Agenda
1. [Item 1]
2. [Item 2]
3. [Item 3]

---

## Discussion Notes

### [Agenda Item 1]
[Notes on what was discussed]

### [Agenda Item 2]
[Notes on what was discussed]

### [Agenda Item 3]
[Notes on what was discussed]

---

## Decisions Made
- [Decision 1]
- [Decision 2]

## Action Items
| Action | Owner | Due Date |
|---|---|---|
| [Action description] | [Name] | [YYYY-MM-DD] |
| [Action description] | [Name] | [YYYY-MM-DD] |

## Announcements / Reminders
- [Upcoming event or deadline]

## Next Meeting
**Date:** [YYYY-MM-DD]
**Time:** [HH:MM]
```

---

Template 9 — Name: `Reflection Journal`
Description: `Reflect on a lesson or teaching day to improve future practice`
Content:
```
# Teaching Reflection

**Date:** [YYYY-MM-DD]
**Class / Period:** [Class name and period]
**Lesson / Topic:** [What was taught today]

---

## What Went Well
- [Specific thing that worked — why did it work?]
- [Moment of genuine student engagement]
- [Strategy or approach that succeeded]

## What to Improve
- [What didn't work as planned — why?]
- [Where students seemed confused or disengaged]
- [What I'd do differently]

## Student Engagement Observations
- **High engagement:** [Which students / moments showed strong engagement?]
- **Low engagement:** [Who seemed disengaged? Possible reasons?]
- **Surprises:** [Any unexpected student responses, positive or negative?]

## Learning Check
[Based on formative assessment today, do students understand the objectives?]
- **Well understood:** [Concepts students seem solid on]
- **Needs more work:** [Concepts to revisit]
- **Students needing follow-up:** [Initials of students to check in with]

## Adjustments for Next Time
- [ ] [Change to make next lesson]
- [ ] [Resource to find or create]
- [ ] [Student to check in with before next class]

## Professional Goal Connection
[How does today's lesson connect to my current professional growth goal?]
```

---

**Step 3: Create the root-level folders**
Create each of these folders using `create_folder` with the `crypt_id` from Step 1. No `parent_id` needed for root folders.

1. Create folder named `Courses` in the crypt
2. Create folder named `Students` in the crypt
3. Create folder named `Professional Development` in the crypt
4. Create folder named `Administration` in the crypt
5. Create folder named `Planning` in the crypt

**Step 4: Create subfolders**
Create each subfolder using `create_folder`, supplying the `parent_id` returned from the parent folder creation in Step 3.

1. Create folder named `Course Name` using the ID returned from creating `Courses`
2. Create folder named `Lessons` using the ID returned from creating the `Course Name` folder
3. Create folder named `Assessments` using the ID returned from creating the `Course Name` folder
4. Create folder named `Resources` using the ID returned from creating the `Course Name` folder
5. Create folder named `Observations` using the ID returned from creating `Students`
6. Create folder named `Communications` using the ID returned from creating `Students`
7. Create folder named `Meetings` using the ID returned from creating `Administration`
8. Create folder named `Policies` using the ID returned from creating `Administration`

After completing all steps, provide a summary table of templates created and the folder hierarchy.
---
