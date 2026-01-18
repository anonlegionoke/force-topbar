# Force Top Bar

A GNOME Shell extension that keeps the top bar (panel) visible even when applications are in fullscreen mode.

## Features

- Forces the top bar to remain visible in fullscreen applications
- Works with all GNOME Shell 45+ versions
- Clean enable/disable without leaving side effects

## Compatibility

| GNOME Shell | Status |
|-------------|--------|
| 45          | ✅     |
| 46          | ✅     |
| 47          | ✅     |
| 48          | ✅     |
| 49          | ✅     |

## Installation

### Manual Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/force-topbar.git
   ```

2. Copy to GNOME Shell extensions directory:
   ```bash
   mkdir -p ~/.local/share/gnome-shell/extensions/
   cp -r force-topbar ~/.local/share/gnome-shell/extensions/force-topbar@local
   ```

3. Restart GNOME Shell:
   - **X11**: Press `Alt+F2`, type `r`, press `Enter`
   - **Wayland**: Log out and log back in

4. Enable the extension:
   ```bash
   gnome-extensions enable force-topbar@local
   ```

## How It Works

GNOME Shell's `LayoutManager` monitors fullscreen windows and automatically hides the top panel. This extension monkey-patches the `_updateVisibility()` method to force the panel to remain visible regardless of fullscreen state.

When disabled, the extension restores the original behavior cleanly.

## Files

```
force-topbar@local/
├── extension.js    # Main extension logic
├── metadata.json   # Extension metadata
└── README.md       # This file
```

## Uninstall

```bash
gnome-extensions disable force-topbar@local
rm -rf ~/.local/share/gnome-shell/extensions/force-topbar@local
```

## License

This project is licensed under the GPL-3.0 License.
