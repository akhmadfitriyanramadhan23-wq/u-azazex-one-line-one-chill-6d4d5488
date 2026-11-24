import { mkdirSync, writeFileSync } from "node:fs";

// One line of horror: a concrete, bodily image at the dentist,
// a second set of teeth growing behind the first — and the
// dread lands on the last words, when the new teeth smile first.
const text =
  "The dentist found a second set of teeth growing behind mine, and when I smiled, the new ones smiled first, wider than mine.\n";

// Guard: the gate requires 1-200 characters, one line, one sentence.
const codePoints = [...text].length;
if (codePoints < 1 || codePoints > 200) {
  throw new Error(`entry must be 1-200 characters, got ${codePoints}`);
}
const lines = text.trimEnd().split("\n");
if (lines.length !== 1 || !lines[0].trim()) {
  throw new Error("entry must be exactly one non-empty line");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
