import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import ClothingDetailsScreen from './src/screens/ClothingDetailsScreen';
import AddItemScreen from './src/screens/AddItemScreen';
import PreviewScreen from './src/screens/PreviewScreen';
import SelectEventScreen from './src/screens/SelectEventScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import BluetoothScreen from './src/screens/BluetoothScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingScreen from './src/screens/LoadingScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// use tab navigator for home and add item screens
const App = () => {
  const [initated, setInitiated] = React.useState(false);
  const [setUp, setSetUp] = React.useState(false);
  const [connected, setConnected] = React.useState(false);
  const [PID, setPID] = React.useState(null);
  const [SERVICE_UUID, setSERVICE_UUID] = React.useState(null);
  const [CHARACTERISTIC_UUID, setCHARACTERISTIC_UUID] = React.useState(null);

  const initialize = async () => {
    if ((await AsyncStorage.getItem('Welcome')) !== null) {
      console.log(await AsyncStorage.getItem('Welcome'));
      setInitiated(true);
    }
    //Check if there is already a previously connected device
    if (AsyncStorage.getItem('PID') !== null) {
    }
    setSetUp(true);
  };
  React.useEffect(() => {
    initialize();
  }, []);

  if (!setUp) {
    return <LoadingScreen />;
  }
  if (!initated) {
    return <WelcomeScreen setInitiated={setInitiated} />;
  }
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
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Closet') {
              iconName = 'shirt-outline';
            } else if (route.name === 'Add Clothes') {
              iconName = 'camera-outline';
            } else if (route.name === 'Recommendations') {
              iconName = 'clipboard-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#F2E9E4',
          tabBarInactiveTintColor: '#4A4E69',
          tabBarStyle: {
            backgroundColor: '#22223B',
            paddingBottom: 5,
            paddingTop: 5,
            height: 55,
          },
          tabBarLabelStyle: {
            fontFamily: 'serif',
            fontSize: 10,
          },
        })}>
        <Tab.Screen
          name="Closet"
          children={() => (
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{title: 'Clothing Items', headerShown: false}}
              />
              <Stack.Screen
                name="ClothingDetails"
                PID={PID}
                SERVICE_UUID={SERVICE_UUID}
                CHARACTERISTIC_UUID={CHARACTERISTIC_UUID}
                component={ClothingDetailsScreen}
                options={{title: 'Item Details', headerShown: false}}
              />
            </Stack.Navigator>
          )}
          options={{
            headerShown: false,
          }}
        />

        <Tab.Screen
          name="Add Clothes"
          children={() => (
            <Stack.Navigator initialRouteName="AddItem">
              <Stack.Screen
                name="AddItem"
                component={AddItemScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Preview"
                component={PreviewScreen}
                options={{title: 'Preview', headerShown: false}}
              />
            </Stack.Navigator>
          )}
          options={{
            headerShown: false,
          }}
        />

        <Tab.Screen
          name="Recommendations"
          children={() => (
            <Stack.Navigator initialRouteName="SelectEvent">
              <Stack.Screen
                name="SelectEvent"
                component={SelectEventScreen}
                options={{title: 'Select Event', headerShown: false}}
              />
              <Stack.Screen
                name="Preview"
                component={PreviewScreen}
                options={{title: 'Preview', headerShown: false}}
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
