import './App.css';
import Layout from './layout';
import {Route, Routes} from "react-router-dom";
import HomePage from './pages/home';
import SignupPage from './pages/signup';
import SigninPage from './pages/signin';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage/>} />
          <Route path="/signin" element={<SigninPage/>} />
          <Route path="/signup" element={ <SignupPage/>} />
      </Route>

      
    </Routes>

  );
}

export default App;
