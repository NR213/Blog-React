import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom"

export default function Postpage(){
    const {id} = useParams();
    const [postinfo, setPostinfo] = useState(null);
    useEffect(() => {
        fetch('http://localhost:4000/post/'+id).then(response => {
            response.json().then(postinfo =>{
                setPostinfo(postinfo);
            });
        });
    }, []);
    
    if (!postinfo) return '';
    return(
    <div className="postpage">
        <h1>{postinfo.title}</h1>
        <h4>{postinfo.createdAt}</h4>
        <h4>By {postinfo.author.username}</h4>
        <div className="image">
        <img src={"http://localhost:4000/" + postinfo.cover }></img>
        </div>
        
        <div className="content" dangerouslySetInnerHTML={{__html:postinfo.content}}/>

    </div>
    )
}