import React from "react";
import { digitalflakelogo } from "../assets";

const Home = () => {
  return (
    <section className="border h-screen flex justify-center items-center">
      <div className="flex flex-col items-center">
        <img
          src={digitalflakelogo}
          alt="digitalflakelogo"
          className="h-[100%] w-[100%]"
        />
        <p>Welcome to Digitalflake admin</p>
      </div>
    </section>
  );
};

export default Home;
