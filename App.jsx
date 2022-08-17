import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import React from 'react'; // No need it current version of React Native

// import Hello from './src/components/Hello';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text>AnnoyingMemo App</Text>
          <Text>Log out</Text>
        </View>
      </View>

      <View>
        <View>
          <View>
            <Text>Shopping List</Text>
            <Text>10:13 17 Aug 22</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
      </View>

      <View>
        <View>
          <View>
            <Text>Shopping List</Text>
            <Text>10:13 17 Aug 22</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
      </View>

      <View>
        <View>
          <View>
            <Text>Shopping List</Text>
            <Text>10:13 17 Aug 22</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>
      </View>

      <View>
        <Text>+</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
