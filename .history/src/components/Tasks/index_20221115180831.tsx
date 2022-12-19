import { Image, Text, TouchableOpacity, View } from "react-native";
import { Trash } from "phosphor-react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { styles } from "./styles";

export function Tasks() {
  return (
    <View style={styles.container}>
      <BouncyCheckbox
        size={25}
        fillColor="#5E60CE"
        unfillColor="#333333"
        iconStyle={{ borderColor: "#8284FA" }}
        innerIconStyle={{ borderWidth: 2 }}
        onPress={(isChecked: boolean) => {
          console.log("I am checked?", isChecked);
        }}
       
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
        <Trash size={24} color  />
      </TouchableOpacity>
    </View>
  );
}
