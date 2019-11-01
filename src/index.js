import React from 'react';
import ReactDOM from 'react-dom';

class Colors extends React.Component {
  constructor(props) {
      super(props);
      this.state = {favoritecolor: "silver"}
  }

  componentDidMount() {
      setTimeout(() => {
          this.setState({favoritecolor: "Gold"})
      }, 2000)
  }

  render() {
      return <h3>{this.state.favoritecolor} is my favourite color</h3>
  }
}
  
ReactDOM.render(<Colors />, document.getElementById('root'));