import {useState, useContext} from "react";
import Header from "../component/Header";
import Button from "../component/Button";
import PaymentList from "../component/PaymentList";
import DaysBar from "../component/DaysBar";
import {PaymentStateContext} from "../App";

const getDailyData = (pivotDate, data) => {
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0
  ).getTime();
  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0,
    23,
    59,
    59
  ).getTime();
  return data.filter(
    (item) => beginTime <= item.createdDate && item.createdDate <= endTime
  );
};
const Payment = () => {
  const data = useContext(PaymentStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());
  const dailyData = getDailyData(pivotDate, data);
  console.log(dailyData);
  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        // leftChild={leftChild}
        // rightChild={<Button text={"카드"} type={"ACTIVE"} />}
      />

      <PaymentList data={dailyData}></PaymentList>
    </div>
  );
};
export default Payment;
