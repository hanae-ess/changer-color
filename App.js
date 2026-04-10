import React, { useState } from "react";
import Profile from "./Profile";

function App() {
  const [user, setUser] = useState({
    name: "Hanae",
    age: 20,
    job: "Student"
  });

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Debug React App</h1>
      <Profile user={user} />
    </div>
  );
}

export default App;