import React from 'react';
import jQuery from 'jquery'

//COMPONENTS//
import ExhibitionForm from './ExhibitionForm';
import Exhibitions from './Exhibitions';

//STYLES//
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';

const styles = {
  column: {
    width:'400px',
    float: 'left',
    margin: '0 25px',
  }
}

class ExhibitionsContainer extends React.Component {

    render() {
        return (
          <div>
              <div style={styles.column}>
                <Exhibitions />
              </div>
              <div  style={styles.column}>
                <ExhibitionForm />
              </div>
          </div>
        );
    }
}

export default ExhibitionsContainer;
