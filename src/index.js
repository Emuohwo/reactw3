import React from 'react';
import ReactDOM from 'react-dom';

class HandlingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: ''}
    }

    changeHandler = (event) => {
        this.setState({username: event.target.value})
    }

    submitHandler = (evt) => {
        evt.preventDefault();
        alert('You are submiting ' + this.state.username)
    }
    render() {
        // let header = '';
        // if(this.state.username) {
        //     header = <h1>Hello {this.state.username}</h1>
        // } else {
        //     header = ''
        // }
        return (
            <form onSubmit={this.submitHandler}>
                 <h1>Hello {this.state.username}</h1>
                {/* {header} */}
                <p> Enter your username here</p>
                <input
                 type='text'
                  onChange={this.changeHandler}
                />
                <input 
                  type='submit' 
                  value='submit input'
                />
            </form>
        )
    }
}
  
ReactDOM.render(<HandlingForm />, document.getElementById('root'));

// remove the commented lines above to activate conditional rendering 
