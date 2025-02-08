import { StyleSheet, View, ActivityIndicator } from "react-native";
import {
  useFonts,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import ShoppingListItem from "./components/ShoppingListItem";
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

  const shoppingItems = [
    { id: 1, name: "Apples", deleted: false },
    { id: 2, name: "Bananas", deleted: true }, // Marked as deleted
    { id: 3, name: "Oranges", deleted: false },
    { id: 4, name: "Milk", deleted: false },
    { id: 5, name: "Bread", deleted: true }, // Marked as deleted
    { id: 6, name: "Eggs", deleted: false },
    { id: 7, name: "Cheese", deleted: false },
    { id: 8, name: "Chicken", deleted: false },
    { id: 9, name: "Rice", deleted: true }, // Marked as deleted
    { id: 10, name: "Tomatoes", deleted: false },
  ];

  return (
    <View style={styles.container}>
      {shoppingItems.map((itm) => (
        <ShoppingListItem key={itm.id} {...itm} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
