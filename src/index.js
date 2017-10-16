import APP from './js/App.js';
import './scss/app.scss';

const App = new APP();

window.addEventListener('load', function () {
  App.init();
});
