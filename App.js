import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>App screen</Text>
        <Button
          onPress={() => this.props.navigation.navigate("test")}
          title="Go to Test"
        />
      </View>
    );
  }
}

class Test extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Test screen</Text>
        <Button
          onPress={() => this.props.navigation.navigate("home")}
          title="Go to App"
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  home: App,
  test: Test
});

export default createAppContainer(AppNavigator);
