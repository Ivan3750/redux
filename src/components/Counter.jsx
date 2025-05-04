import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch()
  const add = () => {
    dispatch({type: "ADD", payload: 1})
  } 
  const minus = () => {
    dispatch({type: "MINUS", payload: 1})
  }

  return (
    <>
      <p>{count}</p>
      <button onClick={add}>+</button>
      <button onClick={minus}>-</button>
    </>
  );
};

export default Counter;
