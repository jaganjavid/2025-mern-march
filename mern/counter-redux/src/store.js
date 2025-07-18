import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import testReducer from "./features/counter/testSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    test:testReducer
  },
})