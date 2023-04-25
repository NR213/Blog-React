import { Link } from "react-router-dom";

export default function Post({_id, title, name, content, cover, author}) {
    return(
        <div className="post">
            <div className="image">
                <Link to={'/post/'+ _id}>
            <img src= {'http://localhost:4000/'+cover}></img>
            </Link>
            </div>
        <div className="text">
        <Link to={'/post/'+ _id}>
            <h2>{title}</h2>
            </Link>
            <h4>By {author.username}</h4>
            <div dangerouslySetInnerHTML={{__html:name}}/>
        </div>
        </div>
    );
}