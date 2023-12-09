import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import UserCard from "../components/UserCard";
import ErrorScreen from "./ErrorScreen";

const UserScreen = ({ users, setUsers }) => {
  // used navigate to jump on form page
  const navigate = useNavigate();
  return (
    <div className="bg-pattern bg-cover bg-fixed min-h-[100vh]">
      <button
        onClick={() => navigate("/form")}
        className="text-Black z-10 absolute border-2 top-6 left-10   p-2 rounded-2xl font-bold text-xl cursor-pointer"
      >
        Add Clients
      </button>
      <ToastContainer />
      <div className="flex flex-col gap-10 items-center w-full pt-20 pb-10">
        {users.length?users.map((item) => (
          <UserCard
            key={item.id}
            data={item}
            users={users}
            setUsers={setUsers}
          />
        )): <ErrorScreen/>}
      </div>
    </div>
  );
};

export default UserScreen;
