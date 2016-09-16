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


class ExhibitionForm extends React.Component {
    constructor() {
      super();

      this.state = {
        files: []
      };
    }

    createExhibition(e){
      e.preventDefault();

      let req = request
        .post('http://localhost:3001/exhibitions')

      this.state.files.forEach((file) => {
        req.attach('exhibition[image]', file)
      })

      req.field('exhibition[title]', this.refs.title.getValue())
          .field('exhibition[date]', this.refs.date.getValue())
          .field('exhibition[description]', this.refs.description.getValue())
          .end((err, response) => {
            if (response.ok) {
              console.log(response.body)
            }

            if (err) {
              console.log(err)
            }
          })
      }

    onDrop(files) {
      this.setState({
        files: files
      });
    }

    render() {
        return (
          <Paper zDepth={1}>
            <form onSubmit={this.createExhibition.bind(this)}>
              <h4 style={style.textfield}>Add a new Exhibition</h4>
              <TextField
                type="text"
                className="form-control"
                ref="title"
                hintText="What is the title of the exhibition?"
                fullWidth={true}
                style={style.textfield}
                underlineShow={false}
              />
              <Divider />
              <TextField
                type="text"
                className="form-control"
                ref="date"
                hintText="When will the exhibition be held?"
                fullWidth={true}
                style={style.textfield}
                underlineShow={false}
              />
              <Divider />
              <TextField
                type="text"
                className="form-control"
                ref="description"
                hintText="Describe the exhibition.."
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
                  <p>Click to add an image to this exhibition.</p>
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

export default ExhibitionForm;
