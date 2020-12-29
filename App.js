import React from 'react';
import { AuthProvider } from './context/authContext';
import AppNavigator from './navigation/AppNavigator';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {

  return (
    <AuthProvider>
        <AppNavigator />
    </AuthProvider>
  );
};
