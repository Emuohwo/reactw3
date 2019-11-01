import React from 'react';
import ReactDOM from 'react-dom';

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show: true}
    }

    deHeader = () => {
        this.setState({show: false})
    }
    render() {
        let myHeader;
        if (this.state.show) {
            myHeader = <Child />
        };
        return (
            <div>
                {myHeader}
                <button type="button" onClick={this.deHeader}>Delete Header</button>
            </div>
        )
    }
}

class Child extends React.Component {
    componentWillUnmount() {
        alert("The Header component is about to be unmounted")
    }
    render() {
        return (
            <h1>Hello World!</h1>
        )
    }
}
  
ReactDOM.render(<Container />, document.getElementById('root'));

// getSnapshotBeforeUpdate method is use with componentDidMount method to 
// avoid throwing error 
