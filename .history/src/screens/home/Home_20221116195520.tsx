import { useState } from "react";
import { Alert, FlatList, Image, View } from "react-native";
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
  const [tasks, setTasks] = useState<ITasksProps[]>([]);
  const [textTasks, setTextTasks] = useState<string>("");
  const [quantidadeDeTasks, setQuantidadeDeTasks] = useState<number>(0);
  const [quantidadedeTasksConcluidas, setQuantidadeDeTasksConcluidas] =
    useState<number>(0);

  function adicionarTarefa({ text }: ITasksProps) {
    const data = {
      text,
      isChecked: false,
    };

    if (textTasks === "") {
      return Alert.alert("Digite uma tarefa");
    } else if (textTasks.length < 3) {
      return Alert.alert("Digite uma tarefa maior que 3 caracteres");
    } else if (textTasks.length > 20) {
      return Alert.alert("Digite uma tarefa menor que 20 caracteres");
    }

    setTasks((oldState) => [...oldState, data]);
    setQuantidadeDeTasks(quantidadeDeTasks + 1);

    setTextTasks("");
  }

  function checarTarefa({ text }: ITasksProps) {
    tasks.map((item) => {
      if (item.text === text) {
        item.isChecked = !item.isChecked;
        setTasks([...tasks]);

        if (item.isChecked) {
          setQuantidadeDeTasksConcluidas(quantidadedeTasksConcluidas + 1);
        } else {
          setQuantidadeDeTasksConcluidas(quantidadedeTasksConcluidas - 1);
        }
      }
    });

    console.log(tasks);
  }

  function deletarTarefa(task: string) {
    Alert.alert(
      "Deletar tarefa",
      `Tem certeza que deseja deletar essa tarefa? '${task}' `,
      [
        {
          text: "Remover",
          onPress: () => {
            setTasks(tasks.filter((item) => item.text !== task));
          },
        },
        {
          text: "Cancelar",
          style: "cancel",
        },
      ]
    );

    setQuantidadeDeTasks(quantidadeDeTasks - 1);
  }

  return (
    <>
      <View style={styles.header}>
        <Image source={require("../../assets/logoToDo.png")} />
      </View>

      <View style={styles.tasksContainer}>
        <InputTaks
          atualizarTarefa={setTextTasks}
          adicionarTarefa={() => adicionarTarefa({ text: textTasks })}
          valor={textTasks}
        />

        <View style={styles.tasksQuantityContainer}>
          <TasksQuantity
            quantidadeDeTasks={quantidadeDeTasks}
            quantidadedeTasksConcluidas={quantidadedeTasksConcluidas}
          />
        </View>

        <FlatList
          data={tasks}
          keyExtractor={(item) => item.text}
          renderItem={({ item }) => (
            <Tasks
              key={item.text}
              text={item.text}
              status={item.isChecked}
              removerTarefa={() => deletarTarefa(item.text)}
              isChecked={() => checarTarefa({ text: item.text })}
            />
          )}
          ListEmptyComponent={() => <EmptyTasks />}
        />
      </View>
    </>
  );
}
