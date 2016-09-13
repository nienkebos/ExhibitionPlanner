import React from 'react';
import jQuery from 'jquery'
import Exhibition from './Exhibition'


class Exhibitions extends React.Component {
    constructor() {
        super();

        this.state = {
            exhibitions: [
              {title: 'Random', description: 'A lot of paintings'},
              {title: 'Again', description: 'Some more paintings'}
            ]
        };
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

            <div style = {{ width: '216px' }}>
              {this.state.exhibitions.map(this.renderExhibition.bind(this))}
            </div>

        </div>
      )
    }



}

export default Exhibitions;
