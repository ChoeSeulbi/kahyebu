import {useState} from "react";
import {Routes, Route, Link, useNavigate} from "react-router-dom";
import Home from "./page/Home";
import List from "./page/List";
import Edit from "./page/Edit";
import Add from "./page/Add";
import Login from "./page/Login";
import Signup from "./page/Signup";
import Notfound from "./page/Notfound";
import "./App.css";

function App() {
  const nav = useNavigate();

  const onClickButtonLogin = () => {
    nav("/login");
  };
  const onClickButtonSignup = () => {
    nav("/signup");
  };
  return (
    <>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/list"}>List</Link>
        <Link to={"/add"}>Add</Link>
        <Link to={"/edit"}>Edit</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/signup"}>Sign up</Link>
      </div>
      <button onClick={onClickButtonLogin}>로그인</button>
      <button onClick={onClickButtonSignup}>회원가입</button>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/list" element={<List />}></Route>
        <Route path="/add" element={<Add />}></Route>
        <Route path="/edit/:id" element={<Edit />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </>
  );
}

export default App;
