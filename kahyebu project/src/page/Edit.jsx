import {useNavigate, useParams} from "react-router-dom";
import Header from "../component/Header";
import Editor from "../component/Editor";
import {PaymentStateContext, PaymentDispatchContext} from "../App";
import {useContext, useEffect, useState} from "react";
const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  const data = useContext(PaymentStateContext);
  const [curItem, setCurItem] = useState();
  const {onUpdate} = useContext(PaymentDispatchContext);

  useEffect(() => {
    const currentItem = data.find(
      (item) => String(item.id) === String(params.id)
    );
    console.log(currentItem);
    if (!currentItem) {
      window.alert("존재하지 않는 지출입니다.");
      nav("/", {replace: true});
    }
    setCurItem(currentItem);
  }, [params.id]);
  const onSubmit = (input) => {
    if (window.confirm("수정하시겠습니까?")) {
      onUpdate(
        params.id,
        input.createdDate.getTime(),
        input.expenses,
        input.content,
        input.typeId
      );
      nav("/", {replace: true});
    }
  };
  return (
    <div>
      <Header page={"edit"} title={"수정하기"} />
      <Editor initData={curItem} onSubmit={onSubmit} />
    </div>
  );
};
export default Edit;
