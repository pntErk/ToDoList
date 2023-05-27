import "./styles.css";


interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e:React.FormEvent) => void;
}
const InputField:React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  return (
    <form className="input" onSubmit={handleAdd}>
      <input type="input"
      value={todo}
      onChange={
        (e) => setTodo(e.target.value)
      }
      placeholder="Enter a task" className="input__box" />
      <button className="input_submit" type="submit">
        Add
      </button>
    </form>
  );
};

export default InputField;
