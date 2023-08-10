import EncryptedStorage from 'react-native-encrypted-storage';
async function rememberMe(value) {
  try {
    await EncryptedStorage.setItem('remember_me', value);

    // Congrats! You've just stored your first value!
  } catch (error) {
    // There was an error on the native side
    console.error(error);
  }
}

async function getRememberMe() {
  try {
    const session = await EncryptedStorage.getItem('user_session');

    if (session !== undefined) {
      return session;
    }
  } catch (error) {
    // There was an error on the native side
    console.error(error);
  }
}

export {rememberMe, getRememberMe};
