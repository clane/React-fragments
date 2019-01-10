import React, { Component } from 'react';
import './App.css';
import { Fragment } from 'react';

class List extends Component {
  render() {
    return (
      <ul>
          <ListItems />
      </ul>
    );
  }
}

class ListItems extends Component {
  render() {
    return (
			<React.Fragment>
        <li>list item</li>
      </React.Fragment>
    );
  }
}

class App extends Component {
  render() {
    return (
			<div>
				<h1>React Fragments</h1>
      	<List />
			</div>
    );
  }
}

export default App;
