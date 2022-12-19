import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export function EmptyTasks() {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/Clipboard.png")} />
      <Text style={styles.firstText}
      >
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text
        style={{
          fontFamily: "Inter_400Regular",
          color: "#808080",
          fontSize: 14,
        }}
      >
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}
