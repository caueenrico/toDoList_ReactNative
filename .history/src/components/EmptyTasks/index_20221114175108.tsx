import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export function EmptyTasks(){
  return(
    <View>
      <Image source={require("../../assets/Clipboard.png")} />
        <Text style={{fontWeight:'bold', color}}>
          Você ainda não tem tarefas cadastradas 
        </Text>
        <Text>
        Crie tarefas e organize seus itens a fazer
        </Text>

    </View>
  )
}