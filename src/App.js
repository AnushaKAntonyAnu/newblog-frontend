import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreatePost from './components/CreatePost';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <BrowserRouter>
  <Routes>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/createpost' element={<CreatePost/>}/>
        <Route path='/viewall' element={<ViewAll/>}/>
      </Routes> 
  </BrowserRouter>
  );
}

export default App;
