import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container:{
    backgroundColor: '#333333',
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 12,

    nthChild (2)
  },
  taskText:{
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#FFFFFF',
  },
  containerText:{
    flex:1,
    marginHorizontal: 8,
  },
  button:{
    height: 32,
    width: 32,
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
    height: 14,
    width: 13,
  }

  
})