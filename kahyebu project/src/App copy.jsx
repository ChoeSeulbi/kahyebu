import {useState} from "react";
import {Routes, Route, Link, useNavigate} from "react-router-dom";
import Home from "./page/Home";
import List from "./page/List";
import Edit from "./page/Edit";
import Add from "./page/Add";
import Login from "./page/Login";
import Signup from "./page/Signup";
import Notfound from "./page/Notfound";
import Button from "./component/Button";
import Header from "./component/Header";
import "./App.css";

import ic_caution from "./assets/ic_caution.png";

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
      <Header
        title={"Header"}
        leftChild={<Button text={"Left"} />}
        rightChild={<Button text={"목표지출금액"} />}
      />
      <Button
        text={"지출"}
        type={"ACTIVE"}
        onClick={() => {
          console.log("123 출력");
        }}
      />
      <Button
        text={"카드"}
        type={"DEFAULT"}
        onClick={() => {
          console.log("123 출력");
        }}
      />

      <Button
        className="btn_w200"
        text={"로그인"}
        type={"DEFAULT"}
        onClick={onClickButtonLogin}
      />
      <Button
        className="btn_w200"
        text={"회원가입"}
        type={"DEFAULT"}
        onClick={onClickButtonSignup}
      />

      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/list"}>List</Link>
        <Link to={"/add"}>Add</Link>
        <Link to={"/edit"}>Edit</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/signup"}>Sign up</Link>
      </div>
      {/* <button onClick={onClickButtonLogin}>로그인</button> */}
      {/* <button onClick={onClickButtonSignup}>회원가입</button> */}
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
