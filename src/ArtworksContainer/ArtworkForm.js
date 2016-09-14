import React from 'react';
import jQuery from 'jquery'

import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';

const style = {

  textfield: {
    marginLeft: 20,
    paddingTop: 10,
  },
  btn: {
    float: 'right',
  },
};


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
          <Paper zDepth={1}>
            <form onSubmit={this.createArtwork.bind(this)}>
              <h4 style={style.textfield}>Add a new Artwork</h4>
              <TextField
                type="text"
                className="form-control"
                ref="artist"
                hintText="Who is the artist?"
                fullWidth={true}
                style={style.textfield}
                underlineShow={false}
              />
              <Divider />
              <TextField
                type="text"
                className="form-control"
                ref="title"
                hintText="What is the title of this work?"
                fullWidth={true}
                style={style.textfield}
                underlineShow={false}
              />
              <Divider />
              <TextField
                type="text"
                className="form-control"
                ref="technique"
                hintText="Which techniques where used?"
                fullWidth={true}
                style={style.textfield}
                underlineShow={false}
              />
              <Divider />
              <TextField
                type="text"
                className="form-control"
                ref="date"
                hintText="When was this work made?"
                fullWidth={true}
                style={style.textfield}
                underlineShow={false}
              />
              <Divider />
              <TextField
                className="form-control"
                ref="description"
                hintText="Describe the artwork.."
                multiLine={true}
                rows={10}
                rowsMax={30}
                fullWidth={true}
                style={style.textfield}
                underlineShow={false}
              />
              <Divider />
              <FlatButton
                label="Save"
                type="submit"
                style={style.btn}
              />

            </form>
          </Paper>

        );
    }

}

export default ArtworkForm;
