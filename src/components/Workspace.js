import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Workspace extends Component {

    constructor(props) {
        super(props);
    }

render(){
    return(
        <div className="container">
            <div className="row">
                <button onClick={this.addWidget.bind(this)}>Add New Class</button>
            </div>
            <div className="row">
                <Widget/>
                <div id="bottom"></div>
            </div>
        </div>
    );
}
}

export default Workspace;