import { useState } from "react";
import { Alert ,FlatList, Image,  View } from "react-native";
import { EmptyTasks } from "../../components/EmptyTasks";
import { InputTaks } from "../../components/InputTasks";
import { Tasks } from "../../components/Tasks";
import { TasksQuantity } from "../../components/TasksQuantity";

import { styles } from "./styles";

export function Home() {
  const [tasks, setTasks] = useState<string[]>([])
  const [textTasks, setTextTasks] = useState<string>('')

  function adicionarTarefa(textTasks: string) {

    if (textTasks === '') {
      return Alert.alert('Digite uma tarefa');
    }

    setTasks([...tasks, textTasks])
    setTextTasks('')

    console.log(tasks)
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
        <FlatList
          data={tasks}  
          keyExtractor={item => item}
          renderItem={({item}) => (
            <Tasks te/>
          )}
          ListEmptyComponent={() => (
            <EmptyTasks />
          )}
          
        />

      </View>
    </>
  );
}
