import ReactQuill from "react-quill"
import React, { useContext, useEffect, useState } from "react";
import 'react-quill/dist/quill.snow.css';
import { Navigate } from "react-router-dom";
const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
      ['clean'],
    ],
  };
export default function Createpost(){
    const [title, setTitle] = useState('');
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');
    const [redirect, setRedirect] = useState(false);

   async function createNewPost(ev){
       ev.preventDefault();
        const data = new FormData();
        data.set('title',title);
        data.set('name',name);
        data.set('content',content);
        data.set('file',files[0]);
        
      const response = await fetch('http://localhost:4000/post', {
          method: 'POST',
          body: data,
          credentials:'include',
        });
        if(response.ok){
          setRedirect(true);
        }
    }

    if(redirect){
      return <Navigate to = {'/'}/>
    }

    return(
        <form className="createpost" onSubmit={createNewPost}>
            <input type="title" placeholder="title" value = {title} onChange = {ev => setTitle(ev.target.value)}></input>
            <input type="text" placeholder="summary" value = {name} onChange = {ev => setName(ev.target.value)}></input>
            <input type="file"  onChange = {ev => setFiles(ev.target.files)}></input>
            <ReactQuill value={content} onChange = {newValue => setContent(newValue)} modules={modules}/>
            <button >Create post</button>
        </form>
    );
} 