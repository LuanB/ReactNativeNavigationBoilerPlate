import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class ThirdScreen extends Component {
  render() {
    const following = this.props.navigation.getParam('following', '0');

    return (
      <View style={styles.container}>
        <Text>
          This is the third page. You are following {following.length} friends
        </Text>

        <Button
          title="Go to Home"
          onPress={() => {
            this.props.navigation.navigate('Home');
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
