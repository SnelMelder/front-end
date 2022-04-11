/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    NavigationContainer,
    DefaultTheme,
    DarkTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import ReportScreen from '../screens/ReportScreen';
import {
    RootStackParamList,
    RootTabParamList,
    RootTabScreenProps,
} from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import HomeScreen from '../screens/HomeScreen';
import NotificationScreen from '../screens/NotificationScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();
const BottomTab = createBottomTabNavigator<RootTabParamList>();

const TabBarIcon = (props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) => {
    return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
};

const BottomTabNavigator = () => {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            initialRouteName="TabHome"
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme].tint,
                tabBarShowLabel: false,
            }}
        >
            <BottomTab.Screen
                name="TabHome"
                component={HomeScreen}
                options={{
                    title: 'Hoofdscherm',
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="home" color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="TabReport"
                component={ReportScreen}
                options={({ navigation }: RootTabScreenProps<'TabReport'>) => ({
                    title: 'Melding',
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="plus" color={color} />
                    ),
                    headerRight: () => (
                        <Pressable
                            // onPress={() => navigation.navigate('Modal')}
                            onPress={() =>
                                navigation.navigate('Root', {
                                    screen: 'TabSettings',
                                })
                            }
                            style={({ pressed }) => ({
                                opacity: pressed ? 0.5 : 1,
                            })}
                        >
                            <FontAwesome
                                name="info-circle"
                                size={25}
                                color={Colors[colorScheme].text}
                                style={{ marginRight: 15 }}
                            />
                        </Pressable>
                    ),
                })}
            />
            <BottomTab.Screen
                name="TabNotification"
                component={NotificationScreen}
                options={{
                    title: 'Notificaties',
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="bell" color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="TabSettings"
                component={SettingsScreen}
                options={{
                    title: 'Instellingen',
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="gear" color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="TabThree"
                component={TabThreeScreen}
                options={{
                    title: 'Date-time',
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="calendar" color={color} />
                    ),
                }}
            />
        </BottomTab.Navigator>
    );
};

const RootNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Root"
                component={BottomTabNavigator}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="NotFound"
                component={NotFoundScreen}
                options={{ title: 'Oops!' }}
            />
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
                <Stack.Screen name="Modal" component={ModalScreen} />
            </Stack.Group>
        </Stack.Navigator>
    );
};

const Navigation = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
        >
            <RootNavigator />
        </NavigationContainer>
    );
};

export default Navigation;
