import React from 'react';

class Car extends React.Component {
  
    render() {
    return <h2>Hi, I am a {this.props.brand.name} Car! and my model is {this.props.brand.model}</h2>;
    }
}

class Garage extends React.Component {
    render () {
      const carnameandmodel = {name: "Toyota", model: "Camry"}
        return (
            <div>
              <p><strong>Note:</strong> This is a component in another component that is exported</p>
                
                <Car brand={carnameandmodel} />
                <p>I live in a Garage</p>
            </div>
        )
    }
}

export default Garage;