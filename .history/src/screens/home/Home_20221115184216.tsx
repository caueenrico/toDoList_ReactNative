import { useState } from "react";
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { EmptyTasks } from "../../components/EmptyTasks";
import { InputTaks } from "../../components/InputTasks";
import { Tasks } from "../../components/Tasks";
import { TasksQuantity } from "../../components/TasksQuantity";

import { styles } from "./styles";

export function Home() {
  const [tasks, setTasks] = useState<string[]>([])
  const [textTasks, setTextTasks] = useState<string>('')

  function adicionarTarefa(textTasks: string) {
    setTasks([...tasks, textTasks])
    setTextTasks('')

    consolo
  }

  return (
    <>
      <View style={styles.header}>
        <Image source={require("../../assets/logoToDo.png")} />
      </View>

      <View style={styles.tasksContainer}>
        <InputTaks 
          atualizarTarefa={setTextTasks}
          adicionarTarefa={() => adicionarTarefa(textTasks)}
          valor={textTasks}
        />
        
        <View style={styles.tasksQuantityContainer}>
          <TasksQuantity />
          
        </View>
        {/* <FlatList
          data={tasks}  
          keyExtractor={item => String(item)}
          renderItem={({item}) => <Tasks />}
          ListEmptyComponent={() => (
            <EmptyTasks />
          )}
          
        /> */}

      </View>
    </>
  );
}
