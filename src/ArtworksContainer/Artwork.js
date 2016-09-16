import React from 'react';
import jQuery from 'jquery'

const imageStyle = {
  height: 100,
  width: 150
}
class Artwork extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
          <div>
            <p>
              {this.props.artist} - {this.props.title} ({this.props.date})
            </p>
            <div>
              <img style={imageStyle} src={"http://localhost:3001/uploads/"+this.props.image}></img>
            </div>
            <p> medium: {this.props.technique} </p>
            <p> description: {this.props.description} </p>
          </div>
        )
    }

}


export default Artwork;
