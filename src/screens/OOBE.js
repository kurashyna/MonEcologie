import { Button, Image, SafeAreaView, Text, StyleSheet, Dimensions, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OOBETitle from "./OOBE/OOBETitle";
import OOBEForm from "./OOBE/OOBEForm";

export default function OOBE({ navigation }) {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={"OOBE Title"} component={OOBETitle} />
      <Stack.Screen name={"OOBE Form"} component={OOBEForm} />
    </Stack.Navigator>
  );
}


