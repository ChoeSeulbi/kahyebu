import ic_edit from "./../assets/ic_edit.png";
import "./PaymentItem.css";
const PaymentItem = ({id, createdDate, content, expenses}) => {
  return (
    <div className="PaymentItem">
      <div className="date_section">
        <span>{new Date(createdDate).toLocaleDateString()}</span>
      </div>
      <div className="cost_section">
        <div className="cost">{expenses}원</div>
        <div className="content">{content}</div>
      </div>
      <div className="button_section">
        <button>
          <img src={ic_edit} alt="" />
        </button>
      </div>
    </div>
  );
};
export default PaymentItem;
