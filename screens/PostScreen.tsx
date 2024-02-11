import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useDispatch} from 'react-redux';

const PostScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleSignup = () => {
    if (email === '' && password === '') {
      console.log('=-=-=-=-= validate');
      return;
    }
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: email,
        body: password,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then((res:any) => {
        console.log("=-=-=-=-",res)
        navigation.goBack()
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Body"
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Button title="Done" onPress={handleSignup} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default PostScreen;
