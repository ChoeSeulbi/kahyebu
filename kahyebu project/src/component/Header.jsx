import "./Header.css";
import {useNavigate} from "react-router-dom";
const Header = ({title, onIncreaseMonth, onDecreaseMonth, page}) => {
  const nav = useNavigate();
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
    }
  };
  return <header className="Header">{renderHeaderContent()}</header>;
};
export default Header;
