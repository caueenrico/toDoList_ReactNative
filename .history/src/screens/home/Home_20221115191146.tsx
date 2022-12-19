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
  const [quantidadeDeTasks, setQuantidadeDeTasks] = useState<number>(0)

  function adicionarTarefa(textTasks: string) {

    if (textTasks === '') {
      return Alert.alert('Digite uma tarefa');
    }

    setTasks([...tasks, textTasks])
    setTextTasks('')

    console.log(tasks)
  }

  function observandoQuantidadeDeTasks() {
    setQuantidadeDeTasks(tasks.length)
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
          <TasksQuantity 
            observandoQuantidadeDeTasks={() => observandoQuantidadeDeTasks}
            quantidadeDeTasks={quantidadeDeTasks}
          />
        </View>

        <FlatList
          data={tasks}  
          keyExtractor={item => item}
          renderItem={({item}) => (
            <Tasks key={item} text={item} />
          )}
          ListEmptyComponent={() => (
            <EmptyTasks />
          )}
          
        />

      </View>
    </>
  );
}