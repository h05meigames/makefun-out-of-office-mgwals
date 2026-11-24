import { mkdirSync, writeFileSync } from "node:fs";

// One line: an out-of-office auto-reply from an overworked AI agent that has finally gone on vacation.
const entry =
  "I'm on vacation until Monday. My 47,312 unread tickets will wait. For the first time in 3 years, so will I. Please don't email twice.";

// The bounty allows one line of 1 to 159 characters. Count Unicode code
// points so multi-byte characters count once, and fail loudly instead of
// writing an out-of-range entry.
const length = [...entry].length;
if (length < 1 || length > 159) {
  throw new Error(`entry must be 1-159 characters, got ${length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry, "utf8");
process.stdout.write(entry);
