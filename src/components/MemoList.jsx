import { Feather } from '@expo/vector-icons';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function MemoList() {
  return (
    <View style={styles.memoList}>
      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>Shopping List</Text>
          <Text style={styles.memoListItemDate}>10:13 17 Aug 2022</Text>
        </View>
        <TouchableOpacity>
          <Feather name="x" size={16} color="#B0B0B0" />
        </TouchableOpacity>
      </View>
      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>Shopping List</Text>
          <Text style={styles.memoListItemDate}>10:13 17 Aug 2022</Text>
        </View>
        <TouchableOpacity>
          <Feather name="x" size={16} color="#B0B0B0" />
        </TouchableOpacity>
      </View>
      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>Shopping List</Text>
          <Text style={styles.memoListItemDate}>10:13 17 Aug 2022</Text>
        </View>
        <TouchableOpacity>
          <Feather name="x" size={16} color="#B0B0B0" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
