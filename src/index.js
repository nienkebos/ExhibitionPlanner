import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// STYLES //
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

injectTapEventPlugin();

ReactDOM.render(
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>,
document.getElementById('root'));
