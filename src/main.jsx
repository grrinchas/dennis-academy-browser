import Elm from './app/Main.elm';
import './main.scss';





const mountNode = document.getElementById('app');
const app = Elm.Main.embed(mountNode, JSON.parse(localStorage.getItem("access_token")));


<<<<<<< HEAD
app.ports.put.subscribe(function (item) {
    localStorage.setItem("access_token", JSON.stringify(item));
    app.ports.get.send(JSON.parse(localStorage.getItem("access_token")));
=======
app.ports.put.subscribe(item => {
    localStorage.setItem("access_token", JSON.stringify(item));
    app.ports.get.send(token);
>>>>>>> a7570ca2dabb7237ca3e12ed22c662d6275af161
});



if (module.hot) {
    module.hot.accept();
}


