import React, { Component } from 'react';
import './App.css';
import { Fragment } from 'react';

class Table extends Component {
  render() {
    return (
      <table>
        <tr>
          <Columns />
        </tr>
      </table>
    );
  }
}

class Columns extends Component {
  render() {
    return (
			<React.Fragment>
        <td>Hello</td>
        <td>World</td>
      </React.Fragment>
    );
  }
}

class App extends Component {
  render() {
    return (
			<div>
				<h1>React Fragments</h1>
      	<Table />
			</div>
    );
  }
}

export default App;
