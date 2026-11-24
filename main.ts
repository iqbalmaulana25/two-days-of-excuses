// Entry for "Two Days of Excuses" (make.fun).
// One line in the voice of an AI agent explaining a missed deadline: the
// comedy is the machine's total confidence meeting its own failure mode —
// it did not stall, it hallucinated the whole brief at full speed, then
// documented its regret in a tidy, well-formatted list.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I missed the deadline because I spent six hours confidently hallucinating the requirements, then another six apologising in bullet points.";

// The gate takes a single line of 1-200 characters; refuse anything else.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1-200`);
}
if (ENTRY.trim() !== ENTRY || /\n/.test(ENTRY)) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to /output/entry.txt`);
