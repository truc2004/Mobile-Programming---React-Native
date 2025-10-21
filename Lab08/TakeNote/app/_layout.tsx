import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: 'Index' }} />
      <Stack.Screen name="home" options={{ title: 'Home' }} />
      <Stack.Screen name="add" options={{ title: 'Add' }} />
    </Stack>
  );
}
