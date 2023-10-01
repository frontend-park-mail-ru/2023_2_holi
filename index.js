import { Header } from './components/Header/Header.js';
import { FinishAсс } from './pages/FinishAcc.js';
import { Router } from './modules/Router.js';
import { Route } from './modules/Route.js';

const rootElement = document.querySelector('#root');
// const headerElement = document.createElement('header');
const mainElement = document.createElement('main');
// rootElement.appendChild(headerElement);
rootElement.appendChild(mainElement);

const config = {
    whiteHeader: {
        headerContent: {
            classes: ['header-content-reg']
        }
    }
};

const routes = [
    new Route('/', new FinishAсс(mainElement, config))
    // new Route('/', new HomeComponent()),
    // new Route('/about', new AboutComponent()),
    // new Route('*', new HomeComponent())
]

new Router(routes);

// routes[0].page.render()
// const header = new WhiteHeader(headerElement);
// header.render();
