import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import Profile from "./Components/Profile";
import Image from "./Components/asma.jpg";

function App() {
  const fullName = "Alyani Asma";
  const bio = "Student in GOMYCODE";
  const profession = "Full-stack JavaScript Developer";

  const handleName = () => {
    alert(`the name of the profile user is ${fullName}`);
  };
  return (
    <div className="App">
      <Profile
        fullName={fullName}
        bio={bio}
        profession={profession}
        handleName={handleName}
      >
        <img src={Image} width="90px" heigt="90px" alt="myphoto" />
      </Profile>
    </div>
  );
}

export default App;
