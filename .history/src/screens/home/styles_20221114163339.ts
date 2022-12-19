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
    marginTop: -30,
    flexDirection: "row",
    marginHorizontal:24,
    alignItems: 'center'
  },
  input: {
    flex: 1,
    backgroundColor: '#262626',
    height: 54,
    borderRadius: 8,
    borderColor:'#0D0D0D',
    borderWidth: 1,
    padding: 16,
    color: '#fff'
    
  },
  button:{
    width: 52,
    height: 52,
    backgroundColor: '#1E6F9F',
    borderRadius: 6,
    alignItems: "center",
    justifyContent: 'center',
    marginLeft:4,
  },
  tasks:{
    backgroundColor: "#6b6b6b",
    width: '100%'
  }

})