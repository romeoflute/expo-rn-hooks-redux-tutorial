import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import ViewNotesStackNavigator from './src/navigation/ViewNotesStackNavigator';
import { Provider as StoreProvider } from 'react-redux'
import store from './src/redux/store'

export default function App() {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <ViewNotesStackNavigator />
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  );
}


