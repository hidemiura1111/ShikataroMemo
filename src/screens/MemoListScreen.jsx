import { StyleSheet, View, Text, Alert } from 'react-native';
import { useEffect, useState } from 'react';
import firebase from 'firebase';

import MemoList from '../components/MemoList';
import CircleButton from '../components/CircleButton';
import LogoutButton from '../components/LogoutButton';
import Button from '../components/Button';
import Loading from '../components/Loading';

export default function MemoListScreen(props) {
  const { navigation } = props;
  const [memos, setMemos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Logout Button
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogoutButton />,
    });
  }, []);

  // Get MemoList
  useEffect(() => {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    let unsubscribe = () => { };

    if (currentUser) {
      setIsLoading(true);
      const ref = db.collection(`users/${currentUser.uid}/memos`).orderBy('updatedAt', 'desc');
      unsubscribe = ref.onSnapshot((snapshot) => {
        const userMemos = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          userMemos.push({
            id: doc.id,
            bodyText: data.bodyText,
            updatedAt: data.updatedAt.toDate(),
          });
        });
        setMemos(userMemos);
        setIsLoading(false);
      }, (error) => {
        setIsLoading(false);
        Alert.alert('Fail to read memo');
      });
    }

    return unsubscribe;
  }, []);

  if (memos.length === 0) {
    return (
      <View style={emptyStyles.container}>
        <Loading isLoading={false} />
        <View style={emptyStyles.inner}>
          <Text style={emptyStyles.title}>Let's create first memo!!</Text>
          <Button
            style={emptyStyles.button}
            label="Create Memo"
            onPress={() => { navigation.navigate('MemoCreate'); }}
          />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MemoList memos={memos} />
      <CircleButton
        name="plus"
        onPress={() => { navigation.navigate('MemoCreate'); }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
});

const emptyStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 24,
  },
  button: {
    alignSelf: 'center',
  },
});