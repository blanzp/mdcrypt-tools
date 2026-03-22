# Personal Vault Setup

> Scaffold a personal productivity workspace with templates for daily journaling, weekly reviews, goal setting, book notes, travel planning, health logging, learning notes, project ideas, and recipes.

## What Gets Created

### Templates (9 templates)
- **Daily Journal** — mood, gratitude, intention, brain dump, end of day reflection, tomorrow's priority
- **Weekly Review** — wins, challenges, energy/mood trend, habits check, goals progress, lessons, next week's focus
- **Goal Setting** — why it matters, success criteria, deadline, milestones, obstacles, support needed, first step
- **Book Notes** — author, genre, date read, one-sentence summary, key ideas, favorite quotes, how to apply, rating
- **Travel Planning** — destination, dates, accommodation, transport, itinerary table, budget, packing list, to book checklist
- **Health & Wellness Log** — sleep, energy, exercise, meals, water, mood notes, symptoms
- **Learning Notes** — topic, source, key concepts, examples, questions, how to practice, summary
- **Project / Idea** — the problem or opportunity, initial concept, research needed, first steps, resources, status
- **Recipe** — source, servings, prep/cook time, ingredients, instructions, notes, rating

### Folder Structure
```
Journal/
  Daily/
  Weekly Reviews/
Goals/
  Active/
  Achieved/
Learning/
  Books/
  Courses/
  Notes/
Health/
Travel/
  Planning/
  Memories/
Projects/
  Active/
  Ideas/
```

---

## Setup Prompt

> Copy and paste this prompt into your AI assistant (with mdcrypt MCP configured).

---
You are setting up a Personal Use vault in mdcrypt. Follow these steps in order, using the mdcrypt MCP tools.

**Step 1: Identify the target crypt**
Call `list_crypts`. Show me the results and ask which crypt to use. If there is only one or a default is marked, proceed with that one. Remember the `crypt_id` for all subsequent calls.

**Step 2: Create templates**
Create each template below using `create_template`. Use the exact name, description, and content provided.

---

Template 1 — Name: `Daily Journal`
Description: `A structured daily journaling template with mood, gratitude, intention, and reflection`
Content:
```
# Daily Journal — [YYYY-MM-DD]

**Day:** [Monday / Tuesday / Wednesday / Thursday / Friday / Saturday / Sunday]
**Mood (1–10):** [Rate your overall mood]

---

## Morning

### Gratitude
What am I grateful for today? (3 things minimum — be specific)
1. [Something specific, not generic]
2. [Something specific]
3. [Something specific]

### Today's Intention
What is the one thing that would make today a great day?
[Single sentence — focus on one thing]

### Brain Dump
[Write anything that's on your mind. Get it out of your head and onto the page. No filter.]

---

## Evening

### What happened today?
[Brief summary — key events, conversations, things that stood out]

### What went well?
[At least one win — no matter how small]

### What would I do differently?
[One honest reflection — no judgment, just noticing]

### How did I feel today?
[Check in with yourself — energy, emotions, physical state]

### Tomorrow's Priority
[The single most important thing I need to do tomorrow]

---

## Notes
[Any other thoughts, ideas, or things to remember]
```

---

Template 2 — Name: `Weekly Review`
Description: `Reflect on the past week and set intentions for the next`
Content:
```
# Weekly Review — Week of [YYYY-MM-DD]

**Week number:** [W1–W52]
**Overall rating (1–10):** [How was this week overall?]

---

## Looking Back

### Wins This Week
- [Win 1 — be specific, celebrate it]
- [Win 2]
- [Win 3]

### Challenges
- [Challenge 1 — what happened and what did you learn?]
- [Challenge 2]

### Energy & Mood Trend
[How was your energy and mood across the week? Any patterns?]
- Monday: [High/Medium/Low]
- Tuesday:
- Wednesday:
- Thursday:
- Friday:
- Weekend:

### Habits Check
| Habit | Mon | Tue | Wed | Thu | Fri | Sat | Sun | % |
|---|---|---|---|---|---|---|---|---|
| [Habit 1] | ✓/✗ | | | | | | | |
| [Habit 2] | | | | | | | | |
| [Habit 3] | | | | | | | | |

---

## Goals Progress
| Goal | Status | Progress This Week | Blockers |
|---|---|---|---|
| [Goal 1] | On track / At risk / Paused | [Brief update] | [If any] |
| [Goal 2] | | | |

---

## Lessons Learned
[What did this week teach you? One honest insight.]

## Gratitude for the Week
[Something from this week you're grateful for]

---

## Looking Forward

### Next Week's Focus
[The most important thing to accomplish or work on next week]

### Top 3 Priorities
1. [Priority 1]
2. [Priority 2]
3. [Priority 3]

### What to Let Go Of
[Something to worry less about, drop, or delegate]

### One Thing to Do for Myself
[Rest, fun, health, or something restorative]
```

---

Template 3 — Name: `Goal Setting`
Description: `Define and plan a goal with milestones, obstacles, and first steps`
Content:
```
# Goal: [Goal Title]

**Created:** [YYYY-MM-DD]
**Target Deadline:** [YYYY-MM-DD]
**Area of Life:** Career | Health | Relationships | Finance | Learning | Creative | Personal Growth | Other
**Status:** Not Started | Active | On Hold | Achieved | Abandoned

---

## The Goal
[State the goal clearly and specifically. What exactly do you want to achieve?]

## Why It Matters
[Why is this goal important to you? What will be different when you achieve it?]

## What Success Looks Like
[Be concrete and specific — how will you know when you've achieved this goal?]

## Current Starting Point
[Where are you now relative to this goal? Be honest.]

## Milestones
| Milestone | Target Date | Done? |
|---|---|---|
| [Milestone 1 — early win] | [Date] | [ ] |
| [Milestone 2] | [Date] | [ ] |
| [Milestone 3] | [Date] | [ ] |
| [Milestone 4 — near finish line] | [Date] | [ ] |

## Potential Obstacles
- [Obstacle 1 — and how you'll handle it if it comes up]
- [Obstacle 2 — and your plan]

## Support & Resources Needed
- [Person who could help or hold you accountable]
- [Resource, tool, or information needed]
- [Habit or system to support this goal]

## First Step
[The very first small action you'll take — small enough to do today or this week]

## Progress Notes
| Date | Update |
|---|---|
| [Date] | [Brief progress update] |

## Reflection (complete when done or stopped)
[What did you learn from pursuing this goal?]
```

---

Template 4 — Name: `Book Notes`
Description: `Capture key ideas, quotes, and takeaways from a book`
Content:
```
# Book Notes: [Title]

**Author:** [Author name(s)]
**Genre:** [Genre / category]
**Date Started:** [YYYY-MM-DD]
**Date Finished:** [YYYY-MM-DD]
**Format:** Physical | Kindle | Audiobook | PDF
**Rating:** [1–5 stars or /10]
**Recommended For:** [Who should read this?]

---

## One-Sentence Summary
[The most concise summary of the book's core message]

## Why I Read It
[What drew you to this book? What were you hoping to get from it?]

## Key Ideas
1. **[Idea 1]:** [Your explanation in your own words — 2–4 sentences]
2. **[Idea 2]:** [Your explanation]
3. **[Idea 3]:** [Your explanation]
4. **[Idea 4]:** [Your explanation]

## Favorite Quotes
> "[Quote]" — p. [page]

> "[Quote]" — p. [page]

> "[Quote]" — p. [page]

## What Changed How I Think
[Did any idea challenge or shift your perspective? Be specific.]

## How to Apply This
- [Concrete thing you'll do differently as a result of this book]
- [Habit, system, or behavior change to try]
- [Concept to teach or share with someone]

## Chapters / Sections Worth Revisiting
- **[Chapter/section]:** [Why to return to it]

## Questions the Book Raised
- [Question 1 — unresolved thought]
- [Question 2]

## Similar Books / Next Reads
- [Book title] — [why related]
```

---

Template 5 — Name: `Travel Planning`
Description: `Plan a trip with itinerary, budget, packing list, and booking checklist`
Content:
```
# Travel: [Destination]

**Trip Name:** [e.g. "Japan Spring 2025"]
**Destination(s):** [City / Country / Region]
**Departure Date:** [YYYY-MM-DD]
**Return Date:** [YYYY-MM-DD]
**Duration:** [X nights]
**Purpose:** Vacation | Work | Family | Adventure | Slow travel
**Traveling With:** [Solo / Partner / Family / Friends]

---

## Booking Checklist
- [ ] Flights — booked: [Date] — confirmation: [#]
- [ ] Accommodation — booked: [Date] — confirmation: [#]
- [ ] Travel insurance — booked: [Date]
- [ ] Visas / entry requirements — checked: [Date]
- [ ] Vaccinations / health requirements
- [ ] Airport transfers
- [ ] Car rental / transport passes
- [ ] Key activities / experiences — reserved: [list]

---

## Accommodation
| Dates | Place | Booking Ref | Address | Notes |
|---|---|---|---|---|
| [Date–Date] | [Hotel/Airbnb name] | [Ref] | [Address] | |

## Transport
| From | To | Method | Time | Booking Ref | Notes |
|---|---|---|---|---|---|
| [City] | [City] | Flight | [Time] | [Ref] | |

---

## Itinerary
| Day | Date | Activities / Plans | Notes |
|---|---|---|---|
| 1 | [Date] | [Arrive, [activity]] | [Note] |
| 2 | [Date] | [Activity, activity] | |
| 3 | [Date] | | |

## Budget
| Category | Estimated | Actual |
|---|---|---|
| Flights | $[amount] | |
| Accommodation | $[amount] | |
| Food & drink | $[amount] | |
| Activities | $[amount] | |
| Transport (local) | $[amount] | |
| Shopping / misc | $[amount] | |
| **Total** | $[amount] | |

## Packing List
### Essentials
- [ ] Passport / ID
- [ ] Travel insurance documents
- [ ] Phone + charger + adapter
- [ ] Medications
- [ ] Credit / debit cards + local cash

### Clothes
- [ ] [Item]
- [ ] [Item]

### Tech
- [ ] [Item]

### Other
- [ ] [Item]

## Notes & Tips
[Research notes, restaurant recommendations, local customs, things to know before arriving]
```

---

Template 6 — Name: `Health & Wellness Log`
Description: `Track daily health metrics including sleep, energy, exercise, and mood`
Content:
```
# Health & Wellness Log — [YYYY-MM-DD]

---

## Sleep
- **Bedtime (last night):** [HH:MM]
- **Wake time:** [HH:MM]
- **Hours slept:** [X.X]
- **Sleep quality (1–10):** [Rate]
- **Notes:** [Dreams, interruptions, how rested you feel]

## Energy & Mood
- **Morning energy (1–10):** [Rate]
- **Afternoon energy (1–10):** [Rate]
- **Evening energy (1–10):** [Rate]
- **Overall mood:** [Great / Good / Neutral / Low / Rough]
- **Mood notes:** [What's influencing your mood today?]

## Movement & Exercise
- **Activity:** [Type of exercise or movement]
- **Duration:** [X minutes]
- **Intensity:** [Easy / Moderate / Hard]
- **Notes:** [How it felt, any notes]

## Nutrition
- **Breakfast:** [What you ate]
- **Lunch:** [What you ate]
- **Dinner:** [What you ate]
- **Snacks:** [What you ate]
- **Water intake:** [X glasses / X ml]
- **Caffeine:** [X cups / drinks]
- **Alcohol:** [None / X drinks]

## Body
- **Any symptoms today:** [Headache, pain, illness, etc. — or "none"]
- **Medications / supplements taken:** [List]

## Mental Health
- **Stress level (1–10):** [Rate]
- **What's weighing on me:** [Optional — note stressors]
- **What helped:** [What supported your wellbeing today]

## Intentions for Tomorrow
[One thing to do differently tomorrow for your health]
```

---

Template 7 — Name: `Learning Notes`
Description: `Capture structured notes on anything you're learning`
Content:
```
# Learning Notes: [Topic]

**Source:** [Book / Course / Video / Article / Podcast / Experience]
**Source Title / URL:** [Title or link]
**Creator / Author:** [Name]
**Date:** [YYYY-MM-DD]
**Time spent:** [X minutes / hours]

---

## What I Was Trying to Learn
[What question or gap brought you to this source?]

## Key Concepts
### [Concept 1]
[Explanation in your own words — if you can't explain it simply, you don't understand it yet]

### [Concept 2]
[Explanation]

### [Concept 3]
[Explanation]

## Examples
- **[Concept] in practice:** [Real-world example or analogy]
- **[Concept] in practice:** [Example]

## What Surprised Me
[Something unexpected or that challenged what you thought you knew]

## Questions I Still Have
- [ ] [Question 1]
- [ ] [Question 2]

## How to Practice This
[How will you reinforce this learning? What will you do to make it stick?]
- [Deliberate practice idea]
- [Project or task to apply this to]

## Summary
[2–4 sentence summary of the most important things you learned]

## Resources to Explore Next
- [Related resource — why it's relevant]
```

---

Template 8 — Name: `Project / Idea`
Description: `Capture and develop a personal project or idea from concept to first steps`
Content:
```
# Project / Idea: [Title]

**Created:** [YYYY-MM-DD]
**Status:** Idea | Exploring | Active | On Hold | Complete | Abandoned
**Category:** Creative | Technical | Learning | Business | Home | Community | Other

---

## The Idea
[Describe the idea or project in a few sentences. What is it?]

## The Problem or Opportunity
[Why does this matter? What gap, need, or opportunity does this address?]

## Why I'm Excited About This
[What draws you to this idea personally?]

## Initial Concept
[How might this work? What's the rough shape of it? Don't over-think — just capture]

## Research Needed
- [ ] [Question to answer before proceeding]
- [ ] [Thing to learn or validate]
- [ ] [Similar projects or prior art to look at]

## First Steps
- [ ] [First small step — can you do it in under an hour?]
- [ ] [Second step]
- [ ] [Third step]

## Resources
- **Time:** [How much time would this take? Weekly commitment?]
- **Money:** [Any costs? Budget?]
- **Skills needed:** [What do I already have? What do I need to learn?]
- **People:** [Anyone to collaborate with or get advice from?]

## Progress Notes
| Date | Update |
|---|---|
| [Date] | [What happened, what was built or learned] |

## Outcome / Reflection (complete when done or stopped)
[What did you create or learn? What would you do differently?]
```

---

Template 9 — Name: `Recipe`
Description: `Save a recipe with ingredients, instructions, and personal notes`
Content:
```
# Recipe: [Dish Name]

**Source:** [Where did this recipe come from? Book, website, person?]
**Cuisine:** [e.g. Italian, Thai, Mexican]
**Course:** Breakfast | Lunch | Dinner | Dessert | Snack | Drink
**Servings:** [X servings]
**Prep Time:** [X minutes]
**Cook Time:** [X minutes]
**Total Time:** [X minutes]
**Difficulty:** Easy | Medium | Hard
**Rating:** [1–5 stars]
**Last Made:** [YYYY-MM-DD]

---

## Why I Love This
[One sentence on why this recipe is worth keeping]

## Ingredients
- [ ] [Amount] [ingredient]
- [ ] [Amount] [ingredient]
- [ ] [Amount] [ingredient]
- [ ] [Amount] [ingredient]
- [ ] [Amount] [ingredient]

## Instructions
1. [Step 1 — be specific about technique, heat, time]
2. [Step 2]
3. [Step 3]
4. [Step 4]
5. [Step 5]

## Notes & Variations
- **What I do differently:** [Any substitutions or improvements from the original]
- **Variation 1:** [How to modify the recipe]
- **Tip:** [A technique or note that makes this better]

## Made For / Occasion
[Who was this made for? Any context that makes this recipe memorable]

## Pairs Well With
- [Side dish or drink]
```

---

**Step 3: Create the root-level folders**
Create each of these folders using `create_folder` with the `crypt_id` from Step 1. No `parent_id` needed for root folders.

1. Create folder named `Journal` in the crypt
2. Create folder named `Goals` in the crypt
3. Create folder named `Learning` in the crypt
4. Create folder named `Health` in the crypt
5. Create folder named `Travel` in the crypt
6. Create folder named `Projects` in the crypt

**Step 4: Create subfolders**
Create each subfolder using `create_folder`, supplying the `parent_id` returned from the parent folder creation in Step 3.

1. Create folder named `Daily` using the ID returned from creating `Journal`
2. Create folder named `Weekly Reviews` using the ID returned from creating `Journal`
3. Create folder named `Active` using the ID returned from creating `Goals`
4. Create folder named `Achieved` using the ID returned from creating `Goals`
5. Create folder named `Books` using the ID returned from creating `Learning`
6. Create folder named `Courses` using the ID returned from creating `Learning`
7. Create folder named `Notes` using the ID returned from creating `Learning`
8. Create folder named `Planning` using the ID returned from creating `Travel`
9. Create folder named `Memories` using the ID returned from creating `Travel`
10. Create folder named `Active` using the ID returned from creating `Projects`
11. Create folder named `Ideas` using the ID returned from creating `Projects`

After completing all steps, provide a summary table of templates created and the folder hierarchy.
---
