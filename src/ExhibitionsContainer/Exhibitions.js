import React from 'react';
import jQuery from 'jquery'

//COMPONENTS//
import ExhibitionForm from './ExhibitionForm';
import Exhibition from './Exhibition'

//STYLES//
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';

const styles = {
  column: {
    width:'calc(50% - 20px)',
    float: 'left',
    margin: '10px',
  },
  columnright: {
    width:'calc(50% - 20px)',
    float: 'right',
    margin: '10px',
  }
}

class Exhibitions extends React.Component {
    constructor() {
      super();
    }

    componentDidMount() {
        jQuery.get("http://localhost:3001/exhibitions", (function(data){
            this.setState({
              exhibitions: data,
            });
        }).bind(this));
    }

    renderExhibition(exhibition, index) {
        return <Exhibition
          id={exhibition.id}
          key={index}
          title={exhibition.title}
          date={exhibition.date}
          description={exhibition.description}
        />;
    }

    render() {
        return (
          <div>
            <div style={styles.column}>
              {this.state.exhibitions.map(this.renderExhibition.bind(this))}
            </div>
            <div  style={styles.columnright}>
              <ExhibitionForm />
            </div>
          </div>
        )
    }

}

export default Exhibitions;
