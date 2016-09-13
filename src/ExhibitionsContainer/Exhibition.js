import React from 'react';
import jQuery from 'jquery'


class Exhibition extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
          <div>
            <h3>
              {this.props.title}
            </h3>
            <p>
              {this.props.description}
            </p>
          </div>
        )
    }

}


export default Exhibition;
