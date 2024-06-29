import { StatusBar } from 'expo-status-bar';
import { useEffect, useState} from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { PaperProvider, Appbar, List, Checkbox } from 'react-native-paper';


export default function App() {
  
  const DATA = [
    {
      id: "1",
      title: "Ir no mercado",
      status: false
    },
    {
      id: "2",
      title: "Estudar para n-1",
      status: false
    },
    {
      id: "3",
      title: "Lembrar de tomar água",
      status: false
    }
  ]

  return (
    <PaperProvider>
      <Appbar.Header>
        <Appbar.Content title="ToDoList" />
      </Appbar.Header>

      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <List.Item
            title={item.title}
            description="Descrição do item"
            right={()=>(
              <Checkbox
                status={item.status ? 'checked':'unchecked'}
                onPress={() =>{
                  item.status = !item.status
                  console.log(item.status);
                }}
              />
            )}
          />
        )}
      />

    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
