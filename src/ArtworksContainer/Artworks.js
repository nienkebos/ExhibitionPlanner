import React from 'react';
import jQuery from 'jquery'

//COMPONENTS//
import Artwork from './Artwork'
import ArtworkForm from './ArtworkForm'

//STYLES//
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';

const styles = {
  column: {
    width:'calc(50% - 20px)',
    float: 'left',
    margin: '10px',
  },
  columnright: {
    width:'calc(50% - 20px)',
    float: 'right',
    margin: '10px',
  }
}


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
          technique={artwork.technique}
          description={artwork.description}
        />;
    }

    render() {
        return (
          <div>
            <div>
              <div style={styles.column}>
                {this.state.artworks.map(this.renderArtwork.bind(this))}
              </div>
            </div>

            <div style={styles.columnright}>
              <ArtworkForm id={this.props.params.id} />
            </div>
          </div>
        )
    }

}

export default Artworks;
