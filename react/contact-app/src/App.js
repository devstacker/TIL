import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';

class App extends Component {

  state = {
    information: [],
  }

  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      //information: this.state.information.concat(data)
      information: information.concat(data)
    })
  }

  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} /> 
        {JSON.stringify(this.state.information)}
      </div>
    );
  }
}

export default App;
