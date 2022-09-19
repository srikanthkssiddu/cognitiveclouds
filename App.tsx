import { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import  Home from './src/components/HomeScreen';
import App1 from './src/components/CountryDetail'; 
import App2 from './src/components/CapitalDetail';
  
const Stack = createNativeStackNavigator();
  
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: '#fff',
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CountryDetail" component={App1} />
        <Stack.Screen name="CapitalDetail" component={App2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;