import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import ViewPlanter from './ViewPlanter';
import Home from './Home';
import AddPlanter from './AddPlanter'
import SearchByShape from './SearchByShape';
import Footer from './Footer';

function ReactRouter() {
    return (
        <div>
            <Router>
            <div>
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className=" jumbotron-fluid ">
                        <div className="collapse navbar-collapse" id="navbarNav" >
                            <ul className="navbar-nav" type="none">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/plantersViewAll" >List Of Planters</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/planterAdd"> Add/Update</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/planterByShape"> Show Planter by Shape</Link>
                                </li>
                                

                            </ul>
                        </div>
                    </div>
                </nav>

                
                <Switch>
                    <Route exact path="/plantersViewAll">
                        <ViewPlanter></ViewPlanter>
                    </Route>
                    <Route path="/planterAdd">
                        <AddPlanter></AddPlanter>
                    </Route>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route exact path="/planterByShape">
                       <SearchByShape></SearchByShape>
                    </Route>
                    <Route path="/planterByShape" component={SearchByShape}/>
                </Switch>
            </div>
            </Router>
            {/* <Footer></Footer> */}
        </div>
    )
}

export default ReactRouter
