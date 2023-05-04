import './App.css';
import Home from './pages/Home';
import User from './pages/User'
import { BrowserRouter, Route, Routes  } from 'react-router-dom';


function App() {
  return (
   <div className='container'>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/users/:userid' element={<User />} />
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
