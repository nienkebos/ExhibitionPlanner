import React from 'react';
import jQuery from 'jquery'


class Exhibition extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
          <div>
          <a href={"exhibitions/" + this.props.id}>
            <h3>
              {this.props.title}
            </h3></a>
            <p>{this.props.date}</p>
            <p>
              {this.props.description}
            </p>
          </div>
        )
    }

}


export default Exhibition;
