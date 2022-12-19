import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function InputTaks({atualizarTarefa}: any) {
  return(
    <>
      <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={"#6b6b6b"}
            onChangeText={atualizarTarefa}
          />
          
          <TouchableOpacity style={styles.button} onPress={() => console.log('ck')}>
            <Image source={require("../../assets/plus.png")} />
          </TouchableOpacity>
       </ View>
    </>
  )
}


