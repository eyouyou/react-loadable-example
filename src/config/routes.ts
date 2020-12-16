import { RouteItem } from "../models/route"

const routesConfig: RouteItem[] = [
    {
        name: 'login',
        path: '/login',
        component: 'views/login'
    },
    {
        name: 'main',
        path: '/main',
        component: 'views/main',
        routes: [{
            name: 'hello',
            path: '/main/hello',
            component: 'views/hello'
        }]
    }
]

export default routesConfig
