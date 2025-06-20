import { useEffect } from 'react';
import { useState } from 'react';
import './Todos.css';
import type {TodoModel} from '../../models/TodoModel';
import {loadTodos} from '../../service/api.service';
import { Todo } from '../todo-component/Todo';

export const Todos  = () => {
    const [todos, setTodo] = useState<TodoModel[]>([]);
    useEffect(() => {

           loadTodos().then(value => 
            setTodo(value));
    }, []);
    return (
        <div>
          {todos.map(todo => (
            <Todo todo={todo} key={todo.id} />
          ))}
        </div>
      );
};