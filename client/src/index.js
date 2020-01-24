import React from "react";
import ReactDOM from "react-dom";
import Counter from "./components/Counter";
import useSaga from "./components/useSaga";

const { action, store } = useSaga();
function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => action("INCREMENT")}
      onDecrement={() => action("DECREMENT")}
      onIncrementAsync={() => action("INCREMENT_ASYNC")}
    />,
    document.getElementById("root")
  );
}

render();
store.subscribe(render);
