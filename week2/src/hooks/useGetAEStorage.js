const {useState, useEffect} = require('react');
import EncryptedStorage from 'react-native-encrypted-storage';

const useGetAEStorage = name => {
  const [data, setData] = useState({username: undefined, password: undefined});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getStorage = async () => {
    console.log('loading');
    setLoading(true);

    try {
      console.log(`useGetAEStorage - getting storage - ${name}`);
      const session = await EncryptedStorage.getItem(name);

      if (session !== undefined) {
        console.log('parsing data retrieved');
        const sessionData = JSON.parse(session); // parsed session
        console.log('saving ', sessionData);
        setData(sessionData);
      } else {
        setData(undefined);
        console.log('useGetAEStorage - no stored');
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getStorage();
  }, []);

  return {data, error, loading, getStorage};
};

export default useGetAEStorage;
