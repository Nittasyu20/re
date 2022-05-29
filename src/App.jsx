import "./styles.css";
import React, { useState } from 'react';

export const App = () => {
  const [incompleteTodos, setIncompleteTodo] = useState(['todo11','todo22'])
  const [completeTodos, setCompleteTodo] = useState(['todo1','todo2'])
  const [todoText, setTodoText] = useState('')

  const onChangeTodoText=(event)=>{
    setTodoText(event.target.value)
  }

  const onClickAdd = () =>{
    console.log(todoText);
    const newTodos = [...incompleteTodos, todoText]
    setIncompleteTodo(newTodos)
    setTodoText('')
  }

  const onClickDelete = (index) =>{
    const newTodos =[...incompleteTodos]
    newTodos.splice(index, 1)
    setIncompleteTodo(newTodos)
    console.log(newTodos)
  }

  const onClickComplete=(index)=>{
    const newIncompleteTodos =[...incompleteTodos]
    newIncompleteTodos.splice(index, 1)
    const newTodos = [...completeTodos, incompleteTodos[index]]
    setCompleteTodo(newTodos)
    setIncompleteTodo(newIncompleteTodos)
  }

  const onClickBack=(index)=>{
    const newCompleteTodos =[...completeTodos]
    newCompleteTodos.splice(index, 1)
    const newTodos=[...incompleteTodos, completeTodos[index]]
    setCompleteTodo(newCompleteTodos)
    setIncompleteTodo(newTodos)
  }

  return (
    <>
    <div className="input-area">
      <input placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText} ></input>
      <button onClick={onClickAdd}>追加</button>
    </div>
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
      {incompleteTodos.map((todo, index)=>{
        return (
          <div key={todo} className="list-row">
          <li>{todo}</li>
          <button onClick={()=>onClickComplete(index, todo)}>完了</button>
          <button onClick={() => onClickDelete(index)}>削除</button>
        </div>
        )
      })}
      </ul>
    </div>
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
      {completeTodos.map((todo, index)=>{
        return(
          <div key={todo} className="list-row">
            <li>{todo}</li>
            <button onClick={()=>onClickBack(index)}>戻す</button>
          </div>
        )
      })}
        
      </ul>
    </div>
    </>
  );
}
