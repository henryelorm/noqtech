// Next 16 static export writes per-segment prefetch payloads as nested folders
// (e.g. out/services/__next.services/__PAGE__.txt), but the client router requests
// the flat name (out/services/__next.services.__PAGE__.txt). Static hosts like GitHub
// Pages can't rewrite, so prefetches 404. This copies each nested file to its flat
// name, leaving the originals in place. Safe to remove once Next emits flat files.
import { copyFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const OUT = 'out';
let copied = 0;

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (!statSync(full).isDirectory() || name === '_next') continue;
    if (name.startsWith('__next.')) flatten(dir, full);
    else walk(full);
  }
}

function flatten(routeDir, segmentDir) {
  const files = (function list(d) {
    return readdirSync(d).flatMap((n) => (statSync(join(d, n)).isDirectory() ? list(join(d, n)) : [join(d, n)]));
  })(segmentDir);
  for (const file of files) {
    const flatName = relative(routeDir, file).split(sep).join('.');
    const target = join(routeDir, flatName);
    if (!existsSync(target)) {
      copyFileSync(file, target);
      copied++;
    }
  }
}

if (existsSync(OUT)) {
  walk(OUT);
  console.log(`fix-segment-prefetch: wrote ${copied} flat prefetch file(s)`);
}
