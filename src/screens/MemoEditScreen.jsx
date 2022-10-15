import {
  StyleSheet, TextInput, View, Alert, ImageBackground,
} from 'react-native';
import { useState } from 'react';
import { shape, string } from 'prop-types';
import firebase from 'firebase';

import CircleButton from '../components/CircleButton';

import background_clear from '../../assets/background_clear.png';

export default function MemoEditScreen(props) {
  const { navigation, route } = props;
  const { id, bodyText } = route.params;
  const [body, setBody] = useState(bodyText);

  function handlePress() {
    const { currentUser } = firebase.auth();
    if (currentUser) {
      const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
      ref.set({
        bodyText: body,
        updatedAt: new Date(),
      }, { merge: true })
        .then(() => {
          navigation.goBack();
        })
        .catch(() => {
          Alert.alert('Error', 'Fail to update memo');
        });
    }
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={background_clear} style={styles.backgroundImage} >
        <View style={styles.inputContainer}>
          <TextInput
            value={body}
            multiline
            style={styles.input}
            onChangeText={(text) => { setBody(text); }}
          />
        </View>
        <CircleButton
          name="check"
          onPress={handlePress}
        />
      </ImageBackground>
    </View>
  );
}

MemoEditScreen.propTypes = {
  route: shape({
    params: shape({ id: string, bodyText: string }),
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
  inputContainer: {
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
    paddingTop: 32,
    paddingBottom: 32,
    paddingHorizontal: 27,
  },
});
