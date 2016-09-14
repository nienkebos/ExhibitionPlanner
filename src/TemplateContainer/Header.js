import React from 'react';

//COMPONENTS//


//STYLES//
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

// const styles {
//   palette: {
//     textColor: cyan500,
//     backgroundColor: green,
//     fontFamily: sansSerif,
//   },
//   appBar: {
//     height: 30,
//   },
// };


class Header extends React.Component {

    render() {
        return (
          <AppBar
            title="Exhibition Planner"
            iconClassNameRight="muidocs-icon-navigation-expand-more"

          />
        );
    }
}

export default Header;
