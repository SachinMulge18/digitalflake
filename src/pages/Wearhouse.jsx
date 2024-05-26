import React, { useState } from "react";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import CustomTable from "../components/CustomTable";
import Modal from "../ui/Modal";

const Wearhouse = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState([
    {
      id: 1,
      name: "Private WearHouse",
      state: "Maharashtra",
      city: "Pune",
      status: "Active",
    },
    {
      id: 2,
      name: "Bounded WearHouse",
      state: "Maharashtra",
      city: "Pune",
      status: "Active",
    },
    {
      id: 3,
      name: "Cold Storage",
      state: "Maharashtra",
      city: "Pune",
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
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "State",
        accessor: "state",
      },
      {
        Header: "City",
        accessor: "city",
      },
      {
        Header: "Status",
        accessor: "status",
      },
    ],
    []
  );
  const handleEdit = (row) => {
    navigate(`/body/state/editwearhouse/${row.id}`);
  };

  const handleDelete = (row) => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <section className="border m-3 rounded-lg p-3">
        {/* top */}
        <div className="flex justify-between md:px-5 py-2 ">
          <div className="flex items-center gap-3 w-8/12">
            <HiOutlineBuildingLibrary size={34} />
            <h1 className="text-sm md:text-xl font-medium">WearHouse</h1>
            <input
              type="search"
              placeholder="Search"
              className="border w-full md:ml-5 p-1 md:p-2 rounded-lg"
            />
          </div>
          <button
            onClick={() => navigate("/body/newwearhouse")}
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
    </>
  );
};

export default Wearhouse;
