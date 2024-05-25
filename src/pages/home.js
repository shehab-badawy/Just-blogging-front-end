import { useEffect, useState } from "react";
import Post from "../post";
export default function HomePage()
{
    const [blogs, setBlogs] = useState([])
    useEffect(()=>
        {
            fetch('http://localhost:4000/blog').then(res => 
                {
                    res.json().then(blogs => 
                        {
                            setBlogs(blogs)
                        })
                })
        },[])
    return (
        <>
            {blogs.length > 0 && blogs.map( blog => 
                (
                    <Post {...blog}/>
                ))}
        </>
    );
}