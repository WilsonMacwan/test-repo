import React from "react";
import UserReport from "./UserReport";

const AdminHome = () => {
  const data = [
    {
      name: "John",
      email: "john@example.com",
      phone: "1234567890",
      status: "active",
      created_at: "2022-03-01T14:48:00.000Z",
    },
    {
      name: "Jane",
      email: "jane@example.com",
      phone: "0987654321",
      status: "inactive",
      created_at: "2022-03-03T08:16:00.000Z",
    },
    {
      name: "Bob",
      email: "bob@example.com",
      phone: "5555555555",
      status: "active",
      created_at: "2022-03-05T16:32:00.000Z",
    },
  ];

  return (
    <div>
      <UserReport data={data} />
    </div>
  );
};

export default AdminHome;
