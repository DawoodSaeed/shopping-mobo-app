import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { theme } from "../theme";
import AntDesign from "@expo/vector-icons/AntDesign";
type Props = {
  name: string;
  id: number;
  deleted: boolean;
};
const ShoppingListItem = ({ name, id, deleted }: Props) => {
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
    <View
      style={[styles.itemContainer, deleted ? styles.deletedRow : undefined]}
    >
      <Text style={[styles.itemText, deleted ? styles.deletedText : undefined]}>
        {name}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={deleteFunc}
        activeOpacity={0.65}
        disabled={deleted}
      >
        <AntDesign name="delete" size={24} color="white" />

        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    borderBottomColor: theme.colorCerulean,
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  itemText: { fontSize: 18, fontWeight: 300, fontFamily: theme.fontFamily },

  button: {
    backgroundColor: theme.colorBlack,
    padding: 10,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  buttonText: {
    fontFamily: theme.fontFamily,
    color: theme.colorWhite,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },

  deletedText: {
    textDecorationLine: "line-through",
    color: "gray",
    opacity: 0.7,
  },

  deletedRow: {
    backgroundColor: "#cecece",
    opacity: 0.7,
  },
});

export default ShoppingListItem;
