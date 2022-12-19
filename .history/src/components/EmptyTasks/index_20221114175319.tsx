import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export function EmptyTasks(){
  return(
    <View style={styles.container}>
      <Image source={require("../../assets/Clipboard.png")} />
        <Text style={{fontWeight:'bold', color:'#808080', fontSize: 14}}>
          Você ainda não tem tarefas cadastradas 
        </Text>
        <Text style={{color:'#808080', fontSize: 14}}>
        Crie tarefas e organize seus itens a fazer
        </Text>

    </View>
  )
}