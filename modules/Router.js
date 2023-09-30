export class Router {
    constructor(routes) {
        this.routes = routes;
        this.init();
    }

    init() {
        window.addEventListener('popstate', () => this.loadRoute());
        document.body.addEventListener('click', e => {
            if (e.target.matches('[data-link]')) {
                e.preventDefault();
                this.navigateTo(e.target.href);
            }
        });
    }

    navigateTo(url) {
        history.pushState(null, null, url);
        this.loadRoute();
    }

    async loadRoute() {
        const route = this.routes.find(r => r.path === location.pathname) || this.routes.find(r => r.path === '*');
        await route.page.render();
    }
}
