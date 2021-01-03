import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Appbar, Avatar} from 'react-native-paper';
import {DefaultTheme} from 'react-native-paper';
import HomePage from './HomePage';
import JobDetail from '../JobDetail/JobDetail';

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
      {previous ? (
        <Appbar.BackAction style={{zIndex: 9999}} onPress={navigation.goBack} />
      ) : (
        <View></View>
      )}
      <Appbar.Content
        titleStyle={{
          color: '#2F4858',
          fontSize: 18,
          letterSpacing: 0.7,
        }}
        style={{
          alignItems: 'center',
        }}
        title={previous ? title : 'JOB FINDER'}
      />
    </Appbar.Header>
  );
};

const HomePageStack = () => {
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
        name="HomePage"
        component={HomePage}
        options={{headerTitle: 'Home', headerShown: false}}
      />
      <Stack.Screen
        name="JobDetail"
        component={JobDetail}
        options={{headerTitle: 'JobDetail', headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HomePageStack;
