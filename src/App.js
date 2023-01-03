import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact/Contact';
import Faq from './Components/Faq/Faq';
import KnowMore from './Components/KnowMore/KnowMore';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import Footer from './Components/Shared/Footer';
import Navbar from './Components/Shared/Navbar';
import AllCourses from './Components/AllCourses/AllCourses';
import CourseDetail from './Components/CourseDetail/CourseDetail';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/faq" element={<Faq></Faq>}></Route>
        <Route path="/aboutUs" element={<KnowMore></KnowMore>}></Route>
        <Route path="/allCourses" element={<AllCourses></AllCourses>}></Route>
        <Route path="/courseDetail" element={<CourseDetail></CourseDetail>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
