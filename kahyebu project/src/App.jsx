import {useReducer, useRef, createContext} from "react";
import {Routes, Route, Link, useNavigate} from "react-router-dom";
import Home from "./page/Home";
import List from "./page/List";
import Edit from "./page/Edit";
import Add from "./page/Add";
import Login from "./page/Login";
import Signup from "./page/Signup";
import Notfound from "./page/Notfound";
import "./App.css";

const mockData = [
  {
    id: 1,
    createdDate: new Date().getTime(),
    expenses: 100,
    content: "쫀드기",
  },
  {
    id: 2,
    createdDate: new Date().getTime(),
    expenses: 1000,
    content: "커피",
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
    case "DELETE":
      return state.filter((item) => String(item.id) !== String(action.id));
    default:
      return state;
  }
}

const PaymentStateContext = createContext();
const PaymentDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // 새로운 리스트 추가
  const onCreate = (createdDate, expenses, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        expenses,
        content,
      },
    });
  };
  // 기존 리스트 수정
  const onUpdate = (id, createdDate, expenses, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        expenses,
        content,
      },
    });
  };

  // 기존 리스트 삭제
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };

  return (
    <>
      <PaymentStateContext.Provider value={data}>
        <PaymentDispatchContext.Provider
          value={{
            onCreate,
            onUpdate,
            onDelete,
          }}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/list" element={<List />}></Route>
            <Route path="/add" element={<Add />}></Route>
            <Route path="/edit/:id" element={<Edit />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="*" element={<Notfound />}></Route>
          </Routes>
        </PaymentDispatchContext.Provider>
      </PaymentStateContext.Provider>
    </>
  );
}

export default App;
