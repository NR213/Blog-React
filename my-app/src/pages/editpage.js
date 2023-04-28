import ReactQuill from "react-quill"
import React, { useContext, useEffect, useState } from "react";
import 'react-quill/dist/quill.snow.css';
import { Navigate, useParams } from "react-router-dom";
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
export default function Editpost(){
    const {id} = useParams();
    const [title, setTitle] = useState('');
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');
    const [redirect, setRedirect] = useState(false);
    const[postinfo, setPostinfo] = useState('');
    
   useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`).then(response => {
        response.json().then(postinfo =>{
           
            setTitle(postinfo.title);
            setName(postinfo.name);
            setContent(postinfo.content);
           
        });
    });
   }, [])

   async function updatepost(ev){
    ev.preventDefault();
    const data = new FormData();
    data.set('title',title);
    data.set('name',name);
    data.set('content',content);
    data.set('id',id);
    if(files?.[0]){
    data.set('file',files?.[0]);
    }
    await fetch('http://localhost:4000/post/', {
        method: 'PUT',
        body: data,
        credentials: 'include',
    })
    setRedirect(true);
   }

    if(redirect){
      return <Navigate to = {'/post/'+id}/>
    }

    return(
        <form className="createpost" onSubmit={updatepost}>
            <input type="title" placeholder="title" value = {title} onChange = {ev => setTitle(ev.target.value)}></input>
            <input type="text" placeholder="summary" value = {name} onChange = {ev => setName(ev.target.value)}></input>
            <input type="file"  onChange = {ev => setFiles(ev.target.files)}></input>
            <ReactQuill value={content} theme="snow"  onChange = {newValue => setContent(newValue)} modules={modules}/>
            <button >Update post</button>
        </form>
    );
} 