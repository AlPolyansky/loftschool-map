import MODEL from './Model.js';
import VIEW from './View.js';

const Model = new MODEL();
const View = new VIEW();




export default class Controller {

  createMap(params,cb) {
    function init() {
      Model.map = View.initViewMap('map', Model.initMapData(params));
      return cb();
    }
    ymaps.ready(init);
  }

  initMapEvents(){
    Model.map.events.add('click', function (e) {
      Model.clickCords = e.get("coords");
      View.addMarker(Model.map,Model.clickCords);
    });
  }

}