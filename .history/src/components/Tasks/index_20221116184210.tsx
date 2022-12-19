import { Image, Text, TouchableOpacity, View } from "react-native";
import { Trash } from "phosphor-react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { styles } from "./styles";
import { useState } from "react";

export interface TasksDataProps {
  text: string;
  removerTarefa?: () => void;
  isChecked?: () => void;
};

export function Tasks({text, removerTarefa,isChecked}: TasksDataProps) {

  const [isCheckedState, setIsCheckedState] = useState(false);

  return (
    <View style={styles.container }>
      <BouncyCheckbox
        size={25}
        fillColor="#5E60CE"
        unfillColor="#333333"
        iconStyle={{ borderColor: "#8284FA" }}
        innerIconStyle={{ borderWidth: 2 }}
        onPress={ 
          isChecked
          
          }
        
      />


      <View style={styles.containerText}>
        <Text style={ isCheckedState ?  styles.checou : styles.taskText}>
          {text}
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={removerTarefa}>
        <Trash size={24} color='#808080'  />
      </TouchableOpacity>
    </View>
  );
}
