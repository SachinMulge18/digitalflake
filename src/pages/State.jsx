import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GrMapLocation } from "react-icons/gr";
import CustomTable from "../components/CustomTable";
import Modal from "../ui/Modal";
const State = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState([
    { id: 1, name: "Maharashtra", code: 28, status: "Active" },
    { id: 2, name: "Telangana", code: 34, status: "Active" },
    { id: 3, name: "Gujarat", code: 23, status: "Inactive" },
  ]);

  const columns = React.useMemo(
    () => [
      {
        Header: "Id",
        accessor: "id",
      },
      {
        Header: "State Name",
        accessor: "name",
      },
      {
        Header: "Short Code",
        accessor: "code",
      },
      {
        Header: "Status",
        accessor: "status",
      },
    ],
    []
  );

  const handleEdit = (row) => {
    navigate(`/body/state/editstate/${row.id}`);
  };

  const handleDelete = (row) => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <section className="border m-3 rounded-lg p-3 max-sm:h-full">
        {/* top */}
        <div className="flex justify-between md:px-5 py-2 ">
          <div className="flex items-center gap-3 w-8/12">
            <GrMapLocation size={30} />
            <h1 className="text-sm md:text-xl font-medium">State</h1>
            <input
              type="search"
              placeholder="Search"
              className="border w-full md:ml-5 p-1 md:p-2 rounded-lg"
            />
          </div>
          <button
            onClick={() => navigate("/body/newstate")}
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
      </section>

      <Modal isOpen={isOpen} onClose={closeModal}></Modal>
    </>
  );
};

export default State;
