import { StatusBar } from 'react-native';
import { Home } from './src/screens/home/Home';
import {
  useFonts,
  
} from '@expo-google-fonts/inter'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
  })

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

