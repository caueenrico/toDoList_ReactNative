import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function Tasks(){
  return(
    <View style={styles.container}>
      <Text>o</Text>
      <Text>Tasks</Text>
      <TouchableOpacity>
      <Image source={require("../../assets/trash.png")} />
      </TouchableOpacity>
    </View>
  )
}