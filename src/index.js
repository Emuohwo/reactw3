import React from 'react';
import ReactDOM from 'react-dom';

class Computer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {brand: "Dell"};
    }

    render() {
        return (
            <div>
                <h1>Specfy the sate in the constructor method</h1>
                <p>I am curruently using {this.state.brand} Computer</p>
            </div>
        )
    }
}

ReactDOM.render(
        <Computer />, 
        document.getElementById('root')
    );