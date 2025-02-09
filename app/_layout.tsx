import { Stack } from "expo-router";

const layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Shopping List",
        }}
      />
    </Stack>
  );
};

export default layout;
