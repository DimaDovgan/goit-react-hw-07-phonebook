import { configureStore ,getDefaultMiddleware} from '@reduxjs/toolkit';
//import { rootReduser } from './redusers/reduser'
import PhoneSliceReduser from './redusers/reduser'
//import { combineReducers } from '@reduxjs/toolkit'; 
import loger from 'redux-logger'

const middlewareLoger = [...getDefaultMiddleware(),loger]



export const store = configureStore({
  reducer: PhoneSliceReduser,
  middleware: middlewareLoger,
  
})
