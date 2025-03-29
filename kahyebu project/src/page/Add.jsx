import Header from "../component/Header";
import Editor from "../component/Editor";
import {useContext} from "react";
import {useNavigate} from "react-router-dom";
import {PaymentDispatchContext} from "../App";
const Add = () => {
  const nav = useNavigate();
  const {onCreate} = useContext(PaymentDispatchContext);
  const onSubmit = (input) => {
    onCreate(input.createdDate, input.expenses, input.content, input.typeId);
    nav("/", {replace: true});
  }; // onCreate 설정할 때의 순서와 같게 설정해야 그 순서에 맞는 데이터가 꽂힘
  return (
    <div>
      <Header page="add" title={"새로운 지출"} />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};
export default Add;
