import { ReactMarkdown } from "react-markdown/lib/react-markdown";

function Main({ activeNote, onUpdateNote }) {
    
    const onEditField = (key, value) => {
        
        onUpdateNote({
            ...activeNote,
            [key]: value,
            lastModified: Date.now()
        });
        
    };

    if (!activeNote) return <div className="no-active-note">No note selected</div>;

    return <div className="app-main">
        <div className="app-main-note-edit">
            <input
                type="text"
                id="title"
                value={activeNote.title}
                onChange={(e) => onEditField('title', e.target.value)}
                autoFocus
            />
            <textarea
                name="body"
                id="body"
                placeholder="Write your notes here..."
                value={activeNote.body}
                onChange={(e) => onEditField('body', e.target.value)}
                cols="30"
                rows="10" />
        </div>

        <div className="app-main-note-preview">
            <h1 classNAme="preview-title">{activeNote.title}</h1>
            <ReactMarkdown className="morkdown-preview">{activeNote.body}</ReactMarkdown>
           
        </div>
    </div>

}

export default Main;