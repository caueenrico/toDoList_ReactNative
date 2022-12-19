import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens/home/Home';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle='light-content'  
        backgroundColor="transparent"
        translucent
      />

     <Home/>
    </>
  );
}

