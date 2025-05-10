import { useState } from "react";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Users from "./Components/Users";

const App = () => {
  const [toggler, settoggler] = useState(true);
  const [users, setusers] = useState([]);
  return (
    <main className="min-h-screen w-full flex bg-gray-800 text-white p-8 overflow-hidden">
      <div className="w-[70%] mx-auto">
        {toggler ? (
          <SignIn
            key="SignIn"
            toggler={toggler}
            settoggler={settoggler}
            users={users}
            setusers={setusers}
          />
        ) : (
          <SignUp
            key="SignUp"
            toggler={toggler}
            settoggler={settoggler}
            users={users}
            setusers={setusers}
          />
        )}
      </div>
      <div className="w-[30%] rounded bg-transparent">
        <Users users={users} setusers={setusers} />
      </div>
    </main>
  );
};

export default App;
