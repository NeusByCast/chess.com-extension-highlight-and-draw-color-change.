# chess.com highlight & draw color change

Plain right-click square highlights and right-drag arrows on chess.com come out in the blue color normally shown only while holding Alt. No need to hold Alt.

## Install (Chrome / Edge / Brave)
1. Download or clone this repo.
2. Open `chrome://extensions` and enable **Developer mode**.
3. Click **Load unpacked** and select the repo folder.
4. Reload any open chess.com tabs.

## Firefox (128+)
Open `about:debugging#/runtime/this-firefox` → **Load Temporary Add-on** → pick `manifest.json`.

## How it works
A tiny content script (`content.js`) makes right-button mouse/pointer events report `altKey = true`, so chess.com draws with its Alt color. No build step, no dependencies.
