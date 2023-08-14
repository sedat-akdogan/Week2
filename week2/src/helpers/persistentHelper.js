import {useEffect, useState} from 'react';
import EncryptedStorage from 'react-native-encrypted-storage';

// Storing data in object form
// name - name of storage
const encryptedStorage = async (name, object) => {
  try {
    await EncryptedStorage.setItem(name, JSON.stringify(object));
    console.log('stored successfully');
    // Congrats! You've just stored your first value!
  } catch (error) {
    // There was an error on the native side
    console.error(error);
  }
};

// name - name of storage to retrieve
const retrieveStorage = async name => {
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log('retrieving');

  // try block starts
  try {
    const session = await EncryptedStorage.getItem(name);
    console.log('session outside if', session);
    if (session !== undefined) {
      // Congrats! You've just retrieved your first value!
      const sessionData = JSON.parse(session); // parsed session

      setData(sessionData);

      console.log('successfully retrieved');
      console.log('session inside if and after parsed', sessionData);
    } else {
      setData(undefined);
      console.log('no stored');
    }
    setLoading(false);
    console.log('stored', stored);
  } catch (error) {
    // There was an error on the native side
    setError(error);
    console.log('error catch i persistenthelper');
    setLoading(false);
  } finally {
    setLoading(false);
  }
  // try block ends

  return {data, error, loading};
};

export {encryptedStorage, retrieveStorage};
