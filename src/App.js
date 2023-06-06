import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar';
import AddUsers from './components/AddUsers';
import Crud from './components/Crud';
import AllUsers from './components/AllUsers';
import EditUsers from './components/Edit';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element = {<Crud />} />
          <Route path='/all' element = {<AllUsers />} />
          <Route path='/add' element = {<AddUsers />} />
          <Route path='/edit/:id' element = {<EditUsers />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;