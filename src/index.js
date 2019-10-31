import React from 'react';
import ReactDOM from 'react-dom';

// eslint-disable-next-line
const myfirstelement = <h1>Hello React!</h1>

const table = (
    <table>
      <tr>
        <th>Name</th>
      </tr>
      <tr>
        <td>John</td>
      </tr>
      <tr>
        <td>Elsa</td>
      </tr>
    </table>
  );
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
                    <h1>Who lives in my Garage?</h1>
                    <Car />
                </div>
            )
        }
    }

ReactDOM.render(
        <Garage  />, 
        document.getElementById('root')
    );