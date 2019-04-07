import React from 'react';
import { View, Text, Button,Alert } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import {connect} from 'react-redux';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            this.props.navigation.navigate('Details')
          }}
        />
      </View>
    );
  }  
}
function mapStateToProps(state){
    Alert.alert(JSON.stringify(state))
    return{myState: state}
}

export default connect(mapStateToProps)(HomeScreen)