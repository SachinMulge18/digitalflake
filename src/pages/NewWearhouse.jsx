import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Input from "../ui/Input";

const NewWearhouse = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="border m-3 rounded-lg p-4 flex flex-col justify-between gap-6 h-[100%]">
        <div className="flex  flex-col gap-6">
          <div className="flex items-center gap-2">
            <FaLongArrowAltLeft
              size={24}
              className="text-gray-300 ml-2 cursor-pointer"
              onClick={() => navigate("/body/wearhouse")}
            />
            <h1 className="text-xl font-medium">Add Wearhouse</h1>
          </div>

          <form className="flex flex-col justify-between gap-3 h-[32em] p-4">
            <div className="flex justify-between flex-wrap md:flex-wrap lg:flex-wrap xl:flex-nowrap  gap-3 w-full">
              <Input id="statename" type="text" label="Wearhouse Name" />

              <select name="" className="border w-full py-2 rounded-lg ">
                <option value="pune">pune</option>
                <option value="nashik">nashik</option>
                <option value="nagar">nagar</option>
              </select>

              <select name="" id="" className="border w-full py-2 rounded-lg ">
                <option value="Maharashtra">Maharashtra</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Karnataka">Karnataka</option>
              </select>
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
    </>
  );
};

export default NewWearhouse;
