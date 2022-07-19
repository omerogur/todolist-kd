import React from 'react'

const AddTodos = ({
    inputRef,
    status,
    inputData,
    changeInput,
    changeSelect,
    selectData,
    addTodo
}) => {
    return (
        <>

            <div className='header'>
                <input type="text"
                    ref={inputRef}
                    className={status.input ? 'alertInput' : ""}
                    value={inputData}
                    onChange={changeInput}
                    placeholder="TODO"
                />
                <select value={selectData}
                    className={status.select ? 'alert' : ""}
                    onChange={e => changeSelect(e)}>
                    <option value="">Seç</option>
                    <option value="1">birincil</option>
                    <option value="2">ikincil</option>
                    <option value="3">üçüncül</option>
                </select>
                <button onClick={addTodo}>Ekle</button>

            </div>

        </>
    )
}

export default AddTodos
