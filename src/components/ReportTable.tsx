// import { useMemo } from "react";
// import { useTable, Column } from "react-table";
// import { CSVLink } from "react-csv";

// // interface ReportTableProps {
// //   data: ReportData[];
// // }

// const ReportTable = ({ data }: any) => {
//   const columns: Column<any>[] = useMemo(
//     () => [
//       { Header: "Name", accessor: "name" },
//       { Header: "Email", accessor: "email" },
//       { Header: "Phone", accessor: "phone" },
//       { Header: "Status", accessor: "status" },
//     ],
//     []
//   );

//   const tableData = useMemo(() => data, [data]);

//   const tableInstance = useTable({
//     columns,
//     data: tableData,
//   });

//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

//   const headers = [
//     { label: "Name", key: "name" },
//     { label: "Email", key: "email" },
//     { label: "Phone", key: "phone" },
//     { label: "Status", key: "status" },
//   ];

//   return (
//     <>
//       <div>
//         <CSVLink data={data} headers={headers}>
//           Export CSV
//         </CSVLink>
//       </div>
//       <table {...getTableProps()}>
//         <thead>
//           {headerGroups.map((headerGroup) => (
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map((column) => (
//                 <th {...column.getHeaderProps()}>{column.render("Header")}</th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()}>
//           {rows.map((row) => {
//             prepareRow(row);
//             return (
//               <tr {...row.getRowProps()}>
//                 {row.cells.map((cell) => (
//                   <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
//                 ))}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </>
//   );
// };

// export default ReportTable;

import { useMemo } from "react";
import { useTable, Column } from "react-table";
import { CSVLink } from "react-csv";

// interface ReportTableProps {
//   data: ReportData[];
// }

const ReportTable = ({ data }: any) => {
  const columns: Column<any>[] = useMemo(
    () => [
      { Header: "Name", accessor: "name" },
      { Header: "Email", accessor: "email" },
      { Header: "Phone", accessor: "phone" },
      { Header: "Status", accessor: "status" },
      {
        Header: "Actions",
        accessor: "",
        Cell: ({ row }: any) => (
          <>
            <button onClick={() => handleView(row)}>View</button>
            <button onClick={() => handleEdit(row)}>Edit</button>
            <button onClick={() => handleDelete(row)}>Delete</button>
          </>
        ),
      },
    ],
    []
  );

  const tableData = useMemo(() => data, [data]);

  const tableInstance = useTable({
    columns,
    data: tableData,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  const headers = [
    { label: "Name", key: "name" },
    { label: "Email", key: "email" },
    { label: "Phone", key: "phone" },
    { label: "Status", key: "status" },
  ];

  const handleView = (row: any) => {
    console.log("Rowww", row.values);
    // Implement view action here
  };

  const handleEdit = (row: any) => {
    // Implement edit action here
  };

  const handleDelete = (row: any) => {
    // Implement delete action here
  };

  return (
    <>
      <div>
        <CSVLink data={data} headers={headers}>
          Export CSV
        </CSVLink>
      </div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ReportTable;
