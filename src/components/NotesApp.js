import React from 'react';
import NotesAppHeader from './NotesAppHeader';
import NotesAppBody from './NoteAppBody';
import { getInitialData } from '../utils/index';


/* Css Styeling */
import '../styles/style.css';

class NotesApp extends React.Component
{
    constructor(props) 
    {
        super(props);
        this.state = {
            notes: getInitialData(),
             
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        
    }

    onAddNoteHandler({ title, body })
    {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: new Date().toLocaleDateString(),
                    }
                ]
            }
        })
    }

    onDeleteHandler(id) 
    {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes});
    }

    render() {
        return (
            <div className="note-app">
                
                <NotesAppHeader />
                <NotesAppBody notes={this.state.notes} onDelete={this.onDeleteHandler} addNote={this.onAddNoteHandler} />
            </div>
        )
    }
}

export default NotesApp;



