import React from 'react';
import ReactDOM from 'react-dom';

class Computer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favoritecolor: "black"
        };
    }
    static getDerivedStateFromProps(props, state) {
        return {favoritecolor: props.favcol }
    }

    render() {
        return (
            <div>
                {/* <h5>Specify all the STATE properties your componenet need in the constructor method</h5> */}
                <h2>
                    I am currently using a black Dell Computer 
                    
                    </h2>
                    <h3>Although my favorite color is {this.state.favoritecolor} </h3>
                
            </div>
        )
    }
}

ReactDOM.render(
        <Computer favcol="skuyblue" />, 
        document.getElementById('root')
    );