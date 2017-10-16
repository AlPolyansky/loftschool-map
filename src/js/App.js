import CONTROLLER from './Controller.js';

const Controller = new CONTROLLER();

/* Файл прослойка перед точкой входа index.js */

export default class App {
  init() {
    Controller.createMap({
      zoom: 10
    });
  }
}