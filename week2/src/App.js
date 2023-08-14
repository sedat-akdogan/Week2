import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import React, {Component} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from './style/styles';

import Login from './components/Login';
import Dashboard from './components/Dashboard';
import UserProfile from './components/UserProfile';
import ForgetPassword from './components/ForgetPassword';

// async-encrypted-storage
import {useGetAEStorage} from './hooks';

const Stack = createNativeStackNavigator();

const App = () => {
  const persist = false;

  const getAuthStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgetPassword.js" component={ForgetPassword} />
      </Stack.Group>
    );
  };

  const getMainStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
      </Stack.Group>
    );
  };
  const storageName = 'credentials';
  const {data} = useGetAEStorage(storageName);

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={persist ? 'Dashboard' : 'Login'}
          headerMode="none">
          {/* {persist ? getMainStack() : getAuthStack()} */}
          {/* {getAuthStack()}
          {getMainStack()} */}
          <Stack.Group>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
          </Stack.Group>

          <Stack.Group>
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="UserProfile" component={UserProfile} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
