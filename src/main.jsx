import Elm from './app/Main.elm';
import './main.scss';

const mountNode = document.getElementById('app');
const app = Elm.Main.embed(mountNode);

var token = {
    accessToken: "access_token",
    idToken: "id_token",
    tokenType: "token_type",
    expiresIn: 32090

};

const Storage = Window.sessionStorage;

app.ports.put.subscribe(item => Storage.setItem("access_token", item));
app.ports.get.send(Storage.getItem("access_token"));


if (module.hot) {
    module.hot.accept();
}
