import React from 'react';
import jQuery from 'jquery'
import Artwork from './Artwork'


class Artworks extends React.Component {
    constructor() {
      super();
    }

    componentDidMount() {
        jQuery.get("http://localhost:3001/artworks.json", (function(data){
            this.setState({
              artworks: data,
            });
        }).bind(this));
    }

    renderArtwork(artwork, index) {
        return <Artwork
          key={index}
          artist={artwork.artist}
          title={artwork.title}
          date={artwork.date}
          description={artwork.description}
        />;
    }

    render() {
        return (
          <div>
            <div>
              {this.state.artworks.map(this.renderArtwork.bind(this))}
            </div>
          </div>
        )
    }

}

export default Artworks;
