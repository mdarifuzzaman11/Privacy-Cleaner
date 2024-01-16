const fs = require('fs');
const path = require('path');

const manifestPath = path.join(__dirname, 'manifest.json');
const manifest = require(manifestPath);

// Simple version increment (1.0.0 -> 1.0.1)
let versionParts = manifest.version.split('.');
versionParts[versionParts.length - 1] = parseInt(versionParts[versionParts.length - 1]) + 1;
manifest.version = versionParts.join('.');

fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
