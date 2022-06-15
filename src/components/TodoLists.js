import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

const ToDoLists = (props) => {

    return (

        <>

            <div className="todo_style">

                {/* <i className="fa fa-times" aria-hidden="true" onClick={() => {
                    props.onSelect(props.id)
                }} /> */}

                <DeleteIcon className="fa-times" aria-hidden="true" onClick={() => {
                    props.onSelect(props.id)
                }} />

                <li>{props.text}</li>

            </div>

        </>
    )

}

export default ToDoLists;

