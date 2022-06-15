import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateNote from "./components/CreateNote";
import Note from "./components/Note";

const App = () => {

    const [addItem, setAddItem] = useState([]);

    const addNote = (note) => {

        setAddItem((prevData) => {

            return [...prevData, note];
        })
    }

    const onDelete = (id) => {

        setAddItem((oldData) =>

            oldData.filter((currdata, indx) => {

                return indx != id

            })
        )

    }

    return (

        <>
            <Header />
            <CreateNote passNote={addNote} />

            {addItem.map((val, index) => {

                return (
                    <Note
                        key={index}
                        id={index}
                        title={val.title}
                        first={val.first}
                        last={val.last}
                        content={val.content}
                        deleteItem={onDelete}
                    />

                )
            }

            )}

            <Footer />
        </>

    )

}

export default App;
 
