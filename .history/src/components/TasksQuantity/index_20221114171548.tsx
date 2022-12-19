import { Text, View } from "react-native";
import { styles } from "./styles";

export function TasksQuantity(){
  return(
    <>
      <View>
      <Text style={styles.create}>Criadas</Text>
      </View>
      <Text style={styles.conclued}>Concluidas</Text>
    </>
  )
}