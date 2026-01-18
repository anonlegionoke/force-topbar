import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import { Extension } from 'resource:///org/gnome/shell/extensions/extension.js';

export default class ForceTopBarExtension extends Extension {
    _originalUpdateVisibility = null;
    _originalUpdatePanelBarrier = null;

    enable() {
        this._originalUpdateVisibility = Main.layoutManager._updateVisibility.bind(Main.layoutManager);
        this._originalUpdatePanelBarrier = Main.layoutManager._updatePanelBarrier.bind(Main.layoutManager);

        // Override _updateVisibility to always treat primaryMonitor as NOT having a fullscreen window
        Main.layoutManager._updateVisibility = () => {
            this._originalUpdateVisibility();

            Main.layoutManager.panelBox.visible = true;
            Main.panel.show();
        };

        // Override _updatePanelBarrier to prevent it from being removed in fullscreen
        Main.layoutManager._updatePanelBarrier = () => {
            this._originalUpdatePanelBarrier();
        };

        Main.layoutManager._updateVisibility();
    }

    disable() {
        if (this._originalUpdateVisibility) {
            Main.layoutManager._updateVisibility = this._originalUpdateVisibility;
            this._originalUpdateVisibility = null;
        }

        if (this._originalUpdatePanelBarrier) {
            Main.layoutManager._updatePanelBarrier = this._originalUpdatePanelBarrier;
            this._originalUpdatePanelBarrier = null;
        }

        Main.layoutManager._updateVisibility();
    }
}

