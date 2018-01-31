/*****************************************************************

  This extension has been developed by vibou

  With the help of the gnome-shell community

  Edited by Kvis for gnome 3.8
  Edited by Lundal for gnome 3.18
  Edited by Sergey to add keyboard shortcuts and prefs dialog

 ******************************************************************/

declare const imports: any;

/*****************************************************************
  CONST & VARS
 *****************************************************************/
// Library imports
export const St = imports.gi.St;
export const Main = imports.ui.main;
export const Shell = imports.gi.Shell;
export const WindowManager = imports.ui.windowManager;
export const MessageTray = imports.ui.messageTray;
export const Lang = imports.lang;
export const PanelMenu = imports.ui.panelMenu;
export const DND = imports.ui.dnd;
export const Meta = imports.gi.Meta;
export const Clutter = imports.gi.Clutter;
export const Signals = imports.signals;
export const Tweener = imports.ui.tweener;
export const Workspace = imports.ui.workspace;

// Extension imports
export const Extension = imports.misc.extensionUtils.getCurrentExtension();
export const Settings = Extension.imports.settings;
export const hotkeys = Extension.imports.hotkeys;
