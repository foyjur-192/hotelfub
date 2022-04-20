import { Routes,Route } from 'react-router-dom';
import './App.css';
import Checkout from './component/Checkout/Checkout';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Review from './component/Review/Review';
import Signup from './component/Signup/Signup';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/review' element={<Review></Review>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/signup' element={<Signup></Signup>}></Route>
       <Route path='/checkout' element={<Checkout></Checkout>}></Route>
     </Routes>
    </div>
  );
}

export default App;
