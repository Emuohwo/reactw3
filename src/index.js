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
        if (name === "age") {
            if (!Number(val)) {
                alert("Age must be a number")
            }
        }
        this.setState({[name]: val})
    }

    submitHandler = (evt) => {
        evt.preventDefault();
        alert('You are submiting ' + this.state.username)
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

 
