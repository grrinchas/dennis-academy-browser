import Elm from './app/Main.elm';
import './main.scss';



const mountNode = document.getElementById('app');
const app = Elm.Main.embed(mountNode,JSON.parse(localStorage.getItem("tokens")));




app.ports.saveTokens.subscribe(function (item) {
    localStorage.setItem("tokens", JSON.stringify(item));
    app.ports.getTokens.send(JSON.parse(localStorage.getItem("tokens")));
});


if (module.hot) {
    module.hot.accept();
}
