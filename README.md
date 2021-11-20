# GNOME extension for toggling a second monitor

Creates a button in the top right part of the GNOME shell top bar.
When pressed it turns your second monitor on or off. This is good
when you need to save power or focus on your main monitor without distraction.

The connection of my second monitor is hardcoded in the extension.js file.
You can change it to yours.

## Install

```bash
mkdir $HOME/.local/share/gnome-shell/extensions/togglemon/
cp * $HOME/.local/share/gnome-shell/extensions/togglemon/
gnome-extensions enable togglemon
```

Restart the system (Alt + F2 + r).
