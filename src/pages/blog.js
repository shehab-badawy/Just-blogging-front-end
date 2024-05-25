import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { UserContext } from "../userContext";

export default function BlogPage()
{
    const[blog_info, setBlogInfo] = useState(null)
    const {user_info} = useContext(UserContext)
    const {id} = useParams()
    useEffect(()=>
        {    
            fetch('http://localhost:4000/blog/'+id).then(res => 
                {
                    res.json().then(blog_info => 
                        {
                            setBlogInfo(blog_info)
                        })
                })
        }, [])

    if(!blog_info) return ''
    return(
        <div className="blog-page">
            <h1>{blog_info.title}</h1>
            <div className="image">  
                <img src={'http://localhost:4000/'+ blog_info.cover} alt="" />
                
            </div>
            <div>
                <h4> by: {blog_info.author_id.username}</h4>
                {/* that is ofcourse is a horrible way to do this, it should be checked in the server but i'm too lazy */}
                {user_info.id === blog_info.author_id._id && (
                    <div className="edit">
                        <Link to={"/edit/"+blog_info._id} className="btn"> Edit this post</Link>
                    </div>
                )}
                <h4>Posted at: <time>{blog_info.createdAt}</time> </h4>
            </div>
            
            <div dangerouslySetInnerHTML={{__html:blog_info.content}}/>
        </div>

    )
}