// import { useState } from "react";
// import ReportTable from "../components/ReportTable";

// const UserReport = ({ data }: any) => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { value } = event.target;
//     setSearchTerm(value);
//   };

//   const filteredData = data.filter((item: any) =>
//     item.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       <h1>user Report</h1>
//       <div>
//         <input type="text" onChange={handleSearch} placeholder="Search by name" />
//       </div>
//       <ReportTable data={filteredData} />
//     </div>
//   );
// };

// export default UserReport;

import { useState } from "react";
import ReportTable from "../components/ReportTable";

type ReportData = {
  name: string;
  email: string;
  phone: string;
  status: string;
  created_at: string;
};

const UserReport = ({ data }: { data: ReportData[] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);
  };

  const handleStartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setStartDate(value);
  };

  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEndDate(value);
  };

  const filteredData = data.filter((item) => {
    const nameMatch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const phoneMatch = item.phone.includes(searchTerm);
    const dateMatch =
      (!startDate || new Date(item.created_at) >= new Date(startDate)) &&
      (!endDate || new Date(item.created_at) <= new Date(endDate));
    return (nameMatch || phoneMatch) && dateMatch;
  });

  return (
    <div>
      <h1>Report</h1>
      <div>
        <input type="text" onChange={handleSearch} placeholder="Search by name" />
        <input type="date" onChange={handleStartDateChange} placeholder="Start Date" />
        <input type="date" onChange={handleEndDateChange} placeholder="End Date" />
      </div>
      <ReportTable data={filteredData} />
    </div>
  );
};

export default UserReport;
