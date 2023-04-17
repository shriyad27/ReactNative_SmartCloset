import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import ClothingDetailsScreen from './src/screens/ClothingDetailsScreen';
import AddItemScreen from './src/screens/AddItemScreen';
import PreviewScreen from './src/screens/PreviewScreen';
import SelectEventScreen  from './src/screens/SelectEventScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import BluetoothScreen from './src/screens/BluetoothScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

//link the welcome screen to the home screen
const WelcomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Welcome Screen!</Text>
      <Button
        title="Get Started"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};



// use tab navigator for home and add item screens
const App = () => {
const [connected, setConnected] = React.useState(false);
  const [PID, setPID] = React.useState(null);
  const [SERVICE_UUID, setSERVICE_UUID] = React.useState(null);
  const [CHARACTERISTIC_UUID, setCHARACTERISTIC_UUID] = React.useState(null);
  
  /*if (!connected) {
    return (
      <BluetoothScreen
        connected={connected}
        setConnected={setConnected}
        PID={PID}
        setPID={setPID}
        setCHARACTERISTIC_UUID={setCHARACTERISTIC_UUID}
        setSERVICE_UUID={setSERVICE_UUID}
      />
    );
  }*/
  return (
    <NavigationContainer>
      
      <Tab.Navigator>
        <Tab.Screen
          name="Welcome"
          children={() => (
            <Stack.Navigator initialRouteName="Welcome">
              <Stack.Screen
                name="Welcome"
                component={WelcomeScreen}
                options={{title: 'Welcome'}}
              />
              <Stack.Screen
                name="Button"
                component={WelcomePage}
                options={{title: 'Welcome Button'}}
              />
            </Stack.Navigator>
          )}
          options={{
            headerShown: false,
          }}
        /> 

        <Tab.Screen
          name="Home"
          children={() => (
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{title: 'Clothing Items'}}
              />
              <Stack.Screen
                name="ClothingDetails"
                PID={PID}
                SERVICE_UUID={SERVICE_UUID}
                CHARACTERISTIC_UUID={CHARACTERISTIC_UUID}
                component={ClothingDetailsScreen}
                options={{title: 'Item Details'}}
              />
            </Stack.Navigator>
          )}
          options={{
            headerShown: false,
          }}
        />

        <Tab.Screen
          name="AddItem"
          children={() => (
            <Stack.Navigator initialRouteName="AddItem">
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
          )}
          options={{
            headerShown: false,
          }}
        />
        
        <Tab.Screen
          name="SelectEvent"
          children={() => (
            <Stack.Navigator initialRouteName="SelectEvent">
              <Stack.Screen
                name="SelectEvent"
                component={SelectEventScreen}
                options={{title: 'Select Event'}}
              />
              <Stack.Screen
                name="Preview"
                component={PreviewScreen}
                options={{title: 'Preview'}}
              />
            </Stack.Navigator>
          )}
          options={{
            headerShown: false,
          }}
        />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
