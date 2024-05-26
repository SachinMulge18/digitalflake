import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegBuilding } from "react-icons/fa";

import CustomTable from "../components/CustomTable";
import Modal from "../ui/Modal";

const City = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const [data, setData] = useState([
    {
      id: 1,
      name: "Pune",
      code: "PCMC20",
      state: "Maharashtra",
      status: "Active",
    },
    {
      id: 2,
      name: "Pune",
      code: "PCM20",
      state: "Maharashtra",
      status: "Active",
    },
    {
      id: 3,
      name: "Mumbai",
      code: 22,
      state: "Maharashtra",
      status: "Inactive",
    },
  ]);

  const columns = React.useMemo(
    () => [
      {
        Header: "Id",
        accessor: "id",
      },
      {
        Header: "City Name",
        accessor: "name",
      },
      {
        Header: "City Code",
        accessor: "code",
      },
      {
        Header: "State Name",
        accessor: "state",
      },
      {
        Header: "Status",
        accessor: "status",
      },
    ],
    []
  );
  const handleEdit = (row) => {
    navigate(`/body/state/editcity/${row.id}`);
  };
  const handleDelete = (row) => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <section className="border m-3 rounded-lg p-3">
      {/* top */}
      <div className="flex justify-between md:px-5 py-2 ">
        <div className="flex items-center gap-3 w-8/12">
          <FaRegBuilding size={30} />
          <h1 className="text-sm md:text-xl font-medium">City</h1>
          <input
            type="search"
            placeholder="Search"
            className="border w-full md:ml-5 p-1 md:p-2 rounded-lg"
          />
        </div>
        <button
          onClick={() => navigate("/body/newcity")}
          className="bg-[#662671] text-white px-3 font-medium rounded-lg"
        >
          Add New
        </button>
      </div>
      <CustomTable
        columns={columns}
        data={data}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <Modal isOpen={isOpen} onClose={closeModal}></Modal>
    </section>
  );
};

export default City;
