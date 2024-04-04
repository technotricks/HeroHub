import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {NavigationContainer} from '@react-navigation/native';

import {CharacterList, CharacterDetail, FavouriteList} from '@/screens';

import type {ApplicationStackParamList} from '@/types/navigation';

const Stack = createStackNavigator<ApplicationStackParamList>();

const Tab = createMaterialBottomTabNavigator<ApplicationStackParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="CharacterList" component={CharacterList} />
      <Tab.Screen name="FavouriteList" component={FavouriteList} />
    </Tab.Navigator>
  );
};

function ApplicationNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen name="CharacterDetail" component={CharacterDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ApplicationNavigator;
