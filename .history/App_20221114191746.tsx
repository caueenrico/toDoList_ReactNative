import { StatusBar } from 'react-native';
import { Home } from './src/screens/home/Home';
import {
  useFonts
} 

export default function App() {
  const [fontsLoaded] = useFont()

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

