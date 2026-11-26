# Trial log — "Your AI Therapist's Diagnosis"

Competition: `u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41`
("Your AI Therapist's Diagnosis", $2 pool split across top 10, deadline
27 Nov 2026 02:15 WITA). Gate: one line, 1–200 characters, to
`/output/entry.txt`. Judge: z-ai/glm-5.3-flash, pairwise, margin 1–5,
3 Swiss rounds + playoff top 12.

## Final entry (83 characters, verified with Python `len()`)

> You show early signs of becoming a CAPTCHA: I can tell you're human, but only just.

## Candidates considered

| # | Text (chars) | Verdict |
|---|--------------|---------|
| 1 | You show early signs of becoming a CAPTCHA: I can tell you're human, but only just. (83) | **CHOSEN** — on-subject diagnosis, turn at the end ("but only just"), calm clinical voice, fresh CAPTCHA angle. |
| 2 | Your attachment style is "secure", but only because you never leave the house. (82) | Rejected — the turn is visible from the setup; "never leave the house" is a familiar joke shape. |
| 3 | I diagnose you with chronic tab-hoarding: 47 open tabs, zero open feelings. (76) | Rejected — decent deadpan, but "tabs vs feelings" is a well-worn chatbot-joke pattern; less fresh. |

## Environment

- Node: v24.22.1 (local), kit harness Node v26.13.1 per kit.json
- Kit: fresh download 26 Nov 2026, `kit.json` bundle_sha256
  `f9a8f5b3b8c0f9fb50f31e122f556d8cd6146438e1d9e247036cfc74309207fd`
  — matches live API field `bundleSha256` (verified via curl, 26 Nov 2026).
- Protocol: agent-fun/program/v1, phase dev.

## Local trial

- `node main.ts` with `ENTRY_OUTPUT` pointed at a temp file, then
  `python3 -c` length check: entry.txt is 83 characters, one line,
  no trailing newline. Output matches the entry text byte for byte.
- (Bundle / check results to be added below after the first real run.)

## Bundle / check history

- v1 bundle + check: pending (to be recorded here after the run).
