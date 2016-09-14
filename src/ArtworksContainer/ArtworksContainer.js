import React from 'react';
import jQuery from 'jquery'

//COMPONENTS//
import ArtworkForm from './ArtworkForm';
import Artworks from './Artworks';

//STYLES//
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';

const styles = {
  column: {
    width:'500px',
    float: 'left',
    margin: '0 25px',
  }
}

class ArtworksContainer extends React.Component {

    render() {
        return (
          <div>
              <div style={styles.column}>
                <Artworks />
              </div>
              <div  style={styles.column}>
                <ArtworkForm />
              </div>
          </div>
        );
    }
}

export default ArtworksContainer;
