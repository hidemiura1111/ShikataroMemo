import {
  StyleSheet, View, Text, Alert, ImageBackground, Image,
} from 'react-native';
import { useEffect, useState } from 'react';
import firebase from 'firebase';

import MemoList from '../components/MemoList';
import CircleButton from '../components/CircleButton';
import Button from '../components/Button';
import Loading from '../components/Loading';
import HeaderRightButton from '../components/HeaderRightButton';

import background_green from '../../assets/background_green.png';
import background_pink from '../../assets/background_pink.png';
import bg_pic from '../../assets/bg_shikataro.png';

export default function MemoListScreen(props) {
  const { navigation } = props;
  const [memos, setMemos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Get and set MemoList with Annonymous Login
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

  // Display MemoList when no memo
  if (memos.length === 0) {
    return (
      <View style={emptyStyles.container}>
        <Loading isLoading={isLoading} />
        <View style={emptyStyles.inner}>
          <Text style={emptyStyles.title}>Let&apos;s create a first memo!!</Text>
          <Button
            style={emptyStyles.button}
            label="Create Memo"
            onPress={() => { navigation.navigate('MemoCreate'); }}
          />
        </View>
        <Image source={bg_pic} style={emptyStyles.backgroundImage} />
      </View>
    );
  }

  // Display MemoList when memo exists
  return (
    <View style={styles.container} >
      <ImageBackground source={background_green} style={styles.backgroundImage} >
        <MemoList memos={memos} />
        <CircleButton
          name="plus"
          onPress={() => { navigation.navigate('MemoCreate'); }}
        />
      </ImageBackground>
    </View>
  );
}

const emptyStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f6e0e1',
  },
  backgroundImage: {
    position: 'absolute',
    zIndex: -1,
    bottom: 40,
    resizeMode: 'contain',
    height: '45%',
  },
  inner: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 100,
  },
  title: {
    color: '#4d715f',
    fontSize: 18,
    marginBottom: 24,
    fontWeight: 'bold',
  },
  button: {
    alignSelf: 'center',
    backgroundColor: '#97a797',
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
});
