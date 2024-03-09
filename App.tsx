import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Splash from './src/pages/Splash';
import { useState } from 'react';
import Home from './src/pages/Home';

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return isLoading ? <Splash setIsLoading={() => setIsLoading(false)} /> : <Home />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
