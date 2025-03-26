import DaysBar from "./DaysBar";
import PaymentItem from "./PaymentItem";
const PaymentList = () => {
  return (
    <div className="PaymentList">
      <DaysBar />
      <div className="list_wrapper">
        <PaymentItem />
      </div>
      <div className="btm_wrapper">모두보기 및 추가 버튼</div>
    </div>
  );
};
export default PaymentList;
