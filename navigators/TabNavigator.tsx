import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';

const BottomTab = createMaterialBottomTabNavigator();

const TabNavigator = () => (
  <BottomTab.Navigator>
    <BottomTab.Screen
      name="TabHome"
      component={HomeScreen}
      options={{
        title: 'Home',
        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" color={color} size={24} />,
      }}
    />
    <BottomTab.Screen
      name="TabSettings"
      component={SettingsScreen}
      options={{
        title: 'Instellingen',
        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="cog" color={color} size={24} />,
      }}
    />
  </BottomTab.Navigator>
);

export default TabNavigator;
