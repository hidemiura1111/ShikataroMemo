import { StyleSheet, TextInput, View } from 'react-native';

import CircleButton from '../components/CircleButton';

export default function MemoEditScreen(props) {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput value="Shopping Lits" multiline style={styles.input} />
      </View>
      <CircleButton
        name="check"
        onPress={() => { navigation.goBack(); }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
  },
});