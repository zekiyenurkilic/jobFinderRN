import React from 'react';
import {View, Text} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//import {connect} from 'react-redux';
import HomePageStack from './Home/HomePageStack';
import SearchPageStack from './Search/SearchPageStack';
import ProfilPageStack from './Profil/ProfilPageStack';

const Tab = createMaterialBottomTabNavigator();

const Notifications = () => {
  return (
    <View>
      <Text>Notifications</Text>
    </View>
  );
};

const Profile = () => {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
};

const BottomTabs = ({}) => {
  return (
    <Tab.Navigator
      activeColor="#ff7754"
      inactiveColor="#83829a"
      barStyle={{backgroundColor: '#312750'}}>
      <Tab.Screen
        name="HomePageStack"
        component={HomePageStack}
        options={{
          tabBarLabel: 'Anasayfa',

          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="home-variant-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchPageStack}
        options={{
          tabBarLabel: 'Search',

          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="magnify" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profil"
        component={ProfilPageStack}
        options={{
          tabBarLabel: 'Profil',

          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const mapStateToProps = (state) => ({});

export default BottomTabs;
