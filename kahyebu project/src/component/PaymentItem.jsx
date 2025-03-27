import {useNavigate} from "react-router-dom";
import ic_edit from "./../assets/ic_edit.png";
import {getTypeImg} from "../util/get-emotion-image";
import "./PaymentItem.css";
const PaymentItem = ({id, createdDate, content, expenses, typeId}) => {
  const nav = useNavigate();

  return (
    <div className="PaymentItem">
      <div className="date_section">
        <span>{new Date(createdDate).toLocaleDateString()}</span>
      </div>
      <div className="section_wrapper">
        <div className="img_section">
          <img src={getTypeImg(typeId)} alt="" />
        </div>
        <div className="cost_section">
          <div className="cost">{expenses}원</div>
          <div className="content">{content}</div>
        </div>
        <div className="button_section">
          <button onClick={() => nav(`/edit/${id}`)}>
            <img src={ic_edit} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default PaymentItem;
