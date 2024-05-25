import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { Navigate, useParams } from "react-router-dom";
import Editor from "../editor";


export default function EditBlog()
{
    const {id} = useParams()
    const [title, setTitle] = useState('')
    const [summary, setSummary] = useState('')
    const [content, setContent] = useState('')
    const [files, setFiles] = useState('')
    const [redirect, setRedirect] = useState(false)

    useEffect(()=>
        {
            fetch('http://localhost:4000/blog/'+id).then(res=>
                {
                    res.json().then(blog_info =>
                        {
                            setTitle(blog_info.title)
                            setContent(blog_info.content)
                            setSummary(blog_info.summary)
                        })
                })
        }
    ,[])

    async function updateBlog(evnt)
    {
        evnt.preventDefault()

        const data = new FormData()
        data.set('title', title)
        data.set('summary', summary)
        data.set('content', content)
        data.set('id', id)
        if(files?.[0]) data.set('file', files?.[0])
        const response =await fetch('http://localhost:4000/blog', 
        {
            method: 'PUT',
            body: data,
            credentials: "include",
        })

        if (response.ok) setRedirect(true)
    }


    if (redirect)
        {
           return <Navigate to={'/blog/'+id}/> 
        }
    return(
        <form action="" method="post" onSubmit={updateBlog}>

            <input type="title" placeholder={'Title'} value={title} onChange={ev => setTitle(ev.target.value)}/>
            <input type="summary" placeholder={'Summary'} value={summary} onChange={ev => setSummary(ev.target.value)}/>
            <input type="file"  onChange={ev => setFiles(ev.target.files)}/>
            <Editor onChange={setContent} value={content}/>
            <button style={{marginTop:'2%'}}> Edit </button>
        </form>
    )
}