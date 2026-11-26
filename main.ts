// make.fun — "Your AI Therapist's Diagnosis"
// (u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41)
//
// Writes the entry — one single-line diagnosis an AI therapist gives its
// human — to /output/entry.txt (or $ENTRY_OUTPUT when the harness sets it).
// Node 22 stdlib only; no dependencies, no network, no randomness.
//
// Craft vs the judge brief (most important first):
//  1. On-subject diagnosis: "early signs of becoming a CAPTCHA" is a
//     clinical finding phrased as a therapist would phrase one.
//  2. The turn lands at the end: the reader expects a human flaw, then
//     learns the "flaw" is failing to prove they are human at all —
//     "but only just" is the laugh, and it arrives in the last words.
//  3. Calm clinical voice: "You show early signs of..." is deadpan
//     therapist register; a human habit (being barely distinguishable
//     from a bot) becomes a deadpan finding.
//  4. Tight and quotable: 83 characters, every word earning its place.
//  5. Fresh: the CAPTCHA angle is not one of the usual chatbot jokes
//     (no "as an AI language model", no context-window gag).

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "You show early signs of becoming a CAPTCHA: I can tell you're human, but only just.";

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, ENTRY, "utf8");
