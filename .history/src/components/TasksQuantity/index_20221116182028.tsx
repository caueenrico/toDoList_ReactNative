import { Text, View } from "react-native";
import { CountTasks } from "./components/CountTasks";
import { styles } from "./styles";

export function TasksQuantity({quantidadeDeTasks, quantidadedeTasksConcluidas}: any) {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.create}>Criadas</Text>
        <CountTasks numero={quantidadeDeTasks}/>
      </View>

      <View style={styles.container}>
        <Text style={styles.conclued}>Concluidas</Text>
        <CountTasks numero={4}/>
      </View>
    </>
  );
}
