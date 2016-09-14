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

//
//
// ReactDOM.render((
//   <Router history={browserHistory}>
//     <Route path="/" component={App}>                           // everything will be under the `App` component
//       <IndexRoute component={Welcome} />                       // the `Welcome` component will be rendered on `/`
//       <Route path="/projects" component={Projects}/>           // the `Projects` component will be rendered on `/projects`
//       <Route path="/project/:projectId" component={Project}/>  // the `Project` component will be rendered on `/project/<id>`
//       <Route path="/about" component={About}/>                 // the `About` component will be rendered on `/about`
//       <Route path="*" component={PageNotFound}/>               // all other routes will render `PageNotFound`
//     </Route>
//   </Router>
// ), document.getElementById('root'));
