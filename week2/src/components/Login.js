import {
  Button,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from '../style/styles';
import {COLORS, SIZES, icons} from '../constants';
import {memo, useCallback, useEffect, useState} from 'react';

import EncryptedStorage from 'react-native-encrypted-storage';

import {encryptedStorage} from '../helpers';
import {useGetAEStorage} from '../hooks';
import {useNavigation} from '@react-navigation/native';

//TODO: Login component starts here
const Login = () => {
  const navigation = useNavigation();
  const storageName = 'credentials';
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });
  const [persist, setPersist] = useState(false);

  // function to retrieve
  const {data, error, loading, getStorage} = useGetAEStorage(storageName); // Call the hook

  const handleRetrieveClick = () => {
    // Call the hook's function to retrieve data
    getStorage();
  };

  const handleTextChange = useCallback(
    (value, field) => {
      setCredentials(state => ({...state, [field]: value}));
    },
    [credentials],
  );

  const removeUserSession = async () => {
    try {
      await EncryptedStorage.removeItem(storageName);
      // Congrats! You've just removed your first value!
    } catch (error) {
      setIsLoading(false);
      // There was an error on the native side
    } finally {
    }
  };
  console.log('login data', data);
  return (
    <View
      style={[
        styles.sectionView,
        {
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        },
      ]}>
      <Image
        source={icons.user}
        resizeMode="cover"
        style={{width: 100, height: 100}}
      />
      <TextInput
        value={credentials.username}
        onChangeText={input => handleTextChange(input, 'username')}
        style={[
          styles.textBox,
          {
            backgroundColor: COLORS.c1,
            width: 250,
            textAlign: 'center',
            color: COLORS.t1,
          },
        ]}
        placeholder="Username"
        placeholderTextColor={COLORS.t1}
      />
      <TextInput
        value={credentials.password}
        onChangeText={input => handleTextChange(input, 'password')}
        style={[
          styles.textBox,
          {
            backgroundColor: COLORS.c1,
            width: 250,
            textAlign: 'center',
            color: COLORS.t1,
          },
        ]}
        placeholder="Password"
        placeholderTextColor={COLORS.t1}
      />

      {/* Remember me section start */}
      <TouchableOpacity onPress={() => setPersist(!persist)}>
        <View style={{flexDirection: 'row', gap: 10}}>
          <View style={[styles.checkbox, {backgroundColor: 'gray'}]}>
            {persist && (
              <Text
                style={{
                  textAlign: 'center',
                  textAlignVertical: 'center',
                  color: 'white',
                }}>
                ✔︎
              </Text>
            )}
          </View>
          <Text>Remember me</Text>
        </View>
      </TouchableOpacity>
      {/* Remember me section ends */}

      {/* Action button section starts */}
      <View style={[styles.sectionView, {marginTop: SIZES.heroes}]}>
        {/* //TODO: handle login logic here */}
        <TouchableOpacity
          onPress={() => {
            console.log('sign in');
            navigation.navigate('Dashboard');
            // encryptedStorage(storageName, credentials);
          }}>
          <Text style={styles.textBtn}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
          <Text style={{textAlign: 'center', color: COLORS.b1}}>
            Forgot password?
          </Text>
        </TouchableOpacity>
      </View>
      {/* Action button section ends */}
    </View>
  );
};
export default memo(Login);
