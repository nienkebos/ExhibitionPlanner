import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import App from './App';
import Exhibitions from './ExhibitionsContainer/Exhibitions'
import Artworks from './ArtworksContainer/Artworks'

// STYLES //
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

injectTapEventPlugin();


ReactDOM.render(
    <MuiThemeProvider>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Exhibitions} />
          <Route path="exhibitions/:id" component={Artworks}/>
        </Route>
      </Router>
    </MuiThemeProvider>,
document.getElementById('root'));
