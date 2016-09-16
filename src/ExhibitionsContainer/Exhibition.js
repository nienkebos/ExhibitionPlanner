import React from 'react';
import jQuery from 'jquery'



class Exhibition extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
          <div>
          <a className="link" href={"exhibitions/" + this.props.id}
          style={{color:'black', textDecoration: 'none', hover:'#ccc'}}>
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
