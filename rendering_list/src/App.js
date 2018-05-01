import React, { Component } from 'react';
import './App.css';

import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {

  state = {
    inputText: '',
    inputLength: 0
  };

  inputChangeHandler = (event) => {
    const inputText = event.target.value;
    this.setState({ 
      inputText: inputText,
      inputLength: inputText.length
    });
  }

  deleteCharHandler = (index) => {
    const chars = [...this.state.inputText];
    chars.splice(index, 1);

    this.setState({
      inputText: chars.join(''),
      inputLength: chars.join('').length
    });
    
  }

  render() {
    let charBoxes = null;
    let textArray = this.state.inputText.split('');

    if (textArray.length > 0) {
      charBoxes = (
        <div>
          {
            textArray.map((char, index) => {
              return <Char 
                char={char}
                key={index}
                click={() => this.deleteCharHandler(index)} />
            })
          }
        </div>
      );
    }
   
    return (
      <div className="App">
        <input 
          type="text" 
          onChange={ this.inputChangeHandler }
          value={this.state.inputText}/>

        <p>Input length: {this.state.inputLength} </p>

        <Validation inputLength={this.state.inputLength}/>

        {charBoxes}
      </div>
    );
  }

}

export default App;
