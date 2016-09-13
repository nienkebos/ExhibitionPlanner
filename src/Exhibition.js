import React from 'react';
import jQuery from 'jquery'


class Exhibition extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            exhibitions: [{title: 'Random', description: 'A lot of paintings'}, {title: 'Again', description: 'Some more paintings'}],
        };
    }



    render() {
      const { exhibition } = this.props

      return(
        <div>
          <p>{this.props.exhibition.title}</p>
          <p>{this.props.exhibition.description}</p>
        </div>
      )
    }

}


export default Exhibition;
