import PaymentItem from "./PaymentItem";
import Button from "./Button";
import "./PaymentList.css";
const PaymentList = ({data}) => {
  return (
    <div className="PaymentList">
      <div className="menu_bar">
        <select name="" id="">
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된순</option>
        </select>
        <Button text={"새로운 지출"} />
      </div>
      <div className="list_wrapper">
        {/* <PaymentItem /> */}
        {data.map((item) => (
          <PaymentItem key={item.id} {...item} />
        ))}
      </div>
      <div className="btm_wrapper">목표지출 금액 모두보기 및 추가 버튼</div>
    </div>
  );
};
export default PaymentList;
