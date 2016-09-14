import React from 'react';
import jQuery from 'jquery'


class Artwork extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
          <div>

            <p >
              {this.props.artist} - {this.props.title} ({this.props.date})
            </p>
            <p>
              medium:{this.props.technique}

              {this.props.description}
            </p>
          </div>
        )
    }

}


export default Artwork;
