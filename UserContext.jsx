import { createContext, useState } from "react"; //createContext:- Creates a context object that can be shared across components without prop drilling
export const usercontext = createContext(null);
const UserContext = (props) => {
  const [toggler, settoggler] = useState(true);
  const [users, setusers] = useState([]);

  return (
    <usercontext.Provider value={{ toggler, settoggler, users, setusers }}>
      {props.children}
    </usercontext.Provider>
  );
};
export default UserContext;
