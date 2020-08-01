import AsyncStorage from '@react-native-community/async-storage';

const storesingle = async (key,value) => {
    try {
      await AsyncStorage.setItem(key, value)
    } catch (e) {
      // saving error
      return e
    }
  }


  const storeData = async (key,value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
        return e
      // saving error
    }
  }

  const getsingle = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key)
      if(value !== null) {
        // value previously stored
        return value;
      }
    } catch(e) {
        return e
      // error reading value
    }
  }


  const getData = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key)
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
        return e
      // error reading value
    }
  }

  const cleardata=async()=>{
      try{
         const value=await AsyncStorage.clear();
         return value; 

      }catch(e){
          return e
      }
  }


  export {
      storesingle,
      storeData,
      getsingle,
      getData,
      cleardata
  }