import { Image, Text, View } from "react-native";

export function EmptyTasks(){
  return(
    <View>
      <Image source={require("../../assets/Clipboard.png")} />
      <Text>
        <strong>Você ainda não tem tarefas cadastradas</strong><br />
      </Text>

    </View>
  )
}