import React, {Component} from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents } from './api';
import logo from './images/CityEvents.png'

class App extends Component{
  state = {
    events: [],
    page: null,
  }

  componentDidMount() {
      this.updateEvents();
  }

  updateEvents = (lat, lon, page) => {
    if (lat && lon) {
      getEvents(lat, lon, this.state.page).then(events =>
        this.setState({ events, lat, lon })
      );
    } else if (page) {
      getEvents(this.state.lat, this.state.lon, page).then(events =>
        this.setState({ events, page })
      );
    } else {
      getEvents(this.state.lat, this.state.lon, this.state.page).then(events =>
        this.setState({ events })
      );
    }
  }

  render(){
  return (
    <div className="App">
      <img className="logo" src={logo} alt="logo" />
      <CitySearch updateEvents={this.updateEvents} />
      <NumberOfEvents updateEvents={this.updateEvents} />
      <EventList events={this.state.events} />


    </div>
  );
}
}

export default App;
