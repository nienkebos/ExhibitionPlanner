import React from 'react';

//COMPONENTS//
import ExhibitionsContainer from './ExhibitionsContainer/ExhibitionsContainer';
import ArtworksContainer from './ArtworksContainer/ArtworksContainer';
import Header from './TemplateContainer/Header';
import Footer from './TemplateContainer/Footer';

//STYLES//
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';


class App extends React.Component {

    render() {
        return (
          <div>
            <div>
              <Header />
              {this.props.children}
              <Footer />
            </div>
          </div>
        );
    }
}

export default App;
