import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '../components/UserProfile';
import Dashboard from '../components/Dashboard';

// TODO: implement logout

const Stack = createNativeStackNavigator();
const renderDashboardStacks = () => {
  return (
    // TODO: Add forget password screen
    <Stack.Group>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Group>
  );
};

export {renderDashboardStacks};
