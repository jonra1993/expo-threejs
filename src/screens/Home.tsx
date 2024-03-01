import React from "react";
import { View, Text } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Home = (): React.JSX.Element => {

  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text>Hello</Text>
      </View>
    </SafeAreaProvider>
  )
}


export default Home;