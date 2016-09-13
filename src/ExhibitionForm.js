import React from 'react';
import jQuery from 'jquery'

//STYLES//
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';


const buttonStyle = {
  float: 'right',
  marginLeft: '2rem',
}

class ExhibitionForm extends React.Component {

    loadData() {
      jQuery.get("http://localhost:3001/exhibitions.json", (function(data){
        this.setState({
          exhibitions: data.exhibitions,
        });
      }).bind(this));
    }

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
            alert( "Data saved: " + data );
          })
          .fail(function(error) {
            console.log(error);
          });
    }

    render() {
        return (
          <form onSubmit={this.createExhibition.bind(this)}>
            <div>
              <TextField
                type="title"
                className="form-control"
                ref="title"
                hintText="What is the title of the exhibition?" />
            </div>

            <div>
              <TextField
                type="date"
                className="form-control"
                ref="date"/>
            </div>

            <div>
              <TextField
                type="text"
                className="form-control"
                ref="description"
                hintText="Describe the exhibition.."
                multiLine={true}
                rows={2}
                rowsMax={30}/>
            </div>

            <RaisedButton
              type="submit"
              className="btn btn-primary">
              Create Exhibition
            </RaisedButton>
          </form>

        );
    }

}


export default ExhibitionForm;
