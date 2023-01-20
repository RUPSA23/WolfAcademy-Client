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
// import CheckoutPage from './Components/CheckoutPage/CheckoutPage';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import ForgotPassword from './Components/Login/ForgotPassword';
import RequireAuth from './Components/Login/RequireAuth';
import PhoneAuth from './Components/Login/PhoneAuth';
import firebase from 'firebase/compat/app'; 
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import Payment from './Components/CheckoutPage/Payment';





function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyB1Fo5nfryMs5KGsgxhGBEWzJBk1crpZ8w",
    authDomain: "wolf-academy-project.firebaseapp.com",
    projectId: "wolf-academy-project",
    storageBucket: "wolf-academy-project.appspot.com",
    messagingSenderId: "396863197565",
    appId: "1:396863197565:web:63244d0184b37040befc14"
  };
  firebase.initializeApp(firebaseConfig);

  const [User, setUser] = useState(null);

  useEffect(()=>{
    const unRegistered = onAuthStateChanged(firebase.auth(), (currentUser)=>{
    console.log(currentUser);
    setUser(currentUser);
    })
  return ()=> unRegistered();
      })


  return (
    <div className="App dark:bg-white">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/faq" element={<Faq></Faq>}></Route>
        <Route path="/aboutUs" element={<KnowMore></KnowMore>}></Route>
        <Route path="/allCourses" element={<AllCourses></AllCourses>}></Route>
        <Route path="/phoneAuth" element={<PhoneAuth auth={firebase.auth()}></PhoneAuth>}></Route>
        <Route path="/courseDetail/:id" element={
          <RequireAuth>
           <CourseDetail></CourseDetail>
          </RequireAuth>
      
        }></Route>

        <Route path="/payment/:id" element={
             <Payment></Payment>
        }></Route>

        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/forgotPassword" element={<ForgotPassword></ForgotPassword>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
