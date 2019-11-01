import React from 'react';
import ReactDOM from 'react-dom';

class Colors extends React.Component {
  constructor(props) {
      super(props);
      this.state = {favoritecolor: "Silver"};
  }


  
    componentDidMount() {
        setTimeout(()=> {
         this.setState({favoritecolor: "Gold"})
        }, 2000)
    }

    


    componentDidUpdate() {
        document.getElementById('div2').innerHTML = 
        "The favourite color is updated to " + this.state.favoritecolor;
    }

  render() {
      return (
          <div>
            <h3>{this.state.favoritecolor} is my favourite color</h3>
            
            <div id="div2"></div>
        </div>
        )
  }
}
  
ReactDOM.render(<Colors />, document.getElementById('root'));

// getSnapshotBeforeUpdate method is use with componentDidMount method to 
// avoid throwing error 
