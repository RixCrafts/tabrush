# TabRush

**TabRush** is a lightweight, keyboard-first browser extension that reloads every open tab across all browser windows with a single shortcut.

Built for Chromium browsers, including:

- Google Chrome
- Microsoft Edge
- Brave
- Opera
- Vivaldi

## Current Version

Version `1.0.0`

### Features

- Reloads all open tabs using one keyboard shortcut.
- Works across every open browser window.
- Uses a small delay between tab reloads to reduce sudden CPU and network spikes.
- Requires no popup, settings screen, or mouse interaction.
- Uses Manifest V3.

## Default Keyboard Shortcut

- Windows/Linux: `Alt + Shift + R`
- macOS: `Control + Shift + R`

`Ctrl + Shift + R` is not used on Windows/Linux because browsers reserve it for hard refresh.

## Install in Google Chrome

1. Download and extract the extension ZIP.
2. Open Chrome.
3. Navigate to `chrome://extensions`.
4. Enable **Developer mode**.
5. Click **Load unpacked**.
6. Select the extracted `tabrush` folder.
7. Press `Alt + Shift + R` to reload all open tabs.

## Install in Microsoft Edge

1. Download and extract the extension ZIP.
2. Open Microsoft Edge.
3. Navigate to `edge://extensions`.
4. Enable **Developer mode**.
5. Click **Load unpacked**.
6. Select the extracted `tabrush` folder.
7. Press `Alt + Shift + R` to reload all open tabs.

## Change the Keyboard Shortcut

### Chrome

1. Navigate to `chrome://extensions/shortcuts`.
2. Find **TabRush**.
3. Assign the preferred shortcut.

### Edge

1. Navigate to `edge://extensions/shortcuts`.
2. Find **TabRush**.
3. Assign the preferred shortcut.

Browser-reserved shortcuts cannot always be overridden.

## How It Works

When the configured command is triggered, the extension:

1. Queries all tabs across all open browser windows.
2. Reloads each tab.
3. Waits 50 milliseconds before moving to the next tab.
4. Logs failures without stopping the remaining reloads.

The delay is intentionally small. It keeps the action fast while reducing the resource spike caused by refreshing every tab at exactly the same instant.

## Permissions

The extension requests the `tabs` permission so it can discover and reload open tabs. It does not read page content, collect data, make external network requests, or use analytics.

## Upcoming Additions

Every action will remain keyboard-accessible. Planned commands include:

- Reload tabs in the current window only.
- Reload tabs across all windows.
- Reload while skipping pinned tabs.
- Reload while skipping discarded or sleeping tabs.
- Reload while excluding configured domains.
- Hard reload supported tabs.
- Stop or cancel an active reload sequence.
- Keyboard-driven presets for different reload behaviors.
- Optional completion feedback that does not require mouse interaction.

## Project Structure

```text
tabrush/
├── background.js
├── manifest.json
├── README.md
└── icons/
    ├── icon16.png
    ├── icon32.png
    ├── icon48.png
    └── icon128.png
```

## Development

No build process or external dependencies are required.

After changing a file:

1. Open the browser extensions page.
2. Find **TabRush**.
3. Click the reload icon for the extension.
4. Test the keyboard shortcut again.

## License

MIT
# tabrush
