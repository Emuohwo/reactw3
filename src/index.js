import React from 'react';
import ReactDOM from 'react-dom';

class HandlingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            age: null,
        };
    }

    changeHandler = (event) => {
        let name = event.target.name;
        let val = event.target.value;
        
        this.setState({[name]: val})
    }

    submitHandler = (evt) => {
        evt.preventDefault();
        let age = evt.target.value;
            if (!Number(age)) {
                alert("Age must be a number")
            }
    }
    render() {
        
        return (
            <form onSubmit={this.submitHandler}>
                 <h1>Hello {this.state.username} {this.state.age}</h1>
                {/* {header} */}
                <p> Enter your username here</p>
                <input
                 type='text'
                 name='username'
                  onChange={this.changeHandler}
                />
                <br />
                <br />
                <p> Enter your age here</p>
                <input
                 type='text'
                 name='age'
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

 
