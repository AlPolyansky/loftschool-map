export default class View {
  initViewMap(idName, params) {
    return new ymaps.Map(idName, params);
  }

  addMarker(map,cords){
    map.geoObjects
      .add(new ymaps.Placemark(cords, {
        balloonContent: 'цвет <strong>воды пляжа бонди</strong>'
      }, {
        preset: 'islands#icon',
        iconColor: '#0095b6'
      }))
  }
}