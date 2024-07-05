"use client";
import { useState } from "react";

const ClientPage = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
};

export default ClientPage;
