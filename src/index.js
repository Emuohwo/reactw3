import React from 'react';
import ReactDOM from 'react-dom';

class HandlingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            age: null,
            errorMessage: '',
        };
    }

    changeHandler = (event) => {
        let name = event.target.name;
        let val = event.target.value;
        let err = '';
        if (name === "age") {
            if (val != "" && !Number(val)) {
                err = <strong>Your age must be a number</strong>
            }
        }
        this.setState({errorMessage: err})
        this.setState({[name]: val})
    }

    submitHandler = (evt) => {
        evt.preventDefault();
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
                <p>{this.state.errorMessage}</p>
            </form>
        )
    }
}
  
ReactDOM.render(<HandlingForm />, document.getElementById('root'));

 
