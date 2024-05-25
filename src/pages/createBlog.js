import { useState } from 'react';
import Editor from "../editor";
import { Navigate } from 'react-router-dom';




export default function CreateBlogPage()
{
    const [title, setTitle] = useState('')
    const [summary, setSummary] = useState('')
    const [content, setContent] = useState('')
    const [files, setFiles] = useState('')
    const [redirect, setRedirect] = useState(false)

   async function createNewBlog(event)
    {
        const data = new FormData()
        data.set('title', title)
        data.set('summary', summary)
        data.set('content', content)
        data.set('file', files[0])
        event.preventDefault()
        const response = await fetch("http://localhost:4000/create", 
        {
          method: 'POST',
          body:  data,
          credentials: 'include',
        })

        if(response.ok)
            {
                setRedirect(true)
            }
    }

    if (redirect)
        {
           return <Navigate to={'/'}/> 
        }
    return(
        <form action="" method="post" onSubmit={createNewBlog}>

            <input type="title" placeholder={'Title'} value={title} onChange={ev => setTitle(ev.target.value)}/>
            <input type="summary" placeholder={'Summary'} value={summary} onChange={ev => setSummary(ev.target.value)}/>
            <input type="file"  onChange={ev => setFiles(ev.target.files)}/>
            <Editor onChange={setContent} value={content}/>
            <button style={{marginTop:'2%'}}> Create </button>
        </form>
    )  
}