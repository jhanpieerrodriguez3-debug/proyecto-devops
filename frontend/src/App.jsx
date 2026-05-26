import { useEffect, useState } from "react";

function App() {

  const [message, setMessage] = useState("");

  useEffect(() => {

    fetch("http://localhost:3000")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      });

  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Proyecto DevOps</h1>

      <h2>Respuesta Backend:</h2>

      <p>{message}</p>
    </div>
  );
}

export default App;