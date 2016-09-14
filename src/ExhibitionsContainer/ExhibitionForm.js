import React from 'react';
import jQuery from 'jquery'

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';


const optionsStyle = {
  maxWidth: 255,
  marginRight: 'auto',
};

class ExhibitionForm extends React.Component {

    createExhibition(e){
        e.preventDefault();

        let newExhibition = {
          title: this.refs.title.getValue(),
          date: this.refs.date.getValue(),
          description: this.refs.description.getValue()
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
            <br /><br />
            <TextField
              type="text"
              className="form-control"
              ref="title"
              hintText="What is the title of the exhibition?"
              fullWidth={true}
            /><br /><br />

            <TextField
              type="text"
              className="form-control"
              ref="date"
              hintText="When will the exhibition be held?"
              fullWidth={true}
            /><br /><br />

            <TextField
              className="form-control"
              ref="description"
              hintText="Describe the exhibition.."
              multiLine={true}
              rows={10}
              rowsMax={30}
              fullWidth={true}
            /><br /><br />

            <FlatButton
              label="Save"
              type="submit"
            />
          </form>

        );
    }

}


export default ExhibitionForm;
