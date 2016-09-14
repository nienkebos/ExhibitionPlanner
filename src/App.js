import React from 'react';
import ExhibitionsContainer from './ExhibitionsContainer/ExhibitionsContainer';
import HeaderContainer from './TemplateContainer/HeaderContainer';
import FooterContainer from './TemplateContainer/FooterContainer';

//STYLES//
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';


class App extends React.Component {

    render() {
        return (
          <div>
              <HeaderContainer />
              <ExhibitionsContainer />
              <FooterContainer />
          </div>
        );
    }
}

export default App;
