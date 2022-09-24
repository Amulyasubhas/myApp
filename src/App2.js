import logo from './logo.svg'
import"./App2.css";
import{ BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Form from './components/Form';





  
  function NavBar() {
    return(
      <div>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/add-student">Student</Link>
      </div>
    )
  }
  
  function About() {
    return(
      <div>this is about component</div>
  
    )
  }

  function Contact() {
    return(
      <div>this is contact component</div>
  
    )
  }

 
  
  
  function App2() {
    return (
      <div className="App2">
        <BrowserRouter>
        <NavBar />
        <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/add-student"element={<Form />}></Route>
        </Routes>
        </BrowserRouter>
      </div>
    );
  }
  
  export default App2;