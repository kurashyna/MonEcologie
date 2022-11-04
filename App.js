/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OOBE from "./src/screens/OOBE";

const App = () => {
  const isDarkMode = useColorScheme() === "dark";
  const Stack = createNativeStackNavigator();
  const [isFirstLaunch, setFirstLaunch] = useState(true);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} backBehavior={"none"}>
        {
          isFirstLaunch == true ?
            <Stack.Screen name={"OOBE"}
            name={'OOBE'}
            component={OOBE}
                          options={isFirstLaunch}></Stack.Screen>
            : null
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
});

export default App;
