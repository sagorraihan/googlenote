import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const CreateNote = (props) => {

    const [expand, setExpand] = useState(false);

    const [note, setNote] = useState({

        title: " ",
        first:" ",
        last:" ",
        content: " ",

    });

    const InputEvent = (event) => {

        //const value = event.target.value;
        //const name = event.target.name;

        const { name, value } = event.target;

        setNote((prevData) => {

            return {

                ...prevData,
                [name]: value,

            }
        })
    }

    const addEvent = () => {

        props.passNote(note);

        setNote({

            title: " ",
            content: " ",
            first:" ",
            last:" ",

        })

    }

    const expandIt = () => {

        setExpand(true);
    }

    const btoNormal = () => {

        setExpand(false);
    }

    return (

        <>
            <div className="main_note" onDoubleClick={btoNormal}>

                <form>

                    {expand ?

                        <input
                            type="text"
                            placeholder="Title"
                            onChange={InputEvent}
                            name="title"
                            value={note.title}
                            autoComplete="off"

                        /> : null
                    }

                    {expand ?    
                        <input
                            type="text"
                            placeholder="Title"
                            onChange={InputEvent}
                            name="first"
                            value={note.first}
                            autoComplete="off"

                            /> : null
                    }
                    
                    {expand ?     
                        <input
                            type="text"
                            placeholder="Title"
                            onChange={InputEvent}
                            name="last"
                            value={note.last}
                            autoComplete="off"

                        /> : null
                        }

                    <textarea

                        row=" "
                        column=" "
                        placeholder=" Write a note..."
                        onChange={InputEvent}
                        name="content"
                        value={note.content}
                        onClick={expandIt}
                    >

                    </textarea>

                    {expand ?
                        <Button onClick={addEvent}>
                            <AddIcon className="plus_sign" />
                        </Button> : null}

                </form>

            </div>
        </>

    )

}

export default CreateNote;

