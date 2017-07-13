import WeuiDialog from './dialog';

export default class WeuiActionSheetCtrl{
  static _instance = null;

  static createInstance(inProps) {
    this._instance = this._instance || WeuiDialog.newInstance(inProps);
    return this._instance;
  }

  static show(inOptions) {
    return this._instance.component.show(inOptions);
  }

  static hide() {
    return this._instance.component.hide();
  }

  static destory() {
    this._instance.destory();
    this._instance = null;
  }
}
