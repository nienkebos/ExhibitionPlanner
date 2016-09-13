import React from 'react';

//COMPONENTS//
import ExhibitionForm from './ExhibitionForm';
import Exhibitions from './Exhibitions';

//STYLES//
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BaseTheme from './styles/baseTheme'
import {GridList, GridTile} from 'material-ui/GridList';
import { Grid, Row, Cell } from 'react-inline-grid';



// const styles = {
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//   },
//   gridList: {
//     width: 500,
//     height: 500,
//     overflowY: 'auto',
//     marginBottom: 24,
//   },
// };


class App extends React.Component {




    render() {
        return (
          <Grid>
          <div>
            <Row is="around">
            <Cell is="4">
              <div>
                <Exhibitions />
              </div>
              </Cell>
              <Cell is="2">

              <div>
                <ExhibitionForm />
              </div>
              </Cell>
              </Row>
          </div>
          </Grid>
        );
    }
}

export default App;
