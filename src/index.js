import React from 'react';
import ReactDOM from 'react-dom';

class Colors extends React.Component {
  constructor(props) {
      super(props);
      this.state = {favoritecolor: "silver"};
  }

  static getDerivedStateFromProps(props, state) {
      return {favoritecolor: props.favcol}
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
  
ReactDOM.render(<Colors favcol="red" />, document.getElementById('root'));

/*
This example has a button that changes the favorite color to green,
but since the getDerivedStateFromProps() method is called,
the favorite color is still rendered as red
(because the method updates the state
with the color from the favcol attribute).
*/