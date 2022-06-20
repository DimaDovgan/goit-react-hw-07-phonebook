import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
export const PersonlistItem = ({ name, number, id, deleteContact }) => {
    const dispatch = useDispatch();
    const deleteContactValue = () => {
        console.log()
        dispatch(deleteContact(id))
    }
    return <li >{name} : {number} <button onClick={deleteContactValue}>Delete</button></li>
}

PersonlistItem.propTypes = {
    deleteContact: PropTypes.func.isRequired,
    id:PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number:PropTypes.string.isRequired,
    
}