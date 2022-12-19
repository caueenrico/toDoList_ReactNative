import { Text, View } from "react-native";
import { CountTasks } from "./components/CountTasks";
import { styles } from "./styles";

export function TasksQuantity() {
  return (
    <>
      <View style=>
        <Text style={styles.create}>Criadas</Text>
        <CountTasks/>
      </View>

      <View>
        <Text style={styles.conclued}>Concluidas</Text>
        <CountTasks/>
      </View>
    </>
  );
}
