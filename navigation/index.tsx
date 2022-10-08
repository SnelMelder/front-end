/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Pressable } from 'react-native';
import { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import ReportScreen from '../screens/ReportScreen';
import { RootStackParamList, RootTabParamList } from '../types';
import HomeScreen from '../screens/HomeScreen';
import NotificationScreen from '../screens/NotificationScreen';
import SettingsScreen from '../screens/SettingsScreen';
import LoginScreen from '../screens/LoginScreen';
import COLORS from '../constants/Colors';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: COLORS.primary500,
    background: COLORS.white,
  },
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const BottomTab = createBottomTabNavigator<RootTabParamList>();

const TabBarIcon = (props: { name: React.ComponentProps<typeof FontAwesome>['name']; color: string }) => (
  <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />
);

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="TabHome"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <BottomTab.Screen
        name="TabHome"
        component={HomeScreen}
        options={{
          title: 'Hoofdscherm',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabNotification"
        component={NotificationScreen}
        options={{
          title: 'Notificaties',
          tabBarIcon: ({ color }) => <TabBarIcon name="bell" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabSettings"
        component={SettingsScreen}
        options={{
          title: 'Instellingen',
          tabBarIcon: ({ color }) => <TabBarIcon name="gear" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
};

const Navigation = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          // User is signed in
          <>
            <Stack.Screen name="Root" component={BottomTabNavigator} />
            <Stack.Screen name="ReportForm" component={ReportScreen} />
          </>
        ) : (
          // User is not signed in
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
