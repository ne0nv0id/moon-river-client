import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import About from './About'
import Feed from './Feed'
import Hood from './Hood'
import Form from './Form'

class Nav extends Component {

    render(){
        return(
            <Router>
                <div className="navbar navbar-expand-lg">
                    <ul className="nav nav-tabs">
                        <li>
                            <Link className="btn btn-primary" to="/">Feed</Link>
                        </li>
                        <li>
                            <Link className="btn btn-primary" to="/about">About</Link>
                        </li>
                        <li>
                            <Link className="btn btn-primary" to="/new_post">New Post</Link>
                        </li>
                        <li>
                            <Link className="btn btn-primary" to="under_the_hood">Under the Hood</Link>
                        </li>
                    </ul>
                </div>

                <div className="container-fluid content-section">
                    <Route path="/" exact component={Feed} />
                    <Route path="/about" exact component={About}/>
                    <Route path="/new_post" exact component={Form}/>
                    <Route path="/under_the_hood" exact component={Hood}/>
                </div>
            </Router>
        )
    }
}

export default Nav
