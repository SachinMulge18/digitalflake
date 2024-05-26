import React from "react";
import { useTable } from "react-table";
import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";

const CustomTable = ({ columns, data, onEdit, onDelete }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <div className="table-wrapper overflow-x-auto">
      <table
        {...getTableProps()}
        className="max-w-full w-full text-center mt-10 rounded-xl"
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="bg-[#FFF8B7] p-3 text-[#000000] font-medium text-xl"
                >
                  {column.render("Header")}
                </th>
              ))}
              <th className="bg-[#FFF8B7] p-3 text-[#000000] font-medium text-xl">
                Actions
              </th>
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    className="bg-[#F2F2F2] p-4 my-5"
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
                <td className="bg-[#F2F2F2] p-4 my-5">
                  <button
                    className="mx-1 hover:text-green-600"
                    onClick={() => onEdit(row.original)}
                  >
                    <FaRegEdit size={20} />
                  </button>
                  <button
                    className="mx-1 hover:text-red-600"
                    onClick={() => onDelete(row.original)}
                  >
                    <FaRegTrashAlt size={20} />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
