

import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { View, StyleSheet, Text, TextInput, ScrollView, TouchableOpacity, Alert, SafeAreaView } from "react-native"


export default function Todo() {


    const [search, setSearch] = useState("")
    const [todo, setTodo] = useState("");




    const [todoList, setTodoList] = useState([
        { id: "1", text: "Learn React Native Layout", completed: false },
        { id: "2", text: "Learn React Native Core Components", completed: true },
    ]);


    // console.log(search)


    const filteredTodo = todoList.filter(item => item.text.toLowerCase().includes(search.toLocaleLowerCase()));


    const addTodo = () => {
        setTodoList([
            {
                id: Date.now().toString(),
                text: todo,
                completed: false
            },
            ...todoList
        ])
        setTodo("")  }


    const deleteTodo = (id) => {
        setTodoList(todoList.filter(item => item.id !== id))
    }


    const confirmDelete = (id) => {
        Alert.alert("Delete Todo", "Are you sure you want to delete this?", [
            { text: "Cancel", style: "cancel" },
            { text: "Delete", style: "destructive", onPress: () => deleteTodo(id) }
        ])
    }


    const toggleTodo = (id) => {
        setTodoList(todoList.map(item => item.id === id ? { ...item, completed: !item.completed } : item ))
    }


    return (
        <SafeAreaView style={styles.container}>
            {/* Title */}
            <Text style={styles.title}>Todo</Text>


            {/* Search Bar */}
            <TextInput placeholder="Search todos..."
                style={styles.searchBar}
                value={search}
                onChangeText={setSearch}
            />


            {/* Todo List */}
            <ScrollView>
                                {filteredTodo.map(item => (
                    <View style={styles.todoContainer} key={item.id}>
                    <TouchableOpacity style={styles.todoTextWrapper} onPress={() => toggleTodo(item.id)}>
                        {item.completed ? <Ionicons name="checkmark-circle-outline" size={30} /> : <Ionicons name="ellipse-outline" size={30} />}
                        <Text
                            style={[styles.todoText, item.completed && { textDecorationLine: 'line-through'}]}
                            numberOfLines={1}
                            ellipsizeMode='tail'
                        >
                            {item.text}
                        </Text>
                    </TouchableOpacity>
                   
                    <TouchableOpacity onPress={() => confirmDelete(item.id)}>
                        <Ionicons name="trash-outline" size={24} color="#FF3B30" />
                    </TouchableOpacity>
                </View>
                ))}
            </ScrollView>


            <View style={styles.inputWrapper} >
                <TextInput
                    placeholder="Add todo"
                    style={styles.input}
                    value={todo}
                    onChangeText={setTodo}
                />
                <TouchableOpacity style={styles.addButton} onPress={addTodo}>
                    <Ionicons name="add-outline" size={30} color="white" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    paddingHorizontal: 20
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 25,
    color: '#1A1A1A'
  },
  searchBar: {
    backgroundColor: 'white',
    height: 50,
    borderRadius: 12,
    paddingHorizontal: 20,
    marginBottom: 20,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2
  },
  todoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2
  },
  todoTextWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 12
  },
  todoText: {
    fontSize: 16,
    color: '#333',
    flex: 1
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 20
  },
  input: {
    backgroundColor: 'white',
    height: 55,
    borderRadius: 12,
    paddingHorizontal: 20,
    flex: 1,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2
  },
  addButton: {
    height: 55,
    width: 55,
    borderRadius: 12,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#007AFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4
  }
});





