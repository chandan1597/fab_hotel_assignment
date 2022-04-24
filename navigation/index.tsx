
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import TabOneScreen from '../screens/DashboardScreen';
import TabTwoScreen from '../screens/DetailsScreen';
import LinkingConfiguration from './LinkingConfiguration';
import SignInScreen from '../screens/SignInScreen';
export default function Navigation() {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}
const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignInScreen" component={SignInScreen} options={{ headerShown: true, title: "Sign In" }} />
      <Stack.Screen name="DashboardScreen" component={TabOneScreen} options={{ headerShown: true, title: "News Dashboard", headerBackVisible: false}} />
      <Stack.Screen name="DetailsScreen" component={TabTwoScreen} options={{ headerShown: true, title: "News Details", }} />
    </Stack.Navigator>
  );
}
