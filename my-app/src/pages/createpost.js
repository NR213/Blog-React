import ReactQuill from "react-quill"
import React, { useContext, useEffect, useState } from "react";
import 'react-quill/dist/quill.snow.css';

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
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');

    function createNewPost(ev){
        const data = FormData();
        data.set('title',title)
        data.set('author',author)
        data.set('content',content)
        data.set('files',files[0])
        fetch('http://localhost:4000/post', {
            method: 'POST',
            body: data,
        })
    }

    return(
        <form className="createpost" onSubmit={createNewPost}>
            <input type="title" placeholder="title" value = {title} onChange = {ev => setTitle(ev.target.value)}></input>
            <input type="text" placeholder="author" value = {author} onChange = {ev => setAuthor(ev.target.value)}></input>
            <input type="file"  onChange = {ev => setFiles(ev.target.files)}></input>
            <ReactQuill value={content} onChange = {newValue => setContent(newValue)} modules={modules}/>
            <button >Create post</button>
        </form>
    );
} 