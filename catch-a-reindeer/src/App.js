import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon, Button } from 'react-bootstrap';
import './App.css';
import Event from './Event';
import Map from './Map';

class App extends Component {

  //to make the search work
  constructor(props){
    super(props);
    this.state = {
      query:'',
      event: null
    }
  }
//Search
search(){
  const BASE_URL = 'https://google.com?';
  let FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;


 var myOptions = {
   method: 'GET',
 };

/*
  fetch(FETCH_URL, myOptions).then(response => response.json())
   .then(json => {
     const artist = json.artists.items[0];
     this.setState({artist});


  FETCH_URL = `${ALBUM_URL}${artist.id}/top-tracks?country=US&`
  fetch(FETCH_URL, myOptions)
     .then(response => response.json())
     .then(json => {
       console.log('artists top tracks', json);
       const { tracks } = json;
       this.setState({tracks});
     })

   });
*/
}

  render() {
    return (
      <div className="App">
      <div className="App-title">Catch a Reindeer</div>

        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search for an Event"
              value = {this.state.query}
              onChange={event => {this.setState({query: event.target.value})}}
              onKeyPress={event => {
                if(event.key === 'Enter'){
                  this.search();
                }
              }}
              />
              <InputGroup.Addon onClick={() =>this.search()}>
                <Glyphicon glyph="search"></Glyphicon>
              </InputGroup.Addon>
            </InputGroup>
            </FormGroup>
            <div className="Greeting">
            <p> Welcome to the place where you can find info about all upcoming events in the Finno-Ugric world </p>
            </div>

            <div>
            <p>Open the map of events </p>
            <Button bsStyle="primary">Map</Button>

            </div>

      {   this.state.event !== null
          ?
          <div>
          <Event
            event={this.state.event}
            />

          </div>
          : <div> </div>
        }
      </div>
    );
  }
}

export default App;
