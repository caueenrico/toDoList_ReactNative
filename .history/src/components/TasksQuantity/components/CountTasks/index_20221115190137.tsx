import { Text, View } from "react-native";
import { styles } from "./styles";

export function CountTasks (numero: number) {
  return(
    <View style={styles.container}>
      <Text style={styles.count}>0</Text>
    </View>
  )
}