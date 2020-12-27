import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useAuthState, useAuthDispatch } from '../context/authContext';
import { checkAuth } from '../services/authService';
import SplashScreen from '../screens/authentication/SplashScreen';
import AuthNavigator from '../navigation/AuthNavigator';
import GruuvlyAppNavigator from './GruuvlyAppNavigator';


const Stack = createStackNavigator();

export default function AppNavigator() {
  const { isLoading, isSignout, userToken } = useAuthState();
  const dispatch = useAuthDispatch();

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let token = null;
      try {
        const user = await checkAuth();
        const { jwtToken } = user;
        token = jwtToken;
      } catch (e) {
        console.log('error', e);
      }
      dispatch({ type: 'RESTORE_TOKEN', token });
    };

    bootstrapAsync();
  }, [dispatch]);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          {isLoading && (
            // We haven't finished checking for the token yet
            <Stack.Screen name="Splash" component={SplashScreen} />
          )}
          {!isLoading && userToken == null ? (
            // No token found, user isn't signed in
            <Stack.Screen
            style={styles.screen}
              isSignout={isSignout}
              name="Auth"
              component={AuthNavigator}
            />
           
          ) : (
            // User is signed in
            <Stack.Screen name="Main" component={GruuvlyAppNavigator} />
          )}
         </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1, 
  }
});