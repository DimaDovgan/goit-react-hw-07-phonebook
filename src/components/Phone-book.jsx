import {ContactList}   from "./person-list/Person-list"
import {Filter}  from "./Filter"
import {Form}  from "./Forma"
import { useEffect } from "react"
import { readingHost } from "../redux/Acions/Actions"
import { useDispatch } from "react-redux/es/exports"

export const PhoneBook = () => {
     const dispatch = useDispatch();
    useEffect(() => {
        dispatch(readingHost());

    },[dispatch])

    return <div>
        
        <h1>Phonebook</h1>
        <Form />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
    </div>

}
