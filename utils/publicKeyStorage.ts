import AsyncStorage from '@react-native-async-storage/async-storage';

const storePublicKey = async (value: string) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@storage_Key', jsonValue);
  } catch (e) {
    // saving error
    console.log(e);
  }
};

export const getPublicKey = async (): Promise<string | undefined> => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_Key');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
    console.log(e);
  }
};
