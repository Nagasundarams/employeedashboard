
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import ActiveEmployee from './components/ActiveEmployee';
import Header from './components/Header';
import Menu from './components/Menu';
import Userprofile from './components/Userprofile';
// import Employeecard from './components/Employeecard';

function App() {
  return (<>
    <Header/>

      {/* <Employeecard/> */}
      <div className='app'>
      
      <Menu/>
      <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<ActiveEmployee/> }/>
          <Route path='/userprofile' element={<Userprofile/> }/>
        </Routes>
      
      </BrowserRouter>
      
      {/* */}
      
    
    </div>
    </>
  );
}

export default App;
