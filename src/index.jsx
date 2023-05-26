import React from "react";
import { Provider } from "react-redux";

import store from "./redux/store";
import TodoList from "./screens/TodoList";

const App = () => {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
};

export default App;
