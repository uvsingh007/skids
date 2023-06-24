import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
import { ToastContainer } from "react-toastify";
import UserCard from "../components/UserCard";

const UserScreen = ({ users, setUsers }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-pattern bg-cover bg-fixed min-h-[100vh]">
      <button
        onClick={() => navigate("/form")}
        className="text-Black z-10 absolute border-2 top-6 left-10 bg-amber-500 p-2 rounded-2xl font-bold text-xl cursor-pointer"
      >
        Form
      </button>
      <ToastContainer />
      <div className="flex flex-col gap-10 items-center w-full pt-20 pb-10">
        {users.map((item) => (
          <UserCard key={item.id} data={item} users={users} setUsers={setUsers} />
        ))}
      </div>
    </div>
  );
};

export default UserScreen;
