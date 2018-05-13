import React, { Component } from 'react';
import Widget from './components/Widget.js';
import logo from './Logo.png'
import './App.css'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

//examples of how to import our logo and css files etc..
//import logo from './logo.svg';
//import './App.css';

class App extends Component {

    addWidget(){
        console.log('HelloTest',this);
    }

    render() {
        return (
            <Router>
            <div>
                <div className="container-fluid h-100">
                    <div className="row h-100">

                        {/* Side Menu */}
                        <div className="col-2 col-md-2 collapse m-0 p-0 h-100 bg-dark" id="collapsePushMenu">
                            <ul className="nav menu-side flex-column navbar-dark sticky-top">

                                <li className="nav-item">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Course 3</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" href="#">Disabled</a>
                                </li>

                            </ul>
                        </div>

                        {/* Main Page Content */}
                        <div className="col topNavContainer">
                            <div className="row">

                                {/* Top Nav */}
                                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                                    <button className="btn sticky-top" data-toggle="collapse" href="#collapsePushMenu"
                                            role="button">Menu
                                    </button>
                                    <a className="navbar-brand" href="#"><img id="Logo" src={logo}/></a>
                                </nav>


                                {/* Button trigger modal */}
                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                                    Add New Course
                                </button>

                                <Route path="/about" render={(props) => <Widget courseName="CSE110" {...props} />} />

                            </div>
                        </div>


                        <nav className="navbar navbar-expand-lg navbar-dark bg-light">
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                                <a className="navbar-brand" href="#"><img id="Logo" src={logo}/></a>

                                <div className="floatRight">
                                <form className="form-inline my-2 my-lg-0">
                                    <input className="form-control mr-sm-2" type="search" placeholder="Search"
                                           aria-label="Search"/>
                                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                </form>

                                </div>
                                <div><i className="fas fa-cog"></i></div>
                                <div>Google Photo/Account</div>
                            </div>
                        </nav>






                    </div>
                </div>



                {/* Modal */}
                <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="AddWebsite" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Add New Website:</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">

                                <form>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlSelect1">Website Type: </label>
                                        <select className="form-control" id="exampleFormControlSelect1">
                                            <option>GradeSource</option>
                                            <option>Piazza</option>
                                            <option>GradeScope</option>
                                            <option>AutoGrader</option>
                                            <option>Class Website</option>
                                            <option>Other</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput1">Course Title: </label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1"
                                               placeholder="CSE 105"/>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput1">Username: </label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1"
                                               placeholder="GaryG@ucsd.edu"/>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput1">Password: </label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1"
                                               placeholder="Gary's-Password"/>
                                    </div>

                                </form>



                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                <button type="button" className="btn btn-primary">Save Course</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Router>
        );
    }
}

export default App;

