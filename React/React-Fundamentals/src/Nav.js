import React from "react";
import {
    BrowserRouter as Router,
    Route,
    NavLink ,} from "react-router-dom"
import { createBrowserHistory } from "history";
import Components from "./1-Components"

const routes = [
    { path: '/',
        exact: true,
        sidebar: () => <div>home!</div>,
        main: () => <h2>Home</h2>
    },
    { path: '/components',
        sidebar: () => <div>bubblegum!</div>,
        main: () => <Components/>
    },
    { path: '/shoelaces',
        sidebar: () => <div>shoelaces!</div>,
        main: () => <h2>Shoelaces</h2>
    }
]

const LeftNav = () => {
    const customHistory = createBrowserHistory();
    return <Router history={customHistory}>
        <div style={{ display: 'flex' }}>
            <div className={"LeftNavbar"}>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li><NavLink exact={true} to="/" activeClassName={"active"}>Home</NavLink></li>
                    <li><NavLink to="/components" activeClassName={"active"}>Basic Components</NavLink></li>
                    <li><NavLink to="/shoelaces" activeClassName={"active"}>Shoelaces</NavLink></li>
                </ul>

            </div>

            <div className={"contents"} >
                {routes.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                ))}
            </div>
        </div>
    </Router>

    // const customHistory = createBrowserHistory();
    // return <Router history={customHistory}>
    //     <Route render={({ location, history }) => (
    //         <React.Fragment>
    //             <SideNav
    //                 onSelect={(selected) => {
    //                     const to = '/' + selected;
    //                     if (location.pathname !== to) {
    //                         history.push(to);
    //                     }
    //                     console.log(selected)
    //                 }}
    //             >
    //                 <SideNav.Toggle />
    //                 <SideNav.Nav defaultSelected="home">
    //                     <NavItem eventKey="components">
    //                         <NavIcon>
    //                             <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
    //                         </NavIcon>
    //                         <NavText>
    //                             Components
    //                         </NavText>
    //                     </NavItem>
    //                     <NavItem eventKey="devices">
    //                         <NavIcon>
    //                             <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
    //                         </NavIcon>
    //                         <NavText>
    //                             Devices
    //                         </NavText>
    //                     </NavItem>
    //                 </SideNav.Nav>
    //             </SideNav>
    //             <main>
    //                 <Route path="/" exact component={props => <h1>test1</h1>} />
    //                 <Route path="/components" component={props => <Components/>} />
    //                 <Route path="/devices" component={props => <h1>test3</h1>} />
    //             </main>
    //         </React.Fragment>
    //     )}
    //     />
    // </Router>
}

export default LeftNav;
