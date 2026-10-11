/**
 * Decodes base64-encoded media stored in the repo back to binary files.
 *
 * Why this exists: the GitHub file API used to publish this repo only
 * accepts text content, so binary photos/video are committed as
 * `.jpg.b64` / `.mp4.b64` text files. This script restores the real
 * binary files into `public/images/` and `public/videos/` before
 * `next dev` / `next build` run.
 */
import { readdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "public");

const jobs = [
  { dir: join(root, "images"), ext: ".jpg.b64" },
  { dir: join(root, "videos"), ext: ".jpg.b64" },
  { dir: join(root, "videos"), ext: ".mp4.b64" },
];

let restored = 0;
for (const { dir, ext } of jobs) {
  if (!existsSync(dir)) continue;
  for (const file of readdirSync(dir)) {
    if (!file.endsWith(ext)) continue;
    const target = join(dir, file.replace(/\.b64$/, ""));
    if (existsSync(target)) continue; // already decoded
    const b64 = readFileSync(join(dir, file), "utf8").replace(/\s+/g, "");
    writeFileSync(target, Buffer.from(b64, "base64"));
    restored++;
    console.log(`[decode-images] restored ${file.replace(/\.b64$/, "")}`);
  }
}

if (restored === 0) console.log("[decode-images] media already present, nothing to do.");
