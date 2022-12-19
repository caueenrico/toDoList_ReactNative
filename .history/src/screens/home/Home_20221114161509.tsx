import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

export function Home() {
  return (
    <>
      <View style={styles.header}>
        <Image source={require("../../assets/logoToDo.png")} 
        />
      </View>

      <View style={styles.container}> 
        <TextInput 
          style={styles.input}
        />
        <TouchableOpacity style={styles.button}> 
          <Image source={require("../../assets/plus.png")} />
        </TouchableOpacity>
      </ View>

    </>
  );
}