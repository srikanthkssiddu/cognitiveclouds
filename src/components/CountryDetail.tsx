import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from "@react-navigation/native";


    
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
    tinyLogo: {
      width: 300,
      height: 150,
    },
    logo: {
      width: 66,
      height: 58,
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
      padding: 10
      
    }
  });



export default function App1() {
    const [country, setCountry] = useState('');
    const [countries, setCountries] = useState([]);
    const [Flag, setFlag] = useState([]);
    const [Pop, setPop] = useState([]);
    const [lat, setLat] = useState([]);

    
    const route = useRoute();
    const navigation = useNavigation();
    const getCapitalWeather = () => {
      navigation.navigate('CapitalDetail', {
        paramsKey:countries,
      });
    };

    
    const fetchCountries = () => {
        var url = "https://restcountries.com/v3.1/name/" + String(route.params.paramsKey)
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            setCountries(data[0]["capital"]);
            setFlag(data[0]["flags"]["png"])
            setPop(data[0]["population"])
            setLat(data[0]["latlng"])
            
        });
        
    };
    useEffect(() => {
      fetchCountries();
    }, [])
    
    return (
        <View style ={styles.container}>
        
        {/* <TextInput
            style={styles.input}
            placeholder="Enter Country Name"
            onChangeText={(text) => setCountry(text)}
        /> */}
        {/* <Button 
          title="Submit"
          color='#00008b'
          onPress={fetchCountries} /> */}

        <Text style={styles.title}>Country Details</Text>
        
        <Image style={styles.tinyLogo}  source={{ uri:String(Flag+' '), }} />
        
        <Text style={styles.title}>Capital : {countries}</Text>
        
        <Text style={styles.title}>Country's Population : {Pop}</Text>
        
        <Text style={styles.title}>Latitude : {lat[0]} deg</Text>
        
        <Text style={styles.title}>Longitude : {lat[1]} deg</Text>

        <Button 
          title="Capital weather"
          color='#00008b'
          onPress ={getCapitalWeather} 
        />


       
        </View>
    );
}