import { Link } from "react-router-dom";

export default function Post({_id, title, name, content, cover, author}) {
    return(
        
        <div className="post">
            <div className="image">
                <Link to={'/post/'+ _id}>
            <img src= {'http://localhost:4000/'+cover}></img>
            </Link>
            </div>
            <div class="cookie-card">
    <span class="title"><Link to={'/post/'+ _id}>
            <h2>{title}</h2>
            </Link></span>
            <h4>By {author.username}</h4>
        <div dangerouslySetInnerHTML={{__html:name.substring(0,150)}}/>
   
</div>
        </div>
        
    );
}

