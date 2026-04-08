import { copyFileSync, existsSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const dist = join(dirname(fileURLToPath(import.meta.url)), "..", "dist");
const index = join(dist, "index.html");
const notFound = join(dist, "404.html");

if (existsSync(index)) {
  copyFileSync(index, notFound);
  console.log("Copied index.html -> 404.html (GitHub Pages SPA fallback)");
}
