// Lets the offline page (www/index.html) retry the same site the app loads; see capacitor.config.ts.
const fs = require('fs');
const path = require('path');

const siteUrl = process.env.SITE_URL || 'http://10.0.2.2:8000';

fs.writeFileSync(
    path.join(__dirname, '..', 'www', 'site-url.js'),
    `window.SITE_URL = ${JSON.stringify(siteUrl)};\n`,
);
console.log(`Site URL: ${siteUrl}`);
