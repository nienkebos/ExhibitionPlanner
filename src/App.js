import React from 'react';
import ExhibitionsContainer from './ExhibitionsContainer/ExhibitionsContainer';

//STYLES//
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BaseTheme from './styles/baseTheme'
import {GridList, GridTile} from 'material-ui/GridList';
import { Grid, Row, Cell } from 'react-inline-grid';


class App extends React.Component {

    render() {
        return (
          <Grid>
          <div>
              <ExhibitionsContainer />
          </div>
          </Grid>
        );
    }
}

export default App;
