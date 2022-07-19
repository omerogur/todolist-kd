import React from 'react'
import { useEffect, useRef, useState } from 'react';
import './App.css';
import AddTodos from './components/AddTodos';
import Todos from './components/Todos';
import { useAuth } from './context/AuthContext';

const List = () => {
  const inputRef = useRef();
  const [todos, setTodos] = useState([]);
  const [inputData, setInputData] = useState("");
  const [selectData, setSelectData] = useState("");
  const [status, setStatus] = useState({
    input: false,
    select: false
  });

  const { user } = useAuth()


  const addTodo = () => {
    if (!inputData && !selectData) {
      setStatus({
        input: true,
        select: true
      })
    }

    else if (!inputData) {
      setStatus({
        input: true,
        select: false
      })
    }
    else if (!selectData) {
      setStatus({
        input: false,
        select: true
      })
    }
    else if (inputData.length < 3) {
      setStatus({
        input: true,
        select: false
      })

    }
    else {
      let obj = { name: inputData, status: selectData }
      setTodos([obj, ...todos])
      console.log("test");
      setSelectData("")
      setInputData("")
      setStatus({
        input: false,
        select: false
      })
    }

  }
  //select değişiminde sadece select alerti kapat
  const changeSelect = (e) => {
    setSelectData(e.target.value)
    setStatus(status => ({
      ...status,
      select: false
    }))
  }
  //input değişiminde sadece input alerti kapat
  const changeInput = () => {
    setInputData(inputRef.current.value)
    if ((inputRef.current.value).length > 2) {
      setStatus(status => ({
        ...status,
        input: false
      }))
    }
  }


  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem(JSON.stringify(user), JSON.stringify(todos))
    }

  }, [todos])

  useEffect(() => {
    const data = localStorage.getItem(JSON.stringify(user))
    const newData = JSON.parse(data)
    setTodos(newData || []) //newDAta undef ise   [] koy 

  }, [])

  const deleteItem = (index) => {
    let newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
    if (newTodos.length === 0) { //liste boşşa  localstoragedan sil
      localStorage.removeItem(JSON.stringify(user))
    } else {

      localStorage.setItem(JSON.stringify(user), JSON.stringify(newTodos))
    }
  }
  return (
    <div className="App">

      <AddTodos
        inputRef={inputRef}
        status={status}
        inputData={inputData}
        changeInput={changeInput}
        changeSelect={changeSelect}
        selectData={selectData}
        addTodo={addTodo} />
      <Todos todos={todos} deleteItem={deleteItem} />

    </div>
  );
}

export default List
