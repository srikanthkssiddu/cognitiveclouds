import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';


    
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
    tinyLogo: {
      width: 100,
      height: 100,
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
      
    },
    title1: {
      
      fontSize: 30,
      padding:70,
      alignItems: 'center',
      justifyContent: 'center',
      
    }
  });



export default function App2() {
    const [capital, setCapital] = useState('');
    const [temperature, setTemperature] = useState([]);
    const [precip, setPrecip] = useState([]);
    const [wind_speed, setWind_speed] = useState([]);
    const [weather_icons, setWeather_icons] = useState([]);
    

    
    const route = useRoute();
    

    
    const fetchCapital = () => {
        var url = "http://api.weatherstack.com/current?access_key=60774ad1b455f3cff7d3f8a273f488f5&query=" + String(route.params.paramsKey)
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            setCapital(capital);
            setWeather_icons(data['current']['weather_icons'][0])
            setTemperature(data['current']['temperature']);
            setPrecip(data['current']['precip']);
            setWind_speed(data['current']['wind_speed']);
            
        });
        
    };
    useEffect(() => {
      fetchCapital();
    }, [])
    
    return (
      <View style ={styles.container}>
        
        <Text style={styles.title1}>Weather Details</Text>
        
        <Image style={styles.tinyLogo}  source={{ uri:String(weather_icons+' '), }} />

        
        <Text style={styles.title}>Temperature : {temperature}  deg c</Text>
        
        <Text style={styles.title}>precipitation : {precip}  %</Text>
        
        <Text style={styles.title}>wind speed : {wind_speed}  km/h</Text>

        
        
        
      </View>
    );
}



