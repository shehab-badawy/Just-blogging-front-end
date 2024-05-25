import { Link } from "react-router-dom";

export default function Post({_id,title, summary, cover, content, createdAt, author_id})
{
    return(
        <div className="entry">
            <div className="image">
                <Link to={'/blog/'+_id}>
                    <img src={'http://localhost:4000/'+cover} alt="" />
                </Link>
            </div>
            <div className="content">
                <Link to={'/blog/'+_id}>
                    <h2>{title}</h2>
                </Link>
            
            <p className="info">
                <Link to="https://shehab-badawy.github.io/MyPortfolio/" className="owner">{author_id.username}</Link>
                <time> {createdAt.split('T')[0]}</time>
            </p>
            <p className="conclusion"> {summary} </p>
            <div className="gradient"></div>
            <p>A strong coffee after a poor night’s sleep is the kick-start many people need in the morning but new research suggests that it might be best to have a bite to eat first. A study has found that drinking coffee first thing can have a negative effect on blood sugar control – a risk factor for diabetes and heart disease.</p>
            </div>
      </div>

    );
}