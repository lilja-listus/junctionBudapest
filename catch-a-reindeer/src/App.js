import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon, Button } from 'react-bootstrap';
import './App.css';
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
search(query){

const app = document.getElementById("hits-container");
var client = algoliasearch('OAZAQYYD4Y', 'f418d0b8ddf372e0172e85888b980bfd');
var index = client.initIndex('junction_conferences');
var events = new Array();
index.search(query).then(result=>{
  const hits = result.hits;
  hits.forEach(function(element) {
  //console.log(element);
  var name = element.name;
  var dates = element.start_date + ' - ' + element.end_date;
  var links = element.links;
  var listOfLinks= "";
  links.forEach(function(link){
    if (link !== ""){
      listOfLinks+= "<a>" + link + "</a>" +  ", ";
    }
  });


  var location = element.location.country.eng + ", " + element.location.city.eng;
  var event = "<em>" + name + "</em>" +
              " (" + dates + ") " +  "</br>" +
              " learn more at: "+ listOfLinks + "</br>" +
              "location: "  + location + "</br>";
  events.push(event);
  events.push("</br>");
  //console.log(event);
});

console.log(events);

  events.push("<div><img src='algolia-logo.svg'></img></div>");

  app.innerHTML = events.join("");

});

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
                  this.search(event.target.value);
                }
              }}
              />
              <InputGroup.Addon onClick={event => {this.setState({query: event.target.value}); this.search(event.target.value)}}>

                <Glyphicon glyph="search"></Glyphicon>
              </InputGroup.Addon>
            </InputGroup>
            </FormGroup>
            <div className="Greeting">
            <p id="welcome-text"> Welcome to the place where you can find info about all upcoming events in the Finno-Ugric world </p>
            </div>

            <div>
            <form action="/about.html" >
            <Button bsStyle="primary" type="submit"> About the Project</Button>
            </form>


            </div>

      </div>
    );
  }
}

export default App;
