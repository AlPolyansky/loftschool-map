import MODEL from './Model.js';
import VIEW from './View.js';

const Model = new MODEL();
const View = new VIEW();

export default class Controller {

  createMap(params) {
    function init() {
      View.initViewMap('map', Model.initMapData(params))
    }

    ymaps.ready(init);
  }
}