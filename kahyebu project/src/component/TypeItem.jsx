import "./TypeItem.css";
import {getTypeImg} from "../util/get-type-image";
const TypeItem = ({typeId, typeName, isSelected, onClick}) => {
  return (
    <div onClick={onClick} className={`TypeItem ${isSelected ? "active" : ""}`}>
      <div className="img_wrapper">
        <img src={getTypeImg(typeId)} alt={typeName} />
      </div>
      <p className="type_name">{typeName}</p>
    </div>
  );
};
export default TypeItem;
