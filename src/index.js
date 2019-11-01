import React from 'react';
import ReactDOM from 'react-dom';

class Colors extends React.Component {
  constructor(props) {
      super(props);
      this.state = {favoritecolor: "silver"};
  }

//   set the return value of this method to true to update color 
// alteernatively, delete it
  shouldComponentUpdate() {
      return false;
  }
  
 changeColor = () => {
     this.setState({favoritecolor: "green"})
 }

  render() {
      return (
          <div>
            <h3>{this.state.favoritecolor} is my favourite color</h3>
            <button type="button" onClick={this.changeColor}
            >Click me </button>
        </div>
        )
  }
}
  
ReactDOM.render(<Colors />, document.getElementById('root'));

/*
The shouldComponentUpdate method prevents the changing the color to green;
try to comment out the shouldComponentUpdate to set the color to green
*/