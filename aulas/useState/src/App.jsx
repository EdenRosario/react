import React, { useState } from "react";

export default function App() {
  const [num, setNum] = useState(0);

  console.log("Valor atual do state:", num);

  return (
    <>
      <div style={{ margin: "auto" }}>
        <p>valor do state num: {num}</p>
        <button onClick={() => setNum(num + 10)}>somar 10</button>
      </div>
    </>
  );
}
 