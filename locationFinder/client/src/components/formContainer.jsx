import React from 'react';
import Select from './select';
import Name from './name';
import Button from './button';
import Location from './location';
import axios from 'axios';

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ''
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    event.preventDefault();
  }

  handleClick() {
    const KEY = process.env.API_KEY;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log('lat' + latitude + 'long' + longitude);
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&sensor=false&key=${KEY}`)
          .then(res => {
            const location = res.data.results[7].formatted_address;
            this.setState({location});
          });
      });
    } else {
      return <div>Geolocation Unavailable</div>;
    }
  }

  render() {
    const {location} = this.state;
    return (
      <div>
        <Name />
        <Select />
        <Location handleClick={this.handleClick} location={location} />
        <Button handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default FormContainer;
