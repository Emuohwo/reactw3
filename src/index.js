import React from 'react';
import ReactDOM from 'react-dom';

class HandlingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: ''}
    }

    conditionalRendering = (event) => {
        this.setState({username: event.target.value})
    }

    render() {
        let header;
        if(this.state.username) {
            header = <h1>Hello {this.state.username}</h1>
        } else {
            header = ''
        }
        return (
            <form>
                {header}
                <p> Enter your username here</p>
                <input
                 type='text'
                  onChange={this.conditionalRendering}
                />
            </form>
        )
    }
}
  
ReactDOM.render(<HandlingForm />, document.getElementById('root'));

// getSnapshotBeforeUpdate method is use with componentDidMount method to 
// avoid throwing error 
