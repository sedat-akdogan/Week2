import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {Button, Text, View} from 'react-native';
import Profile from './UserProfile';

const Dashboard = ({navigation}) => {
  // const navigation = useNavigation();
  return (
    <View>
      <Text>Dashboard</Text>
      <Button
        title="Go to profile"
        onPress={() => navigation.navigate('UserProfile')}
      />
      <Button title="Logout" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default Dashboard;
