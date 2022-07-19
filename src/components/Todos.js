import React, { useEffect, useRef, useState } from 'react'

const Todos = ({
  todos, deleteItem
}) => {

  const [nameStatus, setNameStatus] = useState("A-Z")
  const [status, setStatus] = useState("A-Z")
  const [list, setList] = useState(todos)
  const inputRef = useRef()
  const selectRef = useRef()

  const sort = (value) => {
    if (value === 'name') {
      if (nameStatus === 'A-Z') {
        setNameStatus('Z-A')
        list.sort((a, b) => {
          if (a.name > b.name) {
            return -1;
          }
          if (!(a.name > b.name)) {

            return 1
          }
          return 0
        })

      }
      else {
        setNameStatus('A-Z')
        list.sort((a, b) => {
          if (b.name > a.name) {
            return -1;
          }
          if (!(b.name > b.name)) {
            return 1
          }
          return 0
        })

      }
    }
    else if (value === "status") {
      if (status === 'A-Z') {
        setStatus('Z-A')

        list.sort((a, b) => {
          if (a.status > b.status) {

            return -1;
          }
          if (!(a.status > b.status)) {
            return 1
          }
          return 0
        })

      }
      else {
        setStatus('A-Z')
        list.sort((a, b) => {
          if (b.status > a.status) {
            return -1;
          }
          if (!(b.status > b.status)) {
            return 1
          }
          return 0
        })

      }
    }

  }
  const reset = () => {
    setList(todos)
  }

  useEffect(() => {
    setList(todos)
  }, [todos])

  const inputChange = () => {
    if (inputRef.current.value) {
      let searchName = inputRef.current.value.toLowerCase().trim()
      let filtred = todos.filter(item => item.name.toLowerCase().trim().includes(searchName))

      setList([...filtred])
    } else {
      setList(todos)
      console.log("0 ladım ");
    }


  }
  const ChangeSelect = () => {
    console.log(list);
    if (selectRef.current.value) {
      let filtred = todos.filter(item => item.status === selectRef.current.value)
      setList([...filtred])
      console.log(filtred);
    } else {
      setList(todos)
    }
  }


  return (
    <>
      <ul className='list'>

        <div>
          <input type="text" ref={inputRef} onChange={inputChange} />
          <select onChange={ChangeSelect} ref={selectRef}>
            <option value="">Seç</option>
            <option value="1">birincil</option>
            <option value="2">ikincil</option>
            <option value="3">üçüncül</option>
          </select>
        </div>

        <li className='listHeader'>
          <span onClick={() => sort("name")}>İşin Adı({nameStatus})</span>
          <strong onClick={() => sort("status")}>Öncelik Sırası</strong>
          <b />
        </li>
        {
          list.map((todo, index) =>
            <li key={index}>
              <span>{todo.name}</span>
              <strong className={"status" + todo.status}>
                {
                  todo.status === "1" ? "Birincil" : todo.status === "2" ? 'İkincil' : "Üçüncül"
                }</strong>
              <b onClick={() => deleteItem(index)}>Sil</b>
            </li>
          )
        }
      </ul>


    </>
  )
}

export default Todos
