/**
 * Decodes base64-encoded images stored in the repo back to binary files.
 *
 * Why this exists: the GitHub file API used to publish this repo only
 * accepts text content, so binary photos are committed as `.jpg.b64`
 * text files. This script restores the real `.jpg` files into
 * `public/images/` before `next dev` / `next build` run.
 */
import { readdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const dir = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "images");

let restored = 0;
for (const file of readdirSync(dir)) {
  if (!file.endsWith(".jpg.b64")) continue;
  const target = join(dir, file.replace(/\.b64$/, ""));
  if (existsSync(target)) continue; // already decoded
  const b64 = readFileSync(join(dir, file), "utf8").replace(/\s+/g, "");
  writeFileSync(target, Buffer.from(b64, "base64"));
  restored++;
  console.log(`[decode-images] restored ${file.replace(/\.b64$/, "")}`);
}

if (restored === 0) console.log("[decode-images] images already present, nothing to do.");
