/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import at from 'v-at';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TouchableHighlight,
  TextInput,
  AlertIOS,
  View
} from 'react-native';

var rndemo = React.createClass({

  getInitialState: function() {
    return {
      text: ''    
    };
  },

  fetchAddress: function () {
    if (this.state.text) {
      fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + this.state.text)
      .then((response) => response.json())
      .then((response) => {
        debugger;
        AlertIOS.alert(this.state.text, at(response, 'results.0.formatted_address'));
      });
    }
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Places
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text} />
        <TouchableHighlight onPress={this.fetchAddress} underlayColor='#EFEFEf'>
          <Text>Get Address</Text>
        </TouchableHighlight>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEE',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 20,
    padding: 10
  }
});

AppRegistry.registerComponent('rndemo', () => rndemo);
