import './App.css';
import Layout from './layout';
import {Route, Routes} from "react-router-dom";
import HomePage from './pages/home';
import SignupPage from './pages/signup';
import SigninPage from './pages/signin';
import CreateBlogPage from './pages/createBlog';
import { UserContextProvider } from './userContext';
import BlogPage from './pages/blog';
import EditBlog from './pages/editBlog';

function App() {
  return (
    <UserContextProvider>
          <Routes>
      <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage/>} />
          <Route path="/signin" element={<SigninPage/>} />
          <Route path="/signup" element={ <SignupPage/>} />
          <Route path="/signout" element={ <HomePage/>} />
          <Route path="/create" element = {<CreateBlogPage/>}/>
          <Route path="/blog/:id" element = {<BlogPage/>}/>
          <Route path="/edit/:id" element = {<EditBlog/>}/>
      </Route>
    </Routes>
    </UserContextProvider>


  );
}

export default App;
