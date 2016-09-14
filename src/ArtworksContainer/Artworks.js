import React from 'react';
import jQuery from 'jquery'
import Artwork from './Artwork'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';


class Artworks extends React.Component {
    constructor() {
      super();
    }

    componentDidMount() {
        let id = parseInt(this.props.params.id);
        jQuery.get("http://localhost:3001/exhibitions/"+id+"/artworks", (function(data){
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
