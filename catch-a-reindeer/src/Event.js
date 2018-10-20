import React, {Component} from 'react';
import './App.css';

class Event extends Component {
  render (){
let event = {
  name: '',
  start_date: '',
  end_date: '',
  links: [],
  location: {}
};

  if (this.props.event !== null){
    event = this.props.event;
  }

    return(
      <div className="event">
       <div className="event-info">
        <div className="event-name"> {event.name} </div>
        <div className="event-dates">
          <div> Start date {event.start_date} </div>
          <div> End date {event.end_date} </div>
        </div>
        <div className="links"> {event.links} </div>
        <div className="location"> {event.links} </div>
        </div>
      </div>
    )
  }
}
export default Event;
