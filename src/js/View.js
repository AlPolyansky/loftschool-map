import reviewTemplate from '../templates/review.hbs';


function getTemplate(templateName,arr) {
  let output = '';
  arr.forEach(item => {
    if(item.name === templateName){
      output = item;
    }
  });

  return output;
}

export default class View {

  constructor(){
    this.templates = [
      {
        name: 'review',
        content: reviewTemplate
      }
    ]
  }

  initViewMap(idName, params) {
    return new ymaps.Map(idName, params);
  }

  addMarker(map,cords,value,options){
    map.geoObjects.add(new ymaps.Placemark(cords, value, options))
  }

  render(el,template,data = null){
    el.innerHTML = getTemplate(template,this.templates).content(data);
  }
}