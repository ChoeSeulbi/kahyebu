import "./Header.css";
const Header = ({title, leftChild, rightChild}) => {
  return (
    <header className="Header">
      <div className="header_title">{title}</div>
      <div className="header_left">
        <button className="arrow"></button>
      </div>

      <div className="header_right">
        <button className="arrow"></button>
      </div>
    </header>
  );
};
export default Header;
