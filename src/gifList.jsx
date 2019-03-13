import React, { Component } from 'react';

class GifList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="gif-list">
        {props.gifs.map(gif => <Gif id={gif.id} key={gif.id} selectGif={props.selectGif} />)}
      </div>
    )
  }
}

export default GifList ;
