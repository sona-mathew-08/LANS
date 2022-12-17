import { Link } from "react-router-dom";
import "./Post.css";

export default function Post({post}) {
  return (
    <div className="post">
    {post.photo && (<img
        className="postImg"
        src={post.Linkphoto}
        alt=""
      />
      )}
      
      <div className="postInfo">
        <div className="postCats">
        {
          post.categories.map((c)=>(
            <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              {c.name}
            </Link>
          </span>
          ))
        }
          
         
        </div>
        <span className="postTitle">
          <Link to={`/post/${post._id}`} className="link">
            {post.title}
          </Link>
        </span>
        <hr />
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className="postDesc">
        {post.desc}
      </p>
    </div>
  );
}