import {Button, Text, View} from 'react-native';

const ForgetPassword = ({navigation}) => {
  // const navigation = useNavigation();
  return (
    <View>
      <Text>Forget Password</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
      <Button title="Login" />
    </View>
  );
};

export default ForgetPassword;
