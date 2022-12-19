import { StatusBar } from 'react-native';
import { Home } from './src/screens/home/Home';

export default function App() {
  const [fonts] = useFont()

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

