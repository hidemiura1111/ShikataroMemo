import { StyleSheet, Text, TextInput, View } from 'react-native';

import AppBar from '../components/AppBar';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <View>
        <Text>Login</Text>
        <TextInput value="Email Address" />
        <TextInput value="Password" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
