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
    marginTop: 8,
    
  },
  checou:{
    textDecorationLine: 'line-through',
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#808080',
    opacity: 0.8,
    maxWidth: '95%',
  },
  taskText:{
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#FFFFFF',
    flex: 1,
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