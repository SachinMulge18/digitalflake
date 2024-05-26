import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Input from "../ui/Input";

const EditCity = () => {
  const navigate = useNavigate();
  const id = useParams();
  return (
    <section className="border m-3 rounded-lg p-4 flex flex-col justify-between gap-6 h-[100%]">
      <div className="flex  flex-col gap-6">
        <div className="flex items-center gap-2">
          <FaLongArrowAltLeft
            size={24}
            className="text-gray-300 ml-2 cursor-pointer"
            onClick={() => navigate("/body/city")}
          />
          <h1 className="text-xl font-medium">Edit City</h1>
        </div>
        {/* form */}

        <form className="flex flex-col  md:flex-wrap justify-between gap-3 h-[32em] p-4 flex-wrap">
          <div className="flex justify-between flex-wrap md:flex-wrap lg:flex-wrap xl:flex-nowrap  gap-3 w-full">
            <Input id="cityname" type="text" label="City Name" />
            <Input id="citycode" type="text" label="City Code" />

            <div className="flex flex-col gap-1 w-full">
              <select
                id="status"
                className="w-full border px-2 py-2.5 rounded-xl"
              >
                <option value="Status">Status</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <div className="flex flex-col gap-1 w-full">
              <select
                id="city"
                className="w-full border px-2 py-2.5 rounded-xl"
              >
                <option value="Maharashtra">Maharashtra</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Karnataka">Karnataka</option>
              </select>
            </div>
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

export default EditCity;
