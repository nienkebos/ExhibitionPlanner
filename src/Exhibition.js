import React from 'react';
import jQuery from 'jquery'


class Exhibition extends React.Component {
    constructor() {
        super();


    }

  componentDidMount() {
      this.setState({
        courses: [{name: 'React', description: 'Its a course'}, {name: 'Javascript', description: 'Learn the basics'}],
      });
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
