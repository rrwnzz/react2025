import logo from './logo.svg';
import './App.css';
import Home from './component/home';
import About from './component/about';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Footer from './component/footer';
import Greeting from './component/greeting';
// import ButtonAppBar from './component/nav';
function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/greeting' element={<Greeting />}/>

        
      </Routes>
    {/* <ButtonAppBar/> */}

      <Footer />
      
    </BrowserRouter>
  )
}

export default App;
