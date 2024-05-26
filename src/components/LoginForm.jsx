import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { digitalflakelogo } from "../assets";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (!email && !password) {
        throw new Error("Email and Password Required.");
      } else navigate("/body/home");
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  };
  return (
    <>
      <section className="border h-[30em] w-96 mx-auto my-28 px-5 py-5 flex justify-center rounded-lg">
        <div className=" w-full flex flex-col gap-10  p-2 my-4 ">
          {/* upper */}
          <div className="flex flex-col items-center  ">
            <div className="w-36 h-20">
              <img
                src={digitalflakelogo}
                alt="digitalflakelogo"
                className="h-[100%] w-[100%]"
              />
            </div>
            <p className="opacity-50 text-sm tracking-wide font-medium">
              Welcome to Digitalflake admin
            </p>
          </div>

          {/* lower */}

          <form
            onSubmit={handleSubmit}
            className="flex flex-col h-full justify-between "
          >
            <div className="p-2 flex flex-col gap-3">
              <input
                type="email"
                className="border rounded-lg w-full p-2 "
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                className="border rounded-lg w-full p-2"
                placeholder="password"
                value={password}
                onChange={(e) => setPassWord(e.target.value)}
              />
              <span className="text-right text-[#5C218B] text-sm">
                Forgot Password?
              </span>
            </div>
            <button
              type="submit"
              className="bg-[#5C218B] p-2 rounded-lg text-white font-bold"
            >
              Log In
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default LoginForm;
