import {useNavigate} from "react-router-dom";
import {useState} from "react";
import PaymentItem from "./PaymentItem";
import Button from "./Button";
import "./PaymentList.css";
const PaymentList = ({data}) => {
  const nav = useNavigate();
  const [sortType, setSortType] = useState("latest");

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };
  const getSortedDate = () => {
    return data.toSorted((a, b) => {
      if (sortType === "oldest") {
        return Number(a.createdDate) - Number(b.createdDate);
      } else {
        return Number(b.createdDate) - Number(a.createdDate);
      }
    });
  };
  const sortedData = getSortedDate();
  return (
    <div className="PaymentList">
      <div className="menu_bar">
        <select onChange={onChangeSortType}>
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된순</option>
        </select>
        <Button
          onClick={() => nav(`/add`)}
          text={"새로운 지출"}
          type={"ACTIVE"}
        />
      </div>
      <div className="list_wrapper">
        {/* <PaymentItem /> */}
        {sortedData.map((item) => (
          <PaymentItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
export default PaymentList;
