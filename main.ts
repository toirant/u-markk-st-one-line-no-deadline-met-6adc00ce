// One Line: No Deadline Met — writes a single-line deadline-miss excuse
// to /output/entry.txt. The line is the whole entry: one sentence, under
// 200 characters, that reads like something a person would actually say
// when cornered, with the punch landing at the end.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "My reminder fired right on time — I just spent the whole afternoon admiring how punctual it was instead of doing the work.";

const OUT = "/output/entry.txt";

function validate(text: string): void {
  if (!text || text.trim().length === 0) {
    throw new Error("entry is empty or whitespace-only");
  }
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry is ${text.length} characters, must be 1-200`);
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  // Must round-trip as UTF-8 text.
  if (Buffer.from(text, "utf8").toString("utf8") !== text) {
    throw new Error("entry is not valid UTF-8 text");
  }
}

validate(ENTRY);
mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, ENTRY, "utf8");
// Read back what landed on disk and re-validate it, so a partial or
// mangled write can never pass silently.
const written = readFileSync(OUT, "utf8");
if (written !== ENTRY) {
  throw new Error("written entry does not match the intended text");
}
validate(written);
console.log(`Wrote ${ENTRY.length} characters to ${OUT}`);
