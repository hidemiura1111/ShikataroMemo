import {
  TouchableOpacity, StyleSheet, Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CancelLogin() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'MemoList' }]
        });
      }}
    >
      <Text style={styles.label}>Cancel</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    marginHorizontal: 8,
  },
  label: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
  },
});