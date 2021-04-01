import React from 'react';
import { Provider } from 'react-redux'
import { AuthProvider } from './context/authContext';
import AppNavigator from './navigation/AppNavigator';
import store from './store/store';

export default function App() {

  return (
    <Provider store={store}>
    <AuthProvider>
        <AppNavigator />
    </AuthProvider>
    </Provider>
  );
};
