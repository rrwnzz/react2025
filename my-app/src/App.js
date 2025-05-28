import logo from './logo.svg';
import './App.css';
import Nav from './component/nav';
import Home from './component/home';
import About from './component/about';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Footer from './component/footer';
function App() {
  return(
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
      <Footer />
      
    </BrowserRouter>
  )
}

export default App;
