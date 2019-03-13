import React, { Component } from 'react';
import SearchBar from './searchBar';
import Gif from './Gif';
import GifList from './Giflist';


const GIPHY_API_KEY = '1KMPHCBIOe3hOjJwCJQX49sRc6cM0oIm';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query:'HELLO WORLD'
    };
  }

  render() {
    return (
      <div>
        <div className="leftPane">
          <SearchBar />
          <Gif />
        </div>
        <div className="rightPane">
          <GifList />
        </div>
      </div>
    );
  }
}

export default App;
