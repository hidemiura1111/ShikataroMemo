import { StyleSheet, ScrollView, Text, View } from 'react-native';

import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';

export default function MemoDetailScreen() {
  return (
    <View>
      <AppBar />
      <View>
        <Text>Shopping List</Text>
        <Text>10:13 17 Aug 2022</Text>
      </View>
      <ScrollView>
        <Text>
          I want buy these items:
          - Eggs
          - Milk
          - Bread
        </Text>
      </ScrollView>
      <CircleButton>+</CircleButton>
    </View>
  );
}