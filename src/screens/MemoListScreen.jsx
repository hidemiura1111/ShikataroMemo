import {
  StyleSheet, View, Text, Alert,
} from 'react-native';
import { useEffect, useState } from 'react';
import firebase from 'firebase';

import MemoList from '../components/MemoList';
import CircleButton from '../components/CircleButton';
import Button from '../components/Button';
import Loading from '../components/Loading';
import HeaderRightButton from '../components/HeaderRightButton';

export default function MemoListScreen(props) {
  const { navigation } = props;
  const [memos, setMemos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Get MemoList with Annonymous Login
  // It is necessary to set enable AnonymousUsers in firebase console
  useEffect(() => {
    setIsLoading(true);

    const cleanupFuncs = {
      auth: () => { },
      memos: () => { },
    }

    cleanupFuncs.auth = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const db = firebase.firestore();
        const ref = db.collection(`users/${user.uid}/memos`).orderBy('updatedAt', 'desc');
        ref.onSnapshot((snapshot) => {
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
        }, () => {
          setIsLoading(false);
        });

        // Register or Logout button
        navigation.setOptions({
          headerRight: () => <HeaderRightButton currentUser={user} cleanupFuncs={cleanupFuncs} />,
        });

      } else {
        firebase.auth().signInAnonymously()
          .catch(() => {
            Alert.alert('Try to restart App.');
          })
          .then(() => { setIsLoading(false); });
      }
    });

    return () => {
      cleanupFuncs.auth();
      cleanupFuncs.memos();
    };
  }, []);

  if (memos.length === 0) {
    return (
      <View style={emptyStyles.container}>
        <Loading isLoading={isLoading} />
        <View style={emptyStyles.inner}>
          <Text style={emptyStyles.title}>Let&apos;s create first memo!!</Text>
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
