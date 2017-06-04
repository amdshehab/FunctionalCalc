import React, {Component} from 'react';
import Style from './Style';
import InputButton from './InputButton'
import {
  Text,
  AppRegistry,
  View
} from 'react-native';

const inputButtons = [
  [1, 2, 3, '/'],
  [4, 5, 6, '*'],
  [7, 8, 9, '-'],
  [0, '.', '=', '+']
]

class ReactCalculator extends Component {
  constructor(props){
    super(props);
    this.state = {
      previousInputValue: 0,
      inputValue: 0,
      selectedOperator: null
    }
  }
  render(){
    return(
      <View style={Style.rootContainer}>
        <View style={Style.displayContainer}>
          <Text style={Style.displayText}>{this.state.inputValue}</Text>
        </View>
        <View style={Style.inputContainer}>
          {this._renderInputButtons()}
        </View>
      </View>
    )
  }

  _onInputButtonPressed(input){
    switch (typeof input) {
      case 'number':
          return this._handleNumberInput(input)
      case 'string':
          return this._handleStringInput(input)
    }
  }

  _handleNumberInput(num){
    let inputValue = (this.state.inputValue*10)+num
    this.setState({inputValue: inputValue})
  }

  _handleStringInput(string){
    switch(string){
      case '+':
      case '-':
      case '*':
      case '/':
        this.setState({
          selectedOperator: string,
          previousInputValue: this.state.inputValue,
          inputValue: 0
        });
        break
    }
  }

  _renderInputButtons(){
    let views = []

    for (var r = 0; r < inputButtons.length; r ++){
      let row = inputButtons[r]

      let inputRow = []
      for(var i = 0; i < row.length; i++){
        let input = row[i]

        inputRow.push(
          <InputButton
            value={input}
            highlight={this.state.selectedOperator === input}
            onPress={this._onInputButtonPressed.bind(this, input)}
            key={r + '-' + i}/>
          )
      }
      views.push(<View style={Style.inputRow} key={'row' + r}>{inputRow}</View>)
    }
    return views;
  }
}

AppRegistry.registerComponent('calculator', () => ReactCalculator);
