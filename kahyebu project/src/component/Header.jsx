import "./Header.css";
const Header = ({title, onIncreaseMonth, onDecreaseMonth, page}) => {
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
          <>
            <div className="header_title">{title}</div>
          </>
        );
    }
  };
  return <header className="Header">{renderHeaderContent()}</header>;
};
export default Header;
