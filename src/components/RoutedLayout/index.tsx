import loadable from "@loadable/component"
import React, { useState } from "react"
import { Route, Router, Switch, useHistory } from "react-router"
import { RouteItem } from "../../models/route"
import { createBrowserHistory } from "history";
import { Nav, Navbar } from "rsuite";
const myHistory = createBrowserHistory();

import { NavbarHeader } from './style';
interface RouterProp {
    routes: RouteItem[]
}

const RouterItem = (item: RouteItem) => {
    const Component = loadable(() => import(`../../${item.component}/index`))
    if (item.routes) {
        return (<Switch key={item.name}>
            <Route key={item.name} path={item.path} component={Component} />
            {
                item.routes?.map(element =>
                    (RouterItem(element))
                )
            }
        </Switch>)
    }
    console.log(item.name)
    return (
        <Route key={item.name} path={item.path} component={Component} />
    )
}

const RouterItems = ({ routes }: RouterProp) => {
    return (
        <Switch>
            {
                routes.map(element =>
                    (RouterItem(element))
                )
            }
        </Switch>
    )
}

const RouterLayout = ({ routes }: RouterProp) => {

    const [activeKey, setActiveKey] = useState<string>();

    const onSelect = (key: string) => {
        myHistory.push(key);
        setActiveKey(key)
    }

    return (
        <Router history={myHistory}>
            <Navbar>
                <Navbar.Header >
                    <NavbarHeader href="#">Eyouyou</NavbarHeader>
                </Navbar.Header>
                <Navbar.Body>
                    <Nav onSelect={onSelect} activeKey={activeKey}>
                        {
                            routes.map(element =>
                                (<Nav.Item key={element.name} eventKey={element.path} to={element.path}>{element.name}</Nav.Item>)
                            )
                        }
                    </Nav>
                </Navbar.Body>
            </Navbar>

            <RouterItems routes={routes} />
        </Router>
    )
}

export default RouterLayout
