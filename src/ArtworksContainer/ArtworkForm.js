import React from 'react';
import jQuery from 'jquery'

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';


class ArtworkForm extends React.Component {

    createArtwork(e){
        e.preventDefault();

        let newArtwork = {
          artist: this.refs.artist.getValue(),
          title: this.refs.title.getValue(),
          date: this.refs.date.getValue(),
          technique: this.technique.date.getValue(),
          description: this.refs.description.getValue()
        };

        let id = parseInt(this.props.id);

        jQuery.ajax({
          type: "POST",
          url: "http://localhost:3001/exhibitions/"+id+"/artworks",
          data: JSON.stringify({
            artwork: newArtwork
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
          <form onSubmit={this.createArtwork.bind(this)}>
            <br /><br />
            <TextField
              type="text"
              className="form-control"
              ref="artist"
              hintText="Who is the artist?"
              fullWidth={true}
            /><br /><br />

            <TextField
              type="text"
              className="form-control"
              ref="title"
              hintText="What is the title of this work?"
              fullWidth={true}
            /><br /><br />

            <TextField
              type="text"
              className="form-control"
              ref="technique"
              hintText="Wich techniques where used?"
              fullWidth={true}
            /><br /><br />

            <TextField
              type="text"
              className="form-control"
              ref="date"
              hintText="When was this work made?"
              fullWidth={true}
            /><br /><br />

            <TextField
              className="form-control"
              ref="description"
              hintText="Describe the artwork.."
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

export default ArtworkForm;
