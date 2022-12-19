import { Text } from "react-native";
import { styles } from "./styles";

export function TasksQuantity(){
  return(
    <>
      <View
      <Text style={styles.create}>Criadas</Text>
      <Text style={styles.conclued}>Concluidas</Text>
    </>
  )
}