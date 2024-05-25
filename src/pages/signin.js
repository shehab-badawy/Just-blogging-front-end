import {useContext, useState}  from 'react';
import {Navigate} from 'react-router-dom';
import { UserContext } from '../userContext';

export default function SigninPage()
{
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)
    const {setUserInfo} = useContext(UserContext)
    async function signIn(evnt) 
    {
        evnt.preventDefault()

        // form validation
        if (!username || !password) 
        {
            alert('Username and password are required');
            return;
        }
        const response = await fetch("http://localhost:4000/signin",
        {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        })
        if (response.ok)
        {
            response.json().then((userInfo) =>
                {
                    setUserInfo(userInfo)
                    setRedirect(true)
                })
        }
        else
        {
            alert("wrong info!")
        }
    }

    if (redirect)
    {
        return <Navigate to={'/'} />
    }
    return(
        <form action="" className="sign_in" onSubmit={signIn}>
            <h2>Sign in</h2>
            <input type="text" name="" id="" placeholder="username" value={username} onChange={(evnt) => setUsername(evnt.target.value)} />
            <input type="password" name="" id="" placeholder="Password" value={password} onChange={(evnt) => setPassword(evnt.target.value)}/>
            <button>Sign in</button>
        </form>
    );
}