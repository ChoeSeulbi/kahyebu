import Header from "../component/Header";
import Editor from "../component/Editor";
const Add = () => {
  return (
    <div>
      <Header page="add" title={"새로운 지출"} />
      <Editor />
    </div>
  );
};
export default Add;
