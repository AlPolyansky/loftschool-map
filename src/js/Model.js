import Base from './base/_core.js';

const _base = new Base();

export default class Model {
  constructor(mapData) {
    this.mapData = mapData || {};
    this.map = null;
    this._clickCords = [];
    this._mouseCords = [];
  }

  initMapData(params) {
    let defaultParams = {
      center: [55.76, 37.64],
      zoom: 7
    };

    params = _base.extend(defaultParams, params);

    return this.mapData = params;
  }

  set clickCords(value){
    this._clickCords = value;
  };

  set mouseCords(value){
    this._mouseCords = value;
  };

  get mouseCords(){
    return this._mouseCords;
  };

  get clickCords(){
    return this._clickCords;
  };


}