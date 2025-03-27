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
const Home = () => {
  const data = useContext(PaymentStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());
  const dailyData = getDailyData(pivotDate, data);

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };
  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        onIncreaseMonth={onIncreaseMonth}
        onDecreaseMonth={onDecreaseMonth}
        page="home"
        // rightChild={<Button text={"카드"} type={"ACTIVE"} />}
      />
      <PaymentList data={dailyData} />
    </div>
  );
};
export default Home;
