import { Image, Text, View } from "react-native";

export function EmptyTasks(){
  return(
    <View>
      <Image source={require("../../assets/Clipboard.png")} />
        <Text style={styles{fontWeight:'bold'}}>
          Você ainda não tem tarefas cadastradas 
        </Text>
        <Text>
        Crie tarefas e organize seus itens a fazer
        </Text>

    </View>
  )
}