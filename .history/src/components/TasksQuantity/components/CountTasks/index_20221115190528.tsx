import { Text, View } from "react-native";
import { styles } from "./styles";

export function CountTasks ({}) {
  return(
    <View style={styles.container}>
      <Text style={styles.count}></Text>
    </View>
  )
}