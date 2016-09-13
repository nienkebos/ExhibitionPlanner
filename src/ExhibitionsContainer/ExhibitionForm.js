import React from 'react';
import jQuery from 'jquery'


class ExhibitionForm extends React.Component {

    createExhibition(e){
        e.preventDefault();

        let newExhibition = {
          title: this.refs.title.value,
          description: this.refs.description.value
        };

        jQuery.ajax({
          type: "POST",
          url: "http://localhost:3001/exhibitions.json",
          data: JSON.stringify({
            exhibition: newExhibition
          }),
          contentType: "application/json",
          dataType: "json"

        }).done(function( data ) {
          console.log('successfully added',data);
        })
        .fail(function(error) {
          console.log(error);
        });
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
