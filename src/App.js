import React from 'react';

class Car extends React.Component {
  constructor() {
      super();
      this.state = {color: "red"};
    }
    render() {
    return <h2>Hi, I am a ({this.state.color}) Car!</h2>;
    }
}

class Garage extends React.Component {
    render () {
        return (
            <div>
              <p><strong>Note:</strong> This is a component in another component that is exported</p>
                <h1>Who lives in my Garage?</h1>
                <Car />
            </div>
        )
    }
}

export default Garage;