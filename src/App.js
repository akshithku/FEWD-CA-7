// import logo from './logo.svg';
import './App.css';
import Api from './data/Api';
import Header from"./data/Header"
import Forms from "./data/Forms" 
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Api/>}></Route>
        <Route path='/Form' element={<Forms/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
