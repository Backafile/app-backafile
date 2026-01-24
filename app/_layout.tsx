import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { MediaProvider } from '../provider/media-provider';

export default function App() {
  return (
    <MediaProvider>
      <RootLayout />
    </MediaProvider>
  );
}

export function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
