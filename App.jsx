import { useContext, useState } from "react";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Users from "./Components/Users";
import { usercontext } from "./context/UserContext";

const App = () => {
  const { toggler } = useContext(usercontext);
  return (
    <main className="min-h-screen w-full flex bg-gray-800 text-white p-8 overflow-hidden">
      <div className="w-[70%] mx-auto">
        {toggler ? <SignIn key="SignIn" /> : <SignUp key="SignUp" />}
      </div>
      <div className="w-[30%] rounded bg-transparent">
        <Users />
      </div>
    </main>
  );
};

export default App;
