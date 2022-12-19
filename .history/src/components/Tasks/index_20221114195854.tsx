import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function Tasks() {
  return (
    <View style={styles.container}>
      <Text>o</Text>

      <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum earum et itaque obcaecati pariatur dolorem ea saepe ipsum inventore! Quaerat maxime eum eius itaque tenetur qui, magni quasi? Id, similique?</Text>

      <TouchableOpacity>
        <Image source={require("../../assets/trash.png")} />
      </TouchableOpacity>
    </View>
  );
}
