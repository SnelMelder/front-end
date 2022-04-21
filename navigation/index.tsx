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
import { ColorSchemeName, Pressable, Text } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import NotificationScreen from '../screens/NotificationScreen';
import {
    RootStackParamList,
    RootTabParamList,
    RootTabScreenProps,
} from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { FALSE } from 'sass';

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
            initialRouteName="TabOne"
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme].tint,
            }}
        >
            <BottomTab.Screen
                name="TabOne"
                component={TabOneScreen}
                options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
                    title: 'Tab One',
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="code" color={color} />
                    ),
                    headerRight: () => (
                        <Pressable
                            onPress={() => navigation.navigate('Modal')}
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
                name="Home"
                component={TabTwoScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="home" color={color} />
                    )
                }}
            />
            <BottomTab.Screen
                name="Add"
                component={TabTwoScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="plus" color={color} />
                    )
                }}
            />
            <BottomTab.Screen
                name="Notifications"
                component={NotificationScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="bell" color={color} />
                    )
                }}
            />
            <BottomTab.Screen
                name="Settings"
                component={TabTwoScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="cog" color={color} />
                    )
                }}
            />
            {/* <BottomTab.Screen
                name="TabTwo"
                component={TabTwoScreen}
                options={{
                    title: 'Tab Two',
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="code" color={color} />
                    ),
                }}
            /> */}
            
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
