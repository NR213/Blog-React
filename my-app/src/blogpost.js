export default function Post({title, name, content, cover, author}) {
    return(
        <div className="post">
            <div className="image">
            <img src= {cover}></img>
            </div>
        <div className="text">
            <h2>{title}</h2>
            <h4>By {author.username}</h4>
            <p>{content}</p>
        </div>
        </div>
    );
}