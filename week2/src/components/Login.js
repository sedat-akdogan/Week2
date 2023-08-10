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

// import {rememberMe} from '../helpers';
import EncryptedStorage from 'react-native-encrypted-storage';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });
  const [persist, setPersist] = useState(false);
  const [stored, setStored] = useState({});
  const [loading, setIsLoading] = useState(true);

  const handleTextChange = useCallback(
    (value, field) => {
      setCredentials(state => ({...state, [field]: value}));
    },
    [credentials],
  );

  const handleLogin = useCallback(() => {
    setCredentials({});
  }, []);

  const storeUserSession = async () => {
    try {
      await EncryptedStorage.setItem(
        'user_session',
        JSON.stringify(credentials),
      );
      console.log('stored successfully');
      // Congrats! You've just stored your first value!
    } catch (error) {
      // There was an error on the native side
    }
  };

  // Retrieving async data
  const retrieveUserSession = async () => {
    try {
      const session = await EncryptedStorage.getItem('user_session');

      if (session !== undefined) {
        // Congrats! You've just retrieved your first value!
        const sessionData = JSON.parse(session);

        setStored(sessionData);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }

      console.log('stored', stored);
    } catch (error) {
      // There was an error on the native side
      console.error(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

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
        <TouchableOpacity onPress={() => storeUserSession()}>
          <Text style={styles.textBtn}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{textAlign: 'center', color: COLORS.b1}}>
            Forgot password?
          </Text>
        </TouchableOpacity>
      </View>
      {/* Action button section ends */}

      <View>
        <Text>Username</Text>
        {!loading ? (
          <Text
            style={{
              padding: 10,
              fontSize: 30,
              borderColor: COLORS.t1,
              borderWidth: 1,
              color: COLORS.t1,
            }}>
            {stored.username}
          </Text>
        ) : (
          <Text>Loading username...</Text>
        )}
        <Button title="Get Stored" onPress={() => retrieveUserSession()} />
      </View>
    </View>
  );
};
export default memo(Login);
