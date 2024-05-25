
import {useState} from "react"

function validateEmail(email) {
    // Basic email regex
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
export default function SignupPage()
{
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

   async function signUp(evnt)
    {
       evnt.preventDefault()

              // Basic validation
        if (!validateEmail(email)) 
            {
                alert('Please enter a valid email address');
                return;
            }

        if (password.length < 8) 
            {
                alert('Password must be at least 8 characters long');
                return;
            }
       const response =  await fetch('http://localhost:4000/signup', 
        {
            method: 'POST',
            body: JSON.stringify({email, username, password}),
            headers: {'Content-Type': 'application/json'},
        })
        if(response.ok === false)
        {
            alert("Signing up failed")
        }
        else
        {
            alert("Signing up successeded") 
        }
    }
    return(
        <form onSubmit={signUp} className="sign_up" >
            <h2>Sign up</h2>
            <input type="email" name="email" id="" placeholder="email" 
            value={email} onChange={evnt => setEmail(evnt.target.value)}/>
            <input type="text" name="username" id="" placeholder="username" value={username}
            onChange={evnt => setUsername(evnt.target.value)}/>
            <input type="password" name="pass" id="" placeholder="Password" value={password}
            onChange={evnt => setPassword(evnt.target.value)}/>
            <button>Sign Up</button>
        </form>
    );
}