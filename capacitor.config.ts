import type { CapacitorConfig } from '@capacitor/cli';

// The app is the Book Store website in a native shell: it loads the live site from SITE_URL.
//   Android emulator → http://10.0.2.2:8000 (the default; the emulator's name for your PC)
//   Phone on your Wi-Fi → http://192.168.0.100:8000
//   Production → https://your-domain
// Run `npx cap sync` after changing it.
const siteUrl = process.env.SITE_URL || 'http://10.0.2.2:8000';

const config: CapacitorConfig = {
    // TODO: change to your own reverse-domain id before publishing; it can't change after release.
    appId: 'com.bookstore.app',
    appName: 'Book Store',
    // Only shown if the site can't be reached (see www/index.html).
    webDir: 'www',
    server: {
        url: siteUrl,
        // The local Laravel server is plain http; production should be https.
        cleartext: siteUrl.startsWith('http://'),
        errorPath: 'index.html',
    },
    android: {
        backgroundColor: '#F7F6F2',
    },
};

export default config;
