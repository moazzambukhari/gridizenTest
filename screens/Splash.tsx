import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';

const SplashScreen = () => {
  const navigation = useNavigation();
  const user = useSelector((state: any) => state.auth.user);

  useEffect(() => {
    const timer = setTimeout(async () => {
      const value = await AsyncStorage.getItem('@user');
      if (value && value !== '') {
        navigation.navigate('Home');
      } else {
        navigation.navigate('Signup');
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.87170709.1707609600&semt=ais',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // Change as needed
  },
  logo: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
});

export default SplashScreen;
