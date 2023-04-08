import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ClothingDetailsScreen from './src/screens/ClothingDetailsScreen';
import AddItemScreen from './src/screens/AddItemScreen';
import PreviewScreen from './src/screens/PreviewScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Clothing Items'}}
        />
        <Stack.Screen
          name="ClothingDetails"
          component={ClothingDetailsScreen}
          options={{title: 'Item Details'}}
        />
        <Stack.Screen
          name="AddItem"
          component={AddItemScreen}
          options={{title: 'Add Item'}}
        />
        <Stack.Screen
          name="Preview"
          component={PreviewScreen}
          options={{title: 'Preview'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
