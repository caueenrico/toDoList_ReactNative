import { useReducer, useState } from "react";
import { Alert ,FlatList, Image,  View } from "react-native";
import { EmptyTasks } from "../../components/EmptyTasks";
import { InputTaks } from "../../components/InputTasks";
import { Tasks, TasksDataProps } from "../../components/Tasks";
import { TasksQuantity } from "../../components/TasksQuantity";

import { styles } from "./styles";

interface ITasksProps {
  text: string;
  isChecked?: boolean;
}

export function Home() {
  const [tasks, setTasks] = useReducer((state: ITasksProps[], action: any) => {
    if(action.type === 'ADD_TASK') {
      return [...state, action.payload];
    } else if(action.type === 'REMOVE_TASK') {
      return state.filter((task: ITasksProps) => task.text !== action.payload);
    } else if(action.type === 'CHECK_TASK') {
      return state.map((task: ITasksProps) => {
        if(task.text === action.payload) {
          return {
            ...task,
            isChecked: !task.isChecked
          }

    return state;
  }, []);
  const [textTasks, setTextTasks] = useState<string>('')
  const [quantidadeDeTasks, setQuantidadeDeTasks] = useState<number>(0)
  const [isChecked, setIsChecked] = useState<boolean>(false)
  

  function adicionarTarefa({text}: ITasksProps) {

    if (textTasks === '') {
      return Alert.alert('Digite uma tarefa');
    }
    setTasks({
      type: 'ADD_TASK',
      text: textTasks,
    });

    setTextTasks('')

    setQuantidadeDeTasks(quantidadeDeTasks + 1)

    console.log(tasks)
  }
    
  function deletarTarefa( task: string) {
    const newTasks = tasks.filter((item) => item.text !== task);

    Alert.alert('Deletar tarefa', `Tem certeza que deseja deletar essa tarefa? '${task}' `, [
      {
        text: 'Remover',
        onPress: () => {setTasks(
          {
            type: 'REMOVE_TASK',
            newTasks
          }
        )}
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
          adicionarTarefa={() => adicionarTarefa({text: textTasks})}
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
              text={item.text}
              removerTarefa={() => deletarTarefa(item.text)}
              />
        
          )}
          ListEmptyComponent={() => (
            <EmptyTasks />
          )}
          
        />

      </View>
    </>
  );
}