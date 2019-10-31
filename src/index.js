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
    changeColor = () => {
        this.setState({color: "silver"})
    }

    render() {
        return (
            <div>
                <h5>Specify all the STATE properties your componenet need in the constructor method</h5>
                <h2>
                    I am currently using a {this.state.color} {this.state.brand}  {this.state.model} Computer
                    </h2>
                <button 
                type="button"
                onClick={this.changeColor}
                >Change color</button>
            </div>
        )
    }
}

ReactDOM.render(
        <Computer />, 
        document.getElementById('root')
    );