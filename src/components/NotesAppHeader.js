import React from "react";

function NotesAppHeader()
{
    return (
        <div className="note-app__header">
            <h1>Notes</h1>
            <div className="note-search">
                <input type="text" placeholder="Cari catatan..."/>
            </div>
        </div>
    )
}

export default NotesAppHeader;