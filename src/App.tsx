import React, { Component } from 'react';
import Header from './components/header/header';
import AppRouter from './components/app-router/app-router';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Header />
        <AppRouter />
      </>
    );
  }
}

export default App;
