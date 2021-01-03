import 'react-native-gesture-handler';
import * as React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import BottomTabs from './src/BottomTabs';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <BottomTabs />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};

export default App;
