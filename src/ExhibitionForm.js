import React from 'react';
import jQuery from 'jquery'


class ExhibitionForm extends React.Component {

    createExhibition(){
      
    }

    render() {
        return (
          <form onSubmit={this.createExhibition.bind(this)}>
            <input
              type="text"
              className="form-control"
              ref="title"
              placeholder="What is the title of the exhibition?"
            />
            <input
              type="text"
              className="form-control"
              ref="date"
              placeholder="When is the exhibition planned?"
            />
            <textarea
              className="form-control"
              ref="description"
              placeholder="Describe the exhibition..">
            </textarea>
            <button
              type="submit"
              className="btn btn-primary">
              Create Exhibition
            </button>
          </form>

        );
    }

}


export default ExhibitionForm;
