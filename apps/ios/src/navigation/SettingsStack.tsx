import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from '../theme/colors';
import SettingsScreen from '../screens/SettingsScreen';
import CreditsScreen from '../screens/CreditsScreen';

export type SettingsStackParamList = {
  SettingsHome: undefined;
  VendorCredits: undefined;
};

const Stack = createNativeStackNavigator<SettingsStackParamList>();

export default function SettingsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.cream },
        headerTitleStyle: { color: colors.ink, fontWeight: '600' },
        headerTintColor: colors.tealDeep,
      }}
    >
      <Stack.Screen name="SettingsHome" component={SettingsScreen} options={{ title: 'Settings' }} />
      <Stack.Screen name="VendorCredits" component={CreditsScreen} options={{ title: 'Vendor credits' }} />
    </Stack.Navigator>
  );
}
