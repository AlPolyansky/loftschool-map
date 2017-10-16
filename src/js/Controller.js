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
      Model.mouseCords = [
        e.get('domEvent').get('pageX'),
        e.get('domEvent').get('pageY')
      ];

      View.addMarker(
        Model.map,
        Model.clickCords,
      {
        balloonContent: '123'
      }
      );

      View.render(document.querySelector('.reviews'),'review',{});
      let review = document.querySelector('.review');
      review.style.left = Math.floor(Model.mouseCords[0]) + 'px';
      review.style.top = Math.floor(Model.mouseCords[1])  + 'px';
    });
  }

}