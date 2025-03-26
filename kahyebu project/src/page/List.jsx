import Header from "../component/Header";
import Button from "../component/Button";
import PaymentList from "../component/PaymentList";
import DaysBar from "../component/DaysBar";
const List = () => {
  return (
    <div>
      <Header
        title={"2025년 03월"}
        leftChild={<Button text={"지출"} />}
        rightChild={<Button text={"카드"} type={"ACTIVE"} />}
      />

      <PaymentList></PaymentList>
    </div>
  );
};
export default List;
