import React from 'react';
import jQuery from 'jquery'
import Exhibition from './Exhibition'



class Exhibitions extends React.Component {
    constructor() {
        super();

    }

    componentDidMount() {

      jQuery.get("http://localhost:3001/exhibitions.json", (function(data){
          this.setState({
            exhibitions: data,
          });
        }).bind(this));
      }

    renderExhibition(exhibition, index) {
        return <Exhibition
          key={index}
          title={exhibition.title}
          description={exhibition.description}
        />;
    }

    render() {

      return (
        <div>
          <h1>Exhibition Planner</h1>

            <div style = {{ width: '500px' }}>
              {this.state.exhibitions.map(this.renderExhibition.bind(this))}
            </div>

        </div>
      )
    }



}

export default Exhibitions;
