import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './ToDoSlice';


const store = configureStore({
  reducer: {
    todos: todoSlice,
  }
});

export default store;