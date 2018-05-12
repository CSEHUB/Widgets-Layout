import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

class Widget extends Component {
    constructor(props) {
        super(props);

        this.state = {
            courses: ['CSE100', 'CSE110', 'CSE20', 'CSE30'],
            urls: ['http://www.gradesource.com/reports/3586/29656/index.html', 'http://www.gradesource.com/reports/7/29889/index.html', 'http://www.gradesource.com/reports/346/29648/index.html', 'http://www.gradesource.com/reports/288/29652/index.html'],
            userName: [1,2,3,4],
            password: [1,2,3,4],
            position: [1,2,3,4]
        }
    }

    render(){
        return(
        <div className="container-fluid">
            <div className="row">
            {this.state.courses.map((courseTitle, arrayIndex) => {
                return (

            <div className="col-md-3">
                <div id="e" draggable="true" className="w-container">
                    <div className="w-top">
                        <div className="w-top-left">X</div>
                        <div className="w-top-right">[ ]</div>
                    </div>
                    <div key={arrayIndex}>{courseTitle}</div>
                    <div className="e-iframe-container">
                        <iframe id="iframe" src={this.state.urls[arrayIndex]}></iframe>
                    </div>
                </div>
            </div>

                )
            })}

            </div>
        </div>

        );
    }
}

export default Widget;