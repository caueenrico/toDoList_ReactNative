import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { InputTaks } from "../../components/InputTasks";

import { styles } from "./styles";

export function Home() {
  return (
    <>
      <View style={styles.header}>
        <Image source={require("../../assets/logoToDo.png")} />
      </View>

      <View style={styles.tasksContainer}>
        <InputTaks />

        <View style={styles.tasks}>

        </View>

      </View>
    </>
  );
}
