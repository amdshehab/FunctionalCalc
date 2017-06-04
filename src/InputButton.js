import React, {Component} from 'react'
import {
  View,
  AppRegistry,
  Text,
  TouchableHighlight
} from 'react-native'

import Style from './Style'

export default class InputButton extends Component {
  render(){
    return(
      <TouchableHighlight style={[Style.inputButton, this.props.highlight? Style.inputButtonHighlighted : null]}
                          underlayColor="#193441"
                          onPress={this.props.onPress}>
        <Text value={Style.inputButtonText}>{this.props.value}</Text>
      </TouchableHighlight>
    )
  }
}
