import Elm from './app/Main.elm';
import './main.scss';
import './queries.graphql'
import './assets/github.png'
import './assets/github_dark.png'
import './assets/markdown_editor.png'
import Highlighter from './assets/highlight.pack'



const mountNode = document.getElementById('app');
const app = Elm.Main.embed(mountNode,JSON.parse(localStorage.getItem("tokens")));


Highlighter.initHighlightingOnLoad();



app.ports.saveTokens.subscribe(function (item) {
    localStorage.setItem("tokens", JSON.stringify(item));
    app.ports.getTokens.send(JSON.parse(localStorage.getItem("tokens")));
});


if (module.hot) {
    module.hot.accept();
}

