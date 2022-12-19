import { Text, View } from "react-native";
import { styles } from "./styles";

export function Tasks(){
  return(
    <View style={styles.container}>
      <Text>Tasks</Text>
      <Image source={require("../../assets/trash.png")} />
    </View>
  )
}