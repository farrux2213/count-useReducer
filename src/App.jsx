import { Button, Input } from "antd"; // Import Input from 'antd', not 'postcss'
import { useReducer } from "react";

// Reducer function
const reducer = (state, { type, payload }) => {
  switch (type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };
    case "CHANGE":
      return {
        ...state,
        value: payload.value,
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    value: "",
  });

  return (
    <div className="flex items-center justify-center w-full h-[100vh] gap-[15px]">
      <Button
        className="p-[10px] flex items-center justify-center bg-lime-600"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        +
      </Button>
      {state.count}
      <Button
        className="p-[10px] flex items-center justify-center bg-orange-600"
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        -
      </Button>

      <div>
        <Input
          onChange={(e) =>
            dispatch({ type: "CHANGE", payload: { value: e.target.value } })
          }
          type="text"
        />
        <h3>Value: {state.value}</h3>
      </div>
    </div>
  );
};

export default App;
