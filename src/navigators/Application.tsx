import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {NavigationContainer} from '@react-navigation/native';

import {CharacterList, CharacterDetail, FavouriteList} from '@/screens';

import type {ApplicationStackParamList} from '@/types/navigation';

export const Stack = createStackNavigator<ApplicationStackParamList>();

const Tab = createMaterialBottomTabNavigator<ApplicationStackParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="CharacterList"
      activeColor="#2CB9B0"
      inactiveColor="#FE5E33"
      barStyle={{backgroundColor: '#111747'}}>
      <Tab.Screen
        name="CharacterList"
        component={CharacterList}
        options={{
          tabBarLabel: 'Characters',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="format-columns"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="FavouriteList"
        component={FavouriteList}
        options={{
          tabBarLabel: 'Favourite',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="heart" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

function ApplicationNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainTab"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CharacterDetail"
          component={CharacterDetail}
          options={{headerBackTitle: 'Back', title: 'Character Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ApplicationNavigator;
