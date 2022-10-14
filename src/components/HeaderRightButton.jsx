import {
  TouchableOpacity, Text, StyleSheet
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { shape, func } from "prop-types";

import LogOutButton from "./LogoutButton";

export default function HeaderRightButton(props) {
  const { currentUser, cleanupFuncs } = props;
  const navigation = useNavigation();

  if (!currentUser) {
    return null;
  }

  // Announymous User, Register button
  if (currentUser.isAnonymous) {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{ name: "SignUp" }],
          });
        }}
        style={Styles.container}
      >
        <Text style={Styles.label}>Register/Login</Text>
      </TouchableOpacity>
    );
  }

  // Logged in User, Log out button
  return (
    <LogOutButton cleanupFuncs={cleanupFuncs} />
  );
}

HeaderRightButton.proptypes = {
  currentUser: shape().isRequired,
  cleanupFuncs: shape({
    auth: func,
    memos: func,
  }).isRequired,
};

const Styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  label: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
  },
});
