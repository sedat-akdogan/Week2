import {createNativeStackNavigator} from '@react-navigation/stack';
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';
import ForgetPassword from '../components/ForgetPassword';

const Stack = createNativeStackNavigator();
const LoginStack = () => {
  return (
    // TODO: Add forget password screen
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
    </Stack.Navigator>
  );
};

export {LoginStack};
