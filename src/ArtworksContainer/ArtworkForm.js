import React from 'react'
import jQuery from 'jquery'
import Dropzone from 'react-dropzone'
import request from 'superagent'

//STYLES//
import TextField from 'material-ui/TextField'
import Divider from 'material-ui/Divider'
import Paper from 'material-ui/Paper'
import FlatButton from 'material-ui/FlatButton'

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
    constructor() {
      super();

      this.state = {
        files: []
      };
    }

    createArtwork(e){
        e.preventDefault();

        let id = parseInt(this.props.id);
        let req = request
          .post(`http://localhost:3001/exhibitions/${id}/artworks.json`)

        this.state.files.forEach((file) => {
          req.attach('artwork[image]', file)
        })

        req.field('artwork[artist]', this.refs.artist.getValue())
            .field('artwork[title]', this.refs.title.getValue())
            .field('artwork[date]', this.refs.date.getValue())
            .field('artwork[technique]', this.refs.technique.getValue())
            .field('artwork[description]', this.refs.description.getValue())
            .end((err, response) => {
              if (response.ok) {
                console.log('Created', response.body)
              }
              if (err) {
                console.log(err)
              }
            })
        // this.onChange().bind(this);
      }

      onDrop(files) {
        this.setState({
          files: files
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
                type="text"
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

              <Dropzone
                accept="image/*"
                multiple={false}
                onDrop={this.onDrop.bind(this)}
                style={style.textfield}>
                  <p>Click to add an image of this artwork.</p>
              </Dropzone>

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
