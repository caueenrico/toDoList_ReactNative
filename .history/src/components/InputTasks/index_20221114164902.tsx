import { View } from "react-native";

export function InputTaks(){
  return(
    <>
      <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={"#6b6b6b"}
          />
          
          <TouchableOpacity style={styles.button}>
            <Image source={require("../../assets/plus.png")} />
          </TouchableOpacity>
    </>
  )
}


