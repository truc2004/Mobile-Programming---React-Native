import { Stack } from 'expo-router';
import { SQLiteProvider } from 'expo-sqlite';
import { setupDB } from '../data/db';

export default function RootLayout() {
  return (
    <SQLiteProvider databaseName="tasks.db" onInit={setupDB}>
      <Stack screenOptions={{ headerShown: false }}>

      </Stack>
    </SQLiteProvider>
  );
}
