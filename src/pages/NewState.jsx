import React, { useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../ui/Input";

const NewState = () => {
  const navigate = useNavigate();
  const [stateName, setStateName] = useState("");
  const [stateCode, setStateCode] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(stateCode, stateName);
  };
  return (
    <section className="border m-3 rounded-lg p-4 flex flex-col justify-between gap-6 h-[100%]">
      <div className="flex  flex-col gap-6">
        <div className="flex items-center gap-2">
          <FaLongArrowAltLeft
            size={24}
            className="text-gray-300 ml-2 cursor-pointer"
            onClick={() => navigate("/body/state")}
          />
          <h1 className="text-xl font-medium">Add State</h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-between gap-3 h-[32em]"
        >
          <div className="flex justify-between flex-wrap md:flex-wrap lg:flex-wrap xl:flex-nowrap  gap-3 w-full">
            <Input id="statename" type="text" label="State Name" />
            <Input id="citycode" type="text" label="State Code" />
          </div>

          <div className="flex justify-center md:justify-end gap-4 p-2">
            <button className="px-7 py-2 rounded-2xl border">Cancel</button>
            <button
              type="submit"
              className="px-7 py-2 rounded-2xl bg-[#662671] text-white"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewState;
