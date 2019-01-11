import React, { Component } from 'react';
import './App.css';
import { Fragment } from 'react';

function ListItem({ num }) {
  return (
    <Fragment>
      <li>{num}</li>
    </Fragment>
  );
}

function List(props) {
  return (
    <ul>
      {props.numbers.map(num => (
        <ListItem item={num}  />
      ))}
    </ul>
  );
}
const numbers = [1, 2, 3, 4, 5];

class App extends Component {
  render() {
    return (
			<div>
				<h1>React Fragments</h1>
      	<List numbers={numbers}/>
			</div>
    );
  }
}

export default App;
