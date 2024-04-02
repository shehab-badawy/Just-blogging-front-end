import { Link } from "react-router-dom";

export default function Header()
{
    return (
        <header>
        <Link to="/" className="logo">Just Blogging</Link>
        <nav> 
          <Link to="/signin"> Sign In </Link>
          <Link to="/signup"> Sign Up </Link>
        </nav>
      </header>
    );
}