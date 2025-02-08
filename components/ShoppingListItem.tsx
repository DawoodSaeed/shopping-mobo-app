import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { theme } from "../theme";

type Props = {
  name: string;
  id: number;
};
const ShoppingListItem = ({ name, id }: Props) => {
  const deleteFunc = () => {
    Alert.alert(
      `Are you sure you want to the delete ${name} ?`,
      "It will be deleted permentally",
      [
        {
          text: "Yes",
          onPress: () => console.log("Item is deleted"),
          style: "destructive",
        },

        {
          text: "Cancel",
          style: "cancel",
        },
      ]
    );
  };

  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{name}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={deleteFunc}
        activeOpacity={0.65}
      >
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    borderRadius: 10,
    borderBottomColor: "#1a759f",
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  itemText: { fontSize: 18, fontWeight: 300, fontFamily: "Inter_500Medium" },

  button: {
    backgroundColor: theme.colorBlack,
    padding: 10,
    borderRadius: 6,
  },

  buttonText: {
    fontFamily: "Inter_500Medium",
    color: theme.colorWhite,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});

export default ShoppingListItem;
