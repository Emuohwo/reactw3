import React from 'react';
import ReactDOM from 'react-dom';

class Computer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "Dell",
            model: "Inspiron",
            color: "black"
        };
    }

    render() {
        return (
            <div>
                <h1>Specify all the STATE properties your componenet need in the constructor method</h1>
                <p>I am curruently using a {this.state.color} {this.state.brand} {this.state.model} Computer</p>
            </div>
        )
    }
}

ReactDOM.render(
        <Computer />, 
        document.getElementById('root')
    );