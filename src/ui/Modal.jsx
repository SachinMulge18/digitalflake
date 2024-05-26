import React from "react";
import { TbInfoTriangleFilled } from "react-icons/tb";

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed top-0 right-0 left-[10%] md:top-[10%] md:left-[40%] md:right-0 bottom-0 w-[20em] h-[12em] md:w-[28em] md:h-[14em] z-50 bg-[#FFFFFF] border rounded-lg flex items-center justify-center gap-4 flex-col">
          <div className="flex justify-center gap-3 items-center ">
            <TbInfoTriangleFilled size={30} className="text-red-500" />
            <h1 className="text-2xl font-medium">Delete</h1>
          </div>
          <p className="text-gray-400 text-lg font-medium">
            Are you sure you want to delete?
          </p>
          <div className="flex mt-2 gap-2">
            <button className="px-6 py-2 border rounded-3xl">Delete</button>
            <button
              className="px-6 py-2 bg-[#662671] text-white rounded-3xl"
              onClick={onClose}
            >
              Confirm
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
