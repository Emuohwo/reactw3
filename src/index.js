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
      return <h2>Hi, I am a {this.props.color} Car!</h2>;
    }
  }

ReactDOM.render(
        <Car color="red" />, 
        document.getElementById('root')
    );