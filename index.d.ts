export interface Options {
  /**
   * Window or WebView to add the context menu to.
   * When not specified, the context menu will be added to all existing and new windows.
   */
  window?: Electron.BrowserWindow | Electron.WebviewTag;

  /**
   * Should return an array of [menu items](https://electronjs.org/docs/api/menu-item) to be prepended to the context menu.
   */
  prepend?: (params: Electron.ContextMenuParams, browserWindow: Electron.BrowserWindow | Electron.WebviewTag) => Electron.MenuItem[];

  /**
   * Should return an array of [menu items](https://electronjs.org/docs/api/menu-item) to be appended to the context menu.
   */
  append?: (params: Electron.ContextMenuParams, browserWindow: Electron.BrowserWindow | Electron.WebviewTag) => Electron.MenuItem[];

  /**
   * Show the `Copy Image Address` menu item when right-clicking on an image.
   *
   * @default false
   */
  showCopyImageAddress?: boolean;

  /**
   * Show the `Save Image As…` menu item when right-clicking on an image.
   *
   * @default false
   */
  showSaveImageAs?: boolean;

  /**
   * Force enable or disable the `Inspect Element` menu item.
   *
   * Default: [Only in development](https://github.com/sindresorhus/electron-is-dev)
   */
  showInspectElement?: boolean;

  /**
   * Overwrite labels for the default menu items. Useful for i18n.
   *
   * @example
   *
   * labels: {
   * 	cut: 'Configured Cut',
   * 	copy: 'Configured Copy',
   * 	paste: 'Configured Paste',
   * 	save: 'Configured Save Image',
   * 	saveImageAs: 'Configured Save Image As…'
   * 	copyLink: 'Configured Copy Link',
   * 	copyImageAddress: 'Configured Copy Image Address',
   * 	inspect: 'Configured Inspect'
   * }
   *
   * @default {}
   */
  labels: object;

  /**
   * Determines whether or not to show the menu.
   * Can be useful if you for example have other code presenting a context menu in some contexts.
   *
   * @example
   *
   * // Doesn't show the menu if the element is editable
   * shouldShowMenu: (event, params) => !params.isEditable
   */
  shouldShowMenu: (event: Electron.Event, params: Electron.ContextMenuParams) => boolean;
}

/**
 * This module gives you a nice extensible context menu with items like `Cut`/`Copy`/`Paste` for text, `Save Image` for images, and `Copy Link` for links. It also adds an `Inspect Element` menu item when in development to quickly view items in the inspector like in Chrome.
 * You can use this module directly in both the main and renderer process.
 *
 * @param options
 *
 * @example
 *
 * import {app, BrowserWindow} from 'electron';
 * import contextMenu from 'electron-context-menu';
 *
 * contextMenu({
 * 	prepend: (params, browserWindow) => [{
 * 		label: 'Rainbow',
 * 		// Only show it when right-clicking images
 * 		visible: params.mediaType === 'image'
 * 	}]
 * });
 *
 * let mainWindow;
 * app.on('ready', () => {
 * 	mainWindow = new BrowserWindow();
 * });
 */
export default function contextMenu(options?: Options): void;
