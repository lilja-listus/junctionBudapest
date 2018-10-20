import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon, Button } from 'react-bootstrap';
import './App.css';
import Event from './Event';
import Map from './Map';
import algoliasearch from 'algoliasearch';

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

  var client = algoliasearch('OAZAQYYD4Y', 'f418d0b8ddf372e0172e85888b980bfd');
  var index = client.initIndex('indexName');

// only query string
index.search(
  function searchDone(err, content) {
    if (err) throw err;

    console.log(content.hits);
  }
);

// with params
index.search(
  {
    query: 'query string',
    attributesToRetrieve: ['name', 'start_date', 'end_date', 'links', 'location'],
    hitsPerPage: 50,
  },
  function searchDone(err, content) {
    if (err) throw err;

    console.log(content.hits);
  }
);
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
