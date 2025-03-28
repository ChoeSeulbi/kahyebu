import "./Editor.css";
import TypeItem from "./TypeItem";
import Button from "./Button";
import {useState} from "react";

const typeList = [
  {
    typeId: 1,
    typeName: "커피",
  },
  {
    typeId: 2,
    typeName: "음식",
  },
  {
    typeId: 3,
    typeName: "쇼핑",
  },
  {
    typeId: 4,
    typeName: "교통",
  },
  {
    typeId: 5,
    typeName: "고정 지출",
  },
];
const getStringedDate = (targetDate) => {
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();
  if (month < 10) {
    month = `0${month}`;
  }
  if (date < 10) {
    date = `0${date}`;
  }
  return `${year}-${month}-${date}`;
};
const Editor = () => {
  const [input, setInput] = useState({
    createdDate: new Date(),
    typeId: 3,
    content: "",
    cost: "",
  });
  //   const [cost, setCost] = useState("");

  //   const onChangeCost = (e) => {
  //     let value = e.target.value.replace(/,/g, "");
  //     if (!/^\d*$/.test(value)) return;
  //     setCost(formatNumber(value));
  //   };
  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "createdDate") {
      value = new Date(value);
    }
    if (name === "cost") {
      value = value.replace(/,/g, ""); // 기존 콤마 제거
      if (!/^\d*$/.test(value)) return; // 숫자만 입력 가능하도록 제한
      value = formatNumber(value); // 3자리마다 , 추가된 값으로 변환
    }
    setInput({
      ...input,
      [name]: value,
    });
  };
  const formatNumber = (num) => {
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘 날짜</h4>
        <input
          onChange={onChangeInput}
          name="createdDate"
          value={getStringedDate(input.createdDate)}
          type="date"
        />
      </section>
      <section className="type_section">
        <h4>지출 타입</h4>
        <div className="type_list_wrapper">
          {typeList.map((item) => (
            <TypeItem
              onClick={() =>
                onChangeInput({
                  target: {
                    name: "typeId",
                    value: item.typeId,
                  },
                })
              }
              key={item.typeId}
              {...item}
              isSelected={item.typeId === input.typeId}
            />
          ))}
        </div>
      </section>
      <section className="cost_section">
        <h4>지출 금액</h4>
        <input
          onChange={onChangeInput}
          value={input.cost}
          type="text"
          placeholder="지출 금액"
          name="cost"
        />
      </section>
      <section className="content_section">
        <h4>지출 내용</h4>
        <input
          name="content"
          value={input.content}
          onChange={onChangeInput}
          type="text"
          placeholder="지출 내용을 입력해주세요."
        />
      </section>
      <section className="button_section">
        <Button text={"취소"} />
        <Button text={"저장"} type={"ACTIVE"} />
      </section>
    </div>
  );
};
export default Editor;
