import React, { Component } from 'react';
import './App.css';
import { Fragment } from 'react';

function ListItem({ value}) {
  return (
    <Fragment>
      <li>{value}</li>
    </Fragment>
  );
}

function List(props) {
  return (
    <ul>
      {props.cats.map(cat => (
        <ListItem value={cat}  />
      ))}
    </ul>
  );
}
const cats = ["cat 1","cat 2","cat 3","cat 4"];

class App extends Component {
  render() {
    return (
			<div>
				<h1>React Fragments</h1>
      	<List cats={cats}/>
			</div>
    );
  }
}

export default App;
