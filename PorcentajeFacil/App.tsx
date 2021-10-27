import React from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { MenuLateral } from "./src/navigator/MenuLateral"; 
import { View, Text } from 'react-native';

export const App = () => {
  return (
    <NavigationContainer>
      <MenuLateral></MenuLateral>
    </NavigationContainer>
  )
}

export default App;