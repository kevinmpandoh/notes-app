import React from "react";
import NoteList from "./NoteList";
import NoteInput from "./NoteInput";

function NotesAppBody({ notes, onDelete, addNote, onArchive })
{
    
    if(notes[0]){
        return (
            <div className="note-app__body">
            <NoteInput addNote={addNote} />
            <h2>Catatan Aktif</h2>         
            <NoteList  notes={notes} onDelete={onDelete} />                    
            <h2>Arsip</h2>
            <p className="notes-list__empty-message">Tidak ada catatan</p>
        </div>
        );
    }else {
        return (
            <div className="note-app__body">
            <NoteInput addNote={addNote} />
            <h2>Catatan Aktif</h2>         
            <p className="notes-list__empty-message">Tidak ada catatan</p>            
            <h2>Arsip</h2>
            <p className="notes-list__empty-message">Tidak ada catatan</p>
        </div>
        )
    }
}

export default NotesAppBody;