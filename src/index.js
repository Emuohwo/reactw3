import React from 'react';
import ReactDOM from 'react-dom';

class HandlingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: ''}
    }
    myChangeHandler = (event) => {
        this.setState({username: event.target.value})
    }
    render() {
        return (
            <form>
                <h1>Hello {this.state.username}</h1>
                <p>Enter your Username here</p>
                <input 
                  type='text'
                  onChange={this.myChangeHandler}
                />
            </form>
        );
    }
}
  
ReactDOM.render(<HandlingForm />, document.getElementById('root'));

// getSnapshotBeforeUpdate method is use with componentDidMount method to 
// avoid throwing error 
