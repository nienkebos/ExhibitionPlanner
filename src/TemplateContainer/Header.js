import React from 'react';
import { Link } from 'react-router';


//STYLES//
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {green200} from '../styles/colors';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';

const styles = {
    backgroundColor: green200,

}


class Header extends React.Component {

    render() {
        return (
          <AppBar
            title="Exhibition Planner"
            iconElementLeft={<Link to="/"><IconButton
            ><ActionHome /></IconButton></Link>}
            style={styles}
          />
        );
    }
}

export default Header;
