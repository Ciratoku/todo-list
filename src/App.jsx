// components
import TodoWrapper from "./components/TodoWrapper";

import { useState } from "react";

export default function App() {
  const [tab, setTab] = useState("main");
  return (
    <>
      <div className="App">
        <TodoWrapper />
      </div>
    </>
  );
}
