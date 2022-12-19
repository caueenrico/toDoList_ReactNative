import { Image, View } from "react-native";

export function EmptyTasks(){
  return(
    <View>
      <Image source={require("../../assets/plus.png")} />

    </View>
  )
}