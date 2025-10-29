import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";import ProfileCard from"./components/profileCard"
import TodoList from "./components/TodoList";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import MovieSearch from "./components/MovieSearch";

const App = () => {
  return (
     <Router>
            <Navbar />
     <Routes>
       <Route path="/" element={<Login />} />
       <Route path="/profile" element={<ProfileCard
        image="src/assets/images/profile.jpg"
        name="MS Dhoni"
        jobTitle="Cricket Player"
        description="Only Indain captain who wins all the ICC titiles for India as Captain."
        contact="msd.capaincool@gmail.com" />} />
       <Route path="/todolist" element={<TodoList />} />
       <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/movies" element={<MovieSearch />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
     </Routes>
   </Router>
  );
};

export default App;
