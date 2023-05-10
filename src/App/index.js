import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';


function App() {

  /**Los efectos se ejecutan al final o en el momento que cambie un estado (2do parametro) */
  // React.useEffect(()=>{
  //   console.log('loooog 2');
  // },[totalTodos]);



//MODIFICAR todo counter para q muestre un msg de felicitación cuando se completen todas las tareas
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
    
    // loading={loading}
    // error={error}
    // completedTodos = {completedTodos}
    // totalTodos = {totalTodos}
    // searchValue = {searchValue}
    // setSearchValue = {setSearchValue} 
    // searchedTodos = {searchedTodos}
    // completeTodo = {completeTodo}
    // deleteTodo = {deleteTodo}
  
  );
}


export default App;
