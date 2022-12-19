import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { EmptyTasks } from "../../components/EmptyTasks";
import { InputTaks } from "../../components/InputTasks";
import { Tasks } from "../../components/Tasks";
import { TasksQuantity } from "../../components/TasksQuantity";

import { styles } from "./styles";

export function Home() {
  return (
    <>
      <View style={styles.header}>
        <Image source={require("../../assets/logoToDo.png")} />
      </View>

      <View style={styles.tasksContainer}>
        <InputTaks />

        <View style={styles.tasksQuantityContainer}>
          <TasksQuantity />
          
        </View>
        <FlatList
          data={[12,2,2,2,]}  
          keyExtractor={item => String(item)}
          renderItem={({item}) => <Tasks />}
          ListEmptyComponent={() => (
            <EmptyTasks />
          )}
        />

          



      
        
        

      </View>
    </>
  );
}
