import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';

import { InventoryProvider } from './src/data/InventoryContext';
import { colors } from './src/theme/colors';
import HomeScreen from './src/screens/HomeScreen';
import ScanScreen from './src/screens/ScanScreen';
import InventoryScreen from './src/screens/InventoryScreen';
import AnalyticsScreen from './src/screens/AnalyticsScreen';
import AlertsScreen from './src/screens/AlertsScreen';
import SettingsStack from './src/navigation/SettingsStack';

const Tab = createBottomTabNavigator();

const iconMap: Record<string, keyof typeof Feather.glyphMap> = {
  Home: 'home',
  Scan: 'camera',
  Inventory: 'archive',
  Analytics: 'bar-chart-2',
  Alerts: 'bell',
  Settings: 'settings',
};

export default function App() {
  return (
    <InventoryProvider>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerStyle: { backgroundColor: colors.cream },
            headerTitleStyle: { color: colors.ink, fontWeight: '600' },
            tabBarActiveTintColor: colors.tealDeep,
            tabBarInactiveTintColor: colors.sage,
            tabBarStyle: { backgroundColor: colors.cream, borderTopColor: colors.border },
            tabBarIcon: ({ color, size }) => (
              <Feather name={iconMap[route.name]} size={size} color={color} />
            ),
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'VetPurse' }} />
          <Tab.Screen name="Scan" component={ScanScreen} options={{ title: 'Scan reagent' }} />
          <Tab.Screen name="Inventory" component={InventoryScreen} />
          <Tab.Screen name="Analytics" component={AnalyticsScreen} options={{ title: 'Insights' }} />
          <Tab.Screen name="Alerts" component={AlertsScreen} />
          <Tab.Screen name="Settings" component={SettingsStack} options={{ headerShown: false }} />
        </Tab.Navigator>
      </NavigationContainer>
    </InventoryProvider>
  );
}
