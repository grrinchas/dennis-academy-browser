import Elm from './app/Main.elm';
import './style.css';

const mountNode = document.getElementById('app');
const app = Elm.Main.embed(mountNode);

if (module.hot) {
  module.hot.accept();
}
