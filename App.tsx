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
import { theme } from "./theme";
import {
  useFonts,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import * as Font from "expo-font";
// display points (Pixel ratio) and this vary device.
export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  // Show loading indicator until fonts are loaded
  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  const deleteFunc = () => {
    Alert.alert(
      "Are you sure you want to the delete this ?",
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
    <View style={styles.container}>
      {/* // Never used cause can't customize it */}
      {/* <Button title="Press me " /> */}

      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>Coffee</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={deleteFunc}
          activeOpacity={0.65}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },

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
