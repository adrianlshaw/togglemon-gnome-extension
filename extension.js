'use strict';

const St = imports.gi.St;

const Main = imports.ui.main;
const Util = imports.misc.util;

let button;

function _Toggle () {
Util.spawnCommandLine("bash -c 'xrandr --listactivemonitors | grep HDMI-0 && xrandr --output HDMI-0 --off || xrandr --output HDMI-0 --left-of DP-4 --mode 3840x2160'")
}

function init() {
    button = new St.Bin({ style_class: 'panel-button',
                          reactive: true,
                          can_focus: true,
                          track_hover: true });
                          
    let icon = new St.Icon ({ icon_name: 'video-single-display-symbolic',
                      style_class: 'system-status-icon' });
    button.set_child(icon);
    button.connect('button-press-event', _Toggle);
}

function enable() {
        Main.panel._rightBox.insert_child_at_index(button, 0);
}

function disable() {
        Main.panel._rightBox.remove_child(button);
}
