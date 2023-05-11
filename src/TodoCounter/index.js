import React from 'react';
import './TodoCounter.css';

function TodoCounter({totalTodos, completedTodos} ){ // props { total, completed }

    return (
      <h1 className='TodoCounter'>
        Has completado <span>{completedTodos} </span>
        de <span>{totalTodos}</span>  TODOs 
      </h1>
    );
  }

  export { TodoCounter };