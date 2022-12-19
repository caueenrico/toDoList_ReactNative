import { Text, View } from "react-native";
import { styles } from "./styles";

export function CountTasks (){
  return(
    <View style={styles.container}>
      <Text>0</Text>
    </View>
  )
}