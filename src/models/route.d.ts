export interface RouteItem {
    name: string,
    path: string,
    component: string,
    routes?: RouteItem[]
}

