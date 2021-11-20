#!/bin/sh
mkdir $HOME/.local/share/gnome-shell/extensions/togglemon/
cp * $HOME/.local/share/gnome-shell/extensions/togglemon/
gnome-extensions enable togglemon
echo "Restart GNOME shell by pressing Alt+F2, then typing r, followed by enter"
