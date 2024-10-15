import not_tick from "../assets/not_tick.png";
import delete_icon from "../assets/delete.png";
import check from "../assets/check.jpg";

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div
      onClick={() => {
        toggle(id);
      }}
      className="flex items-center my-3 gap-2">
      <div className="flex flex-1 items-center cursor-pointer ">
        <img src={isComplete ? check : not_tick} alt="" className="w-7" />
        <p
          className={`text-slate-700 ml-4 text-[17px] decoration-slice-500 ${
            isComplete ? "line-through" : ""
          }`}>
          {text}
        </p>
      </div>
      <img
        onClick={() => {
          deleteTodo(id);
        }}
        src={delete_icon}
        alt=""
        className="w-5 cursor-pointer"
      />
    </div>
  );
};

export default TodoItems;
