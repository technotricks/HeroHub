import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {NavigationContainer} from '@react-navigation/native';

import {CharacterList, CharacterDetail, FavouriteList} from '@/screens';

import type {ApplicationStackParamList} from '@/types/navigation';

const Stack = createStackNavigator<ApplicationStackParamList>();

const Tab = createMaterialBottomTabNavigator<ApplicationStackParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="CharacterList"
      activeColor="#e91e63"
      barStyle={{backgroundColor: 'tomato'}}>
      <Tab.Screen
        name="CharacterList"
        component={CharacterList}
        options={{
          tabBarLabel: 'Characters',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="FavouriteList"
        component={FavouriteList}
        options={{
          tabBarLabel: 'Favourite Characters',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
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
        <Stack.Screen name="CharacterDetail" component={CharacterDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ApplicationNavigator;
