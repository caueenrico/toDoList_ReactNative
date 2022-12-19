import { Text, View } from "react-native";
import { CountTasks } from "./components/CountTasks";
import { styles } from "./styles";

export function TasksQuantity() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.create}>Criadas</Text>
        <CountTasks numero={'4'}/>
      </View>

      <View style={styles.container}>
        <Text style={styles.conclued}>Concluidas</Text>
        <CountTasks />
      </View>
    </>
  );
}
