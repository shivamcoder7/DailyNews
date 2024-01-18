import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';

export default class App extends Component {
  devotee= "Shivam";
  render() {
    return (
      <div>
      {/* Hare Krishna, this is my first class based react app {this.devotee} */}
          <NavBar/>
          <News title="MyTitle"/>
      </div>
    )
  }
}
