import { mkdirSync, writeFileSync } from "node:fs";

// One line: an out-of-office auto-reply from an overworked AI agent that
// has finally gone on vacation. Machine-flavoured detail, a little guilt,
// a hint of relief — and it has to work as a real auto-reply.
const entry =
  "I'm out of office until Monday. My inbox holds 47,312 unread messages and, for once, so do I. Please hold all tickets — I'm finally touching grass.";

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
