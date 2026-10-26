# Book Store app

The Book Store website (`../bookStore`) as an Android app, built with [Capacitor](https://capacitorjs.com).
The app is a native shell that loads the live site, so every page, change and fix on the website shows up
in the app with no app update.

## What you need

- Node.js 22 or newer (installed)
- [Android Studio](https://developer.android.com/studio), which brings the Android SDK, an emulator and Java
- The Book Store site running so the phone can reach it (below)

## Run it

1. Start the website, from `../bookStore`:

   ```
   php artisan serve --host=0.0.0.0 --port=8000
   ```

   For the emulator, plain `php artisan serve` is enough: its `10.0.2.2` is your PC's own `127.0.0.1`.
   A real phone needs `--host=0.0.0.0`, or it gets "Can't reach Book Store".

2. Point the app at it and open Android Studio, from this folder:

   | Running on | Command |
   |---|---|
   | Android emulator | `npm run android` (uses `http://10.0.2.2:8000`, the emulator's name for your PC) |
   | Phone on the same Wi-Fi | `set SITE_URL=http://192.168.0.100:8000&& npm run android` (PowerShell: `$env:SITE_URL="http://192.168.0.100:8000"; npm run android`) |

   `192.168.0.100` is this PC's address on your network today; check it with `ipconfig` if it stops working.
   Windows Firewall may ask to allow PHP on private networks the first time; allow it.

3. In Android Studio, pick the emulator or your phone and press ▶ Run.

`npm run run:android` does steps 2 and 3 without opening Android Studio, once an emulator or phone is connected.

## Going live

1. Put the website on a server with **https**.
2. Set `SITE_URL=https://your-domain` and run `npm run sync`. Plain-http access is turned off automatically for https addresses.
3. Change `appId` in `capacitor.config.ts` from `com.bookstore.app` to your own reverse domain. It can't change after the first release.
4. Build a signed release in Android Studio (Build › Generate Signed App Bundle) and upload it to Google Play.

## Files

- `capacitor.config.ts`: the app's name, id and the site address it loads.
- `www/index.html`: the "Can't reach Book Store" page, shown only when the site is offline. `www/site-url.js` is written by `npm run sync` so its Try again button opens the right address.
- `android/`: the Android Studio project. Open it in Android Studio; `npm run sync` keeps it up to date.

## iOS

Capacitor can build an iPhone app from the same config, but it needs a Mac with Xcode:
`npm install @capacitor/ios && npx cap add ios`, then `npx cap open ios`.
