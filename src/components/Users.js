import React from "react";
import { useNavigate } from "react-router-dom";

const Users = ({ users, setUsers }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-pattern bg-cover bg-fixed min-h-[100vh]">
      <button
        onClick={() => navigate("/form")}
        className="text-black border-2 z-10 border-amber-500 absolute top-6 left-10 bg-white p-2 rounded-2xl font-bold text-xl cursor-pointer"
      >
        Form
      </button>

      <div className="flex flex-col gap-10 items-center w-full pt-20">
        {users.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

const Card = ({ data }) => {
  return (
    <div className="text-white w-full sm:w-2/3 md:w-1/2 lg:w-2/5 p-[6vw] bg-gray-700/[0.30] backdrop-blur-md rounded-xl shadow-2xl ">
      <div className="absolute flex top-2 right-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-amber-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className=" w-6 h-6 text-red-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </div>
      <div className="flex">
        <div className="mr-4">First Name :</div>
        <div>{data.fName}</div>
      </div>
      <div className="flex">
        <div className="mr-4">Last Name :</div>
        <div>{data.lName}</div>
      </div>
      <div className="flex">
        <div className="mr-4">Emai ID :</div>
        <div>{data.email}</div>
      </div>
      <div className="flex">
        <div className="mr-4">Contact No. :</div>
        <div>{data.phone}</div>
      </div>
    </div>
  );
};

export default Users;
