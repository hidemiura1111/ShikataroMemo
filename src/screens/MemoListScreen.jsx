import { StyleSheet, Text, View } from 'react-native';

import MemoList from '../components/MemoList';
import CircleButton from '../components/CircleButton';

export default function App() {
  return (
    <View style={styles.container}>
      <MemoList />
      <CircleButton name="plus" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
});
