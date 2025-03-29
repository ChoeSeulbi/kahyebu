import "./Header.css";
import Button from "./Button";
import {useNavigate, useParams} from "react-router-dom";
import {useContext} from "react";
import {PaymentDispatchContext} from "../App";
const Header = ({title, onIncreaseMonth, onDecreaseMonth, page}) => {
  const nav = useNavigate();
  const params = useParams();
  const {onDelete} = useContext(PaymentDispatchContext);
  const onClickDelete = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      //일기 삭제 로직
      onDelete(params.id);
      nav("/", {replace: true});
    }
  };
  const renderHeaderContent = () => {
    switch (page) {
      case "home":
        return (
          <>
            <div className="header_title">{title}</div>
            <div className="header_left">
              <button onClick={onDecreaseMonth} className="arrow"></button>
            </div>
            <div className="header_right">
              <button onClick={onIncreaseMonth} className="arrow"></button>
            </div>
          </>
        );
      case "add":
        return (
          <div className="add_header">
            <div>
              <button onClick={() => nav(-1)} className="arrow"></button>
            </div>
            <div className="header_title">{title}</div>
          </div>
        );
      case "edit":
        return (
          <div className="edit_header">
            <div>
              <button onClick={() => nav(-1)} className="arrow"></button>
            </div>
            <div className="header_title">{title}</div>
            <div className="header_right">
              <Button text={"삭제"} onClick={onClickDelete} />
            </div>
          </div>
        );
    }
  };
  return <header className="Header">{renderHeaderContent()}</header>;
};
export default Header;
