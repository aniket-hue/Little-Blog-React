import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Posts from './containers/Blog/Posts/Posts'
import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      <BrowserRouter>

        <div className="App">
          {/* <Posts /> */}
          <Blog />
        </div>

      </BrowserRouter>
    );
  }
}

export default App;
