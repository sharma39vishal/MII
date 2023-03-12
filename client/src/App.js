import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home.jsx'
import Blogs from './Pages/Blog/Blogs.jsx'
import Events from './Pages/Events/Events.jsx'
import Contactus from './Pages/Contactus/Contactus.jsx'
import Ourofferings from './Pages/Our-Offerings/OurOfferings.jsx'
import { Route,Routes } from 'react-router-dom';
import Header from './Universal/Header/Header';
import Footer from './Universal/Footer/Footer';
import Knowmore from './Pages/Events/Knowmore';
import About from './Pages/About/About';
import SingleBlog from './Pages/Blog/SingleBlog';
function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/> }/>
        <Route  path='/ourofferings' element={<Ourofferings/> }/>
        <Route  path='/blogs' element={<Blogs/> }/>
        <Route  path='/events' element={<Events/> }/>
        <Route  path='/about' element={<About/> }/>
        <Route  path='/contactus' element={<Contactus/> }/>
        <Route path='/events/knowmore' element={<Knowmore/>}/>
        <Route path='/singleblog' element={<SingleBlog/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
