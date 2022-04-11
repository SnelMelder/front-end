/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
    prefixes: [Linking.makeUrl('/')],
    config: {
        screens: {
            Root: {
                screens: {
                    TabHome: {
                        screens: {
                            HomeScreen: 'home',
                        },
                    },
                    TabReport: {
                        screens: {
                            ReportScreen: 'report',
                        },
                    },
                    TabNotification: {
                        screens: {
                            NotificationScreen: 'notification',
                        },
                    },
                    TabSettings: {
                        screens: {
                            SettingsScreen: 'settings',
<<<<<<< HEAD
                        },
                    },
                    TabThree: {
                        screens: {
                            TabThreeScreen: 'three',
=======
>>>>>>> development
                        },
                    },
                },
            },
            Modal: 'modal',
            NotFound: '*',
        },
    },
};

export default linking;
