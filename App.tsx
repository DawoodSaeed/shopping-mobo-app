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
    { id: 1, name: "Apples" },
    { id: 2, name: "Bananas" },
    { id: 3, name: "Oranges" },
    { id: 4, name: "Milk" },
    { id: 5, name: "Bread" },
    { id: 6, name: "Eggs" },
    { id: 7, name: "Cheese" },
    { id: 8, name: "Chicken" },
    { id: 9, name: "Rice" },
    { id: 10, name: "Tomatoes" },
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
