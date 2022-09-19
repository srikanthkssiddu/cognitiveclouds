import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  
  const [CountryName, setCountryName] = useState('');
  const navigation = useNavigation();
  const getCuntryName = () => {
    navigation.navigate('CountryDetail', {
      paramsKey:CountryName,
    });
  };
 

  return (
    <View style={styles.container}>

      <Text style={styles.title} >Weather App</Text>
      <TextInput 
        placeholder='Enter Country Name' 
        style={styles.input}
        onChangeText={(text) => setCountryName(text)} />

        <Button
          title="Submit"
          color='#000080'
          disabled={CountryName===''}
          onPress={getCuntryName}
          
        />
        
    </View>
   
  );
}
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
  title: {
    fontSize: 25,
    fontWeight: "200",

  }
});



