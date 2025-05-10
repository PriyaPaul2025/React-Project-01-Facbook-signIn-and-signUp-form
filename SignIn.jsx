import React from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";

const SignIn = (props) => {
  const { toggler, settoggler, users, setusers } = props;
  const { register, handleSubmit, reset } = useForm();

  const submithandler = (data) => {
    const isPresent = users.find(
      (user) => user.email === data.email && user.password === data.password
    );
    if (isPresent) {
      toast.success("User Already Exist");
    } else {
      toast.error("User Not Found");
    }
    data.id = nanoid();
    // console.log(data);
    const copyUsers = [...users];
    copyUsers.push(data);
    reset();
    //can be written in one line
    //setUsers([...users,data])
  };
  // console.log(users);

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-md text-gray-800">
      <form onSubmit={handleSubmit(submithandler)} className="space-y-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-500">
          Facebook
        </h1>
        <p className="text-center text-gray-600 text-lg mb-6">
          Log in to facebook
        </p>

        <input
          {...register("email", { required: true })}
          type="text"
          placeholder="Enter Email Address"
          className="block font-thin mb-2 border-b outline-0 text-xl p-2 w-full"
        />

        <input
          {...register("password", { required: true })}
          type="password"
          placeholder="Password"
          className="block font-thin mb-2 border-b outline-0 text-xl p-2 w-full"
        />
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition font-semibold">
          SingIn
        </button>
        <br />
        <small>
          Don't have an account {""}
          <button
            type="button"
            onClick={() => {
              settoggler(!toggler);
            }}
            className="text-blue-600 hover:underline font-medium"
          >
            SignUp
          </button>
        </small>
      </form>
    </div>
  );
};

export default SignIn;
