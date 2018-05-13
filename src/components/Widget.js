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

        this.course = this.props.courseName;

        this.data = {
            "CSE110": {
            "URL": "http://www.gradesource.com/reports/3586/29656/index.html",
                "bbb": "2222"
        },
            "CSE140": {
            "URL": "http://www.gradesource.com/reports/7/29889/index.html",
                "bbb": "2222"
        }

        }


        this.data1 = {
            CSE120: ['CSE120', 'CSE120', 'CSE120', 'CSE120'],
            CSE110: ['CSE110', 'CSE110', 'CSE110', 'CSE110'],
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
            {Object.keys(this.data).map((courseTitle, arrayIndex) => {
                return (

            <div className="col-md-3">
                <div id="e" draggable="true" className="w-container">
                    <div className="w-top">
                        <div className="w-top-left">X</div>
                        <div className="w-top-right">[ ]</div>
                    </div>
                    <div key={arrayIndex}>{courseTitle}</div>
                    <div className="e-iframe-container">
                        <iframe id="iframe" src={this.data[courseTitle].URL}></iframe>
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