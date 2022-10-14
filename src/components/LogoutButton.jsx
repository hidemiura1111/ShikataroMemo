import {
  TouchableOpacity, Text, StyleSheet, Alert,
} from 'react-native';
import firebase from 'firebase';
import { useNavigation } from '@react-navigation/native';
import { shape, func } from 'prop-types';

export default function LogoutButton(props) {
  const { cleanupFuncs } = props;
  const navigation = useNavigation();

  function handlePress() {
    Alert.alert('Log out', 'Are you sure you want to logout?', [
      {
        text: 'Cancel',
        onPress: () => { },
      },
      {
        text: 'OK',
        onPress: () => {
          cleanupFuncs.auth();
          cleanupFuncs.memos();
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

LogoutButton.propTypes = {
  cleanupFuncs: shape({
    auth: func,
    memos: func,
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  label: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
  },
});
