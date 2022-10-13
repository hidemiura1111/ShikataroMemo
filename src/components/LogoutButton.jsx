import {
  TouchableOpacity, Text, StyleSheet, Alert,
} from 'react-native';
import firebase from 'firebase';
import { useNavigation } from '@react-navigation/native';

export default function LogoutButton() {
  const navigation = useNavigation();

  function handlePress() {
    Alert.alert('Log out', 'Are you sure you want to log out?', [
      {
        text: 'Cancel',
        onPress: () => { },
      },
      {
        text: 'OK',
        onPress: () => {
          firebase.auth().signOut()
            .then(() => {
              navigation.reset({
                index: 0,
                routes: [{ name: 'MemoList' }],
              });
            })
            .catch(() => {
              Alert.alert('Fail to logout.');
            });
        },
      },
    ]);
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={styles.label}>Logout</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    paddingVertical: 4,
  },
  label: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
  },
});
