import { createAction ,createAsyncThunk,createSlice} from "@reduxjs/toolkit";
import axios from "axios"
//import { useDispatch } from "react-redux";
// export const items = createAction("phone/item");
// export const filter = createAction("phone/filter");
// export const deleteContact = createAction("phone/delateItem");
// export const filterItems = createAction("phone/delate");
// export const readingLocalHost = createAction("phone/readingLocalHost");
// export const error = createAction("axios/error");



axios.defaults.baseURL = "https://62adeb2a645d00a28a01f43f.mockapi.io";

export const addItems = createAsyncThunk(
  'phone/item',
 async (obj) =>{
        const arr = await giveItems();
        if (arr.some(contact => contact.name.toLocaleLowerCase() === obj.name.toLocaleLowerCase())) {
        alert(`${obj.name} is anlready in contacts npm run build`)
            return;
    }
    const objfull = await axios.post("contacts", obj)
    return {id:objfull.data.id,name:objfull.data.name,number:objfull.data.number}
  
  }
)

export const delateContact = createAsyncThunk(
  'phone/delateContact',
 async (id) =>{
    await axios.delete(`https://62adeb2a645d00a28a01f43f.mockapi.io/contacts/${id}`).then(ff=>console.log(ff)).catch(err=>console.log(err))
   const arr = await giveItems();
    return arr
  }
)
export const FilterValueState= createAsyncThunk(
  'phone/FilterValueState',
 (text) =>{
   return text; 
  }
)

export const readingHost = createAsyncThunk(
  'phone/delateContact',
  async () => {
    const arr = await giveItems();
    if (arr.length > 0) {
        return arr
    }
  }
)


export const giveItems = async () => {
    const items = await axios.get("contacts");
    return items.data
    
}
