import React from 'react';
import { AuthProvider } from './context/authContext';
import AppNavigator from './navigation/AppNavigator';


export default function App() {

  return (
    <AuthProvider>
        <AppNavigator />
    </AuthProvider>
  );
};
