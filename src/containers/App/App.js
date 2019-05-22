import React, { Component } from 'react';

import style from './App.scss';

console.log(style);

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // In the future, a nav bar could go here
    return (
      <div className={style.mainWrapper}>
        <span>Hello!</span>
      </div>
    );
  }
}

export default App;
