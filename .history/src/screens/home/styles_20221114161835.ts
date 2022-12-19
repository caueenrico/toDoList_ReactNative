import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 173,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flexDirection: "row",
    gap: 4
  },
  input: {
    flex:1,
    backgroundColor: '#262626',
    height: 54,
    borderRadius: 8,
    borderColor:'#0D0D0D',
    borderWidth: 1,
    width: '100%',
  },
  button:{
    width: 52,
    height: 52,
    backgroundColor: '#1E6F9F',
    borderRadius: 6,
    alignItems: "center",
    justifyContent: 'center'
  }

})