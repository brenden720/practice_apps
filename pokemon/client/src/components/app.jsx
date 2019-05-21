import React from 'react';
import axios from 'axios';
import Form from './form';
import List from './list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      data: {},
      isSubmitted: false,
    };
    this.onFormChange = this.onFormChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormChange(e) {
    const value = e.target.value.toLowerCase();
    this.setState({
      [e.target.name]: value
    });
  }

  onFormSubmit() {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.name}`)
      .then(res => {
        this.setState({
          data: res.data,
          isSubmitted: true,
        });
      })
      .catch(err => {
        this.setState({
          data: null,
          isSubmitted: true,
        });
      });
    event.preventDefault();
  }

  render() {
    const {isSubmitted, data} = this.state;
    if (!isSubmitted) {
      return (
        <div className="pokemonContainer">
          <h1>Pokemon Search</h1>
          <Form onFormChange={this.onFormChange} onFormSubmit={this.onFormSubmit} />
        </div>
      );
    } else {
      return (
        <div className="pokemonContainer">
          <h1>Pokemon Search</h1>
          <Form onFormChange={this.onFormChange} onFormSubmit={this.onFormSubmit} />
          <List data={data} />
        </div>
      );
    }
  }
}

export default App;
