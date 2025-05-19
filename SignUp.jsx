import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { usercontext } from "../context/UserContext";
const SignUp = () => {
  const { toggler, settoggler, users, setusers } = useContext(usercontext);
  const { register, handleSubmit, reset } = useForm();

  const submithandler = (data) => {
    data.id = nanoid();
    // console.log(data);
    const copyUsers = [...users];
    copyUsers.push(data);
    setusers(copyUsers);
    reset();
    //can be written in one line
    //setUsers([...users,data])
  };
  console.log(users);

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-md text-gray-800 ">
      <form onSubmit={handleSubmit(submithandler)} className="space-y-6">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Create an account
          <br />
          <p className="text-sm text-gray-500 text-center mb-6">
            {" "}
            It's quick and easy
          </p>
        </h1>

        {/* <div className='flex gap-4'>  */}
        <input
          {...register("name", { required: true })}
          type="text"
          placeholder="Full Name"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* <input
         {...register("lastName", { required: true })}
         type="text"
          placeholder='Last Name'
          className="w-1/2 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
</div> */}

        <input
          {...register("email", { required: true })}
          type="text"
          placeholder="Enter Email address"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          {...register("password", { required: true })}
          type="password"
          placeholder="New Password"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition font-semibold">
          SingUp
        </button>
        <br />
        <small>
          Already have an account {""}
          <button
            type="button"
            onClick={() => {
              settoggler(!toggler);
            }}
            className="text-blue-600 hover:underline font-medium"
          >
            SignIn
          </button>
        </small>
      </form>
    </div>
  );
};

export default SignUp;
