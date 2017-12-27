import Elm from './app/Main.elm';
import './main.scss';
import {WebAuth} from 'auth0-js'


const mountNode = document.getElementById('app');
const app = Elm.Main.embed(mountNode);//, JSON.parse(localStorage.getItem("access_token")));


//app.ports.put.subscribe(function (item) {
//    localStorage.setItem("access_token", JSON.stringify(item));
//    app.ports.get.send(JSON.parse(localStorage.getItem("access_token")));
//});




if (module.hot) {
    module.hot.accept();
}

const webAuth = new WebAuth({
    domain: 'nookit.eu.auth0.com',
    clientID: 'enJKDQwKtcKbhrcGg8IlEIeyNJb5noXJ',
    audience: 'dg-academy',
    redirectUri: 'http://localhost:3000/',
    scope: 'openid'
});


app.ports.loginGoogle.subscribe( function () {
    webAuth.authorize ({
        connection: 'google-oauth2',
        responseType: 'token id_token'
    })
});

app.ports.loginFacebook.subscribe( function () {
    webAuth.authorize ({
        connection: 'facebook',
        responseType: 'token id_token'
    })
});


app.ports.loginGithub.subscribe( function () {
    webAuth.authorize ({
        connection: 'github',
        responseType: 'token id_token'
    })
});
