import { Image, Text, View } from "react-native";

import { styles } from "./styles";

export function Home() {
  return (
      <View style={styles.header}>
        <Image source={require("../../assets/logo.png")} />
      </View>
  );
}