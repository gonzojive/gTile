import {
    Clutter, DND, Lang, Main, MessageTray, Meta, PanelMenu, Shell, Signals, St, Tweener, WindowManager, Workspace,
    Settings, hotkeys
  } from "./gnomeimports_typed";

import * as tspec from "./tilespec"
import * as resizelib from "./resize"

export function enable() {
    log("Extension start enabling");
}

export function disable() {
    log("Extension start disabling");
}

declare const global: any;

function log(log_string) {
  global.log("gTile " + log_string);
}
