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
          placeholder='Adicione uma nova tarefa'
          placeholderTextColor={"#6b6b6b"}
        />
        <TouchableOpacity style={styles.button}> 
          <Image source={require("../../assets/plus.png")} />
        </TouchableOpacity>
      </ View>

      <View style={styles.tasks}>
        <Text></Text>
      </View>

    </>
  );
}