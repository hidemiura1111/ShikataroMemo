// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import React from 'react'; // No need it current version of React Native

// import Hello from './src/components/Hello';
import AppBar from './src/components/AppBar';

export default function App() {
  return (
    <View style={styles.container}>

      <AppBar />

      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>Shopping List</Text>
          <Text style={styles.memoListItemDate}>10:13 17 Aug 2022</Text>
        </View>
        <View>
          <Text>X</Text>
        </View>
      </View>

      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>Shopping List</Text>
          <Text style={styles.memoListItemDate}>10:13 17 Aug 2022</Text>
        </View>
        <View>
          <Text>X</Text>
        </View>
      </View>

      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>Shopping List</Text>
          <Text style={styles.memoListItemDate}>10:13 17 Aug 2022</Text>
        </View>
        <View>
          <Text>X</Text>
        </View>
      </View>

      <View style={styles.circleButton}>
        <Text style={styles.circleButtonLabel}>+</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  memoListItem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)',
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484',
  },
  circleButton: {
    backgroundColor: '#467FD3',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
  circleButtonLabel: {
    color: '#ffffff',
    fontSize: 40,
    lineHeight: 40,
  },
});
