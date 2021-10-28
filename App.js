import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { AppTabNavigator } from "./components/AppTabNavigator";

export default function App() {
  return <AppContainer />;
}

const switchNavigator = createSwitchNavigator({
 // WelcomeScreen: { screen: WelcomeScreen },
 // Drawer: { screen: AppDrawerNavigator },
  BottomTab: { screen: AppTabNavigator }
});

const AppContainer = createAppContainer(switchNavigator);