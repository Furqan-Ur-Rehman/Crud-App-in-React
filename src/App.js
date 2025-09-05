// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Read from './Read';
import Create from './Create';
import Edit from './Edit';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route exact path='/' element={<Read/>}></Route>
        <Route exact path='/create' element={<Create/>}></Route>
        <Route exact path='/edit' element={<Edit/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
