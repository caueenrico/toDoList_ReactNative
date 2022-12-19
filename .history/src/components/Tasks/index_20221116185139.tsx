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

  

  return (
    <View style={styles.container }>
      


      <View style={styles.containerText}>


        {/* <Text style={<BouncyCheckbox /> ? styles.taskText : styles.checou }>
          {text}
        </Text> */}
      </View>

      <TouchableOpacity style={styles.button} onPress={removerTarefa}>
        <Trash size={24} color='#808080'  />
      </TouchableOpacity>
    </View>
  );
}
