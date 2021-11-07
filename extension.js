'use strict';

const St = imports.gi.St;

const Main = imports.ui.main;
const Util = imports.misc.util;

let button;

function _myKBD () {
Util.spawnCommandLine("bash /home/user/toggle-monitor.sh")
}

function init() {
    button = new St.Bin({ style_class: 'panel-button',
                          reactive: true,
                          can_focus: true,
                          track_hover: true });
                          
    let icon = new St.Icon ({ icon_name: 'input-keyboard-symbolic',
                      style_class: 'system-status-icon' });
    button.set_child(icon);
    button.connect('button-press-event', _myKBD);
}

function enable() {
        Main.panel._rightBox.insert_child_at_index(button, 0);
}

function disable() {
        Main.panel._rightBox.remove_child(button);
}
