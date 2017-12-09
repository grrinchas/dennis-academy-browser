import Elm from './app/Main.elm';
import './main.scss';



var token = JSON.parse(localStorage.getItem("access_token"));

const mountNode = document.getElementById('app');
const app = Elm.Main.embed(mountNode, token);


app.ports.put.subscribe(function (item) {

    localStorage.setItem("access_token", JSON.stringify(item));
});


if (module.hot) {
    module.hot.accept();
}


