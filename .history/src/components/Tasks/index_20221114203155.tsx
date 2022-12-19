import { Image, Text, TouchableOpacity, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { styles } from "./styles";

export function Tasks() {
  return (
    <View style={styles.container}>
      <BouncyCheckbox
        size={25}
        fillColor="red"
        unfillColor=""
        iconStyle={{ borderColor: "red" }}
        innerIconStyle={{ borderWidth: 2 }}
        onPress={(isChecked: boolean) => {}}
      />

      <View style={styles.containerText}>
        <Text style={styles.taskText}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          earum et itaque Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Nostrum earum et itaque Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Nostrum earum et itaque Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Nostrum earum et itaque
        </Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Image source={require("../../assets/trash.png")} />
      </TouchableOpacity>
    </View>
  );
}
