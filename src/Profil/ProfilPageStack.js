import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Appbar, Avatar} from 'react-native-paper';
import {DefaultTheme} from 'react-native-paper';
import Profil from './Profil';
import Colors from '../Colors';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};

const Header = ({scene, previous, navigation}) => {
  const {options} = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  return (
    <Appbar.Header theme={{colors: {primary: theme.colors.surface}}}>
      <Appbar.BackAction color={Colors.textColor} onPress={navigation.goBack} />
      <Appbar.Content
        titleStyle={{
          color: Colors.textColor,
          fontSize: 18,
          letterSpacing: 0.7,
        }}
        title={previous ? title : 'Search'}
      />
    </Appbar.Header>
  );
};

const ProfilPageStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      headerMode="screen"
      screenOptions={{
        header: ({scene, previous, navigation}) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        ),
      }}>
      <Stack.Screen
        name="Profil"
        component={Profil}
        options={{headerTitle: 'Profil', headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default ProfilPageStack;
