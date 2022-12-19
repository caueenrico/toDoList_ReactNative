import { useState } from "react";
import { Alert ,FlatList, Image,  View } from "react-native";
import { EmptyTasks } from "../../components/EmptyTasks";
import { InputTaks } from "../../components/InputTasks";
import { Tasks, TasksDataProps } from "../../components/Tasks";
import { TasksQuantity } from "../../components/TasksQuantity";

import { styles } from "./styles";

interface ITasksProps extends TasksDataProps {}

export function Home() {
  const [tasks, setTasks] = useState<ITasksProps[]>([])
  const [textTasks, setTextTasks] = useState<string>('')
  const [quantidadeDeTasks, setQuantidadeDeTasks] = useState<number>(0)

  function adicionarTarefa(textTasks: string & ) {

    if (textTasks === '') {
      return Alert.alert('Digite uma tarefa');
    }

    setTasks(prevtasks => [...prevtasks, {isChecked: false, text: textTasks}])
    setTextTasks('')

    setQuantidadeDeTasks(quantidadeDeTasks + 1)

    console.log(tasks)
  }

  function deletarTarefa( task: string) {
    Alert.alert('Deletar tarefa', `Tem certeza que deseja deletar essa tarefa? '${task}' `, [
      {
        text: 'Remover',
        onPress: () => {setTasks(tasks.filter(item => item.text !== task))}
      },
      {
        text: 'Cancelar',
        style: 'cancel'
      }
    ])

    
    setQuantidadeDeTasks(quantidadeDeTasks - 1)
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
            quantidadeDeTasks={quantidadeDeTasks}

          />

        </View>

        <FlatList
          data={tasks}  
          keyExtractor={item => item.text}
          renderItem={({item}) => (
            <Tasks 
              key={item.text}
              isChecked={item.isChecked}
              text={item.text} 
              removerTarefa={() => deletarTarefa(item.text)}/>
          )}
          ListEmptyComponent={() => (
            <EmptyTasks />
          )}
          
        />

      </View>
    </>
  );
}
