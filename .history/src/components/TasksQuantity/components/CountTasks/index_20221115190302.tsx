import { Text, View } from "react-native";
import { styles } from "./styles";

export function CountTasks (numero: string) {
  return(
    <View style={styles.container}>
      <Text style={styles.count}>numero</Text>
    </View>
  )
}